import Image from 'next/image';

export default function AboutIntro() {
  return (
    <section className="relative pt-45 px-6 bg-[#020617] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Side: Text Content */}
        <div className="space-y-8">
          <div>
            <span className="text-cyan-400 font-bold tracking-[0.2em] text-xs uppercase bg-cyan-400/10 px-4 py-2 rounded-full border border-cyan-400/20">
              Who We Are
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mt-6 leading-[1.1] tracking-tighter">
              We Build The <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Future of Hospitality
              </span>
            </h1>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            At Nuxatech, we don't just build websites; we create intelligent digital ecosystems. 
            By merging AI automation with high-performance web development, we help businesses 
            scale faster and operate smarter in the modern era.
          </p>

          {/* Stats Grid - Glassy Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:border-cyan-500/30 transition-all">
              <h3 className="text-3xl font-black text-white mb-1">99%</h3>
              <p className="text-gray-500 text-xs uppercase tracking-widest">Automation Efficiency</p>
            </div>
            <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:border-purple-500/30 transition-all">
              <h3 className="text-3xl font-black text-white mb-1">50+</h3>
              <p className="text-gray-500 text-xs uppercase tracking-widest">Projects Delivered</p>
            </div>
          </div>
        </div>

        {/* Right Side: Visual Element (Glassy Image Container) */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-[3rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-[3rem] overflow-hidden border border-white/10 bg-[#0a0f1e]">
            {/* Replace with your actual image */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent z-10" />
            <Image 
              src="/fullstack-bg.png" // Ye image aapko public folder mein daalni hogi
              alt="Our Vision"
              fill
              className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            {/* Floating Glass Tag */}
            <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 z-20">
              <p className="text-white text-sm italic font-medium">
                "Driven by innovation, powered by intelligence."
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}