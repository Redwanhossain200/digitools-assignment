import { FaShoppingCart } from 'react-icons/fa';

const Navbar = ({ cart, setActiveTab }) => {
  return (
    <nav className="flex justify-between items-center text-center lg:text-left flex-wrap px-6 lg:px-20 py-4 sticky top-0 bg-white/80 backdrop-blur-md z-50 border-b transition-all duration-300">
      <h1 className="text-4xl font-bold bg-linear-to-r from-[#4F39F6] via-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent animate-gradient-text">DigiTools</h1>
      <div className="hidden md:flex gap-8 font-semibold text-gray-600">
        <a href="#products" className="text-[16px] relative group hover:text-[#7F27FF] transition-colors">
          Products
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7F27FF] transition-all group-hover:w-full"></span>
        </a>
        <a href="#features" className="text-[16px] relative group hover:text-[#7F27FF] transition-colors">
          Features
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7F27FF] transition-all group-hover:w-full"></span>
        </a>
        <a href="#pricing" className="text-[16px] relative group hover:text-[#7F27FF] transition-colors">
          Pricing
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7F27FF] transition-all group-hover:w-full"></span>
        </a>
        <a href="#testimonials" className="text-[16px] relative group hover:text-[#7F27FF] transition-colors">
          Testimonials
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7F27FF] transition-all group-hover:w-full"></span>
        </a>
        <a href="#faq" className="text-[16px] relative group hover:text-[#7F27FF] transition-colors">
          FAQ
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7F27FF] transition-all group-hover:w-full"></span>
        </a>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative cursor-pointer transition-transform hover:scale-110" onClick={() => setActiveTab('cart')}>
          <FaShoppingCart className="text-xl text-gray-700" />
          <span className="absolute -top-2 -right-2 bg-[#7F27FF] text-white text-xs px-1.5 rounded-full animate-pulse">{cart.length}</span>
        </div>
        <button className="btn bg-[#7F27FF] text-white hover:bg-[#6a20d6] border-none rounded-4xl px-6 font-semibold transform hover:-translate-y-1 transition-transform">Login</button>
        <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-4xl hover:bg-[#6a20d6] hover:shadow-lg border-none px-6 py-3 font-semibold transition-all">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;