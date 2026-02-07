'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 md:top-6 w-full z-50 px-4 md:px-10 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 md:py-0">
        
        {/* --- LEFT: Logo --- */}
        <Link href="/" className="flex items-center z-50 group">
          <div className="relative w-32 md:w-44 h-auto transition-transform duration-300 group-hover:scale-105"> 
            <Image 
              src="/logo.png" 
              alt="Nuxatech Logo"
              width={180} 
              height={60} 
              className="object-contain w-full h-auto drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]" 
              priority 
            />
          </div>
        </Link>

        {/* --- CENTER: Desktop Menu (Futuristic Glass) --- */}
        <div className="hidden lg:flex items-center">
          <ul className="flex space-x-10 px-10 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">
            {['Home', 'About', 'Services', 'Blog', 'Contact Us'].map((item) => (
              <li key={item}>
                <Link 
                  href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`} 
                  className="text-white/80 text-sm font-medium tracking-wide hover:text-cyan-400 transition-colors duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* --- RIGHT: Book Button (Cyan Neon) --- */}
        <div className="flex items-center z-50">
          <Link 
            href="/contact" 
            className="hidden lg:block bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-2.5 rounded-full font-bold text-sm tracking-tight transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.4)] hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] hover:scale-105 active:scale-95"
          >
            Book Now
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden text-cyan-400 text-3xl focus:outline-none ml-4 p-2"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div className={`fixed inset-0 bg-[#020617]/98 backdrop-blur-2xl z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible -translate-y-5'} lg:hidden`}>
        <ul className="text-center space-y-10">
          {['Home', 'About', 'Services', 'Contact'].map((item) => (
            <li key={item}>
              <Link 
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                onClick={() => setIsOpen(false)} 
                className="text-4xl text-white font-bold hover:text-cyan-400 transition-colors tracking-tighter"
              >
                {item}
              </Link>
            </li>
          ))}
          <li className="pt-8">
             <Link 
               href="/booking" 
               onClick={() => setIsOpen(false)} 
               className="bg-cyan-500 text-black px-12 py-4 rounded-full font-black text-xl uppercase tracking-widest shadow-[0_0_20px_rgba(34,211,238,0.5)]"
             >
               Book Now
             </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}