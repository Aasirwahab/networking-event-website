'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { ScrollReveal } from '@/components/ScrollReveal';

export function VenueSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={containerRef} className="relative h-[80vh] lg:h-[100vh] w-full flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0 h-[120%]"
      >
        <Image
          src="/images/gallery-2.png"
          alt="Premium London Venue"
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Luxury Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/40 to-dark/80" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <span className="text-primary font-medium tracking-[0.3em] uppercase mb-6 block text-sm lg:text-base">
            London, SW15
          </span>
          <h2 className="text-4xl lg:text-7xl font-light tracking-tight text-white mb-8">
            Where London <br />
            <span className="font-medium italic">Professionals Connect</span>
          </h2>
          <p className="text-white/80 text-lg lg:text-2xl max-w-2xl mx-auto font-light leading-relaxed">
            Our breakfast networking events take place at carefully selected venues across London, designed for comfortable conversation and genuine connection.
          </p>
        </ScrollReveal>
      </div>
      
      {/* Visual Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent" />
    </section>
  );
}
