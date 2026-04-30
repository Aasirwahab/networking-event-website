'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { events } from '@/data/content';
import { MapPin, Clock, ArrowRight, Sparkles } from 'lucide-react';

const seatData = [
  { remaining: 3, total: 30 },
  { remaining: 8, total: 25 },
  { remaining: 12, total: 20 },
  { remaining: 5, total: 28 },
];

export function EventSchedule() {
  const featured = events[0];
  const featuredSeats = seatData[0];
  const rest = events.slice(1);

  return (
    <section className="py-24 lg:py-32 bg-bg-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mb-14 md:flex md:items-end md:justify-between gap-10">
          <div>
            <span className="text-primary text-xs font-medium tracking-[0.2em] uppercase block mb-4 underline underline-offset-8">Upcoming Summits</span>
            <h2 className="text-4xl md:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.05]">
              The London{' '}
              <span className="text-primary italic">Calendar.</span>
            </h2>
          </div>
          <p className="hidden md:block text-text-secondary text-base font-light leading-relaxed max-w-sm">
            Reserve your seat early — our gatherings are intentionally small so every conversation lands.
          </p>
        </ScrollReveal>

        {/* Featured next event */}
        {featured && (
          <ScrollReveal>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="group relative bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 rounded-3xl overflow-hidden mb-8 cursor-pointer shadow-[0_25px_60px_rgba(15,23,42,0.18)]"
            >
              {/* Glow accents */}
              <div className="absolute -top-32 -right-20 w-96 h-96 bg-primary/30 blur-[120px] rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/15 blur-[120px] rounded-full pointer-events-none" />
              <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none bg-dot-pattern-lg" />

              <div className="relative z-10 p-8 md:p-12 grid lg:grid-cols-[auto_1fr_auto] gap-10 items-center">
                {/* Date Block */}
                <div className="flex items-center gap-5">
                  <div className="flex flex-col items-center justify-center w-24 h-24 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/10">
                    <span className="text-primary text-[10px] font-bold uppercase tracking-[0.25em] leading-none mb-1.5">May</span>
                    <span className="text-white text-4xl font-semibold leading-none tracking-tight">12</span>
                  </div>
                  <div className="lg:hidden">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase text-blue-200 tracking-widest border border-primary/30">
                      <Sparkles className="w-3 h-3" />
                      Next Up
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-4">
                  <div className="hidden lg:flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase text-blue-200 tracking-widest border border-primary/30">
                      <Sparkles className="w-3 h-3" />
                      Next Up
                    </span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase text-white/80 tracking-widest border border-white/10">
                      {featured.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-white/50 text-[10px] font-medium uppercase tracking-widest">
                      <Clock className="w-3 h-3" />
                      {featured.date}
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-tight max-w-xl">
                    {featured.title}
                  </h3>

                  <p className="text-white/60 text-base font-light leading-relaxed max-w-xl">
                    {featured.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-5 pt-2">
                    <div className="flex items-center gap-2 text-white/70 text-sm font-light">
                      <MapPin className="w-4 h-4 text-primary" />
                      {featured.location}
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="flex -space-x-2">
                        {Array.from({ length: 4 }).map((_, i) => (
                          <div key={i} className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-primary border-2 border-slate-900" />
                        ))}
                      </div>
                      <span className="text-white/60 text-xs font-medium">
                        {featuredSeats.total - featuredSeats.remaining} attending
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col items-start lg:items-end gap-4">
                  <div className="text-left lg:text-right">
                    <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mb-1.5">Availability</p>
                    <p className="text-white text-2xl font-semibold tracking-tight leading-none">
                      {featuredSeats.remaining}<span className="text-white/40 text-base font-light"> / {featuredSeats.total}</span>
                    </p>
                    <p className="text-amber-300 text-[10px] font-bold uppercase tracking-widest mt-1.5">Spots Left</p>
                  </div>
                  <button className="group/btn inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3.5 rounded-full font-semibold text-xs tracking-[0.15em] uppercase hover:bg-primary hover:text-white transition-all duration-300">
                    Reserve Seat
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        )}

        {/* Remaining events */}
        <div className="space-y-4">
          {rest.map((event, index) => {
            const seats = seatData[index + 1];
            const lowSeats = seats.remaining <= 5;
            const dayNumber = 13 + index;
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group relative bg-white border border-slate-100 rounded-2xl p-6 md:p-7 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer"
              >
                <div className="flex-1 flex gap-5 items-start">
                  <div className="hidden lg:flex flex-col items-center justify-center w-[68px] h-[68px] rounded-2xl bg-primary/8 group-hover:bg-primary transition-all duration-500 flex-shrink-0">
                    <p className="text-primary group-hover:text-white/80 text-[10px] font-bold uppercase tracking-[0.2em] leading-none mb-1 transition-colors">May</p>
                    <p className="text-primary group-hover:text-white text-2xl font-semibold leading-none tracking-tight transition-colors">{dayNumber}</p>
                  </div>

                  <div className="flex-1 space-y-2.5 min-w-0">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="px-2.5 py-1 bg-primary/10 rounded-full text-[10px] font-bold uppercase text-primary tracking-widest">
                        {event.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-text-muted text-[10px] font-medium uppercase tracking-widest">
                        <Clock className="w-3 h-3" />
                        {event.date}
                      </div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight group-hover:text-primary transition-colors leading-tight">
                      {event.title}
                    </h3>

                    <div className="flex items-center gap-2 text-text-secondary text-sm font-light">
                      <MapPin className="w-4 h-4 text-primary" />
                      {event.location}
                    </div>
                  </div>
                </div>

                {/* Action */}
                <div className="flex items-center gap-5 md:pl-5 md:border-l border-slate-100">
                  <div className="text-right hidden sm:block">
                    <p className="text-text-muted text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Spots Left</p>
                    <p className={`font-semibold text-lg tracking-tight leading-none ${lowSeats ? 'text-amber-600' : 'text-slate-900'}`}>
                      {seats.remaining}<span className="text-text-muted text-xs font-light"> / {seats.total}</span>
                    </p>
                    {lowSeats && (
                      <p className="text-amber-600 text-[9px] font-bold uppercase tracking-widest mt-1">Almost Full</p>
                    )}
                  </div>
                  <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:scale-110 transition-all duration-500 flex-shrink-0">
                    <ArrowRight className="w-5 h-5 text-text-muted group-hover:text-white transition-colors" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
