import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// 投稿の取得（GETリクエスト）
export async function GET() {
  try {
    const submissions = await prisma.submission.findMany({
      orderBy: { createdAt: "desc" }, // 最新の投稿を先に取得
    });

    return NextResponse.json(submissions);
  } catch (error) {
    console.error("データ取得エラー:", error);
    return NextResponse.json(
      { error: "データの取得に失敗しました" },
      { status: 500 }
    );
  }
}

// 投稿の保存（POSTリクエスト）
export async function POST(req: Request) {
  try {
    const { name, dat } = await req.json();

    if (!name || !date) {
      return NextResponse.json(
        { error: "必要なデータが不足しています" },
        { status: 400 }
      );
    }

    const newSubmission = await prisma.submission.create({
      data: {
        name,
        date,
      },
    });

    return NextResponse.json(newSubmission);
  } catch (error) {
    console.error("データ保存エラー:", error);
    return NextResponse.json(
      { error: "データの保存に失敗しました" },
      { status: 500 }
    );
  }
}
