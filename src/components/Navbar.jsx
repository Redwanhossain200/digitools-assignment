import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ cart, setActiveTab, isMenuOpen, setIsMenuOpen }) => {

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 bg-white/80 backdrop-blur-md z-100 border-b transition-all duration-300 border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-4 flex justify-between items-center">

        <h1 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-[#4F39F6] via-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent animate-gradient-text shrink-0">
          DigiTools
        </h1>

        <ul className="hidden lg:flex gap-4 xl:gap-6 font-semibold text-gray-600 list-none">
          <li>
            <a href="#products" className="text-[16px] relative group hover:text-[#7F27FF] transition-colors whitespace-nowrap">
              Products
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7F27FF] transition-all group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="#features" className="text-[16px] relative group hover:text-[#7F27FF] transition-colors whitespace-nowrap">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7F27FF] transition-all group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="#steps" className="text-[16px] relative group hover:text-[#7F27FF] transition-colors whitespace-nowrap">
              Steps
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7F27FF] transition-all group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="#pricing" className="text-[16px] relative group hover:text-[#7F27FF] transition-colors whitespace-nowrap">
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7F27FF] transition-all group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="#faq" className="text-[16px] relative group hover:text-[#7F27FF] transition-colors whitespace-nowrap">
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7F27FF] transition-all group-hover:w-full"></span>
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-2 md:gap-4 shrink-0">
          <div className="relative cursor-pointer transition-transform hover:scale-110 p-2"
            onClick={() => { setActiveTab('cart'); setIsMenuOpen(false); }}>
            <FaShoppingCart className="text-xl text-gray-700" />
            <span className="absolute top-0 right-0 bg-[#7F27FF] text-white text-[10px] min-w-4.5 h-4.5 flex items-center justify-center rounded-full animate-pulse px-1">
              {cart.length}
            </span>
          </div>

          <button className="hidden sm:block btn bg-[#7F27FF] text-white hover:bg-[#6a20d6] border-none rounded-full px-4 md:px-6 font-semibold cursor-pointer">
            Login
          </button>

          <button className="hidden sm:block btn bg-[#7F27FF] text-white hover:bg-[#6a20d6] border-none rounded-full px-4 md:px-6 font-semibold cursor-pointer">
            Get Started
          </button>

          <button
            className="sm:hidden p-2 text-2xl text-gray-700 cursor-pointer hover:text-[#7F27FF] transition-all duration-300 focus:outline-none flex items-center justify-center"
            onClick={toggleMenu}
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              <span className={`absolute transition-all duration-300 transform ${isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}>
                <FaBars />
              </span>
              <span className={`absolute transition-all duration-300 transform ${isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`}>
                <FaTimes />
              </span>
            </div>
          </button>
        </div>
      </div>

      <div className={`absolute top-full left-0 w-full bg-white border-b sm:hidden shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-125 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="flex flex-col p-6 gap-4 font-semibold text-gray-600 list-none">
          <li><a href="#products" onClick={() => setIsMenuOpen(false)} className="block hover:text-[#7F27FF]">Products</a></li>
          <li><a href="#features" onClick={() => setIsMenuOpen(false)} className="block hover:text-[#7F27FF]">Features</a></li>
          <li><a href="#steps" onClick={() => setIsMenuOpen(false)} className="block hover:text-[#7F27FF]">Steps</a></li>
          <li><a href="#pricing" onClick={() => setIsMenuOpen(false)} className="block hover:text-[#7F27FF]">Pricing</a></li>
          <li><a href="#faq" onClick={() => setIsMenuOpen(false)} className="block hover:text-[#7F27FF]">FAQ</a></li>
          <li className="pt-2 flex flex-col gap-3">
            <button className="w-full border-none btn bg-[#7F27FF] text-white rounded-full py-3 cursor-pointer">Login</button>
            <button className="w-full border-none btn bg-[#7F27FF] text-white rounded-full py-3 cursor-pointer">Get Started</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;