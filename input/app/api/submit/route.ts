import { NextResponse } from "next/server";
import { prismaMydata } from "@/lib/prisma-mydata";
import { prismaTest } from "@/lib/prisma-test";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, option2, option3, contents, date, extrainput, checkboxes } = body;

    if (!name || !option2 || !option3 || !contents || !extrainput) {
      return NextResponse.json({ message: "All fields are required." }, { status: 400 });
    }

    // checkboxes を配列形式に変換
    const checkboxesArray = Array.isArray(checkboxes)
      ? checkboxes
      : checkboxes
        ? [checkboxes]
        : [];

    // Shiftを判定
    const determineShift = (date: Date) => {
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const timeInMinutes = hours * 60 + minutes;

      // 8:31 ~ 21:30 -> 昼勤
      if (timeInMinutes >= 511 && timeInMinutes <= 1290) {
        return "昼勤";
      }
      // 21:31 ~ 翌日の 8:30 -> 夜勤
      return "夜勤";
    };

    const reportDateObj = date ? new Date(date) : new Date();
    const shift = determineShift(reportDateObj);

    // report_date を yyyy-mm-dd に変換
    const reportDate = new Date(date).toISOString().split("T")[0]; // yyyy-mm-dd形式


    // report_id を生成
    const reportId = `R${reportDate.replace(/-/g, "")}_${option2}_${shift}`;
    console.log("Generated report_id:", reportId);

    // t_code を生成 (w_code の最後の桁を 0 にする)
    const t_code = option2.slice(0, -1) + "0";
    console.log("Generated t_code:", t_code);

    //update用に時間をYYYY-MM-DD hh:mm:ssに変形
    const formatDateToYYYYMMDDHHMMSS = (date: Date) => {
      const pad = (num: number) => num.toString().padStart(2, "0");
      return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
    };

    //hh:mmに変換
    const formatToHHMM = (date: Date) => {
      const pad = (num: number) => num.toString().padStart(2, "0");
      return `${pad(date.getHours())}:${pad(date.getMinutes())}`;
    };

    const currentDate = new Date();
    const reportTime = formatToHHMM(new Date(date));
    const formattedUpdate = formatDateToYYYYMMDDHHMMSS(currentDate);

    const existingEntry = await prismaTest.report.findUnique({
      where: { report_id: reportId },
    });
    // 既存の値を取得し、新しい内容を追加
    const updatedSafety = checkboxesArray.includes("安全")
      ? `${existingEntry?.info_safety || ""}${existingEntry?.info_safety ? "\n" : ""}${contents}≪${reportTime}:${extrainput}≫`
      : existingEntry?.info_safety || "";
    const updatedQuality = checkboxesArray.includes("品質")
      ? `${existingEntry?.info_quality || ""}${existingEntry?.info_quality ? "\n" : ""}${contents}≪${reportTime}:${extrainput}≫`
      : existingEntry?.info_quality || "";
    const updatedOther = checkboxesArray.includes("その他")
      ? `${existingEntry?.info_other || ""}${existingEntry?.info_other ? "\n" : ""}${contents}≪${reportTime}:${extrainput}≫`
      : existingEntry?.info_other || "";


    // prismaMydata にデータを保存
    console.log("Data to save in prismaMydata:", {
      name,
      option2,
      option3,
      contents,
      extrainput,
      data: reportDate,
      checkboxes: checkboxesArray,
    });
    const newEntry = await prismaMydata.mydata.create({
      data: {
        name,
        option2,
        option3,
        contents,
        extrainput,
        data: reportDateObj,
        checkboxes: checkboxesArray,
      },
    });

    // prismaTest にもデータを保存
    console.log("Data to save in prismaTest:", {
      report_id: reportId,
      report_date: new Date(date),
      t_code: t_code,
      w_code: option2,
      shift: shift,
      info_safety: updatedSafety,
      info_safety_html: updatedSafety ? `<p>${updatedSafety.replace(/\n/g, "<br>")}</p>` : "",
      info_quality: updatedQuality,
      info_quality_html: updatedQuality ? `<p>${updatedQuality.replace(/\n/g, "<br>")}</p>` : "",
      info_other: updatedOther,
      info_other_html: updatedOther ? `<p>${updatedOther.replace(/\n/g, "<br>")}</p>` : "",
      update: formattedUpdate,
    });
    const reportEntry = await prismaTest.report.upsert({
      where: { report_id: reportId },
      update: {
        report_date: new Date(date),
        t_code: t_code,
        w_code: option2,
        shift: shift,
        info_safety: updatedSafety,
        info_safety_html: updatedSafety ? `<p>${updatedSafety.replace(/\n/g, "<br>")}</p>` : "",
        info_quality: updatedQuality,
        info_quality_html: updatedQuality ? `<p>${updatedQuality.replace(/\n/g, "<br>")}</p>` : "",
        info_other: updatedOther,
        info_other_html: updatedOther ? `<p>${updatedOther.replace(/\n/g, "<br>")}</p>` : "",
        update: formattedUpdate,
      },
      create: {
        report_id: reportId,
        report_date: new Date(date),
        t_code: t_code,
        w_code: option2,
        shift: shift,
        info_safety: updatedSafety,
        info_safety_html: updatedSafety ? `<p>${updatedSafety.replace(/\n/g, "<br>")}</p>` : "",
        info_quality: updatedQuality,
        info_quality_html: updatedQuality ? `<p>${updatedQuality.replace(/\n/g, "<br>")}</p>` : "",
        info_other: updatedOther,
        info_other_html: updatedOther ? `<p>${updatedOther.replace(/\n/g, "<br>")}</p>` : "",
        update: formattedUpdate,
      },
    });
    return NextResponse.json({ mydata: newEntry, report: reportEntry }, { status: 201 });
  } catch (error) {
    console.error("データ保存エラー:", error);
    return NextResponse.json({ message: "Database error", error }, { status: 500 });
  }
}

export async function GET() {
  try {
    const data = await prismaMydata.mydata.findMany({
      orderBy: { id: "desc" },
    });
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("データ取得中のエラー:", error);
    return NextResponse.json({ message: "データの取得に失敗しました" }, { status: 500 });
  }
}
