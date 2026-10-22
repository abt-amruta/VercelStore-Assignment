import Gallery from "@/components/Gallery";

const GallerySection = () => {
  return (
    <div>
      <div >
        <div className="flex flex-col gap-10 items-center justify-center text-center mt-20 max-[431]:mt-20">
          <div className="w-200 m-15 max-[431]:w-90 max-[431]:m-0 md:w-170">
            <h1 className="lg:text-6xl my-5 max-[431]:text-3xl md:text-5xl">Gallery Social proof</h1>
            <h6 className="lg:text-3xl my-5 max-[431]:text-xl md:text-2xl">
              Loreum ipsum loreum ipsim Loreum Loreum ipsum loreum ipsim Loreum
            </h6>
          </div>
        </div>
        <div className="">
           <Gallery /> 
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
