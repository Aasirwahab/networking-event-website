'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Send, User, MessageCircle, Link as LinkIcon } from 'lucide-react';

export function SpeakerNomination() {
  return (
    <section className="py-24 bg-[#080808] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/3" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal className="text-center mb-16">
           <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase block mb-4 underline underline-offset-8">Speaker Nomination</span>
           <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-8">
             SHARE YOUR <br />
             <span className="text-white/20">VISION.</span>
           </h2>
           <p className="text-white/30 text-lg font-light leading-relaxed">
             Are you a CEO, founder, or industry leader with a raw, unscripted story to tell? We want to hear from you.
           </p>
        </ScrollReveal>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 bg-white/[0.02] border border-white/5 p-10 md:p-16 rounded-[48px] backdrop-blur-3xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Name */}
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                <input 
                  type="text" 
                  placeholder="Alexander Sterling" 
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-5 px-14 text-white text-sm focus:outline-none focus:border-primary transition-colors hover:bg-white/[0.05]" 
                />
              </div>
            </div>
            
            {/* Role */}
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-2">Job Title / Company</label>
              <div className="relative">
                <User className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                <input 
                  type="text" 
                  placeholder="CEO at Networx" 
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-5 px-14 text-white text-sm focus:outline-none focus:border-primary transition-colors hover:bg-white/[0.05]" 
                />
              </div>
            </div>
          </div>

          {/* Social / Portfolio */}
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-2">LinkedIn or Portfolio Link</label>
            <div className="relative">
              <LinkIcon className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
              <input 
                type="url" 
                placeholder="https://linkedin.com/in/..." 
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-5 px-14 text-white text-sm focus:outline-none focus:border-primary transition-colors hover:bg-white/[0.05]" 
              />
            </div>
          </div>

          {/* Vision */}
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-2">Your Core Message (Unscripted)</label>
            <div className="relative">
              <MessageCircle className="absolute left-6 top-6 w-4 h-4 text-primary" />
              <textarea 
                rows={5}
                placeholder="What single lesson would you share with a room full of founders over breakfast?" 
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-6 px-14 text-white text-sm focus:outline-none focus:border-primary transition-colors hover:bg-white/[0.05] resize-none" 
              />
            </div>
          </div>

          <button className="w-full group bg-primary py-6 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-500 hover:bg-white hover:text-primary shadow-[0_30px_60px_rgba(197,160,89,0.2)]">
            Submit Nomination
            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
          
          <p className="text-center text-[9px] font-bold uppercase tracking-widest text-white/10">
            * Our curation team will review all submissions within 48 hours.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
