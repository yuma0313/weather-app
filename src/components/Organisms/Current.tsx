import { getCurrentDate } from "@/utils/currentDate";
import { GoLocation } from "react-icons/go";
import Heading from "../Atoms/Heading";
interface CurrentProps {
  data: {
    current?: {
      condition: {
        icon: string;
        text: string;
      };
      temp_c: number;
    };
    location?: {
      name: string;
      country: string;
    };
  };
}

const Current = ({ data }: CurrentProps) => {
  if (!data.current || !data.location) return <div>データが不足</div>;

  const currentDate = getCurrentDate();
  const weatherIcon = data.current.condition.icon;
  return (
    <div className="w-80 flex flex-col mb-8 md:mb-0 items-start gap-2 bg-black/25 p-6 rounded-xl">
      <div className="flex items-center">
        <div>
          <Heading level="h3" className="text-white">
            Today
          </Heading>
          <p className="text-white">{currentDate}</p>
        </div>
        {weatherIcon && (
          <div className="w-[50px] object-cover">
            <img src={weatherIcon} alt={data.current.condition.text} />
          </div>
        )}
      </div>
      <div>
        <p className="text-5xl text-white">
          {data.current.temp_c.toFixed()}
          <span>°</span>
        </p>
        <span className="text-white">{data.current.condition.text}</span>
      </div>
      <div className="flex items-center text-black bg-white/90 px-2 py-2 rounded-sm">
        <GoLocation />
        <span>
          {data.location.name}, {data.location.country}
        </span>
      </div>
    </div>
  );
};

export default Current;
