import banner from '../assets/banner.png';
import { FaPlay } from 'react-icons/fa6';

const Banner = () => {
  return (
    <section className="bg-gray-50 px-6 lg:px-20 py-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <span className="bg-[#e1e7ff] text-[#7F27FF] px-4 py-2 rounded-full text-[12px] md:text-sm font-bold uppercase tracking-wider inline-flex items-center justify-center text-center leading-tight">
            <span className="shrink-0 w-2 h-2 md:w-2.5 md:h-2.5 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full inline-block mr-2 shadow-xl shadow-[#4F39F6] animate-pulse"></span>
            New: AI-Powered Tools Available
          </span>
          <h2 className="text-3xl lg:text-5xl font-extrabold mt-6 leading-tight text-gray-900">
            Supercharge Your <br />{' '}
            <span className="bg-linear-to-r from-[#4F39F6] via-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent animate-gradient-text shrink-0">
              Digital Workflow
            </span>
          </h2>
          <p className="mt-6 text-[#627382] text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            Access premium AI tools, design assets, templates, and productivity
            software all in one place. Start creating faster today.
          </p>
          <div className="mt-7 flex gap-4 justify-center lg:justify-start">
            <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-4xl hover:bg-[#6a20d6] hover:scale-105 border-none px-4 py-3 font-semibold active:scale-95 transition-all cursor-pointer">
              Explore Products
            </button>
            <button className="bg-transparent text-[#9514FA] rounded-4xl border border-[#9514FA] shadow-none px-4 py-3 font-medium hover:bg-[#9514FA]/5 transition-all flex items-center hover:scale-105 active:scale-95 gap-2 cursor-pointer">
              <FaPlay className="text-xs" /> Watch Demo
            </button>
          </div>
        </div>
        <div className="flex-1 w-full max-w-lg lg:max-w-none">
          <img
            src={banner}
            alt="Banner"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
