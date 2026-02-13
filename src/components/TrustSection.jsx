'use client';
import { useState, useEffect, useRef } from 'react';

const stats = [
  { label: "Clients Served", value: 25, suffix: "+", icon: "🏨" },
  { label: "AI Deployments", value: 50, suffix: "+", icon: "🧠" },
  { label: "Client Satisfaction", value: 4.9, suffix: "/5", icon: "⭐" },
  { label: "Support Availability", value: 24, suffix: "/7", icon: "🛠️" },
];

const Counter = ({ targetValue, duration = 2000, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      if (Number.isInteger(targetValue)) {
        setCount(Math.floor(progress * targetValue));
      } else {
        setCount((progress * targetValue).toFixed(1));
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [targetValue, duration, isVisible]);

  return <span>{count}</span>;
};

export default function SuccessMetrics() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Jab 30% section dikhega tab counting shuru hogi
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10 py-24 bg-[#020617] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading Section */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-bold tracking-[0.4em] text-xs mb-4 uppercase">
            NUXATECH SUCCESS
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
            Growing With Your Trust
          </h2>
        </div>

        {/* Stats Grid - Glassmorphism Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="relative group p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 overflow-hidden"
            >
              {/* Subtle Background Glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 blur-[50px] group-hover:bg-cyan-500/20 transition-all" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="text-4xl mb-6 bg-white/5 w-16 h-16 flex items-center justify-center rounded-2xl border border-white/10">
                  {stat.icon}
                </div>
                
                <div className="text-5xl font-black text-white mb-3 flex items-center tracking-tighter">
                  <Counter targetValue={stat.value} isVisible={isVisible} />
                  <span className="text-cyan-400">{stat.suffix}</span>
                </div>
                
                <p className="text-gray-400 font-bold text-xs tracking-widest uppercase">
                  {stat.label}
                </p>
              </div>

              {/* Bottom Decorative Line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-cyan-500 group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}