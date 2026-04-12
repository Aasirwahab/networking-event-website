'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { z } from 'zod';
import { footerLinks, socialLinks } from '@/data/content';
import { TwitterIcon, InstagramIcon } from '@/components/SocialIcons';
import { useFooterSticky } from '@/hooks/useFooterSticky';

const newsletterSchema = z.string().trim().email();
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { footerRef, wrapperRef, innerRef, isSticky } = useFooterSticky();
  const statusTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (statusTimerRef.current !== null) clearTimeout(statusTimerRef.current);
    };
  }, []);

  const scheduleReset = (ms: number) => {
    if (statusTimerRef.current !== null) clearTimeout(statusTimerRef.current);
    statusTimerRef.current = setTimeout(() => setStatus('idle'), ms);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = newsletterSchema.safeParse(email);
    if (!result.success) {
      setStatus('error');
      scheduleReset(3000);
      return;
    }
    setStatus('success');
    setEmail('');
    scheduleReset(4000);
  };

  return (
    <div
      ref={wrapperRef}
      className={`relative w-full ${isSticky ? 'clip-footer' : ''}`}
    >
      <div
        ref={innerRef}
        className={isSticky ? "fixed bottom-0 left-0 w-full" : "w-full"}
      >
    <footer
      ref={footerRef}
      className={`bg-primary text-white pt-16 lg:pt-20 pb-8 flex flex-col justify-between relative overflow-hidden ${isSticky ? '' : 'w-full'}`}
    >
      {/* Massive Brand Watermark */}
      <div className="absolute -bottom-10 lg:-bottom-20 left-1/2 -translate-x-1/2 select-none pointer-events-none w-full text-center">
        <h2 className="text-[25vw] font-black tracking-tighter text-white/[0.08] leading-none uppercase">
          NETWORX
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Top Tier: Newsletter Hero */}
        <div className="mb-16 lg:mb-20">
          <div className="max-w-2xl">
            <span className="text-white/50 text-xs uppercase tracking-[0.3em] font-medium mb-4 block underline underline-offset-8 decoration-white/20">Intelligence</span>
            <h3 className="text-3xl lg:text-4xl font-extralight italic mb-8 max-w-lg leading-tight text-white">
              Stay connected with London's most welcoming networking community.
            </h3>
            <form onSubmit={handleSubmit} className="relative group max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                aria-label="Email address for newsletter"
                className="w-full bg-transparent border-b border-white/20 py-6 pr-12 text-white placeholder:text-white/20 focus:outline-none focus:border-white/60 transition-all text-xl font-extralight group-hover:border-white/40"
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 text-white hover:text-blue-200 transition-all transform hover:scale-110"
                aria-label="Subscribe"
                title="Subscribe to newsletter"
              >
                <ArrowRight className="w-8 h-8" />
              </button>
            </form>
            <p role="status" aria-live="polite" className="min-h-[1.25rem] mt-3 text-sm font-light">
              {status === 'success' && (
                <span className="text-green-400">Thank you for subscribing!</span>
              )}
              {status === 'error' && (
                <span className="text-red-400">Please enter a valid email address.</span>
              )}
            </p>
          </div>
        </div>

        {/* Middle Tier: Expansive Link Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 lg:gap-8 pb-12 border-b border-white/[0.05]">
          {/* Branding & Contact */}
          <div className="col-span-2 lg:col-span-1">
            <p className="text-white/40 text-xs uppercase tracking-widest font-bold mb-6">Connect</p>
            <a href="mailto:hello@networxlondon.com" className="text-white text-md font-medium hover:text-blue-200 transition-colors block mb-2 underline underline-offset-4 decoration-white/20">
              hello@networxlondon.com
            </a>
            <p className="text-white/30 text-sm leading-relaxed mb-6 font-light">
              London SW15 3SR,<br />
              United Kingdom
            </p>
            <div className="flex items-center gap-6">
              <a href={socialLinks[0].href} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-blue-200 hover:scale-125 transition-all duration-300 inline-block" title={socialLinks[0].label}><TwitterIcon /></a>
              <a href={socialLinks[2].href} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-blue-200 hover:scale-125 transition-all duration-300 inline-block" title={socialLinks[2].label}><InstagramIcon /></a>
            </div>
          </div>

          {/* Columns */}
          <div>
            <p className="text-white/40 text-xs uppercase tracking-widest font-bold mb-6">Navigation</p>
            <ul className="space-y-4">
              {footerLinks.column1.map((link) => (
                <li key={link.label}><a href={link.href} className="text-white/80 text-sm hover:text-white transition-all transform hover:translate-x-1 inline-block font-light">{link.label}</a></li>
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
                Making networking human, relaxed, and genuinely enjoyable. Networx London brings people together for impactful connections.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-extralight tracking-tighter text-white">NETWORX</span>
            <div className="h-4 w-[1px] bg-white/10 mx-1" />
            <span className="text-[10px] tracking-[0.6em] uppercase text-blue-200 font-bold">LONDON</span>
          </div>
          <p className="text-white/20 text-[10px] lg:text-[11px] uppercase tracking-[0.2em] font-light">
            &copy; {CURRENT_YEAR} Networx London. All Rights Reserved. Human Networking Made Simple.
          </p>
        </div>
      </div>
    </footer>
      </div>
    </div>
  );
}
