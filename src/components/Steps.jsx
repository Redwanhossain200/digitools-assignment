import userIcon from '../assets/user.png';
import packageIcon from '../assets/package.png';
import rocketIcon from '../assets/rocket.png';

const Steps = () => {
  return (
    <section id="steps" className="bg-[#F9FAFC] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-4">Get Started In 3 Steps</h2>
        <p className="text-gray-500 mb-10">Start using premium digital tools in minutes, not hours.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {[
            { img: userIcon, num: '01', title: 'Create Account', desc: 'Sign up for free in seconds. No credit card required to get started.' },
            { img: packageIcon, num: '02', title: 'Choose Products', desc: 'Browse our catalog and select the tools that fit your needs.' },
            { img: rocketIcon, num: '03', title: 'Start Creating', desc: 'Download and start using your premium tools immediately.' }
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
  );
};

export default Steps;