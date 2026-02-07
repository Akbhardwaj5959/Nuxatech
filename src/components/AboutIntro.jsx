import Image from 'next/image';

export default function AboutIntro() {
  return (
    <section className="relative pt-45 pb-16 md:pt-45 md:pb-45 px-6 bg-[#020617] overflow-hidden">
      {/* Background Glows - Adjusted for better mobile blending */}
      <div className="absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-600/10 blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-600/10 blur-[80px] md:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">

        {/* Left Side: Text Content */}
        <div className="space-y-6 md:space-y-8 order-2 lg:order-1 text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <span className="w-fit text-cyan-400 font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase bg-cyan-400/10 px-4 py-2 rounded-full border border-cyan-400/20">
              Who We Are
            </span>
            <h1 className="text-4xl md:text-5xl xl:text-7xl font-black text-white mt-6 leading-[1.1] tracking-tighter">
              We Build The <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Future of Hospitality
              </span>
            </h1>
          </div>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            At Nuxatech, we don't just build websites; we create intelligent digital ecosystems.
            By merging AI automation with high-performance web development, we help businesses
            scale faster and operate smarter in the modern era.
          </p>

          {/* Stats Grid - Responsive tweaks */}
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
            <div className="p-5 md:p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-1">99%</h3>
              <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-widest">Automation Efficiency</p>
            </div>
            <div className="p-5 md:p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-1">50+</h3>
              <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-widest">Projects Delivered</p>
            </div>
          </div>
        </div>

        {/* Right Side: Visual Element */}
        <div className="relative group order-1 lg:order-2">
          {/* Outer Gradient Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-[2rem] md:rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="relative aspect-square sm:aspect-video lg:aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 bg-[#0a0f1e]">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent z-10" />
            <Image
              src="/fullstack-bg.png"
              alt="Our Vision"
              fill
              className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              priority
            />
            
            {/* Floating Glass Tag - Responsive position */}
            <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 p-4 md:p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 z-20">
              <p className="text-white text-xs md:text-sm italic font-medium text-center lg:text-left">
                "Driven by innovation, powered by intelligence."
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}