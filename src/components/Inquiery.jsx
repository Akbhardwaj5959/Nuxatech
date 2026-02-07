'use client';
import { useState } from 'react';
import { Send, Smartphone } from 'lucide-react';

export default function InquiryForm({ selectedPkg, setSelectedPkg, formRef }) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  // Manual Selection Handler
  const handleManualSelect = (e) => {
    setSelectedPkg(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('Sending...');

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      pkg: selectedPkg,
      message: e.target.message.value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('Success! Check your email.');
        e.target.reset();
        setSelectedPkg(""); // Reset selection after success
      } else {
        setStatus('Error sending message.');
      }
    } catch (err) {
      setStatus('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section ref={formRef} className="bg-[#020617] pb-24 px-6 relative">
      <div className="max-w-4xl mx-auto relative">
        {/* Futuristic Background Glow */}
        <div className="absolute inset-0 bg-cyan-500/5 blur-[120px] pointer-events-none" />
        
        <div className="relative bg-white/[0.03] border border-white/10 backdrop-blur-3xl p-8 md:p-16 rounded-[3rem] shadow-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">
              Start Your <span className="text-cyan-400">Project</span>
            </h2>
            <p className="text-gray-400 text-sm mt-2 font-medium uppercase tracking-widest">
              Nuxatech Innovation Hub
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Name Field */}
            <div className="space-y-3">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
              <input required name="name" type="text" placeholder="Ajay Bhardwaj" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-cyan-500 outline-none transition-all" />
            </div>

            {/* Email Field */}
            <div className="space-y-3">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
              <input required name="email" type="email" placeholder="akbhardwaj973@gmail.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-cyan-500 outline-none transition-all" />
            </div>

            {/* Phone Number Field - New */}
            <div className="space-y-3">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 flex items-center gap-1">
                <Smartphone className="w-3 h-3" /> Phone Number
              </label>
              <input required name="phone" type="tel" placeholder="+91 00000 00000" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-cyan-500 outline-none transition-all" />
            </div>

            {/* Package Selection - Manual & Auto Sync */}
            <div className="space-y-3">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Package Selection</label>
              <select 
                required
                name="package"
                value={selectedPkg}
                onChange={handleManualSelect}
                className="w-full bg-[#0a0f1e] border border-white/10 rounded-2xl px-6 py-4 text-cyan-400 font-bold outline-none appearance-none cursor-pointer focus:border-cyan-500"
              >
                <option value="" className="text-gray-500">Choose a package</option>
                <option value="Web Basic">Web Basic (₹25k - ₹30k)</option>
                <option value="AI & Web Starter">AI & Web Starter (₹45k - ₹55k)</option>
                <option value="Enterprise AI">Enterprise AI (₹70k - ₹1.5L+)</option>
              </select>
            </div>

            {/* Project Details */}
            <div className="space-y-3 md:col-span-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Project Details</label>
              <textarea required name="message" rows="5" placeholder="Tell us about your business goals..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-cyan-500 outline-none transition-all resize-none"></textarea>
            </div>
            
            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={loading}
              className="md:col-span-2 flex items-center justify-center gap-4 w-full py-5 bg-cyan-500 hover:bg-cyan-400 text-black font-black uppercase tracking-[0.25em] text-xs rounded-2xl transition-all shadow-xl shadow-cyan-500/20 active:scale-[0.98] disabled:opacity-50"
            >
              {loading ? 'Processing...' : 'Submit Inquiry'} <Send className="w-4 h-4" />
            </button>

            {status && (
              <div className="md:col-span-2 text-center p-4 rounded-xl bg-white/5 border border-white/10 animate-fade-in">
                <p className={`text-xs font-black uppercase tracking-widest ${status.includes('Success') ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {status}
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}