'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import Image from 'next/image';
import { Zap, Users, Coffee, Star } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: "High Energy",
    description: "Start your day with dynamic conversations that spark new ideas and fuel ambition."
  },
  {
    icon: Users,
    title: "Curated Network",
    description: "Every attendee is a professional, founder, or industry leader — hand-selected for impact."
  },
  {
    icon: Coffee,
    title: "Relaxed Vibe",
    description: "No forced pitches. Just genuine connections over morning coffee in a welcoming space."
  },
  {
    icon: Star,
    title: "Premium Venues",
    description: "Hosted at London's most iconic and inspiring locations across Mayfair and beyond."
  }
];

export function EventFramer() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <span className="text-primary text-xs font-medium tracking-[0.2em] uppercase block mb-4 underline underline-offset-8">The Experience</span>
            <h2 className="text-4xl md:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-8">
              Why Attend{' '}
              <span className="text-primary italic">Networx.</span>
            </h2>
            <p className="text-text-secondary text-lg font-light leading-relaxed max-w-lg mb-12">
              Our events are more than just meetups. They are strategic gateways designed to help you scale your business and your network simultaneously.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((benefit, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-5 rounded-2xl bg-bg-gray border border-slate-100 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 group"
                    >
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                            <benefit.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                        </div>
                        <h4 className="text-slate-900 font-semibold text-base tracking-tight mb-2">{benefit.title}</h4>
                        <p className="text-text-secondary text-sm font-light leading-relaxed">{benefit.description}</p>
                    </motion.div>
                ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="relative">
             <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden group shadow-xl shadow-slate-200/50">
                <Image 
                    src="/images/toWEBP/1775159002011.webp"
                    alt="Event atmosphere"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <a href="/gallery" className="px-6 py-3 bg-white/90 backdrop-blur-md border border-white/80 rounded-full text-slate-900 text-xs font-bold tracking-widest uppercase shadow-lg hover:bg-white transition-colors">
                        View Gallery
                    </a>
                </div>
             </div>
             
             {/* Decorative */}
             <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
