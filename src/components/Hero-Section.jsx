import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#020617]">
      
      {/* --- VIDEO BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-50"
        >
          <source src="/HeroSection.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/70 via-transparent to-[#020617]"></div>
      </div>

      

      {/* --- HERO CONTENT --- */}
      <main className="relative z-10 mx-auto max-w-7xl px-6 pt-32 lg:pt-48 pb-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          
          {/* Left Side: Copy */}
          <div className="text-center lg:text-left">
            <span className="mb-4 inline-block text-xs font-mono tracking-[0.4em] text-cyan-400 md:text-sm uppercase">
              NUXATECH AI AUTOMATION
            </span>
            <h1 className="mb-8 text-5xl font-extrabold leading-[1.1] md:text-7xl">
              Automate the Future <br />
              <span className="gradient-text-hero">of Hospitality</span>
            </h1>
            
            <div className="flex flex-col justify-center gap-5 sm:flex-row lg:justify-start">
              <Link href="/services">
              <button className="rounded-full cursor-pointer bg-cyan-500 px-10 py-4 font-bold text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]">
                EXPLORE MORE
              </button>
              </Link>
              <Link href="/about">
              <button className="glass-hero cursor-pointer rounded-full border border-white/10 px-10 py-4 font-medium transition-colors hover:bg-white/5">
                LEARN MORE
              </button>
              </Link>
            </div>
          </div>

          {/* Right Side: Glass Dashboard Image Style */}
          <div className="relative flex justify-center lg:justify-end">
  
  {/* Dashboard Card - Humne yahan class badli hai visibility ke liye */}
  <div className="glass-card-dark w-full max-w-[520px] rounded-[2.5rem] p-8 shadow-2xl relative z-20">
    
    {/* Header with dots */}
    <div className="mb-10 flex items-center justify-between">
      <div className="flex gap-2">
        <div className="h-3 w-3 rounded-full bg-red-500/60"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500/60"></div>
        <div className="h-3 w-3 rounded-full bg-green-500/60"></div>
      </div>
      <div className="h-2 w-20 rounded-full bg-white/20"></div>
    </div>

    {/* Bars Section - Contrast badhane ke liye inner bg dark kiya hai */}
    <div className="mb-8 flex h-44 items-end justify-around gap-2 rounded-2xl bg-black/40 p-5 border border-white/5">
      {[45, 75, 55, 90, 65].map((h, i) => (
        <div 
          key={i} 
          className="w-full rounded-t-lg bg-gradient-to-t from-cyan-500/60 to-cyan-400/20 shadow-[0_0_15px_rgba(34,211,238,0.2)]" 
          style={{ height: `${h}%` }}
        ></div>
      ))}
    </div>

    {/* Metrics Grid */}
    <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-6">
      <div className="bg-white/5 p-4 rounded-xl border border-white/5">
        <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Total Revenue</p>
        <p className="text-3xl font-bold text-cyan-400 drop-shadow-md">$42,900</p>
      </div>
      <div className="bg-white/5 p-4 rounded-xl border border-white/5">
        <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Active Guests</p>
        <p className="text-3xl font-bold text-purple-400 drop-shadow-md">1,240</p>
      </div>
    </div>
  </div>

  {/* Floating "NX" Bubble - Ise thoda aur bright kiya hai */}
  {/* <div className="animate-float absolute -left-12 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full glass-card-dark flex items-center justify-center p-4 border-cyan-500/40 shadow-[0_0_30px_rgba(34,211,238,0.3)] z-30">
     <div className="h-16 w-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white text-2xl">
       NX
     </div>
  </div> */}

  {/* Small 'H' Card */}
  {/* <div className="absolute right-0 top-10 flex h-14 w-14 items-center justify-center rounded-2xl glass-card-dark border-cyan-400/40 font-bold text-cyan-400 z-30 shadow-lg">
    H
  </div> */}

</div>
        </div>
      </main>
    </div>
  );
}