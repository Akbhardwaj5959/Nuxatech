'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Jab page change ho toh mobile menu automatically band ho jaye
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-4">
      {/* Main Nav Container - Glass Effect */}
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/[0.03] backdrop-blur-xl border border-white/10 px-6 py-3 rounded-2xl shadow-2xl">

        {/* Logo */}
        <Link href="/" className="relative z-[110] flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Nuxatech Logo"
            width={130}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-base font-semibold transition-colors ${ // text-sm ko text-base kiya
                pathname === link.href ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button (Desktop) */}
        <Link
          href="/contact"
          className="hidden md:block bg-cyan-500 text-black px-8 py-3 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20"
        >
          Book Now
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-[110] p-2 text-white focus:outline-none"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between overflow-hidden">
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? 'translate-x-full opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      {/* Iska design aisa hai ki ye har page par upar se overlay banke aayega */}
      <div className={`fixed inset-0 bg-[#020617]/95 backdrop-blur-2xl z-[105] md:hidden transition-all duration-500 ease-in-out ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-6 text-center">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-3xl font-black uppercase tracking-tighter transition-all duration-300 ${pathname === link.href
                  ? 'text-cyan-400 scale-110'
                  : 'text-white/60 hover:text-white'
                }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/contact"
            className="w-full max-w-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-sm shadow-xl"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}