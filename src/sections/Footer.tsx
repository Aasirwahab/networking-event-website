'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { footerLinks } from '@/data/content';

// Social icons as SVG components
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

export function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div 
        className='relative h-[1100px] lg:h-[800px]'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
        <div className='relative h-[calc(100vh+1100px)] lg:h-[calc(100vh+800px)] -top-[100vh]'>
            <div className='h-[1100px] lg:h-[800px] sticky top-[calc(100vh-1100px)] lg:top-[calc(100vh-800px)]'>
              <footer className="bg-[#050505] text-white pt-16 lg:pt-20 pb-8 h-full flex flex-col justify-between relative overflow-hidden">
                
                {/* Massive Brand Watermark */}
                <div className="absolute -bottom-10 lg:-bottom-20 left-1/2 -translate-x-1/2 select-none pointer-events-none w-full text-center">
                  <h2 className="text-[25vw] font-black tracking-tighter text-white/[0.03] leading-none uppercase">
                    ACTOS
                  </h2>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                  
                  {/* Top Tier: Newsletter Hero */}
                  <div className="mb-16 lg:mb-20">
                    <div className="max-w-2xl">
                      <span className="text-primary text-xs uppercase tracking-[0.3em] font-medium mb-4 block underline underline-offset-8 decoration-primary/30">Intelligence</span>
                      <h3 className="text-3xl lg:text-4xl font-extralight italic mb-8 max-w-lg leading-tight">
                        Join an elite community of founders, directors, and strategic visionaries.
                      </h3>
                      <form onSubmit={handleSubmit} className="relative group max-w-md">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Newsletter@Acts.London"
                          className="w-full bg-transparent border-b border-white/10 py-6 pr-12 text-white placeholder:text-white/20 focus:outline-none focus:border-primary transition-all text-xl font-extralight group-hover:border-white/30"
                        />
                        <button 
                          type="submit" 
                          className="absolute right-0 top-1/2 -translate-y-1/2 text-primary hover:text-white transition-all transform hover:scale-110"
                          aria-label="Subscribe"
                          title="Subscribe to newsletter"
                        >
                          <ArrowRight className="w-8 h-8" />
                        </button>
                      </form>
                    </div>
                  </div>

                  {/* Middle Tier: Expansive Link Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 lg:gap-8 pb-12 border-b border-white/[0.05]">
                    {/* Branding & Contact */}
                    <div className="col-span-2 lg:col-span-1">
                      <p className="text-white/40 text-xs uppercase tracking-widest font-bold mb-6">Connect</p>
                      <a href="mailto:summit@actos.london" className="text-white text-md font-medium hover:text-primary transition-colors block mb-2 underline underline-offset-4 decoration-primary/20">
                        summit@actos.london
                      </a>
                      <p className="text-white/30 text-sm leading-relaxed mb-6 font-light">
                        Level 24, The Shard,<br />
                        London SE1 9SG
                      </p>
                      <div className="flex items-center gap-6">
                        <motion.a href="#twitter" whileHover={{ scale: 1.2, color: "#2563EB" }} className="text-white/40 hover:text-white transition-colors" title="Twitter"><TwitterIcon /></motion.a>
                        <motion.a href="#linkedin" whileHover={{ scale: 1.2, color: "#2563EB" }} className="text-white/40 hover:text-white transition-colors" title="Instagram"><InstagramIcon /></motion.a>
                      </div>
                    </div>

                    {/* Columns */}
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-widest font-bold mb-6">Navigation</p>
                      <ul className="space-y-4">
                        {footerLinks.column1.map((link) => (
                          <li key={link.label}><a href={link.href} className="text-white/60 text-sm hover:text-white transition-all transform hover:translate-x-1 inline-block font-light">{link.label}</a></li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-widest font-bold mb-6">Directory</p>
                      <ul className="space-y-4">
                        {footerLinks.column2.map((link) => (
                          <li key={link.label}><a href={link.href} className="text-white/60 text-sm hover:text-white transition-all transform hover:translate-x-1 inline-block font-light">{link.label}</a></li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-widest font-bold mb-6">Information</p>
                      <ul className="space-y-4">
                        {footerLinks.column3.map((link) => (
                          <li key={link.label}><a href={link.href} className="text-white/60 text-sm hover:text-white transition-all transform hover:translate-x-1 inline-block font-light">{link.label}</a></li>
                        ))}
                      </ul>
                    </div>

                    <div className="hidden lg:block">
                      <p className="text-white/40 text-xs uppercase tracking-widest font-bold mb-6">Experience</p>
                      <div className="group cursor-pointer">
                        <p className="text-white/30 text-xs font-light leading-relaxed group-hover:text-white/50 transition-colors">
                          Transforming the digital landscape for the next generation of founders. Actos London is more than an event; it's a movement.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Bar */}
                  <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-extralight tracking-tighter text-white">ACTOS</span>
                      <div className="h-4 w-[1px] bg-white/20 mx-1" />
                      <span className="text-[10px] tracking-[0.6em] uppercase text-primary font-bold">LONDON</span>
                    </div>
                    <p className="text-white/20 text-[10px] lg:text-[11px] uppercase tracking-[0.2em] font-light">
                      &copy; {new Date().getFullYear()} Acts Network London. All Rights Reserved. Proper Reveal Implementation.
                    </p>
                  </div>
                </div>
              </footer>
            </div>
        </div>
    </div>
  );
}
