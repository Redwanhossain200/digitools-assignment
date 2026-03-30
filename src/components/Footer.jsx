const Footer = () => {
  return (
    <footer id="faq" className="bg-[#0b1120] text-gray-400 pt-16 text-center lg:text-left">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-white text-3xl font-bold mb-4">DigiTools</h2>
            <p className="text-sm leading-relaxed max-w-xs">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">Product</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition">Features</a></li>
              <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition">Templates</a></li>
              <li><a href="#" className="hover:text-white transition">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Press</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition">Community</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">Social Links</h3>
            <div className="flex space-x-3">
              <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#0b1120] hover:bg-gray-200 transition">
                <i className="fa-brands fa-instagram"></i>
              </button>
              <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#0b1120] hover:bg-gray-200 transition">
                <i className="fa-brands fa-facebook-f text-sm"></i>
              </button>
              <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#0b1120] hover:bg-gray-200 transition">
                <i className="fa-brands fa-twitter text-sm"></i>
              </button>
              <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#0b1120] hover:bg-gray-200 transition">
                <span className="font-bold text-xs">X</span>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2026 Digitools. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;