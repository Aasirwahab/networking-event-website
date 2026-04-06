'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { InfiniteMarquee } from '@/components/InfiniteMarquee';
import { usePageTransition } from '@/components/TransitionProvider';

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
  const { navigateTo } = usePageTransition();

  return (
    <section className="relative h-[100dvh] flex flex-col overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/toWEBP/1772655970617.webp"
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
      <div className="flex-1 flex items-start pt-[20vh] sm:pt-[25vh] relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            {/* Tagline */}
            <motion.div variants={itemVariants} className="mb-3">
              <span className="text-primary text-[11px] sm:text-[13px] font-medium tracking-[0.2em] uppercase">
                Networking Made Human, Relaxed & Enjoyable.
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-[32px] sm:text-[44px] lg:text-[52px] font-bold text-white tracking-tight leading-[1.1] mb-5"
            >
              Come for the Network<br />
              Stay for the People
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-[14px] sm:text-[15px] text-white/60 max-w-md mb-8 font-light leading-[1.7]"
            >
              Bringing together directors, CEOs, entrepreneurs, founders, investors, and professionals over a great breakfast to spark valuable connections.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => navigateTo('/events')}
                className="group inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold uppercase tracking-[0.15em] text-[11px] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_30px_rgba(197,160,89,0.3)] cursor-pointer"
              >
                Explore Events
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
              <button
                onClick={() => navigateTo('/about')}
                className="group inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 text-white px-6 py-3 rounded-full font-semibold uppercase tracking-[0.15em] text-[11px] transition-all duration-300 hover:bg-white/10 cursor-pointer"
              >
                Our Philosophy
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Infinite Marquee Section at the bottom */}
      <div className="relative z-20 pb-6">
        <InfiniteMarquee />
      </div>

    </section>
  );
}
