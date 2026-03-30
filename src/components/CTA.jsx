const CTA = () => {
  return (
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
  );
};

export default CTA;