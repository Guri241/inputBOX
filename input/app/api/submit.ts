import { NextApiRequest, NextApiResponse } from "next";
import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "minutes",
  password: "admin1234",
  port: 5432,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, option2, option3, contents, extrainput, date } = req.body;

    if (!name || !option2 || !option3 || !contents || !date) {
      return res.status(400).json({
        message: "All fields are required.",
      });
    }

    try {
      const result = await pool.query(
        `INSERT INTO mydata (name, option2, option3, contents, extrainput, data) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
        [name, option2, option3, contents, extrainput, date]
      );
      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Database error" });
    }
  } else if (req.method === "GET") {
    try {
      const result = await pool.query("SELECT * FROM mydata ORDER BY id DESC");
      res.status(200).json(result.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Database error" });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
