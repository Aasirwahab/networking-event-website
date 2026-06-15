'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { events } from '@/data/content';
import { staggerContainer, fadeSlideUp, viewportOnce } from '@/lib/motion';

export function EventsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section
      id="events"
      ref={sectionRef}
      className="relative py-20 lg:py-30 overflow-hidden contain-paint"
    >
      <motion.div
        className="absolute inset-[-20%] z-0 will-change-transform"
        style={{ y }}
      >
        <Image
          src="/images/london/11.webp"
          fill
          alt="Events background image"
          className="object-cover"
          sizes="100vw"
          quality={75}
        />
        {/* Cinematic Dark Overlay — gradient keeps the header/footer ends dark
            (where the photo is brightest on mobile's taller crop) while leaving
            the mid-section readable on desktop. */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/85 md:bg-black/70 md:bg-none" />
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
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-4 md:space-y-0"
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={fadeSlideUp}
              className="group rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-lg transition-colors hover:bg-white/[0.09] md:rounded-none md:border-x-0 md:border-t-0 md:bg-transparent md:p-0 md:py-10 md:backdrop-blur-none md:hover:bg-white/[0.02]"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start">
                {/* Date & Location */}
                 <div className="md:col-span-3">
                   <p className="text-white text-lg md:text-xl font-black tracking-tight">{event.date}</p>
                   <p className="text-white/40 text-sm font-medium uppercase tracking-wider">{event.location}</p>
                 </div>

                {/* Title & Description */}
                 <div className="md:col-span-7">
                   <h3 className="text-white text-xl md:text-2xl font-black tracking-tight mb-2 group-hover:text-primary transition-colors">
                     {event.title}
                   </h3>
                   <p className="text-primary text-[10px] font-bold uppercase tracking-widest mb-3">{event.category}</p>
                   {event.description && (
                     <p className="text-white/60 text-sm md:text-base leading-relaxed font-light">
                       {event.description}
                     </p>
                   )}
                 </div>

                {/* Button */}
                 <div className="md:col-span-2 flex justify-start md:justify-end">
                   <a
                     href={`/events/${event.slug}`}
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
             href="/events"
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
