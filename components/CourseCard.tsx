import Image from "next/image";
import progress from "@base-ui/react-progress";
import { Dot } from "lucide-react";
const CourseCard = ({ data }: { data: any }) => {
  return (
    <div className="rounded-4xl lg:w-100 m-5 max-[769]:w-80">
      <div className="bg-transparent overflow-hidden ">
        <Image
          src={data.image}
          alt="Course Image"
          width={500}
          height={500}
          className="rounded-t-4xl"
        />
      </div>
      <div className="lg:w-100 flex flex-col justify-start gap-2 p-5 bg-white rounded-b-4xl border border-gray-300 max-[769]:w-80 max-[769]:gap-0.5">
        <div className="py-3 max-[769]:py-0">
          <h1 className="text-3xl py-2 font-bold max-[769]:text-2xl">
            {data.title}
          </h1>
          <h6 className="text-2xl max-[769]:text-lg">{data.desc}</h6>
        </div>
        <div className="flex justify-between items-center gap-5 py-3 max-[769]:flex-col max-[769]:items-start max-[769]:gap-1">
          <h6 className="text-2xl max-[769]:text-lg lg:text-xl">{data.batch}</h6>
          <span className="bg-orange-100 text-orange-800 py-1 px-3 rounded-full flex lg:w-50 items-center max-[769]:text-sm max-[769]:px-2 max-[769]:py-0">
            <Dot size={30} className="max-[769]:hidden" />
            <Dot className="max-[769] min-[770]:hidden" />
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
            max-[769]:h-1"
          />
        </div>
        <button className="text-white bg-[#6d25f1] text-xl py-5 my-3 rounded-2xl max-[769]:text-lg max-[769]:py-2">
          View Course
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
