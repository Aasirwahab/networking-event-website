'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { testimonials } from '@/data/content';

export function SpeakersSection() {
  const featured = testimonials[0];
  const rest = testimonials.slice(1);

  return (
    <section id="speakers" className="py-24 lg:py-32 bg-bg-gray relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/30 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-xs font-medium tracking-[0.2em] uppercase block mb-4 underline underline-offset-8">
            Member Voices
          </span>
          <h2 className="text-4xl md:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.05] mb-5">
            Words from{' '}
            <span className="text-primary italic">the room.</span>
          </h2>
          <p className="text-text-secondary text-lg font-light leading-relaxed">
            Real experiences from London founders, directors, and investors who&apos;ve made Networx part of their week.
          </p>
        </ScrollReveal>

        {/* Featured testimonial + grid */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Featured large card */}
          <ScrollReveal className="lg:col-span-7">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative h-full rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 p-8 md:p-10 lg:p-12 overflow-hidden shadow-[0_25px_60px_rgba(15,23,42,0.18)]"
            >
              <div className="absolute -top-32 -right-20 w-96 h-96 bg-primary/30 blur-[120px] rounded-full pointer-events-none" />
              <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />

              <div className="relative z-10 flex flex-col h-full">
                <Quote className="w-12 h-12 text-primary/60 mb-8" strokeWidth={1.5} />

                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-2 text-white/60 text-xs font-medium uppercase tracking-widest">
                    Featured Story
                  </span>
                </div>

                <p className="text-white text-2xl md:text-3xl font-light leading-relaxed tracking-tight mb-10 flex-1">
                  &ldquo;{featured.content}&rdquo;
                </p>

                <div className="flex items-center justify-between gap-4 pt-8 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-primary flex items-center justify-center text-white font-semibold text-lg flex-shrink-0">
                      {featured.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-base tracking-tight">
                        {featured.author}
                      </p>
                      <p className="text-white/50 text-sm font-light">
                        {featured.location}
                      </p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase text-white/80 tracking-widest border border-white/10">
                    {featured.title}
                  </span>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Stacked smaller cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {rest.map((t, i) => (
              <ScrollReveal key={t.id} delay={0.1 + i * 0.08} className="flex-1">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  className="group h-full bg-white border border-slate-100 rounded-3xl p-7 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <h4 className="text-slate-900 font-semibold text-base tracking-tight mb-2 group-hover:text-primary transition-colors">
                    {t.title}
                  </h4>
                  <p className="text-text-secondary text-sm font-light leading-relaxed mb-5 line-clamp-3">
                    &ldquo;{t.content}&rdquo;
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-primary flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                      {t.author.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <p className="text-slate-900 font-semibold text-sm tracking-tight truncate">
                        {t.author}
                      </p>
                      <p className="text-text-muted text-xs font-light truncate">
                        {t.location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
