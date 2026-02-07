const values = [
  {
    title: "Innovation First",
    desc: "We don't follow trends; we set them using the latest AI frameworks and tech stacks.",
    icon: "🚀",
    color: "from-cyan-500/20 to-blue-500/20",
    border: "group-hover:border-cyan-500/50"
  },
  {
    title: "Reliability",
    desc: "Built on robust architecture, our solutions ensure your business stays online and efficient 24/7.",
    icon: "🛡️",
    color: "from-purple-500/20 to-pink-500/20",
    border: "group-hover:border-purple-500/50"
  },
  {
    title: "User-Centric",
    desc: "Every line of code we write is focused on providing the best experience for your end users.",
    icon: "👥",
    color: "from-emerald-500/20 to-teal-500/20",
    border: "group-hover:border-emerald-500/50"
  }
];

export default function WhyChoseUs() {
  return (
    <section className="relative py-24 px-6 bg-[#020617]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
              Our Core <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Philosophy
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Nuxatech is built on the foundation of excellence and future-ready thinking.
            </p>
          </div>
          <div className="hidden md:block h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent mx-10 mb-4" />
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Decorative Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]`} />
              
              <div className="relative z-10">
                <div className="text-4xl mb-6 bg-white/5 w-16 h-16 flex items-center justify-center rounded-2xl border border-white/10 group-hover:scale-110 transition-transform duration-500">
                  {value.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {value.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>

              {/* Bottom Border Glow */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/0 to-transparent group-hover:via-cyan-500/50 transition-all duration-700`} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}