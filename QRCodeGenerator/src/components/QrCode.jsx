import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-100 flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          QR Code Generator
        </h1>

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            name="qr-code"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter text or URL..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />

          <button
            onClick={handleGenerateQrCode}
            disabled={!input.trim()}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Generate
          </button>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="bg-white p-5 rounded-xl shadow-md border">
            <QRCode
              id="qr-code-value"
              value={qrCode || " "}
              size={250}
              bgColor="#ffffff"
            />
          </div>
        </div>

        {qrCode && (
          <p className="mt-6 text-center text-gray-600 break-all">
            <span className="font-semibold">Generated for:</span> {qrCode}
          </p>
        )}
      </div>
    </div>
  );
}