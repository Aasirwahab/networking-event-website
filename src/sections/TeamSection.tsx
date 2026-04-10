'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import Image from 'next/image';
import { communityMembers } from '@/data/content';
import { Linkedin, Twitter, ExternalLink } from 'lucide-react';

export function TeamSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0F1F52] via-[#1E3A8A] to-[#1D4ED8]">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-40 left-1/4 w-[600px] h-[600px] bg-blue-400/20 blur-[160px] rounded-full" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 w-[600px] h-[600px] bg-indigo-500/20 blur-[160px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center mb-20">
           <span className="text-blue-200 text-xs font-bold tracking-[0.4em] uppercase block mb-4 underline underline-offset-8">Our Community</span>
           <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-8">
             WHO <br />
             <span className="text-white/30">ATTENDS.</span>
           </h2>
           <p className="text-blue-100/80 text-lg font-light leading-relaxed max-w-2xl mx-auto">
             A diverse mix of company directors, CEOs, entrepreneurs, founders, startups, small business owners, investors, and working professionals.
           </p>
        </ScrollReveal>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {communityMembers.map((member, index) => (
            <motion.div 
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-[32px] border border-white/15 bg-white/5 shadow-xl shadow-blue-950/40 transition-all duration-700 group-hover:scale-[1.02] group-hover:bg-white/10 group-hover:border-white/30">
                <Image 
                  src={member.image} 
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Overlay Text */}
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                  <h4 className="text-white font-bold text-xl tracking-tight mb-1">{member.name}</h4>
                  <p className="text-blue-200 text-[10px] font-bold uppercase tracking-widest">{member.role}</p>
                </div>
                
                {/* Social Links (Hover) */}
                <div className="absolute top-6 right-6 flex flex-col gap-3 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/40 hover:text-white transition-all">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/40 hover:text-white transition-all">
                    <Twitter className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Recruitment CTA */}
        <ScrollReveal delay={0.4} className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-5 bg-white/10 border border-white/25 backdrop-blur-md rounded-3xl hover:bg-white hover:text-blue-900 transition-colors cursor-pointer group">
             <span className="text-white font-black text-xs uppercase tracking-widest leading-none group-hover:text-blue-900">JOIN OUR NEXT EVENT</span>
             <ExternalLink className="w-4 h-4 text-blue-200 group-hover:text-blue-900 group-hover:scale-125 transition-all" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
