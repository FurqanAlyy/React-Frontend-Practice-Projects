import React, { useState } from "react";

const Random = () => {
  const [type, setType] = useState("HEX");
  const [color, setColor] = useState("#FFFFFF");

  function generateHexColor() {
    const hex = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }

    setType("HEX");
    setColor(color);
  }

  function generateRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    setType("RGB");
    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  function generateHslColor() {
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 101);
    const l = Math.floor(Math.random() * 101);

    setType("HSL");
    setColor(`hsl(${h}, ${s}%, ${l}%)`);
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center transition-all duration-500"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-4xl font-bold text-cyan-950 drop-shadow-lg mb-10">
        🎨 Random Color Generator
      </h1>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <button
          onClick={generateRgbColor}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg"
        >
          RGB Color
        </button>

        <button
          onClick={generateHexColor}
          className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition duration-300 shadow-lg"
        >
          HEX Color
        </button>

        <button
          onClick={generateHslColor}
          className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition duration-300 shadow-lg"
        >
          HSL Color
        </button>
      </div>

      <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 shadow-2xl text-center border border-white/30">
        <h2 className="text-2xl font-bold text-white mb-3">
          {type} Color
        </h2>

        <p className="text-xl font-mono text-white break-all">
          {color}
        </p>
      </div>
    </div>
  );
};

export default Random;