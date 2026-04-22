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
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <ScrollReveal>
             <span className="text-primary text-xs font-medium tracking-[0.2em] uppercase block mb-4 underline underline-offset-8">Our Philosophy</span>
             <h2 className="text-4xl md:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-8">
               The Art of{' '}
               <span className="text-primary italic">Connection.</span>
             </h2>
             <p className="text-text-secondary text-lg font-light leading-relaxed max-w-lg mb-12">
               Founded in 2025, Networx London was born from a simple realization: networking has become too formal and transactional. We&apos;re here to restore the human element.
             </p>
             
             <div className="space-y-5">
                {values.map((v, i) => (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-5 group p-5 rounded-2xl bg-bg-gray border border-slate-100 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500"
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

          <ScrollReveal delay={0.2} className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative group shadow-xl shadow-slate-200/50">
              <Image
                src="/images/toWEBP/1774468095390.webp"
                alt="Networx London members having genuine conversations"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-xl border border-white/80 rounded-2xl shadow-xl">
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
            
            {/* Decorative dot pattern */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
