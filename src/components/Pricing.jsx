const Pricing = () => {
  return (
    <section id="pricing" className="bg-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-500">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center">
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
  );
};

export default Pricing;