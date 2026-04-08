'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { communityMembers } from '@/data/content';
import Image from 'next/image';
import { Linkedin, Twitter, MessageSquare, Mic2 } from 'lucide-react';

export function SpeakerSpotlight() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mb-20">
           <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase block mb-4 underline underline-offset-8">The People</span>
           <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-8">
             FACES OF <br />
             <span className="text-slate-100">NETWORX.</span>
           </h2>
           <p className="text-slate-500 text-lg font-light leading-relaxed max-w-2xl">
             A diverse mix of professionals from across London who come together each month for genuine conversations and real connections.
           </p>
        </ScrollReveal>

        {/* Cinematic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {communityMembers.slice(0, 2).map((speaker, index) => (
            <motion.div 
              key={speaker.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group relative h-[500px] md:h-[600px] rounded-[48px] overflow-hidden border border-slate-200 bg-slate-50"
            >
              <Image 
                src={speaker.image} 
                alt={speaker.name}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale hover:grayscale-0"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-10 left-10 right-10">
                 <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary/20 backdrop-blur-md rounded-full text-[9px] font-black uppercase text-primary tracking-widest border border-primary/20">
                       Community Member
                    </span>
                 </div>
                 
                 <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-2 group-hover:text-primary transition-colors">
                   {speaker.name}
                 </h3>
                 <p className="text-slate-500 text-sm font-bold uppercase tracking-[0.2em] mb-6">
                   {speaker.role}
                 </p>
                 
                 <div className="flex items-center gap-6">
                    <button className="flex items-center gap-2 text-slate-900 text-[10px] font-black uppercase tracking-widest hover:text-primary transition-colors">
                       <MessageSquare className="w-4 h-4" />
                       View Bio
                    </button>
                    <div className="flex items-center gap-3">
                       <Linkedin className="w-4 h-4 text-slate-400 hover:text-primary transition-colors cursor-pointer" />
                       <Twitter className="w-4 h-4 text-slate-400 hover:text-primary transition-colors cursor-pointer" />
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {communityMembers.slice(2).map((speaker, index) => (
            <motion.div 
               key={speaker.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: index * 0.1 }}
               className="group relative aspect-[3/4] rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 hover:border-primary/30 transition-all duration-500"
            >
               <Image 
                 src={speaker.image} 
                 alt={speaker.name}
                 fill
                 className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 blur-[2px] group-hover:blur-0"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent" />
               <div className="absolute bottom-6 left-6 right-6">
                 <h4 className="text-slate-900 font-bold text-sm tracking-tight mb-1">{speaker.name}</h4>
                 <p className="text-primary text-[8px] font-bold uppercase tracking-widest">{speaker.role}</p>
               </div>
            </motion.div>
          ))}
          
          {/* Nominate Placeholder */}
          <div className="aspect-[3/4] rounded-3xl border border-dashed border-slate-200 flex flex-col items-center justify-center p-8 text-center group hover:border-primary/50 transition-all cursor-pointer bg-slate-50/50">
             <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
               <Mic2 className="w-5 h-5 text-slate-400 group-hover:text-white" />
             </div>
             <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest group-hover:text-primary">Your Voice <br /> Matters.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
