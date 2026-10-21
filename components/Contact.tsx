import Image from "next/image";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col gap-10 items-center justify-center text-center min-[430];flex-col min-[430]:hidden">
        <div className="flex flex-row gap-10 justify-around items-center mt-40 bg-purple-50 rounded-4xl mx-30 text-[#5400D6] w-450 min-[430]:w-100 min-[430]:flex-col min-[430]:m-10">
          <div className="flex flex-col justify-center gap-8 flex-4 items-start p-15 min-[430]:flex-1 min-[430]:gap-4">
            <h1 className="text-6xl font-bold text-[#5400D6] min-[430]:text-4xl">
              Contact Us
            </h1>
            <h6 className="text-3xl w-150 text-start min-[430]:text-lg min-[430]:w-50">
              Loreum ipsum loreum ipsim Loreum Loreum ipsum loreum ipsim Loreum
            </h6>
            <button className="text-white bg-[#5400D6] w-70 text-2xl py-3 px-7 rounded-4xl min-[430]:text-lg min-[430]:px-4 min-[430]:py-2">
              Talk to an Advisor
            </button>
          </div>
          <div className="relative w-100 h-100 rounded-r-4xl overflow-hidden flex-3 min-[430]:w-50 min-[430]:h-50 min-[430]:flex-2 min-[430]:hidden">
            <Image
              src="/images/course-3.png"
              alt="Contact"
              fill
              className=" object-fit object-cover object-center"
            />
          </div>
        </div>
      </div>


      <div className="min-[430] rounded-4xl m-5 w-100 mt-15">
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
            <h1 className="text-3xl py-3 font-bold text-[#5400D6]">
              Learn to make Loreum Ipsum loreum ipsum{" "}
            </h1>
            <h6 className="text-xl text-[#5400D6]">
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
