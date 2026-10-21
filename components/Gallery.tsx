import Image from "next/image";

const Gallery = () => {
  return (
    <>
      <div className="min-[430px]:hidden">
        <div className="flex flex-row justify-center items-start min-[430]:w-100">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="">
              <Image
                src={`${i % 2 == 0 ? "/images/course-1.png" : "/images/course-2.png"}`}
                alt={`Course ${i}`}
                width={700}
                height={500}
                className={`${i % 2 == 0 ? "h-75 min-[430]:h-35" : "h-100 min-[430]:h-50"} rounded-b-2xl m-5 object-cover object-center w-100
              min-[430]:p-0 min-[430]:w-22`}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-center items-start min-[430]:w-100">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="">
              <Image
                src={`${i % 2 == 0 ? "/images/course-2.png" : "/images/course-1.png"}`}
                alt={`Course ${i}`}
                width={500}
                height={400}
                className={`${
                  i % 2 !== 0
                    ? "h-75 mt-0 min-[430]:h-35 min-[430]:-mt-3"
                    : "h-100 -mt-25 min-[430]:h-50 min-[430]:-mt-18"
                } rounded-t-2xl mx-5 mb-5 object-cover object-center w-100 min-[430]:p- min-[430]:w-22`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="min-[430px">
        <div className="flex flex-row justify-center items-start w-100">
          {[1, 2].map((i) => (
            <div key={i} className="">
              <Image
                src={`${i % 2 == 0 ? "/images/course-1.png" : "/images/course-2.png"}`}
                alt={`Course ${i}`}
                width={700}
                height={500}
                className={`${i % 2 == 0 ? "h-75 min-[430]:h-45" : "h-100 min-[430]:h-60"} rounded-2xl m-5 object-cover object-center w-100
              min-[430]:p-0 min-[430]:w-45`}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-center items-start min-[430]:w-100">
          {[1, 2].map((i) => (
            <div key={i} className="">
              <Image
                src={`${i % 2 == 0 ? "/images/course-2.png" : "/images/course-1.png"}`}
                alt={`Course ${i}`}
                width={500}
                height={400}
                className={`${
                  i % 2 !== 0
                    ? "h-75 mt-0 min-[430]:h-45 min-[430]:-mt-3"
                    : "h-100 -mt-25 min-[430]:h-60 min-[430]:-mt-18"
                } rounded-2xl mx-5 mb-5 object-cover object-center w-100 min-[430]:p- min-[430]:w-45`}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-center items-start min-[430]:w-100">
          {[1, 2].map((i) => (
            <div key={i} className="">
              <Image
                src={`${i % 2 == 0 ? "/images/course-2.png" : "/images/course-1.png"}`}
                alt={`Course ${i}`}
                width={500}
                height={400}
                className={`${
                  i % 2 !== 0
                    ? "h-75  min-[430]:h-60"
                    : "h-100  min-[430]:h-60 "
                } rounded-2xl mx-5 mb-5 object-cover object-center w-100 min-[430]:p- min-[430]:w-45`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
