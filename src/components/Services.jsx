import Image from 'next/image';

const services = [
  {
    title: "AI AUTOMATION",
    desc: "Intelligent AI solutions to streamline operations, enhance efficiency, and reduce costs. We automate repetitive tasks with smart agents.",
    bgImage: "/ai-automation-bg.png",
    border: "border-cyan-500/30",
    glow: "bg-cyan-500/10",
    btnColor: "bg-cyan-500 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]"
  },
  {
    title: "FULL STACK WEBSITE",
    desc: "End-to-end web development from stunning front-end designs to robust back-end systems, tailored for your business needs.",
    bgImage: "/fullstack-bg.png",
    border: "border-purple-500/30",
    glow: "bg-purple-500/10",
    btnColor: "bg-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]"
  }
];

export default function Services() {
  return (
    <section className="relative z-10 py-20 px-6 bg-[#020617] overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/5 blur-[100px] pointer-events-none" />

      {/* Heading Area */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight text-white">
          Empowering Businesses Online With <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            Result Oriented Development
          </span>
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
          Scale your hospitality business with our cutting-edge AI automation and full-stack web solutions.
        </p>
      </div>

      {/* Cards Grid - Controlled Width */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            // Height aur Padding yahan se fix hui hai
            className={`group relative h-[380px] md:h-[420px] rounded-[2.5rem] overflow-hidden border ${service.border} transition-all duration-500 hover:scale-[1.01]`}
          >
            {/* --- Faded Background Image --- */}
            <div className="absolute inset-0 z-0">
               <div className="absolute inset-0 bg-black/75 z-10 transition-colors duration-500 group-hover:bg-black/65" />
               <div 
                 className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-70"
                 style={{ backgroundImage: `url(${service.bgImage})` }}
               />
            </div>

            {/* --- Content Area --- */}
            <div className="relative z-20 h-full flex flex-col justify-end p-8 md:p-10">
              <h3 className="text-2xl md:text-4xl font-black text-white mb-4 italic tracking-tighter uppercase leading-none">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm md:text-base mb-8 max-w-sm leading-relaxed">
                {service.desc}
              </p>
              
              <button className={`w-fit ${service.btnColor} text-white px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 transform active:scale-95 shadow-lg`}>
                Let's Talk
              </button>
            </div>

            {/* Inner Border Glow */}
            <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-[2.5rem] transition-all pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
}