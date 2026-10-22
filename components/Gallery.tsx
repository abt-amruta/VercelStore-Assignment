import Image from "next/image";

const Gallery = () => {
  return (
    <>
      <div className="max-[431px]:hidden">
        <div className="flex flex-row justify-center items-start">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="">
              <Image
                src={`${i % 2 == 0 ? "/images/course-1.png" : "/images/course-2.png"}`}
                alt={`Course ${i}`}
                width={700}
                height={500}
                className={`${i % 2 == 0 ? "h-75 lg:h-100 md:h-65" : "h-100 lg:h-120 md:h-90"} rounded-b-2xl m-5 object-cover object-center w-100
              md:p-0 md:w-35 md:m-2 lg:w-70`}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-center items-start">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="">
              <Image
                src={`${i % 2 == 0 ? "/images/course-2.png" : "/images/course-1.png"}`}
                alt={`Course ${i}`}
                width={500}
                height={400}
                className={`${
                  i % 2 !== 0 ? "h-75 lg:h-100 mt-0 md:h-65" : "h-100 lg:h-120 -mt-25 md:h-90 md:-mt-25 lg:-mt-20 lg:pt-2"
                } rounded-t-2xl mx-5 mb-5 object-cover object-center md:w-35 md:m-2 lg:w-70`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="max-[431px] min-[431]:hidden">
        <div className="flex flex-row justify-center items-start w-100 max-[391]:w-100">
          {[1, 2].map((i) => (
            <div key={i} className="">
              <Image
                src={`${i % 2 == 0 ? "/images/course-1.png" : "/images/course-2.png"}`}
                alt={`Course ${i}`}
                width={700}
                height={500}
                className={`${i % 2 == 0 ? "h-45 max-[391]:h-35" : "h-60 max-[391]:h-50"} rounded-2xl m-5 object-cover object-center
              p-1 w-50 max-[391]:w-40 max-[391]:mx-0.5`}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-center items-start max-[391]:w-100">
          {[1, 2].map((i) => (
            <div key={i} className="">
              <Image
                src={`${i % 2 == 0 ? "/images/course-2.png" : "/images/course-1.png"}`}
                alt={`Course ${i}`}
                width={500}
                height={400}
                className={`${
                  i % 2 !== 0
                    ? "h-45 -mt-4 max-[391]:h-35 "
                    : "h-60 -mt-19 max-[391]:h-50 max"
                } rounded-2xl mx-1 object-cover object-center w-50 p-1 max-[391]:w-40`}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-center items-start max-[391]:w-100">
          {[1, 2].map((i) => (
            <div key={i} className="">
              <Image
                src={`${i % 2 == 0 ? "/images/course-2.png" : "/images/course-1.png"}`}
                alt={`Course ${i}`}
                width={500}
                height={400}
                className={`${
                  i % 2 !== 0
                    ? "h-60  max-[391]:h-50"
                    : "h-60  max-[391]:h-50 "
                } rounded-2xl mx-2 mt-2 object-cover object-center w-45 max-[391]:p-0 max-[391]:w-40`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
