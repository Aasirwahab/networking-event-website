'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { events } from '@/data/content';

export function EventsSection() {
  const container = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section 
      id="events" 
      ref={container} 
      className="relative py-20 lg:py-30 overflow-hidden clip-parallax"
    >
      <div className='fixed top-[-10vh] left-0 h-[120vh] w-full z-0 pointer-events-none'>
        <motion.div style={{ y }} className='relative w-full h-full'>
          <Image 
            src="/images/hero-concert.jpg" 
            fill 
            alt="Events background image" 
            className="object-cover" 
            sizes="100vw" 
            quality={90} 
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-12">
          <span className="text-text-muted text-xs font-medium tracking-[0.2em] uppercase mb-4 block">
            EVENTS
          </span>
          <h2 className="text-3xl lg:text-section font-semibold text-white">
            Upcoming Events
          </h2>
        </ScrollReveal>

        {/* Events List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-0"
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              className="group border-b border-dark-border py-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                {/* Date & Location */}
                <div className="md:col-span-3">
                  <p className="text-white text-lg font-medium">{event.date}</p>
                  <p className="text-text-muted text-sm">{event.location}</p>
                </div>

                {/* Title & Description */}
                <div className="md:col-span-7">
                  <h3 className="text-white text-xl font-semibold mb-1">
                    {event.title}
                  </h3>
                  <p className="text-text-muted text-sm mb-2">{event.category}</p>
                  {event.description && (
                    <p className="text-text-muted text-sm leading-relaxed">
                      {event.description}
                    </p>
                  )}
                </div>

                {/* Button */}
                <div className="md:col-span-2 flex justify-start md:justify-end">
                  <a
                    href={`#event-${event.id}`}
                    className="group/btn inline-flex items-center gap-2 border border-white/30 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white hover:text-dark"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <ScrollReveal delay={0.4} className="text-center mt-12">
          <a
            href="#all-events"
            className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-[1.02]"
          >
            View All Event
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
