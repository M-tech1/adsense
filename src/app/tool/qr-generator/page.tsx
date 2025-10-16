"use client";

import { useRef, useState } from "react";
import QRCode from "qrcode";
import NavBar from "@/components/navBar";
import Footer from "@/components/footer";

export default function QRGenerator() {
  const [input, setInput] = useState("");
  const [dataUrl, setDataUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  async function generate() {
    if (!input.trim()) {
      setError("Please enter a valid text or URL");
      return;
    }
    setError(null);
    try {
      const url = await QRCode.toDataURL(input.trim(), { margin: 1, scale: 6 });
      setDataUrl(url);
    } catch (e) {
      console.error(e);
      setError("Failed to generate QR code. Try again.");
    }
  }

  return (
    <>
      <NavBar />

      {/* Page Container */}
      <main className="min-h-screen bg-gradient-to-b from-cyan-50 to-white flex flex-col justify-center py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Heading */}
          <h1 className="text-4xl font-extrabold text-gray-800 mb-3">
            QR Code Generator
          </h1>
          <p className="text-gray-600 mb-8">
            Quickly generate a QR code for any text or URL — perfect for sharing
            links, Wi-Fi info, or contact details.
          </p>

          {/* Input Section */}
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter text or URL..."
              className="flex-1 border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 rounded-lg px-4 py-3 text-gray-700 shadow-sm transition"
            />
            <button
              onClick={generate}
              className="px-6 py-3 bg-cyan-600 text-white font-medium rounded-lg hover:bg-cyan-700 shadow-md hover:shadow-lg transition"
            >
              Generate
            </button>
          </div>

          {/* Error Message */}
          {error && <p className="text-sm text-red-500 mb-4">{error}</p>}

          {/* QR Code Display */}
          {dataUrl && (
            <div className="mt-8 bg-white p-6 rounded-2xl border border-gray-100 shadow-md inline-block transition transform hover:scale-105">
              <img
                src={dataUrl}
                alt="Generated QR Code"
                className="mx-auto w-48 h-48 object-contain"
              />
              <div className="mt-4">
                <a
                  download="qrcode.png"
                  href={dataUrl}
                  className="inline-block text-cyan-600 font-medium hover:underline"
                >
                  Download PNG
                </a>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
