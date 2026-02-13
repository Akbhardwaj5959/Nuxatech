import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const socialLinks = [
  { name: 'FB', icon: <Facebook size={18} />, href: 'https://facebook.com/nuxatech' },
  { name: 'IG', icon: <Instagram size={18} />, href: 'https://instagram.com/nuxatech' },
  { name: 'TW', icon: <Twitter size={18} />, href: 'https://twitter.com/nuxatech' },
  { name: 'LI', icon: <Linkedin size={18} />, href: 'https://linkedin.com/company/nuxatech' },
];

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/5 bg-[#020617] py-12 pb-8 overflow-hidden">
      
      {/* Background Decorative Glows - Opacity kam ki hai taaki distracting na ho */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/[0.03] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 items-start">
          
          {/* Column 1: Brand & About */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block w-fit">
              <Image 
                src="/logo.png" 
                alt="Nuxatech Logo" 
                width={140} 
                height={50} 
                className="object-contain hover:opacity-80 transition-opacity"
              />
            </Link>
            <p className="text-gray-400 text-[13px] leading-relaxed max-w-[280px]">
              Empowering hospitality with cutting-edge AI automation and high-performance web solutions.
            </p>
            
            {/* Social Icons - Ab ye proper square boxes mein hain */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link 
                  key={social.name} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-400/5 transition-all duration-300"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation - pt-10 remove kiya proper alignment ke liye */}
          <div className="lg:pl-8">
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-[11px] opacity-60">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Blog', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-white transition-colors text-[13px]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-[11px] opacity-60">Services</h4>
            <ul className="space-y-4 text-gray-400 text-[13px]">
              <li className="hover:cyan-400 transition-colors cursor-pointer">AI Automation</li>
              <li className="hover:cyan-400 transition-colors cursor-pointer">Mobile App Development</li>
              <li className="hover:cyan-400 transition-colors cursor-pointer">Full Stack Development</li>
            </ul>
          </div>

          {/* Column 4: Contact Glass Card - Modern Look */}
          <div className="bg-white/[0.03] backdrop-blur-xl p-7 rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/10 blur-2xl group-hover:bg-cyan-500/20 transition-all" />
            
            <h4 className="text-white font-bold mb-5 text-[11px] uppercase tracking-widest">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex flex-col gap-1">
                <span className="text-cyan-400 text-[10px] font-black uppercase tracking-tighter">Email</span>
                <span className="text-gray-200 text-[12px] break-all">info@nuxatech.com</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-cyan-400 text-[10px] font-black uppercase tracking-tighter">Phone</span>
                <span className="text-gray-200 text-[12px]">+91 8287651345</span>
              </div>
              
              <Link href="/contact" className="block pt-2">
                <button className="w-full bg-cyan-500 text-black py-3 rounded-xl font-bold text-[11px] uppercase tracking-wider hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20 active:scale-95">
                  Let's Talk
                </button>
              </Link>
            </div>
          </div>

        </div>  

        {/* Bottom Bar - Super Thin & Premium */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-[11px] tracking-wide">
            © 2026 <span className="text-gray-400 font-medium">Nuxatech</span>. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[11px] text-gray-500 font-medium tracking-wide">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}