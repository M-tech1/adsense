"use client";

import { useState } from "react";
import NavBar from "@/components/navBar";
import Footer from "@/components/footer";

export default function WordCounter() {
  const [text, setText] = useState("");

  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const chars = text.length;
  const lines = text.split(/\r?\n/).length;

  return (
    <>
      <NavBar />

      <main className="min-h-screen flex flex-col items-center bg-gradient-to-b from-gray-50 to-white pt-24 pb-16 px-4">
        <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">
              ✍️ Word Counter
            </h1>
            <p className="text-gray-500 mt-2 text-base">
              Paste or type your text below to analyze word, character, and line
              counts.
            </p>
          </div>

          <textarea
            className="w-full h-52 p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 bg-gray-50 resize-none text-gray-800 shadow-sm transition-all"
            placeholder="Start typing or paste your text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Words", value: words },
              { label: "Characters", value: chars },
              { label: "Lines", value: lines },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white border border-gray-100 shadow-sm rounded-xl p-5 text-center hover:shadow-md transition-all"
              >
                <div className="text-sm text-gray-500">{item.label}</div>
                <div className="text-3xl font-bold text-indigo-600 mt-1">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
