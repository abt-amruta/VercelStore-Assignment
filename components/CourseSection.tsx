import CourseCard from "@/components/CourseCard";
import { adults } from "@/data/adults";

const CourseSection = ({ category }: { category: string }) => {
  return (
    <div>
      <div
        className={`${category === "Adults" ? "bg-pink-white" : "bg-purple-100"} max-[769px]:p-0.5 p-5`}
      >
        <div className="flex flex-col gap-5 items-center justify-center text-center mt-40 md:mt-10 max-[769px]:mt-5 max-[769]:gap-2">
          <h1 className="lg:text-6xl max-[769]:text-3xl md:text-4xl">
            Maker Course for {category}
          </h1>
          <h5 className="lg:text-3xl max-[769]:text-lg md:text-xl">
            Loreum ipsum loreum ipsim Loreum Loreum ipsum loreum ipsim Loreum
          </h5>
        </div>
        <div className="flex flex-row justify-center mt-20 max-[769]:mt-5 max-[769px]:overflow-x-auto max-[769px]:scroll-smooth max-[769px]:snap max-[769px]:mx-1 max-[769px]:justify-start">
          {adults.map((course) => (
            <CourseCard key={course.id} data={course} />
          ))}
        </div>
        <div className="flex justify-center">
          <button className="text-black border border-black text-2xl py-4 px-10 rounded-[40px] mt-12 mb-30 max-[769]:text-lg max-[769]:mt-5 max-[769]:mb-15:">
            View all Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
