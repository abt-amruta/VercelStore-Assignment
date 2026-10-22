const Numbers = () => {
  return (
    <div>
      <div className="flex lg:w-160 md:w-130 lg:gap-3 justify-around items-center text-center max-w-250 mx-auto my-10 text-purple-800 bg-gradient-to-r from-purple-50 via-purple-100 to-purple-50 rounded-lg p-10 max-[431]:w-100 max-[391]:w-90 max-[431]:justify-center max-[431]:gap-4 max-[430]:items-start max-[431]:py-5 max-[431]:mt-28">
        <div className="flex flex-col gap-2">
          <span className="lg:text-5xl md:text-4xl max-[431]:text-4xl lg:font-bold">200+</span>
          <span className="lg:text-2xl md:text-xl max-[431]:text-sm">Makers</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="lg:text-5xl md:text-4xl max-[431]:text-4xl lg:font-bold">150+</span>
          <span className="lg:text-2xl md:text-xl max-[431]:text-sm">Industry Mentors</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="lg:text-5xl md:text-4xl max-[431]:text-4xl lg:font-bold">30+</span>
          <span className="lg:text-2xl md:text-xl max-[431]:text-sm">Skills Programs</span>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
