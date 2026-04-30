'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';

export function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-36 bg-white overflow-hidden contain-strict">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="relative flex flex-col items-center justify-center min-h-[300px] text-center">
          <span className="text-primary text-xs font-medium tracking-[0.3em] uppercase block mb-6 underline underline-offset-8">
            Ready when you are
          </span>

          {/* Headline with image-masked text + dark fallback */}
          <motion.div
            style={{ y: textY }}
            className="relative will-change-transform"
          >
            <h2 className="text-7xl sm:text-8xl lg:text-[160px] font-semibold tracking-tighter leading-none cta-text-mask">
              JOIN US
            </h2>
          </motion.div>

          <p className="mt-8 max-w-xl text-text-secondary text-lg font-light leading-relaxed">
            Reserve a seat at the next gathering. Small rooms, real conversations, lasting connections.
          </p>

          <a
            href="/events"
            className="group mt-10 inline-flex items-center gap-3 bg-primary text-white px-9 py-4 rounded-full font-semibold text-xs tracking-[0.2em] uppercase hover:scale-105 hover:shadow-[0_15px_40px_rgba(37,99,235,0.3)] transition-all duration-300"
          >
            See Upcoming Events
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
