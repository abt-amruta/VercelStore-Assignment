import Image from "next/image";
import progress from "@base-ui/react-progress";
import { Dot } from "lucide-react";
const CourseCard = ({ data }: { data: any }) => {
  return (
    <div className="rounded-4xl w-120 m-5 min-[430]:w-80">
      <div className="bg-transparent overflow-hidden ">
        <Image
          src={data.image}
          alt="Course Image"
          width={500}
          height={500}
          className="rounded-t-4xl"
        />
      </div>
      <div className="w-120 flex flex-col justify-start gap-2 p-5 bg-white rounded-b-4xl border border-gray-300 min-[430]:w-80 min-[430]:gap-0.5">
        <div className="py-3 min-[430]:py-0">
          <h1 className="text-3xl py-2 font-bold min-[430]:text-2xl">{data.title}</h1>
          <h6 className="text-2xl min-[430]:text-lg">{data.desc}</h6>
        </div>
        <div className="flex justify-between items-center gap-5 py-3 min-[430]:flex-col min-[430]:items-start min-[430]:gap-1">
          <h6 className="text-2xl min-[430]:text-lg">{data.batch}</h6>
          <span className="bg-orange-100 text-orange-800 py-1 px-3 rounded-full flex items-center min-[430]:text-sm min-[430]:px-2 min-[430]:py-0">
            <Dot size={30} className="min-[430]:hidden"/>
            <Dot className="min-[430]"/>
            {data.spot}
          </span>
        </div>
        <div>
          <progress
            value={data.progress}
            max={200}
            className="w-full h-3 appearance-none overflow-hidden rounded-full
            [&::-webkit-progress-bar]:bg-gray-100
            [&::-webkit-progress-value]:bg-gray-300
            [&::-moz-progress-bar]:bg-gray-400
            min-[430]:h-1"
          />
        </div>
        <button className="text-white bg-[#6d25f1] text-xl py-5 my-3 rounded-2xl min-[430]:text-lg min-[430]:py-2">
          View Course
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
