'use client';
import { Check, Globe, Cpu, Zap } from 'lucide-react';

const packages = [
  {
    name: "Web Basic",
    price: "₹25k - ₹30k",
    maintenance: "₹5,000 - ₹7,000",
    features: ["4-5 High-Performance Pages", "Fully Responsive Design", "Basic SEO Setup", "Contact Form Integration", "Speed Optimization"],
    color: "border-emerald-500/30",
    glow: "group-hover:border-emerald-500/60 shadow-emerald-500/10",
    icon: <Globe className="w-6 h-6 text-emerald-400" />
  },
  {
    name: "AI & Web Starter",
    price: "₹45k - ₹55k",
    maintenance: "₹7,000 - ₹10,000",
    features: ["Custom Full-Stack Website", "AI Chatbot Integration", "Automated Booking System", "Advanced SEO Optimization", "WhatsApp API Integration"],
    color: "border-cyan-500/30",
    popular: true,
    glow: "group-hover:border-cyan-500/60 shadow-cyan-500/10",
    icon: <Zap className="w-6 h-6 text-cyan-400" />
  },
  {
    name: "Enterprise AI",
    price: "₹70k - ₹1.5L+",
    maintenance: "₹10,000+",
    features: ["Enterprise Grade Web App", "Custom AI Training", "CRM & ERP Automation", "Admin Dashboard & Analytics", "Priority Technical Support"],
    color: "border-purple-500/40",
    glow: "group-hover:border-purple-500/60 shadow-purple-500/10",
    icon: <Cpu className="w-6 h-6 text-purple-400" />
  }
];

export default function ServicePricing({ onSelect }) {
  return (
    <section className="bg-[#020617] py-20 px-6 pt-50 overflow-hidden">

      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-cyan-400 font-bold tracking-[0.2em] text-[10px] uppercase bg-cyan-400/10 px-4 py-2 rounded-full border border-cyan-400/20">
            Pricing Plans
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white mt-6 uppercase tracking-tighter">
            Flexible <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400">Packages</span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-sm md:text-base">
            Choose the right plan for your Nuxatech project. From simple sites to complex AI systems.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {packages.map((pkg, idx) => (
            <div 
              key={idx} 
              className={`group relative p-8 rounded-[2.5rem] border bg-white/[0.02] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 ${pkg.color} ${pkg.glow}`}
            >
              <div className="mb-6 bg-white/5 w-14 h-14 flex items-center justify-center rounded-2xl border border-white/10 group-hover:scale-110 transition-all">{pkg.icon}</div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">{pkg.name}</h3>
              <p className="text-white text-3xl font-black tracking-tighter mb-4">{pkg.price}</p>
              <div className="mb-6 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <p className="text-[10px] text-cyan-400 uppercase tracking-widest font-bold">Maintenance: {pkg.maintenance}/mo</p>
              </div>
              <ul className="space-y-4 mb-10">
                {pkg.features.map(f => (
                  <li key={f} className="flex items-start gap-3 text-gray-400 text-sm group-hover:text-gray-200 transition-colors">
                    <Check className="w-4 h-4 text-cyan-400 mt-0.5" strokeWidth={3} /> {f}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => onSelect(pkg.name)}
                className="w-full py-4 rounded-xl bg-white text-black font-black text-[11px] uppercase tracking-[0.2em] hover:bg-cyan-400 transition-all shadow-xl active:scale-95"
              >
                Choose {pkg.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}