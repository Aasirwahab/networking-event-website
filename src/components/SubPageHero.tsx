'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import SplitType from 'split-type';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { InfiniteMarquee } from '@/components/InfiniteMarquee';
import './SubPageHero.css';

interface SubPageHeroProps {
  title: React.ReactNode;
  subtitle?: string;
  backgroundImage: string;
  className?: string;
  eyebrow?: string;
  ctaText?: string;
  ctaLink?: string;
  sponsorText?: string;
  sponsorLogos?: { src: string; alt: string }[];
  showMarquee?: boolean;
}

export function SubPageHero({ 
  title, 
  subtitle, 
  backgroundImage, 
  className,
  eyebrow,
  ctaText,
  ctaLink,
  sponsorText,
  sponsorLogos,
  showMarquee
}: SubPageHeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    if (!headingRef.current) return;

    let split: SplitType | null = null;

    const ctx = gsap.context(() => {
      split = new SplitType(headingRef.current!, {
        types: 'lines',
        lineClass: 'overflow-hidden',
      });

      const innerLines = split.lines?.map((line) => {
        const span = document.createElement('span');
        span.style.display = 'block';
        span.className = 'line-inner inline-block h-full w-full';
        span.innerHTML = line.innerHTML;
        line.innerHTML = '';
        line.appendChild(span);
        return span;
      });

      const tl = gsap.timeline({ delay: 0.3 });

      tl.fromTo(
        innerLines || [],
        { yPercent: 120, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          stagger: 0.1,
          ease: 'power4.out',
          duration: 1.2,
        }
      );

      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current.children,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.1, ease: 'power3.out', duration: 1 },
          '-=0.6'
        );
      }
    }, sectionRef);

    return () => {
      ctx.revert();
      split?.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative min-h-[100dvh] flex items-center overflow-hidden pt-24 md:pt-32 ${className ?? ''}`}
    >
      {/* Background image with Elementor-style fixed parallax */}
      <div
        className="subpage-hero-bg"
        ref={(el) => { if (el) el.style.setProperty('--hero-bg-image', `url('${backgroundImage}')`); }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-black/50" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20"
      >
        <div className="max-w-3xl">
          {eyebrow && (
            <span className="text-primary text-sm font-semibold tracking-wide block mb-4">
              {eyebrow}
            </span>
          )}
          
          <h1
            ref={headingRef}
            className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6"
          >
            {title}
          </h1>
          
          <div ref={subtitleRef}>
            {subtitle && (
              <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed mb-8">
                {subtitle}
              </p>
            )}

            {ctaText && ctaLink && (
              <div className="mb-12">
                <Link
                  href={ctaLink}
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-primary/25"
                >
                  {ctaText}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            )}

            {showMarquee ? (
              <div className="mt-8 pt-8 border-t border-white/10 overflow-hidden w-full max-w-[100vw]">
                <InfiniteMarquee />
              </div>
            ) : (sponsorText || sponsorLogos) ? (
              <div className="mt-8 pt-8 border-t border-white/10">
                {sponsorText && (
                  <p className="text-white/60 text-sm mb-6">{sponsorText}</p>
                )}
                {sponsorLogos && sponsorLogos.length > 0 && (
                  <div className="flex flex-wrap items-center gap-8 md:gap-12 opacity-70 grayscale">
                    {sponsorLogos.map((logo, i) => (
                      <div key={i} className="relative h-8 w-24">
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
