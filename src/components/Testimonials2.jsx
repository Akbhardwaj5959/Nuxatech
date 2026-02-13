'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Testimonials() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState(5);

  // --- 1. FRONTEND INTEGRATION CODE (Yahan dalo) ---
  const [reviewData, setReviewData] = useState({ name: '', role: '', message: '' });
  const [status, setStatus] = useState('');

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    setStatus('Posting...');

    try {
      const res = await fetch('/api/review', {
        method: 'POST',
        body: JSON.stringify({ ...reviewData, rating }),
        headers: { 'Content-Type': 'application/json' }
      });

      if (res.ok) {
        setStatus('Review Sent! Wait for Approval.');
        setTimeout(() => {
          setIsModalOpen(false);
          setReviewData({ name: '', role: '', message: '' }); // Reset form
          setStatus('');
        }, 2000);
      } else {
        setStatus('Error sending review.');
      }
    } catch (error) {
      setStatus('Server error.');
    }
  };

  return (
    <section className=" bg-[#020617] overflow-hidden relative">
      {/* ... (Infinite scroll code) ... */}

      <div className="mt-16 text-center">
       <button 
  onClick={() => setIsModalOpen(true)}
  className="group relative px-10 py-4 bg-white/5 border border-white/10 rounded-2xl font-black uppercase tracking-widest text-[10px] text-white hover:border-cyan-500 transition-all overflow-hidden"
>
  {/* Default Text - Hover par hide hoga */}
  <span className="relative z-10 block group-hover:opacity-0 group-hover:translate-y-[-20px] transition-all duration-300">
    Share Your Experience
  </span>

  {/* Hover Text - Niche se upar aayega */}
  <div className="absolute inset-0 flex items-center justify-center translate-y-[100%] group-hover:translate-y-0 bg-cyan-500 text-black transition-all duration-300">
    <span className="font-black">Write a Review ✍️</span>
  </div>
</button>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            <motion.div 
              initial={{ scale: 0.9, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.9, y: 20, opacity: 0 }}
              className="relative w-full max-w-lg bg-[#0a1125] border border-white/10 p-10 rounded-[3rem] shadow-2xl"
            >
              <button onClick={() => setIsModalOpen(false)} className="absolute top-8 right-8 text-gray-400 hover:text-white text-2xl">✕</button>

              <h3 className="text-3xl font-black italic text-white mb-2 uppercase tracking-tight">
                Drop a <span className="text-cyan-400">Review</span>
              </h3>
              <p className="text-gray-500 text-sm mb-8">Your feedback helps Nuxatech grow faster.</p>

              {/* --- 2. FORM TAG ME SUBMIT HANDLER LAGAO --- */}
              <form onSubmit={handleReviewSubmit} className="space-y-6">
                <div className="flex gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button key={star} type="button" onClick={() => setRating(star)}
                      className={`text-3xl transition-all ${star <= rating ? "text-cyan-400 scale-110" : "text-gray-700"}`}
                    >★</button>
                  ))}
                </div>

                <div className="space-y-4">
                  <input 
                    type="text" required placeholder="Your Name" 
                    value={reviewData.name}
                    onChange={(e) => setReviewData({...reviewData, name: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-400 transition-all text-white"
                  />
                  <input 
                    type="text" required placeholder="Your Role (e.g. CEO)" 
                    value={reviewData.role}
                    onChange={(e) => setReviewData({...reviewData, role: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-400 transition-all text-white"
                  />
                  <textarea 
                    rows="4" required placeholder="How was your experience?" 
                    value={reviewData.message}
                    onChange={(e) => setReviewData({...reviewData, message: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-400 transition-all text-white resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-cyan-500 text-black py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-cyan-400 transition-all"
                >
                  {status || "Post Review"}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}