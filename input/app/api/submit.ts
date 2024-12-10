import { NextApiRequest, NextApiResponse } from "next";
import { Pool } from "pg";

// PostgreSQL プールの設定
const pool = new Pool({
  user: "admin",
  host: "localhost",
  database: "minutes",
  password: "root",
  port: 5432,
});

// サニタイズ関数
const sanitizeInput = (input: string): string => {
  return input.replace(/\0/g, "").trim();
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      // リクエストデータの取得とサニタイズ
      const { name, option2, option3, contents, extrainput, date } = req.body;

      if (![name, option2, option3, contents, extrainput, date].every(Boolean)) {
        return res.status(400).json({ message: "All fields are required." });
      }

      const sanitizedData = {
        name: sanitizeInput(name),
        option2: sanitizeInput(option2),
        option3: sanitizeInput(option3),
        contents: sanitizeInput(contents),
        extrainput: sanitizeInput(extrainput),
        date: new Date(date).toISOString(),
      };

      // データベースへの挿入
      const result = await pool.query(
        `
        INSERT INTO mydata (name, option2, option3, contents, extrainput, data) 
        VALUES ($1, $2, $3, $4, $5, $6) 
        RETURNING *`,
        [
          sanitizedData.name,
          sanitizedData.option2,
          sanitizedData.option3,
          sanitizedData.contents,
          sanitizedData.extrainput,
          sanitizedData.date,
        ]
      );

      res.status(201).json(result.rows[0]);
    } catch (error: unknown) {
      console.error("Database error:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown database error.";
      res.status(500).json({ message: "Database error", error: errorMessage });
    }
  } else if (req.method === "GET") {
    try {
      // データベースからのデータ取得
      const result = await pool.query("SELECT * FROM mydata ORDER BY id DESC");
      res.status(200).json(result.rows);
    } catch (error: unknown) {
      console.error("Database error:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown database error.";
      res.status(500).json({ message: "Database error", error: errorMessage });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

// アプリケーション終了時にプールを閉じる
const gracefulShutdown = async () => {
  console.log("Closing database pool...");
  await pool.end();
};

process.on("SIGINT", gracefulShutdown);
process.on("SIGTERM", gracefulShutdown);
