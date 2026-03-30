import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Stats from './components/Stats'
import MainSection from './components/MainSection'
import Steps from './components/Steps'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState('products');
  const [addedIds, setAddedIds] = useState([]);

  useEffect(() => {
    fetch('./products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error loading products:", err));
  }, []);

  const handleAddToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      toast.info("Item already in cart!");
    } else {
      setCart([...cart, product]);
      setAddedIds([...addedIds, product.id]);
      toast.success("Added to cart successfully!");

      setTimeout(() => {
        setAddedIds(prev => prev.filter(id => id !== product.id));
      }, 2000);
    }
  };

  const handleRemove = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    toast.error("Removed from cart");
  };

  const handleCheckout = () => {
    if (cart.length === 0) return toast.warning("Cart is empty!");
    setCart([]);
    toast.success("Proceeding to checkout! Cart cleared.");
  };

  const totalCost = cart.reduce((total, item) => total + item.price, 0);

  const getTagStyles = (type) => {
    const styles = {
      warning: "bg-[#FFF9E5] text-[#FFB800]",
      secondary: "bg-[#F0EEFF] text-[#7F27FF]",
      success: "bg-[#E7F9EE] text-[#00C48C]",
      primary: "bg-[#EBF2FF] text-[#007AFF]",
      accent: "bg-[#F9EEFF] text-[#B800FF]",
      error: "bg-[#FFE9E9] text-[#FF4D4F]"
    };
    return styles[type] || "bg-gray-100 text-gray-600";
  };

  return (
    <div className="min-h-screen bg-white">
      <ToastContainer position="top-right" autoClose={1500} />

      {/* Navbar with smooth background blur on scroll */}
      <nav className="flex justify-between items-center text-center lg:text-left flex-wrap px-6 lg:px-20 py-4 sticky top-0 bg-white/80 backdrop-blur-md z-50 border-b transition-all duration-300">
        <h1 className="text-4xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</h1>
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
            <i className="fa-solid fa-cart-shopping text-xl text-gray-700"></i>
            <span className="absolute -top-2 -right-2 bg-[#7F27FF] text-white text-xs px-1.5 rounded-full animate-pulse">{cart.length}</span>
          </div>
          <button className="btn bg-[#7F27FF] text-white hover:bg-[#6a20d6] border-none rounded-4xl px-6 font-semibold transform hover:-translate-y-1 transition-transform">Login</button>
          <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-4xl hover:bg-[#6a20d6] hover:shadow-lg border-none px-6 py-3 font-semibold transition-all">Get Started</button>
        </div>
      </nav>

      {/* Banner with subtle pulse animation on the new feature badge */}
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
          <img src="./src/assets/banner.png" alt="Hero" className="w-full max-w-fit mx-auto" />
        </div>
      </header>

      {/* Stats - No hover needed for simplicity */}
      <div id="features" className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-12 px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 text-white text-center gap-6">
        <div><h3 className="text-5xl font-bold">50K+</h3><p className="opacity-80 text-lg font-light">Active Users</p></div>
        <div className="md:border-x border-white/20 px-4"><h3 className="text-5xl font-bold">200+</h3><p className="opacity-80 text-lg font-light">Premium Tools</p></div>
        <div><h3 className="text-5xl font-bold">4.9</h3><p className="opacity-80 text-lg font-light">Rating</p></div>
      </div>

      {/* Main Section - Added smooth transitions to tabs and product cards */}
      <section id="products" className="py-20 px-6 lg:px-20 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Premium Digital Tools</h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>

        <div className="mt-12 inline-flex bg-gray-100 p-1.5 rounded-4xl border overflow-hidden relative">
          <button
            onClick={() => setActiveTab('products')}
            className={`px-10 py-2.5 font-semibold transition-all duration-300 rounded-4xl relative z-10 ${activeTab === 'products' ? 'text-white' : 'text-gray-500'}`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab('cart')}
            className={`px-10 py-2.5 font-semibold transition-all duration-300 rounded-4xl relative z-10 ${activeTab === 'cart' ? 'text-white' : 'text-gray-500'}`}
          >
            Cart ({cart.length})
          </button>
          {/* Animated background highlighter */}
          <span
            className="absolute top-1.5 left-1.5 bottom-1.5 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-3xl shadow-md transition-all duration-300"
            style={{
              width: activeTab === 'products' ? 'calc(50% - 3px)' : 'calc(50% - 3px)',
              transform: activeTab === 'products' ? 'translateX(0)' : 'translateX(calc(100%))',
            }}
          />
        </div>

        <div className="mt-16">
          {activeTab === 'products' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map(p => (
                <div key={p.id} className="card bg-white border border-gray-100 p-8 rounded-3xl text-left transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl hover:border-purple-100">
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-purple-50 rounded-2xl group-hover:scale-110 transition-transform">
                      <img src={p.icon} className="w-10 h-10" alt="" />
                    </div>
                    <span className={`badge badge-sm rounded-3xl py-3 px-4 border-none font-bold text-[10px] uppercase transition-all duration-300 group-hover:scale-105 ${getTagStyles(p.tagType)}`}>
                      {p.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mt-4 text-gray-800 transition-colors group-hover:text-[#7F27FF]">{p.name}</h3>
                  <p className="text-[#627382] text-sm mt-4 h-12 overflow-hidden">{p.description}</p>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-gray-900">${p.price}</span>
                    <span className="text-gray-400 text-xs uppercase">/ {p.period}</span>
                  </div>
                  <div className="my-3 border-t border-dashed"></div>
                  <ul className="space-y-2 mb-5 grow">
                    {p.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <i className="fa-solid fa-check text-[#30B868] transition-transform duration-300 group-hover:scale-110"></i> {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleAddToCart(p)}
                    className={`btn w-full rounded-4xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-md border-none font-bold tracking-wide transition-all duration-300 ${addedIds.includes(p.id) ? 'bg-green-500 text-white' : 'bg-[#7F27FF] text-white hover:bg-[#6a20d6]'}`}
                  >
                    {addedIds.includes(p.id) ? (
                      <> <i className="fa-solid fa-circle-check mr-1.5"></i> Added to cart </>
                    ) : (
                      <>Buy Now</>
                    )}
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-4xl mx-auto bg-white border rounded-2xl p-6 lg:p-10 text-left transition-all duration-500 transform scale-100">
              <h3 className="text-2xl font-bold mb-6 text-black">Your Cart</h3>
              {cart.length === 0 ? (
                <div className="text-center py-20 text-gray-400 font-medium opacity-70">No products in cart. Start shopping!</div>
              ) : (
                <div className="space-y-6">
                  {cart.map(item => (
                    <div key={item.id} className="flex items-center justify-between p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-white transition-colors">
                      <div className="flex items-center gap-5">
                        <div className="p-3 bg-white rounded-xl shadow-sm border"><img src={item.icon} className="w-8" alt="" /></div>
                        <div>
                          <h4 className="font-bold text-gray-800">{item.name}</h4>
                          <p className="text-sm font-semibold text-gray-500">${item.price}</p>
                        </div>
                      </div>
                      <button onClick={() => handleRemove(item.id)} className="text-[#ff3980] cursor-pointer font-bold text-sm hover:underline transition-all hover:scale-105">Remove</button>
                    </div>
                  ))}
                  <div className="flex justify-between items-center pt-8 border-t-2 border-dashed">
                    <span className="text-[#627382] font-medium text-[16px]">Total:</span>
                    <span className="text-2xl font-bold text-gray-900">${totalCost}</span>
                  </div>
                  <button onClick={handleCheckout} className="btn rounded-4xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full text-white h-16 text-[16px] font-bold border-none mt-4 transform hover:scale-[1.02] transition-transform shadow-lg">Proceed To Checkout</button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Steps - Cards lift slightly on hover */}
      <section id="steps" className="bg-[#F9FAFC] py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Get Started In 3 Steps</h2>
          <p className="text-gray-500 mb-10">Start using premium digital tools in minutes, not hours.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {[
              { img: './src/assets/user.png', num: '01', title: 'Create Account', desc: 'Sign up for free in seconds. No credit card required to get started.' },
              { img: './src/assets/package.png', num: '02', title: 'Choose Products', desc: 'Browse our catalog and select the tools that fit your needs.' },
              { img: './src/assets/rocket.png', num: '03', title: 'Start Creating', desc: 'Download and start using your premium tools immediately.' }
            ].map((step, idx) => (
              <div key={idx} className="relative bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <span className="absolute top-4 right-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-xs font-bold p-2 rounded-full transition-transform duration-300 group-hover:scale-110">{step.num}</span>
                <div className="w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[#f0eeff]">
                  <img src={step.img} alt="" className="w-10 h-10 transition-transform duration-300 group-hover:rotate-12" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#7F27FF] transition-colors">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Interactive plans with hover lift and button scaling */}
      <section id="pricing" className="bg-gray-100 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-500">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center">
            {/* Starter Plan */}
            <div className="flex-1 flex flex-col bg-white p-8 rounded-3xl shadow-sm border border-gray-100 group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-purple-100">
              <div className="grow">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#7F27FF]">Starter</h3>
                <p className="text-gray-400 text-sm mb-6">Perfect for getting started</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">$0</span>
                  <span className="text-gray-400">/Month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-gray-600 transition-colors group-hover:text-gray-800"><span className="mr-2 text-green-500">✓</span> Access to 10 free tools</li>
                  <li className="flex items-center text-sm text-gray-600 transition-colors group-hover:text-gray-800"><span className="mr-2 text-green-500">✓</span> Basic templates</li>
                  <li className="flex items-center text-sm text-gray-600 transition-colors group-hover:text-gray-800"><span className="mr-2 text-green-500">✓</span> Community support</li>
                  <li className="flex items-center text-sm text-gray-600 transition-colors group-hover:text-gray-800"><span className="mr-2 text-green-500">✓</span> 1 project per month</li>
                </ul>
              </div>
              <button className="w-full cursor-pointer py-3 px-6 bg-linear-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-2xl transition-all hover:scale-105 hover:shadow-lg mt-4">Get Started Free</button>
            </div>

            {/* Pro Plan (Most Popular) */}
            <div className="relative flex-1 flex flex-col bg-linear-to-b from-[#8B5CF6] to-[#7C3AED] p-8 rounded-3xl shadow-xl text-white md:scale-105 z-10 group transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:brightness-110">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C6] text-[#BB4D00] text-xs font-bold px-4 py-1.5 rounded-full shadow-md animate-pulse">Most Popular</span>
              <div className="grow">
                <h3 className="text-2xl font-bold group-hover:text-yellow-100">Pro</h3>
                <p className="text-purple-200 text-sm mb-6">Best for professionals</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-purple-200">/Month</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm transition-colors"><span className="mr-2">✓</span> Access to all premium tools</li>
                  <li className="flex items-center text-sm transition-colors group-hover:text-white"><span className="mr-2">✓</span> Unlimited templates</li>
                  <li className="flex items-center text-sm transition-colors group-hover:text-white"><span className="mr-2">✓</span> Priority support</li>
                  <li className="flex items-center text-sm transition-colors group-hover:text-white"><span className="mr-2">✓</span> Unlimited projects</li>
                  <li className="flex items-center text-sm transition-colors group-hover:text-white"><span className="mr-2">✓</span> Cloud sync</li>
                  <li className="flex items-center text-sm transition-colors group-hover:text-white"><span className="mr-2">✓</span> Advanced analytics</li>
                </ul>
              </div>
              <button className="w-full cursor-pointer py-3 px-6 bg-white text-[#7C3AED] font-bold rounded-2xl transition-all hover:scale-105 hover:shadow-lg mt-4 group-hover:bg-purple-50">Start Pro Trial</button>
            </div>

            {/* Enterprise Plan */}
            <div className="flex-1 flex flex-col bg-white p-8 rounded-3xl shadow-sm border border-gray-100 group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-purple-100">
              <div className="grow">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#7F27FF]">Enterprise</h3>
                <p className="text-gray-400 text-sm mb-6">For teams and businesses</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-gray-900">$99</span>
                  <span className="text-gray-400">/Month</span>
                </div>
                <ul className="space-y-2 mb-10">
                  <li className="flex items-center text-sm text-gray-600 transition-colors group-hover:text-gray-800"><span className="mr-2 text-green-500">✓</span> Everything in Pro</li>
                  <li className="flex items-center text-sm text-gray-600 transition-colors group-hover:text-gray-800"><span className="mr-2 text-green-500">✓</span> Team collaboration</li>
                  <li className="flex items-center text-sm text-gray-600 transition-colors group-hover:text-gray-800"><span className="mr-2 text-green-500">✓</span> Custom integrations</li>
                  <li className="flex items-center text-sm text-gray-600 transition-colors group-hover:text-gray-800"><span className="mr-2 text-green-500">✓</span> Dedicated support</li>
                  <li className="flex items-center text-sm text-gray-600 transition-colors group-hover:text-gray-800"><span className="mr-2 text-green-500">✓</span> SLA guarantee</li>
                  <li className="flex items-center text-sm text-gray-600 transition-colors group-hover:text-gray-800"><span className="mr-2 text-green-500">✓</span> Custom branding</li>
                </ul>
              </div>
              <button className="w-full cursor-pointer py-3 px-6 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold rounded-2xl transition-all hover:scale-105 hover:shadow-lg mt-auto">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Simple hover and active button states */}
      <section id="testimonials" className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-20 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Ready To Transform Your Workflow?
          </h2>
          <p className="text-white text-sm md:text-base mb-10 max-w-2xl mx-auto leading-relaxed opacity-90">
            Join thousands of professionals who are already using Digitools to work smarter. <br className="hidden md:block" /> Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-5">
            <button className="cursor-pointer w-full sm:w-auto px-8 py-3 bg-white text-[#7C3AED] font-bold rounded-full transition-all hover:bg-gray-100 hover:scale-105 active:scale-95 shadow-lg">
              Explore Products
            </button>
            <button className="cursor-pointer w-full sm:w-auto px-8 py-3 border border-purple-300 text-white font-medium rounded-full transition-all hover:bg-white/10 hover:border-white active:scale-95">
              View Pricing
            </button>
          </div>
          <p className="text-gray-200 text-xs md:text-sm font-medium">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer - Social icon scale-up and link color transitions */}
      <footer id="faq" class="bg-[#0b1120] text-gray-400">

        <div class="max-w-7xl mx-auto px-6 pt-16 pb-10">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

            <div class="lg:col-span-1">
              <h2 class="text-white text-3xl font-bold mb-4">DigiTools</h2>
              <p class="text-sm leading-relaxed max-w-xs">
                Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
              </p>
            </div>

            <div>
              <h3 class="text-white font-semibold mb-5">Product</h3>
              <ul class="space-y-3 text-sm">
                <li><a href="#" class="hover:text-white transition">Features</a></li>
                <li><a href="#" class="hover:text-white transition">Pricing</a></li>
                <li><a href="#" class="hover:text-white transition">Templates</a></li>
                <li><a href="#" class="hover:text-white transition">Integrations</a></li>
              </ul>
            </div>

            <div>
              <h3 class="text-white font-semibold mb-5">Company</h3>
              <ul class="space-y-3 text-sm">
                <li><a href="#" class="hover:text-white transition">About</a></li>
                <li><a href="#" class="hover:text-white transition">Blog</a></li>
                <li><a href="#" class="hover:text-white transition">Careers</a></li>
                <li><a href="#" class="hover:text-white transition">Press</a></li>
              </ul>
            </div>

            <div>
              <h3 class="text-white font-semibold mb-5">Resources</h3>
              <ul class="space-y-3 text-sm">
                <li><a href="#" class="hover:text-white transition">Documentation</a></li>
                <li><a href="#" class="hover:text-white transition">Help Center</a></li>
                <li><a href="#" class="hover:text-white transition">Community</a></li>
                <li><a href="#" class="hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 class="text-white font-semibold mb-5">Social Links</h3>
              <div class="flex space-x-3">
                <a href="#" class="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#0b1120] hover:bg-gray-200 transition">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="#" class="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#0b1120] hover:bg-gray-200 transition">
                  <i class="fa-brands fa-facebook-f text-sm"></i>
                </a>
                <a href="#" class="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#0b1120] hover:bg-gray-200 transition">
                  <span class="font-bold text-xs">X</span>
                </a>
              </div>
            </div>
          </div>

          <div class="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>© 2026 Digitools. All rights reserved.</p>
            <div class="flex space-x-6 mt-4 md:mt-0">
              <a href="#" class="hover:text-white">Privacy Policy</a>
              <a href="#" class="hover:text-white">Terms of Service</a>
              <a href="#" class="hover:text-white">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App;