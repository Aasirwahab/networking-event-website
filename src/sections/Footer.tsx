'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { z } from 'zod';
import { footerLinks, socialLinks } from '@/data/content';
import { preloadGalleryImages } from '@/data/gallery';
import { TwitterIcon, InstagramIcon } from '@/components/SocialIcons';
import { useFooterSticky } from '@/hooks/useFooterSticky';

const newsletterSchema = z.string().trim().email();
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { footerRef, wrapperRef, innerRef, isSticky } = useFooterSticky();
  const statusTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    return () => {
      if (statusTimerRef.current !== null) clearTimeout(statusTimerRef.current);
    };
  }, []);

  if (pathname === '/gallery') return null;

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
    <div ref={wrapperRef} className="relative w-full">
      <div
        ref={innerRef}
        className={isSticky ? 'fixed bottom-0 left-0 w-full z-0' : 'w-full'}
      >
        <footer
          ref={footerRef}
          className={`bg-primary text-white rounded-t-[2.5rem] pt-16 lg:pt-24 pb-6 flex flex-col justify-between relative overflow-hidden ${isSticky ? '' : 'w-full'}`}
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 w-full relative z-10">

            {/* TOP TIER — 4-column compact grid (Astralis-style) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-12 pb-20 lg:pb-28">

              {/* Col 1 — Brand Statement */}
              <div className="col-span-2 md:col-span-1">
                <p className="text-white/50 text-[11px] uppercase tracking-[0.25em] font-semibold mb-5">
                  Brand Statement
                </p>
                <p className="text-white/80 text-sm leading-relaxed font-light mb-6">
                  London&apos;s premier professional network. Small rooms, sharp people, real conversations — connecting founders, operators, and investors without the pitch-deck theatre.
                </p>
                <div className="flex items-center gap-5">
                  <a
                    href={socialLinks[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-white hover:scale-110 transition-all duration-300"
                    title={socialLinks[0].label}
                  >
                    <TwitterIcon />
                  </a>
                  <a
                    href={socialLinks[2].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-white hover:scale-110 transition-all duration-300"
                    title={socialLinks[2].label}
                  >
                    <InstagramIcon />
                  </a>
                </div>
              </div>

              {/* Col 2 — Navigation */}
              <div>
                <p className="text-white/50 text-[11px] uppercase tracking-[0.25em] font-semibold mb-5">
                  Navigation
                </p>
                <ul className="space-y-3">
                  {footerLinks.column1.map((link) => {
                    const isGallery = link.href === '/gallery';
                    return (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          onMouseEnter={isGallery ? preloadGalleryImages : undefined}
                          onTouchStart={isGallery ? preloadGalleryImages : undefined}
                          onFocus={isGallery ? preloadGalleryImages : undefined}
                          className="text-white/80 text-sm hover:text-white transition-all hover:translate-x-1 inline-block font-light"
                        >
                          {link.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Col 3 — Information */}
              <div>
                <p className="text-white/50 text-[11px] uppercase tracking-[0.25em] font-semibold mb-5">
                  Information
                </p>
                <ul className="space-y-3">
                  {[...footerLinks.column2, ...footerLinks.column3].map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-white/80 text-sm hover:text-white transition-all hover:translate-x-1 inline-block font-light"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="mailto:hello@networxlondon.com"
                      className="text-white/80 text-sm hover:text-white transition-all hover:translate-x-1 inline-block font-light"
                    >
                      hello@networxlondon.com
                    </a>
                  </li>
                </ul>
              </div>

              {/* Col 4 — Join Networx */}
              <div className="col-span-2 md:col-span-1">
                <p className="text-white/50 text-[11px] uppercase tracking-[0.25em] font-semibold mb-5">
                  Join Networx
                </p>
                <form onSubmit={handleSubmit} className="relative group">
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-full border border-white/15 hover:border-white/30 focus-within:border-white/60 focus-within:bg-white/15 transition-all duration-300">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="type your email"
                      required
                      aria-label="Email address for newsletter"
                      className="w-full bg-transparent py-3 pl-5 pr-12 text-white placeholder:text-white/50 focus:outline-none text-sm font-light"
                    />
                    <button
                      type="submit"
                      className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white text-primary flex items-center justify-center hover:bg-blue-50 hover:scale-105 transition-all"
                      aria-label="Subscribe"
                      title="Subscribe to newsletter"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
                <p
                  role="status"
                  aria-live="polite"
                  className="min-h-[1.25rem] mt-3 text-xs font-light"
                >
                  {status === 'success' && (
                    <span className="text-green-300">Thank you for subscribing!</span>
                  )}
                  {status === 'error' && (
                    <span className="text-red-300">Please enter a valid email.</span>
                  )}
                </p>
                <p className="text-white/40 text-xs leading-relaxed mt-2 font-light">
                  London SW15 3SR, United Kingdom
                </p>
              </div>
            </div>

            {/* BOTTOM TIER — Logo + Giant Wordmark (side-by-side, Astralis layout) */}
            <div className="select-none">
              <Link
                href="/"
                aria-label="Networx London — home"
                className="group flex items-center justify-center gap-4 sm:gap-6 lg:gap-10 w-full"
              >
                {/* Brand mark — centered on mobile, sits to the LEFT of the wordmark on desktop */}
                <Image
                  src="/images/logo.png"
                  alt="Networx London"
                  width={320}
                  height={320}
                  style={{ width: 'auto', height: 'auto' }}
                  className="shrink-0 h-32 sm:h-36 md:h-40 lg:h-44 xl:h-52 w-auto object-contain brightness-0 invert opacity-95 transition-opacity duration-500 group-hover:opacity-100"
                />
                {/* Giant wordmark — hidden on mobile, fills the remaining width on desktop */}
                <h2
                  aria-hidden="true"
                  className="hidden lg:block text-white font-black tracking-[-0.05em] leading-[0.85] uppercase whitespace-nowrap text-[clamp(2.5rem,13vw,11rem)] transition-opacity duration-500 group-hover:opacity-90"
                >
                  Networx
                </h2>
              </Link>
            </div>

            {/* MICROCOPY — bottom-most legal line */}
            <div className="mt-8 lg:mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
              <p className="text-white/40 text-[10px] uppercase tracking-[0.25em] font-light">
                &copy; {CURRENT_YEAR} Networx London Archive. Designed for meaningful connection.
              </p>
              <p className="text-white/30 text-[10px] uppercase tracking-[0.25em] font-light">
                Documenting professionals beyond the pitch.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
