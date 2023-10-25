import Input from "@/components/Molecules/Input";
import { useState } from "react";
import Current from "@/components/Organisms/Current";
import WeekForecast from "@/components/Organisms/WeekForecast";
import WeatherDetails from "@/components/Organisms/WeatherDetails";
import Heading from "@/components/Atoms/Heading";
import Layout from "@/components/Templates/Layout";

const WeatherPage: React.FC = () => {
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
      <div className="text-white text-center h-screen mt-5">
        <Heading level="h2" className="text-3xl font-bold mb-4">
          Weather Appへようこそ
        </Heading>
        <p className="text-xl">都市名を入力してEnterキーを押してください</p>
      </div>
    );
  } else if (error !== "") {
    content = (
      <div className="text-white text-center h-screen mt-5">
        <p className="text-3xl font-bold mb-4">都市が見つかりません</p>
        <p className="text-xl">正確な都市名を英語で入力してください</p>
      </div>
    );
  } else {
    content = (
      <>
        <div className="flex md:flex-row flex-col px-12 py-8 items-center justify-between">
          <Current data={data} />
          <WeekForecast data={data} />
        </div>
        <div>
          <WeatherDetails data={data} />
        </div>
      </>
    );
  }

  const headerContent = (
    <>
      <Input handleSearch={handleSearch} setLocation={setLocation} />
      <Heading
        level="h4"
        className="mb-8 md:mb-0 order-1 text-white py-2 px-4 rounded-xl italic font-bold"
      >
        Weather App
      </Heading>
    </>
  );

  return (
    <>
      <Layout header={headerContent} content={content} />
    </>
  );
};

export default WeatherPage;
