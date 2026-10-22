import Image from "next/image";

const Contact = () => {
  return (
    <>
      {/* large screens */}
      <div className="flex flex-col gap-10 items-center justify-center text-center max-[431]:hidden md:my-10">
        <div className="flex flex-row gap-10 md:gap-3 justify-around items-center mt-40 md:mt-20 bg-purple-50 rounded-4xl mx-30 text-[#5400D6] w-450 md:w-180 lg:w-290">
          <div className="flex flex-col justify-center gap-8 md:gap-3 lg:gap-8 flex-4 items-start p-15 md:flex-2 ">
            <h1 className="lg:text-6xl font-bold text-[#5400D6] min-[430]:text-4xl">
              Contact Us
            </h1>
            <h6 className="lg:text-3xl w-150 md:w-70 lg:w-100 text-start md:text-2xl">
              Loreum ipsum loreum ipsim Loreum Loreum ipsum 
            </h6>
            <button className="text-white bg-[#5400D6] w-70 lg:text-2xl py-3 px-7 rounded-4xl">
              Talk to an Advisor
            </button>
          </div>
          <div className="relative w-100 h-100 rounded-r-4xl overflow-hidden flex-3 md:flex-3 md:w-50">
            <Image
              src="/images/course-3.png"
              alt="Contact"
              fill
              className=" object-fit object-cover object-center"
            />
          </div>
        </div>
      </div>

      {/* smallers screens  */}
      <div className="min-[431]:hidden rounded-4xl m-5 w-100 mt-15 max-[391]:w-88">
        <div className="bg-transparent overflow-hidden ">
          <Image
            src="/images/course-3.png"
            alt="Course Image"
            width={500}
            height={500}
            className="rounded-t-4xl"
          />
        </div>
        <div className="w-100 flex flex-col justify-start gap-2 p-5 bg-purple-50 rounded-b-4xl max-[391]:w-88">
          <div className="py-3">
            <h1 className="text-3xl py-3 font-bold text-[#5400D6] max-[391]:w-80">
              Learn to make Loreum Ipsum loreum ipsum{" "}
            </h1>
            <h6 className="text-xl text-[#5400D6] max-[391]:w-80">
              Week-long maker camps where children build, paint, code and bake
              with
            </h6>
          </div>
          <div className="flex flex-col gap-4 w-fit px-1">
            <button className="text-white text-xl py-3 rounded-4xl shadow px-8 bg-[#5400D6]">
              Talk to an Advisor
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
