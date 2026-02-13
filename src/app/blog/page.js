'use client';

import React, { useState, useEffect } from 'react';

const blogPosts = [
  {
    id: 1,
    title: "How AI Automation is Transforming Hospitality in 2026",
    category: "AI Automation",
    date: "Feb 12, 2026",
    image: "/ai-automation-bg.png",
    excerpt: "Discover how smart agents are helping hotels reduce costs and improve guest experiences automatically.",
    content: `
      <p class="mb-4">AI automation is no longer a luxury; it's a necessity. At <strong>Nuxatech</strong>, we focus on streamlining operations using smart AI agents.</p>
      <h4 class="text-cyan-400 font-bold text-lg mb-2">1. 24/7 Customer Support</h4>
      <p class="mb-4">Our AI agents handle inquiries instantly, reducing the load on your human staff and ensuring no guest is left waiting.</p>
      <h4 class="text-cyan-400 font-bold text-lg mb-2">2. Smart Booking Systems</h4>
      <p class="mb-4">Integrated web solutions like Alpha Stayz ensure zero double-bookings and real-time updates across all platforms.</p>
      <p>Automating repetitive tasks can save hospitality businesses up to 30% in operational costs.</p>
    `
  },
  {
    id: 2,
    title: "Why Next.js is the King of Modern Web Development",
    category: "Web Dev",
    date: "Feb 10, 2026",
    image: "/logo.png",
    excerpt: "Speed, SEO, and scalability. Find out why Nuxatech builds exclusively with Next.js.",
    content: `
      <p class="mb-4">In the fast-paced digital world, every millisecond counts. Next.js ensures your site stays ahead of the competition.</p>
      <ul class="list-disc pl-5 space-y-2 text-gray-400 mb-4">
        <li><strong>Server-Side Rendering:</strong> For lightning-fast initial loads that keep users engaged.</li>
        <li><strong>SEO Optimization:</strong> Built-in features to make your business rank higher on Google naturally.</li>
        <li><strong>Scalability:</strong> Perfect for startups to large-scale enterprises like Nuxatech.</li>
      </ul>
      <p>Next.js 15 is changing the game with Server Actions and better caching.</p>
    `
  },
  {
    id: 3,
    title: "SEO Strategies for Growing Your Digital Presence",
    category: "SEO",
    date: "Feb 08, 2026",
    image: "/ai-automation-bg.png",
    excerpt: "Simple yet powerful SEO tips to make your business rank higher on search engines.",
    content: `
      <p class="mb-4">Search has changed. Users now get direct answers from AI. Your strategy must focus on Authority and Context.</p>
      <h4 class="text-cyan-400 font-bold text-lg mb-2">Technical SEO</h4>
      <p class="mb-4">Ensure your site speed is top-notch. Google loves fast-loading Next.js sites!</p>
      <h4 class="text-cyan-400 font-bold text-lg mb-2">Content Depth</h4>
      <p>Don't just write for keywords; write to solve problems. That's how Nuxatech helps clients grow.</p>
    `
  },
  {
    id: 4,
    title: "The Impact of Minimalist UI on User Conversion",
    category: "Design",
    date: "Feb 05, 2026",
    image: "/logo.png",
    excerpt: "Why clean, dark-themed glassmorphism is the preferred choice for tech-savvy users.",
    content: `
      <p class="mb-4">Design is not just how it looks; it's how it works. Minimalist interfaces reduce cognitive load.</p>
      <p class="mb-4"><strong>Nuxatech Design Principles:</strong></p>
      <ol class="list-decimal pl-5 space-y-2 text-gray-400">
        <li>Hierarchy: Important stuff first.</li>
        <li>Contrast: Using Cyan on Dark Blue for focus.</li>
        <li>Consistency: Every page should feel like part of the brand.</li>
      </ol>
    `
  }
];

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredBlogs = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  useEffect(() => {
    if (selectedPost) { document.body.style.overflow = 'hidden'; } 
    else { document.body.style.overflow = 'auto'; }
  }, [selectedPost]);

  return (
    <main className="min-h-screen bg-[#020617] text-white pt-50 pb-20 px-6">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase mb-6">
          Nuxa<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400">Logy</span>
        </h1>
        <p className="text-gray-500 font-medium max-w-xl mx-auto">
          Insights into AI, Development, and Digital Growth Strategies.
        </p>
      </div>

      {/* Filter Buttons (Ab ye puri tarah kaam karenge) */}
      <div className="flex flex-wrap justify-center gap-4 mb-20">
        {['All', 'AI Automation', 'Web Dev', 'SEO', 'Design'].map((cat) => (
          <button 
            key={cat} 
            onClick={() => setActiveCategory(cat)} 
            className={`px-6 py-2 rounded-full border text-xs font-black transition-all ${
              activeCategory === cat 
                ? 'bg-cyan-500 border-cyan-500 text-black shadow-[0_0_20px_rgba(34,211,238,0.4)]' 
                : 'border-white/10 text-white hover:border-cyan-500'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredBlogs.map((post) => (
          <div 
            key={post.id} 
            onClick={() => setSelectedPost(post)} 
            className="group cursor-pointer bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-cyan-500/50 transition-all duration-500"
          >
            <div className="relative h-60 overflow-hidden">
              <img src={post.image} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-all" alt={post.title} />
              <div className="absolute top-5 left-5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border border-white/10">
                {post.category}
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-3">{post.date}</p>
              <h3 className="text-2xl font-black italic tracking-tight group-hover:text-cyan-400 transition-colors mb-3 uppercase leading-tight">
                {post.title}
              </h3>
              <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* POPUP MODAL (Alpha Stayz logic with Nuxatech UI) */}
      {selectedPost && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
          onClick={() => setSelectedPost(null)}
        >
          <div 
            className="bg-[#0a1125] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[3rem] border border-white/10 relative shadow-2xl animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setSelectedPost(null)} className="absolute top-8 right-8 text-white text-3xl z-[110] hover:text-cyan-400 transition-colors">✕</button>
            
            <div className="h-64 md:h-80 w-full relative">
              <img src={selectedPost.image} className="w-full h-full object-cover opacity-60" alt={selectedPost.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1125] to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <span className="bg-cyan-500 text-black px-4 py-1.5 text-[10px] font-black uppercase rounded-full mb-3 inline-block">
                  {selectedPost.category}
                </span>
                <h2 className="text-3xl md:text-5xl font-black italic text-white uppercase tracking-tighter">{selectedPost.title}</h2>
              </div>
            </div>

            <div className="p-10 md:p-16">
              <div 
                className="prose prose-invert prose-cyan max-w-none text-gray-300 text-lg leading-relaxed font-medium"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }} 
              />
              <button 
                onClick={() => setSelectedPost(null)}
                className="mt-12 bg-white text-black px-12 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-cyan-500 transition-all shadow-xl"
              >
                Back to Blog
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}