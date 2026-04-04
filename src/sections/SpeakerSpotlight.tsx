'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { speakers } from '@/data/content';
import Image from 'next/image';
import { Linkedin, Twitter, MessageSquare, Mic2 } from 'lucide-react';

export function SpeakerSpotlight() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mb-20">
           <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase block mb-4 underline underline-offset-8">The Visionaries</span>
           <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-8">
             VOICES OF <br />
             <span className="text-white/20">LONDON.</span>
           </h2>
           <p className="text-white/30 text-lg font-light leading-relaxed max-w-2xl">
             We bring together the most influential minds in London's tech, finance, and creative landscapes to share raw, unscripted insights.
           </p>
        </ScrollReveal>

        {/* Cinematic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {speakers.slice(0, 2).map((speaker, index) => (
            <motion.div 
              key={speaker.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group relative h-[500px] md:h-[600px] rounded-[48px] overflow-hidden border border-white/5 bg-white/5"
            >
              <Image 
                src={speaker.image} 
                alt={speaker.name}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale hover:grayscale-0"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-10 left-10 right-10">
                 <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary/20 backdrop-blur-md rounded-full text-[9px] font-black uppercase text-primary tracking-widest border border-primary/20">
                       Keynote Speaker
                    </span>
                 </div>
                 
                 <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-2 group-hover:text-primary transition-colors">
                   {speaker.name}
                 </h3>
                 <p className="text-white/40 text-sm font-bold uppercase tracking-[0.2em] mb-6">
                   {speaker.role}
                 </p>
                 
                 <div className="flex items-center gap-6">
                    <button className="flex items-center gap-2 text-white text-[10px] font-black uppercase tracking-widest hover:text-primary transition-colors">
                       <MessageSquare className="w-4 h-4" />
                       View Bio
                    </button>
                    <div className="flex items-center gap-3">
                       <Linkedin className="w-4 h-4 text-white/20 hover:text-white transition-colors cursor-pointer" />
                       <Twitter className="w-4 h-4 text-white/20 hover:text-white transition-colors cursor-pointer" />
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {speakers.slice(2).map((speaker, index) => (
            <motion.div 
               key={speaker.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: index * 0.1 }}
               className="group relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/5 bg-white/5 hover:border-primary/30 transition-all duration-500"
            >
               <Image 
                 src={speaker.image} 
                 alt={speaker.name}
                 fill
                 className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 blur-[2px] group-hover:blur-0"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
               <div className="absolute bottom-6 left-6 right-6">
                 <h4 className="text-white font-bold text-sm tracking-tight mb-1">{speaker.name}</h4>
                 <p className="text-primary text-[8px] font-bold uppercase tracking-widest">{speaker.role}</p>
               </div>
            </motion.div>
          ))}
          
          {/* Nominate Placeholder */}
          <div className="aspect-[3/4] rounded-3xl border border-dashed border-white/10 flex flex-col items-center justify-center p-8 text-center group hover:border-primary/50 transition-all cursor-pointer">
             <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
               <Mic2 className="w-5 h-5 text-white/20 group-hover:text-white" />
             </div>
             <p className="text-white/20 text-[10px] font-black uppercase tracking-widest group-hover:text-white">Your Voice <br /> Matters.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
