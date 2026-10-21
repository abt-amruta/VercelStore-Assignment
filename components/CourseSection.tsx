import CourseCard from "@/components/CourseCard";
import { adults } from "@/data/adults";

const CourseSection = ({ category }: { category: string }) => {
  return (
    <div>
      <div
        className={`${category === "Adults" ? "bg-pink-white" : "bg-purple-100"} min-[430px]:p-0.5 p-5`}
      >
        <div className="flex flex-col gap-5 items-center justify-center text-center mt-40 min-[430]:mt-10 min-[430]:gap-2">
          <h1 className="text-6xl min-[430]:text-3xl">Maker Course for {category}</h1>
          <h5 className="text-3xl min-[430]:text-lg">
            Loreum ipsum loreum ipsim Loreum Loreum ipsum loreum ipsim Loreum
          </h5>
        </div>
        <div className="flex flex-row justify-center mt-20 min-[430]:mt-5 min-[430px]:overflow-x-auto min-[430px]:scroll-smooth min-[430px]:snap min-[430px]:mx-1 min-[430px]:justify-start">
          {adults.map((course) => (
            <CourseCard key={course.id} data={course} />
          ))}
        </div>
        <div className="flex justify-center">
          <button className="text-black border border-black text-2xl py-4 px-10 rounded-[40px] mt-12 mb-30 min-[430]:text-lg min-[430]:mt-5 min-[430]:mb-15:">
            View all Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
