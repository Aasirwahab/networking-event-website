'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import SplitType from 'split-type';

interface SubPageHeroProps {
  title: React.ReactNode;
  subtitle?: string;
  backgroundImage: string;
  className?: string;
}

export function SubPageHero({ title, subtitle, backgroundImage, className }: SubPageHeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
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
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, ease: 'power3.out', duration: 1 },
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
      className={`relative min-h-[70vh] flex items-end overflow-hidden ${className ?? ''}`}
    >
      {/* Background image with parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/60 via-black/50 to-[#050505]" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 md:pb-24"
      >
        <h1
          ref={headingRef}
          className="font-display text-5xl md:text-8xl lg:text-[120px] font-black tracking-tighter leading-none mb-6"
        >
          {title}
        </h1>
        {subtitle && (
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-white/50 max-w-2xl font-light leading-relaxed opacity-0"
          >
            {subtitle}
          </p>
        )}
      </motion.div>
    </section>
  );
}
