'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { events } from '@/data/content';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

export function EventSchedule() {
  return (
    <section className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mb-16">
           <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase block mb-4">Upcoming Summits</span>
           <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight">
             THE LONDON <br />
             <span className="text-white/20">CALENDAR.</span>
           </h2>
        </ScrollReveal>

        <div className="space-y-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/[0.02] border border-white/5 rounded-[32px] p-8 md:p-12 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500 flex flex-col md:flex-row md:items-center justify-between gap-8 cursor-pointer"
            >
              {/* Event Info */}
              <div className="flex-1 space-y-4">
                 <div className="flex items-center gap-3">
                   <span className="px-3 py-1 bg-primary/10 rounded-full text-[10px] font-bold uppercase text-primary tracking-widest border border-primary/20">
                     {event.category}
                   </span>
                   <div className="flex items-center gap-1.5 text-white/30 text-[10px] font-bold uppercase tracking-widest">
                     <Clock className="w-3 h-3" />
                     {event.date}
                   </div>
                 </div>
                 
                 <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight group-hover:text-primary transition-colors leading-tight max-w-xl">
                   {event.title}
                 </h3>
                 
                 <div className="flex items-center gap-2 text-white/50 text-sm font-medium">
                   <MapPin className="w-4 h-4 text-primary" />
                   {event.location}
                 </div>
              </div>

              {/* Action */}
              <div className="flex items-center gap-6">
                 <div className="hidden md:block text-right">
                    <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest mb-1">Status</p>
                    <p className="text-white font-bold text-xs uppercase tracking-widest">Limited Seats</p>
                 </div>
                 <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:scale-110 transition-all duration-500">
                    <ArrowRight className="w-6 h-6 text-white" />
                 </div>
              </div>
              
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700 rounded-[32px] -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
