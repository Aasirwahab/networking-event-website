'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import './HistorySection.css';

const milestones = [
  {
    year: "2025",
    title: "The Beginning",
    description: "Networx London was founded with a simple mission: make networking human, relaxed, and genuinely enjoyable. Our first gathering brought together a small group of ambitious London professionals."
  },
  {
    year: "2025",
    title: "Growing Community",
    description: "Word spread quickly. Directors, founders, investors, and entrepreneurs started joining our monthly events, drawn by the relaxed format and real business outcomes."
  },
  {
    year: "2025",
    title: "Building Momentum",
    description: "Our community grew to include professionals from over 50 different industries, all connected by a shared belief that networking should be enjoyable."
  },
  {
    year: "NOW",
    title: "What's Next",
    description: "We're focused on growing our community while keeping every interaction as personal and meaning-driven as it was at our very first event."
  }
];

export function HistorySection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div
        className="history-section-bg"
        ref={(el) => { if (el) el.style.setProperty('--history-bg-image', `url('/images/london/8.webp')`); }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal className="text-center mb-20">
           <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase block mb-4 underline underline-offset-8">Our Journey</span>
           <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
             A Timeline of{' '}
             <span className="text-primary italic">Growth.</span>
           </h2>
        </ScrollReveal>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[2px] h-full bg-white/10 md:block hidden" />
          
          <div className="space-y-12 md:space-y-20">
            {milestones.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Year Bubble */}
                <div className="w-16 h-16 rounded-full bg-white/10 border-2 border-white/20 backdrop-blur-sm flex items-center justify-center text-primary font-bold text-sm tracking-widest z-10 flex-shrink-0 hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 hover:scale-110">
                  {m.year}
                </div>
                
                {/* Content Card */}
                <div className="flex-1 p-8 md:p-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all duration-500 relative group">
                  <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight group-hover:text-primary transition-colors">{m.title}</h3>
                  <p className="text-white/60 text-base font-light leading-relaxed">{m.description}</p>
                </div>
                
                {/* Visual Spacer for Desktop */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
