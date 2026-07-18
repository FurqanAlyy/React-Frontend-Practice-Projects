import { useEffect, useState } from "react";
import Search from "./Search";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export default function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  async function fetchWeatherData(city) {
    if (!city) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );

      const data = await response.json();

      if (data.cod === 200) {
        setWeatherData(data);
      } else {
        setError(data.message);
        setWeatherData(null);
      }
    } catch (error) {
      setError("Something went wrong");
      setWeatherData(null);
    }

    setLoading(false);
  }

  function handleSearch() {
    fetchWeatherData(search);
  }

  function getCurrentDate() {
    return new Date().toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  useEffect(() => {
    fetchWeatherData("Lahore");
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-900 flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-[32px] bg-white/10 backdrop-blur-2xl border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.55)] p-8 text-white">

        <Search
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />

        {loading && (
          <div className="flex justify-center mt-10">
            <div className="h-12 w-12 rounded-full border-4 border-white/20 border-t-white animate-spin"></div>
          </div>
        )}

        {error && (
          <div className="mt-8 rounded-xl bg-red-500/20 border border-red-400/30 py-3 px-4 text-center text-red-100">
            {error}
          </div>
        )}

        {!loading && weatherData && (
          <>
            <div className="mt-8 text-center">
              <h2 className="text-4xl font-bold tracking-wide">
                {weatherData.name}
              </h2>

              <p className="text-white/70 mt-1">
                {weatherData.sys.country}
              </p>

              <p className="text-sm text-white/60 mt-3">
                {getCurrentDate()}
              </p>
            </div>

            <div className="flex justify-center mt-5">
              <img
                className="w-36 h-36 drop-shadow-2xl"
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
                alt={weatherData.weather[0].description}
              />
            </div>

            <div className="text-center">
              <h1 className="text-7xl font-extrabold">
                {Math.round(weatherData.main.temp)}°
              </h1>

              <p className="capitalize text-xl text-white/80 mt-2">
                {weatherData.weather[0].description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-10">

              <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 p-5 text-center transition-all duration-300 hover:scale-105 hover:bg-white/15">
                <p className="text-3xl font-bold">
                  {weatherData.wind.speed}
                </p>
                <p className="text-sm text-white/70 mt-2">
                  Wind Speed (m/s)
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 p-5 text-center transition-all duration-300 hover:scale-105 hover:bg-white/15">
                <p className="text-3xl font-bold">
                  {weatherData.main.humidity}%
                </p>
                <p className="text-sm text-white/70 mt-2">
                  Humidity
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 p-5 text-center transition-all duration-300 hover:scale-105 hover:bg-white/15">
                <p className="text-3xl font-bold">
                  {Math.round(weatherData.main.feels_like)}°
                </p>
                <p className="text-sm text-white/70 mt-2">
                  Feels Like
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 p-5 text-center transition-all duration-300 hover:scale-105 hover:bg-white/15">
                <p className="text-3xl font-bold">
                  {weatherData.main.pressure}
                </p>
                <p className="text-sm text-white/70 mt-2">
                  Pressure (hPa)
                </p>
              </div>

            </div>
          </>
        )}
      </div>
    </div>
  );
}