'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';

const milestones = [
  {
    year: "2025",
    title: "The Beginning",
    description: "Networx London was founded with a simple mission: make networking human, relaxed, and genuinely enjoyable. Our first breakfast brought together a small group of London professionals."
  },
  {
    year: "2025",
    title: "Growing Community",
    description: "Word spread quickly. Directors, founders, investors, and entrepreneurs started joining our monthly breakfasts, drawn by the relaxed format and real conversations."
  },
  {
    year: "2025",
    title: "Building Momentum",
    description: "Our community grew to include professionals from over 50 different industries, all connected by a shared belief that networking should be enjoyable."
  },
  {
    year: "NOW",
    title: "What's Next",
    description: "We're focused on growing our community while keeping every interaction as personal and meaningful as it was at our very first breakfast."
  }
];

export function HistorySection() {
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-24">
           <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase block mb-4 underline underline-offset-4">Our Journey</span>
           <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-8">
             A TIMELINE OF <br />
             <span className="text-white/20">GROWTH.</span>
           </h2>
        </ScrollReveal>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[1px] h-full bg-white/5 md:block hidden" />
          
          <div className="space-y-12 md:space-y-32">
            {milestones.map((m, i) => (
              <motion.div 
                key={m.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Year Bubble */}
                <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary font-black text-lg tracking-widest z-10 flex-shrink-0 group hover:bg-primary hover:border-primary transition-all duration-500 hover:scale-110">
                  {m.year}
                </div>
                
                {/* Content Card */}
                <div className={`flex-1 p-8 md:p-12 rounded-[40px] bg-white/[0.03] border border-white/5 backdrop-blur-3xl hover:bg-white/5 transition-all duration-500 relative group`}>
                  <div className={`absolute top-1/2 -translate-y-1/2 ${i % 2 === 0 ? '-right-4' : '-left-4'} w-8 h-8 rotate-45 bg-white/[0.03] border-t border-r border-white/5 md:block hidden`} />
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tighter leading-none group-hover:text-primary transition-colors">{m.title}</h3>
                  <p className="text-white/30 text-sm md:text-lg font-light leading-relaxed max-w-xl">{m.description}</p>
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
