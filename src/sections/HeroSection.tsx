'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { InfiniteMarquee } from '@/components/InfiniteMarquee';
import { usePageTransition } from '@/components/TransitionProvider';
import Intro, { INTRO_END_DELAY_SEC } from '@/components/Intro';

const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: INTRO_END_DELAY_SEC,
    },
  },
};

const heroItemVariants = {
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
      {/* Intro sequence acting as the background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Intro />
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center sm:items-start sm:justify-start pt-20 sm:pt-[25vh] relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <motion.div
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl text-center sm:text-left mx-auto sm:mx-0"
          >
            {/* Tagline */}
            <motion.div variants={heroItemVariants} className="mb-2 sm:mb-3">
              <span className="text-primary text-[10px] sm:text-[13px] font-medium tracking-[0.18em] sm:tracking-[0.2em] uppercase">
                London&apos;s Premier Professional Network.
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={heroItemVariants}
              className="text-left text-[34px] sm:text-[44px] lg:text-[52px] font-bold text-white tracking-tight leading-[1.05] sm:leading-[1.1] mb-4 sm:mb-5"
            >
              Meaningful Connections<br />
              For Visionary Leaders
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={heroItemVariants}
              className="text-left text-[14px] sm:text-[15px] text-white/60 max-w-full sm:max-w-md mb-5 sm:mb-8 font-light leading-[1.6] sm:leading-[1.7]"
            >
              Bringing together directors, CEOs, entrepreneurs, founders, and investors for relaxed, high-value networking sessions. Scale your business and spark genuine partnerships in London.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={heroItemVariants} className="flex flex-row items-center justify-center sm:justify-start gap-3 w-full max-w-[340px] mx-auto sm:mx-0 sm:max-w-none sm:w-auto">
              <button
                onClick={() => navigateTo('/events')}
                className="group inline-flex flex-1 sm:flex-none items-center justify-center gap-2 bg-primary text-white px-4 sm:px-6 py-3 rounded-full font-semibold uppercase tracking-[0.15em] text-[10px] sm:text-[11px] whitespace-nowrap transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_30px_rgba(37,99,235,0.25)] cursor-pointer"
              >
                Explore Events
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
              <button
                onClick={() => navigateTo('/about')}
                className="group inline-flex flex-1 sm:flex-none items-center justify-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 text-white px-4 sm:px-6 py-3 rounded-full font-semibold uppercase tracking-[0.15em] text-[10px] sm:text-[11px] whitespace-nowrap transition-all duration-300 hover:bg-white/10 cursor-pointer"
              >
                Our Philosophy
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Infinite Marquee Section at the bottom */}
      <motion.div 
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={heroItemVariants} className="relative z-20 pb-6">
          <InfiniteMarquee />
        </motion.div>
      </motion.div>

    </section>
  );
}
