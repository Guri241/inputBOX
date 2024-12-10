"use client";
import React, { useState, useEffect, useRef } from "react";
import Cookies from "js-cookie";
import Papa from "papaparse";

// データの型定義
type SubmittedData = {
  id: number;
  name: string;
  option2: string;
  option3: string;
  contents: string;
  extrainput: string;
  data: string;
};

const formatDate = (date: string) => {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");
  const hours = String(dateObj.getHours()).padStart(2, "0");
  const minutes = String(dateObj.getMinutes()).padStart(2, "0");
  return `${year}/${month}/${day} ${hours}:${minutes}`;
};

const convertNewlinesToBreaks = (text: string) => {
  return text.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
};

export default function Page() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [submittedDataList, setSubmittedDataList] = useState<SubmittedData[]>([]);
  const [options, setOptions] = useState<string[]>([]);
  const [options2, setOptions2] = useState<{ [key: string]: string[] }>({});
  const [options3, setOptions3] = useState<{ [key: string]: string[] }>({});
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [selectedOption2, setSelectedOption2] = useState<string>("");
  const [selectedOption3, setSelectedOption3] = useState<string>("");
  const [extraInput, setExtraInput] = useState<string>(""); // 名前入力欄
  const [textareaContent, setTextareaContent] = useState<string>("");
  const [checkboxes, setCheckboxes] = useState<boolean[]>([false, false, false]);
  const checkboxLabels = ["安全", "品質", "その他"];
  const bottomRef = useRef<HTMLDivElement>(null);

  const fetchSubmittedData = async () => {
    try {
      const response = await fetch("/api/submit", { method: "GET" });
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.status}`);
      }
      const data: SubmittedData[] = await response.json();
      console.log("Fetched data:", data);
      setSubmittedDataList(data);
      setTimeout(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (error) {
      setErrorMessage("データの取得に失敗しました");
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch("/options.csv");
        const csvText = await response.text();
        const parsedData = Papa.parse<string>(csvText, { header: false, skipEmptyLines: true });
        setOptions(parsedData.data.map((row) => row[0]));
      } catch {
        setErrorMessage("課の選択肢の読み込みに失敗しました。");
      }
    };

    const fetchOptions2 = async () => {
      try {
        const response = await fetch("/options2.csv");
        const csvText = await response.text();
        const parsedData = Papa.parse<string>(csvText, { header: false, skipEmptyLines: true });
        const optionsMap: { [key: string]: string[] } = {};
        parsedData.data.forEach(([key, value]) => {
          if (!optionsMap[key]) optionsMap[key] = [];
          optionsMap[key].push(value);
        });
        setOptions2(optionsMap);
      } catch {
        setErrorMessage("職場の選択肢の読み込みに失敗しました。");
      }
    };

    const fetchOptions3 = async () => {
      try {
        const response = await fetch("/options3.csv");
        const csvText = await response.text();
        const parsedData = Papa.parse<string>(csvText, { header: false, skipEmptyLines: true });
        const optionsMap: { [key: string]: string[] } = {};
        parsedData.data.forEach(([key, value]) => {
          if (!optionsMap[key]) optionsMap[key] = [];
          optionsMap[key].push(value);
        });
        setOptions3(optionsMap);
      } catch {
        setErrorMessage("ラインの選択肢の読み込みに失敗しました。");
      }
    };

    // データ取得
    fetchOptions();
    fetchOptions2();
    fetchOptions3();
    fetchSubmittedData();

    // Cookieから状態を復元
    const savedSelectedOption = Cookies.get("selectedOption");
    const savedSelectedOption2 = Cookies.get("selectedOption2");
    const savedSelectedOption3 = Cookies.get("selectedOption3");
    const savedExtraInput = Cookies.get("extraInput");
    const savedTextareaContent = Cookies.get("textareaContent");

    if (savedSelectedOption) setSelectedOption(savedSelectedOption);
    if (savedSelectedOption2) setSelectedOption2(savedSelectedOption2);
    if (savedSelectedOption3) setSelectedOption3(savedSelectedOption3);
    if (savedExtraInput) setExtraInput(savedExtraInput);
    if (savedTextareaContent) setTextareaContent(savedTextareaContent);
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      name: selectedOption,
      option2: selectedOption2,
      option3: selectedOption3,
      contents: textareaContent,
      extrainput: extraInput,
      date: new Date().toISOString(),
      checkboxes: checkboxLabels.filter((_, index) => checkboxes[index]).join(", ") || null,
    };

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`サーバーエラー: ${response.status}`);
      }

      const result = await response.json();
      console.log("送信結果:", result);
      setSuccessMessage("データが正常に送信されました");
      setTextareaContent("");
      setExtraInput("");
      setCheckboxes([false, false, false]);

      // データを再取得して画面を更新
      await fetchSubmittedData();
    } catch (error) {
      setErrorMessage(
        `送信エラーが発生しました: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
      console.error("送信エラー:", error);
    }
  };

  const filteredData = submittedDataList.filter((data) => {
    const postDate = new Date(data.data);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const postDay = new Date(postDate);
    postDay.setHours(0, 0, 0, 0);

    return (
      data.name === selectedOption &&
      data.option2 === selectedOption2 &&
      data.option3 === selectedOption3 &&
      postDay.getTime() === today.getTime()
    );
  });
  

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="mb-12"></div>
      {filteredData.length > 0 && (
        <div className="w-full sm:w-96 md:w-[40rem] lg:w-[50rem] bg-white p-4 mb-4 border border-gray-300 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-black mb-4">今日の投稿</h3>
          <div className="space-y-4 text-gray-700">
            {filteredData.map((data, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b pb-2 mb-2 last:border-none last:pb-0 last:mb-0"
              >
                <div className="flex-1">
                  <div className="mt-1">{convertNewlinesToBreaks(data.contents)}</div>
                  <div className="flex justify-end items-center text-sm text-gray-300">{formatDate(data.data)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
      {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}
      <form onSubmit={handleFormSubmit} className="space-y-4 mb-8">
        <textarea
          placeholder="文字を入力してください…"
          className="w-full sm:w-96 md:w-[40rem] lg:w-[50rem] h-48 px-4 py-2 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg shadow-sm resize-none focus:outline-none focus:border-blue-500"
          rows={4}
          value={textareaContent}
          onChange={(e) => setTextareaContent(e.target.value)}
        />
        <div className="flex items-center">
          <select
            value={selectedOption}
            onChange={(e) => {
              setSelectedOption(e.target.value);
              setSelectedOption2("");
              setSelectedOption3("");
            }}
            className="text-blue-500 sm:w-33 px-4 py-2 bg-white border border-gray-300 rounded-md"
          >
            <option value="">課</option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select
            value={selectedOption2}
            onChange={(e) => setSelectedOption2(e.target.value)}
            className="text-blue-500 sm:w-33 px-4 py-2 bg-white border border-gray-300 rounded-md"
            disabled={!selectedOption}
          >
            <option value="">職場</option>
            {options2[selectedOption]?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select
            value={selectedOption3}
            onChange={(e) => setSelectedOption3(e.target.value)}
            className="text-blue-500 sm:w-33 px-4 py-2 bg-white border border-gray-300 rounded-md"
            disabled={!selectedOption2}
          >
            <option value="">ライン</option>
            {options3[selectedOption2]?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-2">
          <input
            type="text"
            value={extraInput}
            onChange={(e) => setExtraInput(e.target.value)}
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:border-blue-500 "
            placeholder="名前入力"
          />
        </div>
        <div className="space-x-4">
          {checkboxLabels.map((label, index) => (
            <label key={index} className="inline-flex items-center">
              <input
                type="checkbox"
                checked={checkboxes[index]}
                onChange={() => {
                  const newCheckboxes = [...checkboxes];
                  newCheckboxes[index] = !newCheckboxes[index];
                  setCheckboxes(newCheckboxes);
                }}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <span className="ml-2 text-gray-700">{label}</span>
            </label>
          ))}
        </div>
        <button
          type="submit"
          className="sm:w-24 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md"
        >
          送信
        </button>
        <div ref={bottomRef}></div>
      </form>
    </main>
    
  );
}
