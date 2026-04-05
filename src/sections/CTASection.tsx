'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';

export function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const buttonY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={sectionRef} className="py-20 lg:py-30 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="relative flex items-center justify-center min-h-[300px]">
          {/* Background Text with Image Mask */}
          <motion.div 
            style={{ y: textY }}
            className="relative"
          >
            <h2 
              className="text-7xl sm:text-8xl lg:text-[140px] font-bold tracking-tight"
              style={{
                backgroundImage: 'url(/images/hero-bg.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                WebkitTextFillColor: 'transparent',
              }}
            >
              JOIN US
            </h2>
          </motion.div>

          {/* Floating Button */}
          <motion.div
            style={{ y: buttonY }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center justify-center w-28 h-28 lg:w-36 lg:h-36 bg-primary rounded-full text-white text-center text-sm lg:text-base font-medium shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <span className="leading-tight">
                Book Your<br />Breakfast
              </span>
            </motion.a>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
