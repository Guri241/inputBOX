import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, option2, option3, contents, date, extrainput,checkboxes } = body;

    if (!name || !option2 || !option3 || !contents || !extrainput) {
      return NextResponse.json({ message: "All fields are required." }, { status: 400 });
    }

    const newEntry = await prisma.mydata.create({
      data: {
        name,
        option2,
        option3,
        contents,
        extrainput,
        data: date ? new Date(date) : new Date(),
        checkboxes: checkboxes ?? null,
      },
    });

    return NextResponse.json(newEntry, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Database error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const data = await prisma.mydata.findMany({
      orderBy: { id: "desc" },
    });
    console.log("取得したデータ:", data);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("データ取得中のエラー:", error);
    return NextResponse.json({ message: "データの取得に失敗しました" }, { status: 500 });
  }
}
