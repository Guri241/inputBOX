//api/submit.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: '名前を入力してください' });
    }

    // データを処理（データベースに保存したり、コンソールに表示したりすることができます）
    console.log('受け取ったデータ:', name);

    // 成功した場合のレスポンス
    return res.status(200).json({ message: 'データが正常に送信されました！' });
  } else {
    // メソッドがPOSTでない場合
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
