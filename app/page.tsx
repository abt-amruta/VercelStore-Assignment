import Nav from "@/components/Nav";
import Numbers from "@/components/Numbers";
import CourseSection from "@/components/CourseSection";
import GallerySection from "@/components/GallerySection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Image from "next/image";

const page = () => {
  const imageUrl = "images/main.png";
  const campaignImageUrl = "images/course-3.png";

  return (
    <div>
      <Nav />
      <div
        className="bg-cover bg-center lg:h-[90vh] flex items-center justify-start rounded-4xl mx-15 p-15 min-[430px]:hidden"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      >
        <div className="flex flex-col gap-15 w-2/3 min-[430]:w-full min-[430]:gap-3 ">
          <h1 className="text-7xl font-bold text-black min-[430]:text-2xl min-[430px]:line-clamp-3">
            Learn to make Loreum Ipsum loreum ipsum
          </h1>
          <h6 className="text-3xl text-black min-[430]:text-lg min-[430px]:line-clamp-2">
            Learn to make Loreum Ipsum loreum ipsum Learn to make Loreum Ipsum
            loreum ipsum Learn to make
          </h6>
          <div className="flex gap-5 justify-start">
            <button className="text-white bg-[#5b20e4] py-3 px-7 rounded-4xl min-[430]:px-3 min-[430]:py-2">
              <span className="max-[430] min-[430]:text-sm min-[430]:h-2 min-[430]:font-bold">
                Explore
              </span>
            </button>
            <button className="text-black  border border-black text-2xl py-3 px-7 rounded-4xl min-[430]:hidden">
              Talk to an Advisor
            </button>
          </div>
        </div>
      </div>

      {/* responsive cart of home page */}

      <div className="min-[430] rounded-4xl m-5 w-100">
        <div className="bg-transparent overflow-hidden ">
          <Image
            src="/images/main.png"
            alt="Course Image"
            width={500}
            height={500}
            className="rounded-t-4xl"
          />
        </div>
        <div className="w-100 flex flex-col justify-start gap-2 p-5 bg-purple-50 rounded-b-4xl">
          <div className="py-3">
            <h1 className="text-3xl py-3 font-bold">
              Learn to make Loreum Ipsum loreum ipsum{" "}
            </h1>
            <h6 className="text-xl">
              Week-long maker camps where children build, paint, code and bake
              with
            </h6>
          </div>
          <div className="flex flex-col gap-4">
            <button className="text-white bg-[#6d25f1] text-xl py-3 rounded-4xl">
              Expplore Courses
            </button>
            <button className="text-black bg-[#fff] text-xl py-3 rounded-4xl shadow ">
              Talk to an Advisor
            </button>
          </div>
        </div>
      </div>

      <div className="-mt-30 min-[430]:-mt-22">
        <Numbers />
      </div>

      <CourseSection category="Adults" />
      <CourseSection category="Kids" />

      <div className="min-[430px]:hidden">
        <div className="flex flex-col gap-10 items-center justify-center text-center mt-20 min-[430]:mt-10 min-[430]:gap-1 ">
          <div className="w-200 m-15 min-[430]:w-100">
            <h1 className="text-6xl my-5 min-[430]:text-3xl">Kids Camp</h1>
            <h6 className="text-3xl my-5 min-[430]:text-lg">
              Loreum ipsum loreum ipsim Loreum Loreum ipsum loreum ipsim Loreum
            </h6>
          </div>
        </div>
        <div
          className="bg-cover bg-center h-[70vh] flex items-center justify-start rounded-4xl mx-15 p-15 min-[430]:h-100 min-[430]:w-80 min-[430]:-my-10"
          style={{ backgroundImage: `url('${campaignImageUrl}')` }}
        >
          <div className="flex flex-col gap-15 w-2/3 min-[430]:w-60 min-[430]:gap-3">
            <h1 className="text-7xl font-bold text-black min-[430]:text-2xl">
              Learn to make Loreum Ipsum loreum ipsum
            </h1>
            <h6 className="text-3xl text-black min-[430]:text-lg">
              Learn to make Loreum Ipsum loreum ipsum Learn to make Loreum Ipsum
              loreum ipsum Learn to make
            </h6>
            <div className="flex gap-5 justify-start">
              <button className="text-black  border border-black text-2xl py-3 px-7 rounded-4xl min-[430]:text-xl">
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* responsive card for kids camp */}

      <div className="min-[430] rounded-4xl m-5 w-100">
        <div className="flex flex-col items-center justify-center text-center mt-2 min-[430]:gap-1 ">
          <div className="w-100">
            <h1 className="text-6xl my-5 min-[430]:text-3xl ">Kids Camp</h1>
            <h6 className="text-3xl my-5 min-[430]:text-lg">
              Loreum ipsum loreum ipsim Loreum Loreum ipsum loreum ipsim Loreum
            </h6>
          </div>
        </div>
        <div className="bg-transparent overflow-hidden ">
          <Image
            src="/images/course-3.png"
            alt="Course Image"
            width={500}
            height={500}
            className="rounded-t-4xl"
          />
        </div>
        <div className="w-100 flex flex-col justify-start gap-2 p-5 bg-purple-50 rounded-b-4xl">
          <div className="py-3">
            <h1 className="text-3xl py-3">Summer Camp Loreum Ipsum </h1>
            <h6 className="text-xl">
              Learn to make Loreum Ipsum loreum ipsum loreum ipsum loreum ipsum
              loreum ipsum
            </h6>
          </div>
          <div className="flex flex-col gap-4 w-fit px-1">
            <button className="text-black bg-[#fff] text-xl py-3 rounded-4xl shadow px-8">
              Know More
            </button>
          </div>
        </div>
      </div>
      <GallerySection />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
