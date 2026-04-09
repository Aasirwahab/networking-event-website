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

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-30 bg-white overflow-hidden contain-strict">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="relative flex items-center justify-center min-h-[300px]">
          {/* Background Text with Image Mask */}
          <motion.div
            style={{ y: textY }}
            className="relative will-change-transform"
          >
            <h2 
              className="text-7xl sm:text-8xl lg:text-[140px] font-bold tracking-tight cta-text-mask"
            >
              JOIN US
            </h2>
          </motion.div>


        </ScrollReveal>
      </div>
    </section>
  );
}
