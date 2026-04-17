const Stats = () => {
  return (
    <section
      id="features"
      className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-12 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 text-white text-center gap-10 md:gap-6">
        <div className="flex flex-col items-center">
          <h3 className="text-5xl font-bold">50K+</h3>
          <p className="opacity-80 text-lg font-light mt-2">Active Users</p>
        </div>
        <div className="md:border-x border-white/20 px-4 flex flex-col items-center">
          <h3 className="text-5xl font-bold">200+</h3>
          <p className="opacity-80 text-lg font-light mt-2">Premium Tools</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-5xl font-bold">4.9</h3>
          <p className="opacity-80 text-lg font-light mt-2">Rating</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
