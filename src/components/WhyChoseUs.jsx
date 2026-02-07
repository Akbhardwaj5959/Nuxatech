const values = [
  {
    title: "Innovation First",
    desc: "We don't follow trends; we set them using the latest AI frameworks and tech stacks.",
    icon: "🚀",
    color: "from-cyan-500/20 to-blue-500/20",
    border: "group-hover:border-cyan-500/50 shadow-cyan-500/10"
  },
  {
    title: "Reliability",
    desc: "Built on robust architecture, our solutions ensure your business stays online and efficient 24/7.",
    icon: "🛡️",
    color: "from-purple-500/20 to-pink-500/20",
    border: "group-hover:border-purple-500/50 shadow-purple-500/10"
  },
  {
    title: "User-Centric",
    desc: "Every line of code we write is focused on providing the best experience for your end users.",
    icon: "👥",
    color: "from-emerald-500/20 to-teal-500/20",
    border: "group-hover:border-emerald-500/50 shadow-emerald-500/10"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 md:py-2 px-6 bg-[#020617] overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-500/5 blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading - Better Mobile Alignment */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-16 md:mb-24 gap-8 text-center lg:text-left">
          <div className="max-w-2xl">
            <span className="text-cyan-400 font-bold tracking-widest text-[10px] uppercase bg-cyan-400/10 px-4 py-2 rounded-full border border-cyan-400/20">
              Our Values
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white mt-6 uppercase tracking-tighter leading-none">
              Our Core <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Philosophy
              </span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg mt-6 max-w-xl">
              Nuxatech is built on the foundation of excellence, reliability, and future-ready thinking for your brand.
            </p>
          </div>
          <div className="hidden lg:block h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent mx-10 mb-6" />
        </div>

        {/* Values Grid - Responsive Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group relative p-8 md:p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 shadow-2xl overflow-hidden"
            >
              {/* Decorative Glow - Interactive */}
              <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]`} />
              
              <div className="relative z-10">
                {/* Icon Container - Sleeker Look */}
                <div className="text-4xl mb-8 bg-white/5 w-20 h-20 flex items-center justify-center rounded-[1.5rem] border border-white/10 group-hover:border-white/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                  {value.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {value.title}
                </h3>
                
                <p className="text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {value.desc}
                </p>
              </div>

              {/* Bottom Border Glow - Animates on Hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/0 to-transparent group-hover:via-cyan-400 transition-all duration-700" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}