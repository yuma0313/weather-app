import Heading from "../Atoms/Heading";

interface WeatherDetailsProps {
  data: {
    current?: {
      uv: number;
      wind_kph: number;
      humidity: number;
      vis_km: number;
      feelslike_c: number;
    };
    forecast?: {
      forecastday: {
        astro: {
          sunrise: string;
        };
      }[];
    };
  };
}

const WeatherDetails = ({ data }: WeatherDetailsProps) => {
  if (!data.current || !data.forecast) return <div>データが不足</div>;

  return (
    <>
      <div className="p-12">
        <Heading level="h5" className="text-2xl text-gray-200">
          Details
        </Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white/40 flex p-4 gap-6 rounded-lg">
            <div>
              <Heading level="h6" className="text-gray-500 mb-2">
                UV指数
              </Heading>
              <Heading level="h6" className="text-4xl">
                {data.current.uv}
              </Heading>
            </div>
          </div>
          <div className="bg-white/40 flex p-4 gap-6 rounded-lg">
            <div>
              <Heading level="h6" className="text-gray-500 mb-2">
                風
              </Heading>
              <Heading level="h6" className="text-4xl">
                {data.current.wind_kph}km/h
              </Heading>
            </div>
          </div>
          <div className="bg-white/40 flex p-4 gap-6 rounded-lg">
            <div>
              <Heading level="h6" className="text-gray-500 mb-2">
                日の出
              </Heading>
              <Heading level="h6" className="text-4xl">
                {data.forecast.forecastday[0].astro.sunrise}
              </Heading>
            </div>
          </div>
          <div className="bg-white/40 flex p-4 gap-6 rounded-lg">
            <div>
              <Heading level="h6" className="text-gray-500 mb-2">
                湿度
              </Heading>
              <Heading level="h6" className="text-4xl">
                {data.current.humidity}
              </Heading>
            </div>
          </div>
          <div className="bg-white/40 flex p-4 gap-6 rounded-lg">
            <div>
              <Heading level="h6" className="text-gray-500 mb-2">
                視程
              </Heading>
              <Heading level="h6" className="text-4xl">
                {data.current.vis_km}km
              </Heading>
            </div>
          </div>
          <div className="bg-white/40 flex p-4 gap-6 rounded-lg">
            <div>
              <Heading level="h6" className="text-gray-500 mb-2">
                体感温度
              </Heading>
              <Heading level="h6" className="text-4xl">
                {data.current.feelslike_c}°
              </Heading>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherDetails;
