'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { events } from '@/data/content';

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

export function EventsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section
      id="events"
      ref={sectionRef}
      className="relative py-20 lg:py-30 overflow-hidden"
      style={{ contain: 'layout style paint' }}
    >
      <motion.div
        className="absolute inset-[-15%] z-0 will-change-transform"
        style={{ y }}
      >
        <Image
          src="/images/london/11.png"
          fill
          alt="Events background image"
          className="object-cover"
          sizes="100vw"
          quality={75}
        />
        {/* Cinematic Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-12">
          <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4 block underline underline-offset-8">
            EVENTS
          </span>
          <h2 className="text-4xl lg:text-section font-black text-white tracking-tighter">
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
              className="group border-b border-white/10 py-10 transition-colors hover:bg-white/[0.02]"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                {/* Date & Location */}
                 <div className="md:col-span-3">
                   <p className="text-white text-xl font-black tracking-tight">{event.date}</p>
                   <p className="text-white/40 text-sm font-medium uppercase tracking-wider">{event.location}</p>
                 </div>

                {/* Title & Description */}
                 <div className="md:col-span-7">
                   <h3 className="text-white text-2xl font-black tracking-tight mb-2 group-hover:text-primary transition-colors">
                     {event.title}
                   </h3>
                   <p className="text-primary text-[10px] font-bold uppercase tracking-widest mb-3">{event.category}</p>
                   {event.description && (
                     <p className="text-white/60 text-base leading-relaxed font-light">
                       {event.description}
                     </p>
                   )}
                 </div>

                {/* Button */}
                 <div className="md:col-span-2 flex justify-start md:justify-end">
                   <a
                     href={`#event-${event.id}`}
                     className="group/btn inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-white hover:text-slate-900 hover:border-white hover:shadow-lg hover:scale-105"
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
             className="group inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_30px_rgba(37,99,235,0.3)]"
           >
             View All Events
             <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
           </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
