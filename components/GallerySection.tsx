import Gallery from "@/components/Gallery";

const GallerySection = () => {
  return (
    <div>
      <div >
        <div className="flex flex-col gap-10 items-center justify-center text-center mt-20 min-[430]:mt-20">
          <div className="w-200 m-15 min-[430]:w-90 min-[430]:m-0">
            <h1 className="text-6xl my-5 min-[430]:text-3xl">Gallery Social proof</h1>
            <h6 className="text-3xl my-5 min-[430]:text-xl">
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
