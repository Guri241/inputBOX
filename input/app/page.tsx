"use client";

import React, { useState } from "react";

export default function Page() {
  const [inputValue, setInputValue] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // サーバーにPOSTリクエストを送信
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: inputValue }), // 送信するデータ
      });

      const data = await response.json();

      if (response.ok) {
        // サーバーからの成功メッセージを表示
        setResponseMessage(data.message);
      } else {
        // サーバーからのエラーメッセージを表示
        setResponseMessage(data.error);
      }

      // 入力欄をクリア
      setInputValue("");

    } catch (error) {
      setResponseMessage("エラーが発生しました。再試行してください。");
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="p-6 space-y-4 bg-white border border-gray-300 rounded-lg shadow-lg"
      >
        {/* 入力ボックス */}
        <div>
          <label
            htmlFor="textInput"
            className=" flex justify-center block mb-2 text-sm font-medium text-gray-700"
          >
            内容を記入
          </label>
          <textarea
            name="name"
            id="textInput"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full sm:w-96 md:w-[40rem] lg:w-[50rem] h-48 px-4 py-2 text-gray-700 bg-gray-50 border 
                        border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"

            placeholder="ここに内容を記入してください…"
          />
        </div>

        {/* 送信ボタン */}
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          送信
        </button>
      </form>

      {/* サーバーからのレスポンス表示 */}
      {responseMessage && (
        <div className="mt-4 text-center text-gray-700">
          <p>{responseMessage}</p> 
        </div>
      )}
    </main>
  );
}
