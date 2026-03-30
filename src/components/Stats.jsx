const Stats = () => {
  return (
    <div id="features" className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-12 px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 text-white text-center gap-6">
      <div><h3 className="text-5xl font-bold">50K+</h3><p className="opacity-80 text-lg font-light">Active Users</p></div>
      <div className="md:border-x border-white/20 px-4"><h3 className="text-5xl font-bold">200+</h3><p className="opacity-80 text-lg font-light">Premium Tools</p></div>
      <div><h3 className="text-5xl font-bold">4.9</h3><p className="opacity-80 text-lg font-light">Rating</p></div>
    </div>
  );
};

export default Stats;