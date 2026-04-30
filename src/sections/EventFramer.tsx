'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import Image from 'next/image';
import { Zap, Users, Coffee, Star, ArrowUpRight } from 'lucide-react';

export function EventFramer() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal className="max-w-3xl mb-16 lg:mb-20">
          <span className="text-primary text-xs font-medium tracking-[0.2em] uppercase block mb-4 underline underline-offset-8">The Experience</span>
          <h2 className="text-4xl md:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.05] mb-6">
            Why Attend{' '}
            <span className="text-primary italic">Networx.</span>
          </h2>
          <p className="text-text-secondary text-lg font-light leading-relaxed">
            Our events are more than just meetups. They are strategic gateways designed to help you scale your business and your network simultaneously.
          </p>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-5 auto-rows-[minmax(220px,auto)]">
          {/* Card 1 — Big stat: High Energy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="md:col-span-3 md:row-span-2 relative rounded-3xl overflow-hidden border border-slate-100 group bg-gradient-to-br from-primary to-blue-700 p-8 lg:p-10 flex flex-col justify-between text-white shadow-[0_20px_50px_rgba(37,99,235,0.18)] min-h-[440px]"
          >
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none bg-dot-pattern" />

            <div className="relative z-10 flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60">01 / Atmosphere</span>
            </div>

            <div className="relative z-10">
              <p className="text-white/70 text-sm font-medium uppercase tracking-[0.2em] mb-3">High Energy Mornings</p>
              <h3 className="text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.05] mb-5">
                Every meetup<br />
                <span className="italic font-light text-white/85">sparks new ideas.</span>
              </h3>
              <p className="text-white/70 text-base font-light leading-relaxed max-w-md">
                Dynamic conversations, ambitious peers, and a rhythm designed to fuel the rest of your week.
              </p>
            </div>
          </motion.div>

          {/* Card 2 — Stat tile: Curated Network */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-3 relative rounded-3xl overflow-hidden border border-slate-100 bg-bg-gray p-8 group hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                <Users className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-text-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
            </div>
            <div className="flex items-baseline gap-3 mb-3">
              <span className="text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight tabular-nums">100%</span>
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">Curated</span>
            </div>
            <h4 className="text-slate-900 font-semibold text-lg tracking-tight mb-1">Hand-selected attendees</h4>
            <p className="text-text-secondary text-sm font-light leading-relaxed">
              Every guest is a professional, founder, or industry leader — selected for impact.
            </p>
          </motion.div>

          {/* Card 3 — Image card: Premium Venues */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="md:col-span-2 relative rounded-3xl overflow-hidden border border-slate-100 group cursor-pointer min-h-[260px]"
          >
            <Image
              src="/images/toWEBP/1775159002011.webp"
              alt="Premium London venue"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute bottom-5 right-5 z-10">
              <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20">
                <Star className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="absolute bottom-5 left-5 right-5 z-10">
              <p className="text-white/70 text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Premium Venues</p>
              <h4 className="text-white font-semibold text-xl tracking-tight leading-tight">
                Mayfair, The Shard & beyond.
              </h4>
            </div>
          </motion.div>

          {/* Card 4 — Relaxed Vibe */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 relative rounded-3xl overflow-hidden border border-slate-100 bg-white p-8 group hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
          >
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
              <Coffee className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
            </div>
            <h4 className="text-slate-900 font-semibold text-xl tracking-tight mb-2">Relaxed Vibe</h4>
            <p className="text-text-secondary text-sm font-light leading-relaxed mb-5">
              No forced pitches. Just genuine connections over morning coffee in a welcoming space.
            </p>
            <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest">
              <span className="w-6 h-[1px] bg-primary" />
              Zero pressure
            </div>
          </motion.div>

          {/* Card 5 — Mini stat: Event count */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="md:col-span-2 relative rounded-3xl overflow-hidden border border-slate-100 bg-bg-gray p-8 flex flex-col justify-between group hover:border-primary/20 transition-all duration-500"
          >
            <p className="text-text-muted text-[10px] font-bold tracking-[0.2em] uppercase">By the numbers</p>
            <div>
              <span className="text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight tabular-nums block leading-none">
                12<span className="text-primary">+</span>
              </span>
              <p className="text-text-secondary text-sm font-light mt-3 leading-relaxed">
                Curated networking experiences hosted across London each year.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
