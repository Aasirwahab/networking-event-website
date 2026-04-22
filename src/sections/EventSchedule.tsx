'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { events } from '@/data/content';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

export function EventSchedule() {
  return (
    <section className="py-24 lg:py-32 bg-bg-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mb-16">
           <span className="text-primary text-xs font-medium tracking-[0.2em] uppercase block mb-4 underline underline-offset-8">Upcoming Summits</span>
           <h2 className="text-4xl md:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1]">
             The London{' '}
             <span className="text-primary italic">Calendar.</span>
           </h2>
        </ScrollReveal>

        <div className="space-y-5">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white border border-slate-100 rounded-2xl p-6 md:p-8 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer"
            >
              {/* Event Info */}
              <div className="flex-1 flex gap-6 items-start">
                 {/* Date Block */}
                 <div className="hidden lg:flex flex-col items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 group-hover:bg-primary transition-all duration-500">
                    <p className="text-primary group-hover:text-white/80 text-[10px] font-bold uppercase tracking-widest leading-none mb-1 transition-colors">MAY</p>
                    <p className="text-primary group-hover:text-white text-2xl font-black leading-none tracking-tighter transition-colors">1{index + 2}</p>
                 </div>

                 <div className="flex-1 space-y-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 bg-primary/10 rounded-full text-[10px] font-bold uppercase text-primary tracking-widest">
                        {event.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-text-muted text-[10px] font-medium uppercase tracking-widest">
                        <Clock className="w-3 h-3" />
                        {event.date}
                      </div>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight group-hover:text-primary transition-colors leading-tight">
                      {event.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-text-secondary text-sm font-light">
                      <MapPin className="w-4 h-4 text-primary" />
                      {event.location}
                    </div>
                 </div>
              </div>

              {/* Action */}
              <div className="flex items-center gap-6 pl-6 md:border-l border-slate-100">
                 <div className="text-right hidden sm:block">
                    <p className="text-text-muted text-[10px] font-medium uppercase tracking-widest mb-1">Availability</p>
                    <p className="text-slate-900 font-semibold text-xs uppercase tracking-wider">Limited Seats</p>
                 </div>
                 <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:scale-110 transition-all duration-500">
                    <ArrowRight className="w-5 h-5 text-text-muted group-hover:text-white transition-colors" />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
