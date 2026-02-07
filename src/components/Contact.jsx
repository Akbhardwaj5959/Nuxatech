'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function ContactPage() {
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: 'Sector 57',
    checkIn: '',
    checkOut: '',
    message: ''
  });

  const [status, setStatus] = useState(''); // Loading/Success Message

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.status === 200) {
        setStatus('Success');
        alert("Booking request sent! Check your email.");
        setFormData({ name: '', phone: '', email: '', location: 'Sector 57', checkIn: '', checkOut: '', message: '' }); // Form Reset
      } else {
        setStatus('Error');
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus('Error');
    }
  };

  return (
    <main className="min-h-screen bg-primary-black">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image
          src="/views/hall.jpg" 
          alt="Contact Us"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center px-4 mt-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4 drop-shadow-xl">
            BOOK YOUR <span className="text-gold">STAY</span>
          </h1>
          <p className="text-gray-200 tracking-widest uppercase text-xs md:text-sm font-light">
            We are here to help you plan your getaway
          </p>
        </div>
      </section>

      {/* --- FORM SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* LEFT: Info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-gold text-sm font-bold uppercase tracking-widest mb-2">Reach Out to Us</h3>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Let&apos;s Plan Your <br /> Perfect <span className="text-gold">Getaway</span>
            </h2>
            <p className="text-gray-400 mb-10 leading-relaxed font-light">
              Have questions about booking, amenities, or corporate tie-ups? 
              Fill out the form or reach us directly. Our team is available 24/7.
            </p>

            {/* Icons List */}
            <div className="space-y-6">
              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold text-2xl group-hover:bg-gold group-hover:text-black transition-all">📞</div>
                <div><p className="text-xs text-gray-400 uppercase tracking-wider">Call Us</p><p className="text-xl text-white font-bold">+91 98765 43210</p></div>
              </div>
              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold text-2xl group-hover:bg-gold group-hover:text-black transition-all">✉️</div>
                <div><p className="text-xs text-gray-400 uppercase tracking-wider">Email Us</p><p className="text-xl text-white font-bold">bookings@alphastayz.com</p></div>
              </div>
            </div>
          </div>

          {/* RIGHT: Advanced Form */}
          <div className="glass p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl">
            <h3 className="text-2xl text-white font-bold mb-6">Booking Details</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-gold text-[10px] uppercase font-bold ml-2">Your Name</label>
                  <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="John Doe" className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:border-gold outline-none" required />
                </div>
                <div>
                  <label className="text-gold text-[10px] uppercase font-bold ml-2">Phone Number</label>
                  <input name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="+91..." className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:border-gold outline-none" required />
                </div>
              </div>

              {/* Email & Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-gold text-[10px] uppercase font-bold ml-2">Email Address</label>
                  <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="john@email.com" className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:border-gold outline-none" required />
                </div>
                <div>
                  <label className="text-gold text-[10px] uppercase font-bold ml-2">Select Location</label>
                  <select name="location" value={formData.location} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:border-gold outline-none appearance-none cursor-pointer">
                    <option className="bg-[#111]">Sector 57 (Main)</option>
                    <option className="bg-[#111]">Sector 42</option>
                  </select>
                </div>
              </div>

              {/* Check-in & Check-out */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-gold text-[10px] uppercase font-bold ml-2">Check-in Date</label>
                  <input name="checkIn" value={formData.checkIn} onChange={handleChange} type="date" className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:border-gold outline-none [color-scheme:dark] cursor-pointer" required />
                </div>
                <div>
                  <label className="text-gold text-[10px] uppercase font-bold ml-2">Check-out Date</label>
                  <input name="checkOut" value={formData.checkOut} onChange={handleChange} type="date" className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:border-gold outline-none [color-scheme:dark] cursor-pointer" required />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-gold text-[10px] uppercase font-bold ml-2">Any Special Request? (Optional)</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows="3" placeholder="Need extra mattress, early check-in etc..." className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:border-gold outline-none resize-none"></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={status === 'Sending...'}
                className="w-full bg-gold text-black py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-white transition-all shadow-lg active:scale-95 text-sm md:text-base disabled:opacity-50"
              >
                {status === 'Sending...' ? 'Processing...' : 'Confirm Booking Request'}
              </button>

            </form>
          </div>
        </div>
      </section>

      {/* Google Map */}
     {/* --- GOOGLE MAP (Original Colors) --- */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
          
          {/* Map Overlay Badge */}
          <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg border border-gray-200 shadow-lg pointer-events-none">
             <p className="text-black text-[10px] font-bold uppercase tracking-widest">📍 Locate Alpha Stayz</p>
          </div>

          <iframe 
            // Aapka Diya Hua Exact Location Link
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d877.1933588895296!2d77.0704637039101!3d28.426092507442924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d196c9401672f%3A0x5874f8dc9f369e4b!2sAlpha%20Stayz!5e0!3m2!1sen!2sin!4v1768464655658!5m2!1sen!2sin"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} // Filter hata diya, ab normal color dikhega
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

    </main>
  );
}