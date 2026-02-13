import Link from 'next/link';
import React from 'react';

const techStack = [
  { name: "Next.js/ React.js", icon: "🌐", desc: "Fast & SEO friendly websites." },
  { name: "Tailwind CSS", icon: "🎨", desc: "Premium & Modern UI designs." },
  { name: "Python / FastAPI", icon: "🐍", desc: "Powerful AI & Backend logic." },
  { name: "OpenAI / LLMs", icon: "🤖", desc: "Smart AI agents for automation." },
  { name: "MERN Stack", icon: "📱", desc: "High-performance mobile apps." },
  { name: "MongoDB/ MySQL/ PostgreSQL", icon: "💾", desc: "Scalable & Secure data storage." },
];

const benefits = [
  { title: "AI-Driven Efficiency", desc: "Hum repetitive tasks ko automate karte hain taaki aapka time bache." },
  { title: "Scalable Solutions", desc: "Aapka business grow karega, toh hamari tech bhi usi speed se scale hogi." },
  { title: "24/7 Expert Support", desc: "Hum hamesha aapke saath hain, maintainance se lekar updates tak." },
];

export default function TechStack() {
  return (
    <section className="py-20 bg-[#020617] relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/10 blur-[120px] -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Tech Stack Grid */}
          <div>
            <p className="text-cyan-400 font-mono tracking-[0.3em] text-xs mb-4 uppercase">
              OUR POWERFUL STACK
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
              Technologies We Use to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Shape Your Future
              </span>
            </h2>
            
            <div className="grid grid-cols-2 gap-4">
              {techStack.map((tech, index) => (
                <div key={index} className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="text-3xl mb-3">{tech.icon}</div>
                  <h4 className="text-white font-bold mb-1">{tech.name}</h4>
                  <p className="text-gray-400 text-xs">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Benefits Section */}
          <div className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] border border-white/10">
            <h3 className="text-3xl font-bold text-white mb-8">
              Why Choose <span className="text-cyan-400">Nuxatech?</span>
            </h3>
            
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0 font-bold">
                    0{index + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{benefit.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/contact">
            <button className="mt-12 w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-2xl font-black tracking-widest uppercase hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all">
              Build My Project With Nuxatech
            </button>
            
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}