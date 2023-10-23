import Input from "@/components/Input";
import { useState } from "react";
import Current from "@/components/Current";
import WeekForecast from "@/components/WeekForecast";
import WeatherDetails from "@/components/WeatherDetails";

export default function Home() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${location}&days=7&aqi=yes&alerts=yes`;

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setData(data);
        setLocation("");
        setError("");
      } catch (error) {
        setError("都市名を正しく入力してください");
        setData({});
      }
    }
  };

  let content;
  if (Object.keys(data).length === 0 && error === "") {
    content = (
      <div>
        <h2>Welcome to the Weather App</h2>
      </div>
    );
  } else if (error !== "") {
    content = (
      <div>
        <p>City Not Found</p>
        <p>Enter a Valid City</p>
      </div>
    );
  } else {
    content = (
      <div>
        <Current />
        <WeekForecast />
        <WeatherDetails />
      </div>
    );
  }

  return (
    <>
      <div className="bg-cover bg-gradient-to-r from-blue-500 to-blue-300 h-screen">
        <div className="bg-white/25 w-full flex flex-col h-fit">
          <div className="flex flex-col md:flex-row justify-between items-center p-12">
            <Input handleSearch={handleSearch} setLocation={setLocation} />
            <h1 className="mb-8 md:mb-0 order-1 text-white py-2 px-4 rounded-xl italic font-bold">
              Weather App
            </h1>
          </div>
          {content}
        </div>
      </div>
    </>
  );
}
