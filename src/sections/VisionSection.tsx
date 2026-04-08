'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Utensils, Heart, Zap, Coffee } from 'lucide-react';

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
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
             <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase block mb-4">Our Philosophy</span>
             <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none mb-8">
               THE ART OF <br />
               <span className="text-slate-200">CONNECTION.</span>
             </h2>
             <p className="text-slate-500 text-lg font-light leading-relaxed max-w-lg mb-10">
               Founded in 2025, Networx London was born from a simple realization: networking has become too formal, too transactional, and frankly, too boring. We're here to change that.
             </p>
             
             <div className="space-y-8">
                {values.map((v, i) => (
                  <motion.div 
                    key={v.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                      <v.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold text-lg mb-1">{v.title}</h4>
                      <p className="text-slate-500 text-sm font-light max-w-xs leading-relaxed">{v.description}</p>
                    </div>
                  </motion.div>
                ))}
             </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="relative">
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden border border-slate-100 relative group shadow-2xl">
              <Image
                src="/images/about-1.jpg"
                alt="Networx London members having genuine conversations at an exclusive networking event"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/90 backdrop-blur-xl border border-slate-200 rounded-3xl shadow-xl">
                <p className="text-slate-800 text-sm italic font-medium leading-relaxed">
                  "The most valuable professional relationships start with a simple 'How's your morning going?' rather than an elevator pitch."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary" />
                  <div>
                    <p className="text-slate-900 text-[10px] font-bold uppercase tracking-widest">Networx London</p>
                    <p className="text-slate-400 text-[9px] uppercase tracking-widest leading-none">Our Philosophy</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Float Decor */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
