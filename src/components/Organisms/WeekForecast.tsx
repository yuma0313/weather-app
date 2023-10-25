interface WeekForecastProps {
  data: {
    forecast?: {
      forecastday: {
        date: string;
        day: {
          maxtemp_c: number;
          mintemp_c: number;
          condition: {
            icon: string;
            text: string;
          };
        };
      }[];
    };
  };
}

const WeekForecast = ({ data }: WeekForecastProps) => {
  if (!data.forecast) return <div>データが不足</div>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 p-6 w-full">
      {data.forecast.forecastday.map((day, index) => (
        <div
          key={index}
          className="bg-white/40 p-2 text-center rounded-lg flex flex-col items-center"
        >
          <p>
            {new Date(day.date).toLocaleString("en-US", { weekday: "short" })}
          </p>
          <img src={day.day.condition.icon} alt={day.day.condition.text} />
          <div className="flex justify-between">
            <p>{day.day.maxtemp_c.toFixed()}°</p>
            <p className="text-gray-500 ml-2">{day.day.mintemp_c.toFixed()}°</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeekForecast;
