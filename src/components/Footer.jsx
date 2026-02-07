import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    // Glass Effect Classes: bg-white/[0.02] + backdrop-blur-xl
    <footer className="relative mt-20 border-t border-white/10 bg-white/[0.02] backdrop-blur-xl py-12 pb-8 overflow-hidden">
      
      {/* Background Decorative Glows - Inki wajah se glass effect chamkega */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative w-32">
                <Image 
                  src="/logo.png" 
                  alt="Nuxatech Logo" 
                  width={130} 
                  height={40} 
                  className="object-contain opacity-90"
                />
              </div>
            </Link>
            <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
              Empowering hospitality with cutting-edge AI automation and high-performance web solutions.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {['FB', 'IG', 'TW', 'LI'].map((social) => (
                <div key={social} className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-bold text-gray-400 hover:text-cyan-400 hover:bg-white/10 transition-all cursor-pointer">
                  {social}
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-5 tracking-widest uppercase text-xs">Navigation</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Blog', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-cyan-400 transition-colors text-xs">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h4 className="text-white font-bold mb-5 tracking-widest uppercase text-xs">Services</h4>
            <ul className="space-y-3 text-gray-400 text-xs">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">AI Automation</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Web Development</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">SEO & Marketing</li>
            </ul>
          </div>

          {/* Column 4: Contact Info - Inner Glass Card */}
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-[1.5rem] border border-white/10 shadow-xl">
            <h4 className="text-white font-bold mb-4 text-xs uppercase">Get In Touch</h4>
            <div className="space-y-3">
              <p className="text-[11px] text-gray-300">
                <span className="text-cyan-400 font-bold">Email: </span>
                akbhardwaj973@gmail.com
              </p>
              <button className="w-full mt-2 bg-gradient-to-r from-cyan-500 to-cyan-600 text-black py-2.5 rounded-lg font-bold text-[10px] uppercase tracking-widest hover:brightness-110 transition-all shadow-lg shadow-cyan-500/20">
                Let's Talk
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-[10px]">
            © 2026 Nuxatech. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-[10px] text-gray-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}