'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Heart, Zap, Coffee } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: "Human First",
    description: "We strip away the corporate masks. Networx is built on genuine human connection and shared vulnerability."
  },
  {
    icon: Coffee,
    title: "Relaxed Environment",
    description: "The best ideas don't happen in boardrooms. They happen in relaxed settings where genuine dialogue thrives."
  },
  {
    icon: Zap,
    title: "Valuable Connections",
    description: "Relaxed doesn't mean low-value. We bring together a diverse mix of London's most driven professionals."
  }
];

export function VisionSection() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left column */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <span className="text-primary text-xs font-medium tracking-[0.2em] uppercase block mb-4 underline underline-offset-8">Our Philosophy</span>
              <h2 className="text-4xl md:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.05] mb-6">
                The Art of{' '}
                <span className="text-primary italic">Connection.</span>
              </h2>
              <p className="text-text-secondary text-lg font-light leading-relaxed max-w-xl mb-10">
                Founded in 2025, Networx London was born from a simple realization: networking has become too formal and transactional. We&apos;re here to restore the human element.
              </p>

              {/* Inline mini-stats */}
              <div className="grid grid-cols-3 gap-4 mb-10 pb-10 border-b border-slate-100">
                <div>
                  <p className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight tabular-nums">2025</p>
                  <p className="text-text-muted text-[10px] font-bold uppercase tracking-[0.15em] mt-1">Founded</p>
                </div>
                <div>
                  <p className="text-3xl lg:text-4xl font-semibold text-primary tracking-tight tabular-nums">50<span className="text-2xl">+</span></p>
                  <p className="text-text-muted text-[10px] font-bold uppercase tracking-[0.15em] mt-1">Industries</p>
                </div>
                <div>
                  <p className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight tabular-nums">500<span className="text-2xl">+</span></p>
                  <p className="text-text-muted text-[10px] font-bold uppercase tracking-[0.15em] mt-1">Members</p>
                </div>
              </div>

              <div className="space-y-4">
                {values.map((v, i) => (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-5 group p-5 rounded-2xl bg-bg-gray border border-slate-100 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5 transition-all duration-500"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                      <v.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-semibold text-lg mb-1">{v.title}</h4>
                      <p className="text-text-secondary text-sm font-light leading-relaxed">{v.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right column */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <ScrollReveal delay={0.2} className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden relative group shadow-xl shadow-slate-200/50">
                <Image
                  src="/images/toWEBP/1774468095390.webp"
                  alt="Networx London members having genuine conversations"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/95 backdrop-blur-xl border border-white/80 rounded-2xl shadow-xl">
                  <p className="text-slate-800 text-sm italic font-medium leading-relaxed">
                    &ldquo;The most valuable professional relationships start with a simple &lsquo;How&apos;s your morning going?&rsquo; rather than an elevator pitch.&rdquo;
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    <div>
                      <p className="text-slate-900 text-[10px] font-bold uppercase tracking-widest">Networx London</p>
                      <p className="text-text-muted text-[9px] uppercase tracking-widest leading-none">Established 2025</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating mini quote-card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="hidden lg:flex absolute -left-12 top-12 bg-white border border-slate-100 rounded-2xl shadow-2xl shadow-slate-300/30 px-5 py-4 items-center gap-3 max-w-[220px]"
              >
                <div className="flex -space-x-2">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-primary border-2 border-white" />
                  ))}
                </div>
                <div>
                  <p className="text-slate-900 text-xs font-semibold leading-tight">Active community</p>
                  <p className="text-text-muted text-[10px] font-light leading-tight">Joined this month</p>
                </div>
              </motion.div>

              {/* Decorative dot pattern */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
