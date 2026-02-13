import Link from 'next/link';
import React from 'react';

const services = [
  {
    title: "AI Automation",
    desc: "We build smart AI agents that handle your repetitive tasks, from customer support to data entry, letting you focus on scaling your business.",
    icon: "🤖",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]",
    borderColor: "border-cyan-500/20",
  },
  {
    title: "Mobile App Development",
    desc: "We build robust, scalable web applications using modern technologies like React, Node.js, and cloud infrastructure, ensuring high performance and security.",
    icon: "�",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(236,72,153,0.4)]",
    borderColor: "border-pink-500/20",
  },
  {
    title: "Full Stack Development",
    desc: "We build robust, scalable web applications using modern technologies like React, Node.js, and cloud infrastructure, ensuring high performance and security.",
    icon: "📢",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(236,72,153,0.4)]",
    borderColor: "border-pink-500/20",
  }

];

export default function PopularServices() {
  return (
    <section className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-mono tracking-[0.3em] text-xs mb-4 uppercase">
            OUR COMPANY DIGITAL SERVICES
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            Our Most Popular <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span> 💡
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed">
            Our service range fits together cohesively, so we can provide end-to-end service, from Startup to Scaleup.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] border ${service.borderColor} transition-all duration-500 ${service.glowColor} hover:-translate-y-3 overflow-hidden`}
            >
              {/* Inner Glow Effect */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 blur-3xl rounded-full transition-all group-hover:bg-white/10" />

              <div className="text-5xl mb-8 transform group-hover:scale-110 transition-transform duration-300 inline-block">
                {service.icon}
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-relaxed text-sm md:text-base mb-8">
                {service.desc}
              </p>

              {/* Action Button/Link Style */}
              <Link href="/services">
                <div className="flex items-center text-cyan-400 font-bold text-sm tracking-widest uppercase cursor-pointer group/link">
                  Learn More
                  <span className="ml-2 transform group-hover/link:translate-x-2 transition-transform">→</span>
                </div>

              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}