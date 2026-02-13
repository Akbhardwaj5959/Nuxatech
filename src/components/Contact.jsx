'use client';

import React, { useState } from 'react';

export default function Contact() {
  // Logic to handle form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'AI Automation',
    message: ''
  });

  const [status, setStatus] = useState('');

  // Logic to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          pkg: formData.service, // backend 'pkg' expect kar raha hai
          message: formData.message
        }),
      });

      if (res.ok) {
        setStatus('Message Sent Successfully!');
        setFormData({ name: '', email: '', phone: '', service: 'AI Automation', message: '' });
      } else {
        setStatus('Failed to send.');
      }
    } catch (error) {
      setStatus('Error occurred.');
    }
  };

  return (
    <main className="min-h-screen bg-[#020617] text-white pt-32 pb-20 px-6 overflow-hidden relative">
      
      {/* --- BACKGROUND GLOWS --- */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em] mb-8">
            Get In Touch
          </div>
          <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase mb-6 leading-none">
            Let's build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Something Great</span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-lg font-medium">
            Have a project in mind? Reach out to Nuxatech for AI automation and high-performance web solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* --- LEFT: CONTACT INFO --- */}
          <div className="lg:col-span-5 space-y-10">
            <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-xl">
              <h3 className="text-3xl font-black italic mb-8 uppercase tracking-tight">Contact Details</h3>
              
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                    📧
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-1">Email Us</h4>
                    <p className="text-gray-400 text-lg">akbhardwaj973@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-1">Office Location</h4>
                    <p className="text-gray-400 text-lg">Gurgaon, Haryana, India</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-pink-500/20 flex items-center justify-center text-pink-400 flex-shrink-0">
                    🌍
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-1">Social Presence</h4>
                    <p className="text-gray-400 text-lg">Nuxatech Official</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle CTA Card */}
            <div className="p-10 rounded-[3rem] bg-gradient-to-br from-cyan-500 to-blue-600 text-black">
              <h4 className="text-2xl font-black italic mb-4 uppercase">Direct Support?</h4>
              <p className="font-bold mb-6 opacity-80 text-sm">Our AI experts are available 24/7 to help you with your queries.</p>
              <button className="bg-black text-white px-8 py-3 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all">
                Chat with AI
              </button>
            </div>
          </div>

          {/* --- RIGHT: CONTACT FORM --- */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 p-10 md:p-16 rounded-[3.5rem] backdrop-blur-2xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-2">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-500 transition-all text-white" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-2">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="john@example.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-500 transition-all text-white" 
                  />
                </div>
              </div>

              {/* NAYA FIELD: Contact Number */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-2">Contact Number</label>
                <input 
                  type="tel" 
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="+91 98765 43210" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-500 transition-all text-white" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-2">Service Interested In</label>
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full bg-[#0a1125] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-500 transition-all text-white appearance-none"
                >
                  <option>AI Automation</option>
                  <option>Full Stack Web Dev</option>
                  <option>SEO Optimization</option>
                  <option>Branding & Design</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-2">Your Message</label>
                <textarea 
                  rows="5" 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us about your project..." 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-500 transition-all text-white resize-none"
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-white text-black py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-xs hover:bg-cyan-400 transition-all shadow-2xl active:scale-95">
                {status || "Send Message to Nuxatech"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}