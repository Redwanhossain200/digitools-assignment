import { FaCheck, FaCheckCircle } from 'react-icons/fa';

const MainSection = ({ products, cart, activeTab, addedIds, setActiveTab, handleAddToCart, handleRemove, handleCheckout, totalCost, getTagStyles }) => {
  return (
    <section id="products" className="py-16 px-4 lg:px-12 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900">Premium Digital Tools</h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
        </p>

        <div className="mt-12 inline-flex bg-gray-100 p-1.5 rounded-4xl border overflow-hidden relative">
          <button
            onClick={() => setActiveTab('products')}
            className={`px-10 py-2.5 font-semibold transition-all cursor-pointer duration-300 rounded-4xl relative z-10 ${activeTab === 'products' ? 'text-white' : 'text-gray-500'}`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab('cart')}
            className={`px-10 py-2.5 font-semibold transition-all cursor-pointer duration-300 rounded-4xl relative z-10 ${activeTab === 'cart' ? 'text-white' : 'text-gray-500'}`}
          >
            Cart ({cart.length})
          </button>
          <span
            className="absolute top-1.5 left-1.5 bottom-1.5 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-3xl shadow-md transition-all duration-300"
            style={{
              width: 'calc(50% - 3px)',
              transform: activeTab === 'products' ? 'translateX(0)' : 'translateX(calc(100%))',
            }}
          />
        </div>

        {activeTab === 'products' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 bg-[#F9FAFC] p-6 rounded-3xl">
            {products.map((product) => (
              <div key={product.id} className="bg-white border-2 border-gray-100 p-8 rounded-3xl flex flex-col text-left transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group relative">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 bg-gray-50 rounded-2xl group-hover:bg-[#f0eeff] transition-colors">
                    <img src={product.icon} alt="" className="w-10 h-10" />
                  </div>
                  <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase ${getTagStyles(product.tagType)}`}>
                    {product.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#7F27FF] transition-colors">{product.name}</h3>
                <p className="text-gray-500 mt-3 text-sm leading-relaxed grow">{product.description}</p>

                <div className="mt-6 mb-6">
                  <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                  <span className="text-gray-400 text-sm uppercase">/{product.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <FaCheck className="text-[#7F27FF] mr-3 text-xs" /> {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={addedIds.includes(product.id)}
                  className={`btn w-full rounded-4xl py-4 h-auto font-bold border-none transition-all cursor-pointer ${addedIds.includes(product.id)
                    ? "bg-green-100 text-green-600 cursor-not-allowed"
                    : "bg-gray-100 text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:from-[#7F27FF] hover:to-[#7F27FF] hover:shadow-lg hover:-translate-y-1"
                    }`}
                >
                  {addedIds.includes(product.id) ? (
                    <span className="flex items-center gap-2"><FaCheckCircle /> Added To Cart</span>
                  ) : "Buy Now"}
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'cart' && (
          <div className="mt-16 max-w-6xl mx-auto">
            <div className="bg-white border-2 border-gray-100 p-8 rounded-3xl shadow-sm text-left">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Your Cart</h3>

              {cart.length === 0 ? (
                <div className="p-10 rounded-2xl text-center">
                  <p className="text-gray-400 text-lg">Your cart is empty!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl transition-colors border border-gray-50">
                      <div className="flex items-center gap-5">
                        <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                          <img src={item.icon} className="w-8" alt="" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800">{item.name}</h4>
                          <p className="text-sm font-semibold text-gray-500">${item.price}</p>
                        </div>
                      </div>
                      <button onClick={() => handleRemove(item.id)} className="text-[#FF3980] cursor-pointer font-bold text-sm hover:underline transition-all hover:scale-105">Remove</button>
                    </div>
                  ))}

                  <div className="flex justify-between items-center pt-8 border-t border-gray-100 mt-6">
                    <span className="text-[#627382] font-medium text-[16px]">Total:</span>
                    <span className="text-2xl font-bold text-gray-900">${totalCost}</span>
                  </div>

                  <button onClick={handleCheckout} className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full text-white h-14 text-[16px] font-bold border-none mt-4 transform hover:scale-[1.01] transition-transform shadow-lg cursor-pointer">
                    Proceed To Checkout
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MainSection;