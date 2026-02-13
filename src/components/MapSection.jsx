'use client';

import React from 'react';

export default function MapSection() {
  // Aap Gurgaon (Nuxatech location) ka coordination use kar sakte hain
  const mapCenter = "Gurgaon, Haryana, India";
  const embedUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(mapCenter)}&theme=dark`;

  // Note: Agar API Key nahi hai, toh hum standard iframe use karenge jo niche hai
  return (
    <section className="py-20 bg-[#020617] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="mb-12">
          <p className="text-cyan-400 font-black text-[10px] uppercase tracking-[0.4em] mb-4">
            Visit Our Innovation Hub
          </p>
          <h2 className="text-4xl md:text-5xl font-black italic text-white uppercase tracking-tighter">
            Find Us <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">On The Map</span>
          </h2>
        </div>

        {/* Map Container with Glass Effect */}
        <div className="relative group p-4 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-xl overflow-hidden shadow-2xl transition-all duration-500 hover:border-cyan-500/30">
          
          {/* Inner Glow Background */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full group-hover:bg-cyan-500/20 transition-all" />

          <div className="relative z-10 w-full h-[450px] rounded-[2.5rem] overflow-hidden grayscale invert-[0.9] contrast-[1.2] brightness-[0.8]">
            {/* Standard Embed Iframe (Direct Gurgaon Location) */}
            <iframe
              title="Nuxatech Location"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112218.44892051662!2d76.9621303!3d28.4594965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5e840a430638!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1707820000000!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Floating Address Card (Desktop Only) */}
          <div className="absolute bottom-10 left-10 hidden md:block z-20 bg-[#0a1125]/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-2xl max-w-xs">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🏢</span>
              <h4 className="text-white font-black text-sm uppercase italic">Nuxatech HQ</h4>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed font-medium">
              Sector 57, Gurgaon, Haryana 122003, India. [cite: 2026-01-27]
            </p>
            <a 
              href="https://goo.gl/maps/xyz" 
              target="_blank" 
              className="mt-4 inline-block text-cyan-400 text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors"
            >
              Get Directions →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}