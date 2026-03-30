import React from 'react';

const MainSection = ({ products, cart, activeTab, addedIds, setActiveTab, handleAddToCart, handleRemove, handleCheckout, totalCost, getTagStyles }) => {
  return (
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
  );
};

export default MainSection;