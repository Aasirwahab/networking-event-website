'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import Image from 'next/image';
import { communityMembers } from '@/data/content';
import { Linkedin, Twitter, ExternalLink } from 'lucide-react';

export function TeamSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-bg-gray">
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute -top-40 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
           <span className="text-primary text-xs font-medium tracking-[0.2em] uppercase block mb-4 underline underline-offset-8">Our Community</span>
           <h2 className="text-4xl md:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6">
             Who{' '}
             <span className="text-primary italic">Attends.</span>
           </h2>
           <p className="text-text-secondary text-lg font-light leading-relaxed max-w-2xl mx-auto">
             A diverse mix of company directors, CEOs, entrepreneurs, founders, startups, small business owners, investors, and working professionals.
           </p>
        </ScrollReveal>

        {/* Team Grid — staggered heights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {communityMembers.map((member, index) => {
            // Staggered aspect ratios for rhythm
            const aspectClasses = [
              'aspect-[3/4]',
              'aspect-[3/4] lg:mt-12',
              'aspect-[3/4]',
              'aspect-[3/4] lg:mt-12',
            ];
            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ y: -10 }}
                className={`group cursor-pointer ${index % 2 === 1 ? 'lg:mt-12' : ''}`}
              >
                {/* Image */}
                <div className="overflow-hidden rounded-2xl mb-4 shadow-lg shadow-slate-200/60 relative">
                  <motion.div
                    className={`relative w-full ${aspectClasses[index] || 'aspect-[3/4]'}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="flex gap-2">
                        <button aria-label={`${member.name} on LinkedIn`} className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/20 hover:bg-primary hover:border-primary flex items-center justify-center transition-colors">
                          <Linkedin className="w-4 h-4 text-white" />
                        </button>
                        <button aria-label={`${member.name} on Twitter`} className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/20 hover:bg-primary hover:border-primary flex items-center justify-center transition-colors">
                          <Twitter className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Info */}
                <div className="px-1">
                  <p className="text-text-muted text-[10px] font-bold uppercase tracking-[0.15em] mb-1.5">{member.role}</p>
                  <h4 className="text-slate-900 font-semibold text-lg tracking-tight group-hover:text-primary transition-colors">{member.name}</h4>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* CTA */}
        <ScrollReveal delay={0.4} className="mt-16 text-center">
          <a href="/events" className="group inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-semibold uppercase tracking-[0.15em] text-xs transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_30px_rgba(37,99,235,0.25)]">
             JOIN OUR NEXT EVENT
             <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
