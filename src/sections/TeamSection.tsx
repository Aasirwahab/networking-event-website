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

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {communityMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-2xl mb-4 shadow-lg shadow-slate-200/60">
                <motion.div
                  className="relative w-full aspect-[3/4]"
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
                </motion.div>
              </div>

              {/* Info */}
              <div className="flex items-start justify-between px-1">
                <div>
                  <p className="text-text-muted text-xs font-medium uppercase tracking-wider mb-1">{member.role}</p>
                  <h4 className="text-slate-900 font-semibold text-lg">{member.name}</h4>
                </div>
                <div className="flex gap-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-full bg-slate-100 hover:bg-primary/10 flex items-center justify-center transition-colors">
                    <Linkedin className="w-3.5 h-3.5 text-text-muted hover:text-primary transition-colors" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-100 hover:bg-primary/10 flex items-center justify-center transition-colors">
                    <Twitter className="w-3.5 h-3.5 text-text-muted hover:text-primary transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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
