'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { InfiniteMarquee } from '@/components/InfiniteMarquee';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export function HeroSection() {

  return (
    <section className="relative min-h-screen flex flex-col pt-[72px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/networx_hero_breakfast.png"
          alt="Premium London Networking Breakfast"
          fill
          priority
          className="object-cover object-center scale-[1.05]"
          sizes="100vw"
        />
        {/* Dark Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#050505]" />
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {/* Tag */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4">
            <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase">Human • Relaxed • Genuinely Enjoyable</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-7xl lg:text-[100px] font-black text-white tracking-tighter leading-[0.9] mb-8"
          >
            THE FOUNDERS <br />
            <span className="text-primary italic font-light">BREAKFAST.</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-white/60 max-w-lg mb-10 font-light leading-relaxed"
          >
            Fostering meaningful conversations rather than formal pitches. Join an elite mix of London founders, investors, and professionals.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Link
              href="/events"
              className="group inline-flex items-center gap-3 bg-primary text-white px-10 py-4 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_20px_40px_rgba(197,160,89,0.3)]"
            >
              Reserve a Seat
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 text-white px-10 py-4 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs transition-all duration-300 hover:bg-white/10"
            >
              Our Philosophy
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>

      {/* Infinite Marquee Section at the bottom */}
      <div className="relative z-20 pb-2">
        <InfiniteMarquee />
      </div>

    </section>
  );
}
