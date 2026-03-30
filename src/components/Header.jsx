import banner from '../assets/banner.png';

const Header = () => {
  return (
    <header className="px-6 lg:px-20 py-16 flex flex-col lg:flex-row items-center gap-12 bg-gray-50">
      <div className="flex-1 text-center lg:text-left">
        <span className="bg-[#e1e7ff] text-[#7F27FF] px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider inline-flex items-center"><span className="w-2.5 h-2.5 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full inline-block mr-2 shadow-xl shadow-[#4F39F6]  animate-pulse"></span>New: AI-Powered Tools Available</span>
        <h2 className="text-4xl lg:text-5xl font-extrabold mt-6 leading-tight text-gray-900">
          Supercharge Your <br /> <span className="text-[#7F27FF]">Digital Workflow</span>
        </h2>
        <p className="mt-6 text-[#627382] text-lg leading-relaxed max-w-xl">
          Access premium AI tools, design assets, templates, and productivity
          software all in one place. Start creating faster today.<br />Explore Products
        </p>
        <div className="mt-7 flex gap-4 justify-center lg:justify-start">
          <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-4xl hover:bg-[#6a20d6] hover:scale-105 border-none px-6 py-3 font-semibold transition-all">Explore Products</button>
          <button className="btn bg-transparent text-[#9514FA] rounded-4xl border shadow-none border-[#9514FA] px-6 py-3 font-semibold hover:bg-purple-50 transition-colors"><i className="fa-solid fa-play"></i> Watch Demo</button>
        </div>
      </div>
      <div className="flex-1 relative w-full max-w-lg">
        <img src={banner} alt="Hero" className="w-full max-w-fit mx-auto" />
      </div>
    </header>
  );
};

export default Header;