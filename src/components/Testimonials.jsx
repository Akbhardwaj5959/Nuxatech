'use client';
import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: "Rajesh Kumar",
    role: "Hotel Owner",
    text: "Nuxatech ne hamare booking process ko AI se automate kiya, jisse hamara manual work 70% kam ho gaya. Truly futuristic!",
    stars: 5,
    img: "https://i.pravatar.cc/150?u=1"
  },
  {
    name: "Sneha Kapoor",
    role: "Tech Startup Founder",
    text: "Next.js development ki speed aur design quality amazing hai. Nuxatech team is highly professional and reliable.",
    stars: 5,
    img: "https://i.pravatar.cc/150?u=2"
  },
  {
    name: "Amit Sharma",
    role: "Digital Marketer",
    text: "Unki SEO strategies se hamari organic traffic 3 months mein double ho gayi. Highly recommended for growth.",
    stars: 4.9,
    img: "https://i.pravatar.cc/150?u=3"
  },
  {
    name: "Vikram Singh",
    role: "Operations Manager",
    text: "AI agents jo inhone deploy kiye hain wo guest queries ko insaano se bhi behtar handle kar rahe hain.",
    stars: 5,
    img: "https://i.pravatar.cc/150?u=4"
  }
];

// Double the array for seamless infinite scroll
const scrollingReviews = [...reviews, ...reviews];

export default function Testimonials() {
  return (
    <section className="py-10 bg-[#020617] overflow-hidden relative">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <p className="text-cyan-400 font-mono tracking-[0.4em] text-[10px] uppercase mb-4">
            Client Success Stories
          </p>
          <h2 className="text-4xl md:text-6xl font-black italic text-white uppercase tracking-tighter">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Clients Say</span>
          </h2>
        </div>

        {/* --- INFINITE SCROLL CONTAINER --- */}
        <div className="relative flex overflow-hidden py-10">
          <motion.div 
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            // PAUSE ON HOVER LOGIC
            whileHover={{ transition: { duration: 0 } }} 
            style={{ display: 'flex' }}
          >
            {scrollingReviews.map((review, index) => (
              <div 
                key={index} 
                className="w-[350px] md:w-[450px] bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] flex flex-col justify-between hover:border-cyan-500/40 transition-all group shrink-0"
              >
                <div className="mb-6">
                  {/* Stars Section */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.floor(review.stars) ? "text-cyan-400" : "text-gray-600"}>
                        ★
                      </span>
                    ))}
                    <span className="text-xs text-gray-400 ml-2 mt-1">{review.stars}</span>
                  </div>
                  
                  <p className="text-gray-300 text-sm md:text-base italic leading-relaxed whitespace-normal">
                    "{review.text}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-500/30">
                    <img src={review.img} alt={review.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-sm uppercase tracking-tight">{review.name}</h4>
                    <p className="text-cyan-400/70 text-[10px] font-bold uppercase tracking-widest">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Faded Edges for a Professional Look */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-20" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-20" />
        </div>
      </div>
    </section>
  );
}