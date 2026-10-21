const Numbers = () => {
  return (
    <div>
      <div className="flex justify-around items-center text-center max-w-250 mx-auto my-10 text-purple-800 bg-gradient-to-r from-purple-50 via-purple-100 to-purple-50 rounded-lg p-10 min-[430]:w-100 min-[430]:justify-center min-[430]:gap-4 min-[430]:items-start min-[430]:py-5 min-[430]:mt-28">
        <div className="flex flex-col gap-2">
          <span className="text-5xl min-[430]:text-4xl">200+</span>
          <span className="text-2xl min-[430]:text-sm">Makers</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-5xl min-[430]:text-4xl">150+</span>
          <span className="text-2xl min-[430]:text-sm">Industry Mentors</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-5xl min-[430]:text-4xl">30+</span>
          <span className="text-2xl min-[430]:text-sm">Skills Programs</span>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
