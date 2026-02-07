'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "What exactly does Nuxatech do?",
    answer: "Nuxatech is a futuristic digital agency. We specialize in AI Automation (smart agents for repetitive tasks) and Full-Stack Web Development, specifically designed to scale hospitality and service-based businesses."
  },
  {
    question: "How can AI Automation help my business?",
    answer: "Our AI solutions can automate customer support, lead generation, and internal operations. This reduces human error, saves thousands of hours, and allows your business to operate 24/7 without extra overhead."
  },
  {
    question: "How long does it take to build a custom website?",
    answer: "A standard full-stack project typically takes 3 to 6 weeks, depending on complexity. We follow an agile process: Design -> Development -> AI Integration -> Launch."
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Yes, we don't just 'build and leave.' We provide dedicated maintenance, security updates, and performance monitoring to ensure your digital assets stay ahead of the competition."
  },
  {
    question: "Can you integrate AI into my existing website?",
    answer: "Absolutely. We can integrate custom AI chatbots, automated booking systems, or data analytics tools into your current platform without needing a complete rebuild."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 px-6 max-w-4xl mx-auto z-10">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase">
          Got <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Questions?</span>
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
          Everything you need to know about our AI solutions and development process.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4 relative z-20">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`relative overflow-hidden transition-all duration-500 rounded-[1.5rem] border backdrop-blur-xl ${
              openIndex === index 
                ? 'bg-white/[0.05] border-cyan-500/40 shadow-[0_0_30px_-10px_rgba(34,211,238,0.2)]' 
                : 'bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04]'
            }`}
          >
            {/* Question Header */}
            <button 
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-6 md:p-8 text-left focus:outline-none"
            >
              <span className={`font-bold text-base md:text-xl transition-all duration-300 ${openIndex === index ? 'text-cyan-400' : 'text-white'}`}>
                {faq.question}
              </span>
              
              {/* Animated Icon */}
              <div className={`flex items-center justify-center w-10 h-10 rounded-xl border transition-all duration-500 ${
                openIndex === index 
                  ? 'bg-cyan-500 text-black border-cyan-500 rotate-180' 
                  : 'bg-white/5 text-cyan-400 border-white/10 group-hover:border-cyan-500/50'
              }`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </button>

            {/* Answer Body */}
            <div 
              className={`grid transition-all duration-500 ease-in-out ${
                openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 md:px-8 pb-8">
                   <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 via-transparent to-transparent mb-6" />
                   <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}