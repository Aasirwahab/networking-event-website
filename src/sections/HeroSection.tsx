'use client';

import Image from 'next/image';
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
    <section className="relative min-h-screen flex items-center pb-16 pt-[72px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {/* Date */}
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-2">
            <span className="text-white/90 text-sm font-medium">20-30th</span>
            <span className="text-white/60 text-sm">of December</span>
          </motion.div>

          {/* Location */}
          <motion.p variants={itemVariants} className="text-white/80 text-sm mb-6">
            New Jersey, USA
          </motion.p>

          {/* Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-hero font-semibold text-white leading-tight mb-8"
          >
            Innovating Event Experiences for Global Connections
          </motion.h1>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <a
              href="#tickets"
              className="group inline-flex items-center gap-3 bg-white text-dark px-10 py-4 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs transition-all duration-300 hover:bg-primary hover:text-white hover:scale-[1.03] hover:shadow-[0_20px_40px_rgba(37,99,235,0.2)]"
            >
              Get Tickets
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Infinite Marquee Section */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <InfiniteMarquee />
      </div>

    </section>
  );
}
