'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Send, MapPin, Mail, Phone, Clock } from 'lucide-react';

const contactInfo = [
  { icon: MapPin, label: 'Headquarters', value: 'London SW15 3SR, United Kingdom' },
  { icon: Mail, label: 'Email', value: 'hello@networxlondon.com' },
  { icon: Phone, label: 'Phone', value: '+44 20 7946 0958' },
  { icon: Clock, label: 'Office Hours', value: 'Mon–Fri, 08:00 – 18:00 GMT' },
];

export function ContactForm() {
  return (
    <section className="min-h-screen flex items-center py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[200px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left: Info */}
          <ScrollReveal>
            <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase block mb-4">Get In Touch</span>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-8">
              LET'S <br />
              <span className="text-white/20">CONNECT.</span>
            </h1>
            <p className="text-white/40 text-lg font-light leading-relaxed mb-16 max-w-md">
              Whether you're interested in attending a summit, becoming a speaker, or partnering with us — we'd love to hear from you.
            </p>
            
            <div className="space-y-8">
              {contactInfo.map((item, i) => (
                <motion.div 
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-5 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                    <item.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-white font-medium text-sm">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right: Form */}
          <motion.form 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/[0.02] border border-white/5 rounded-[48px] p-10 md:p-14 space-y-6 backdrop-blur-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-2">First Name</label>
                <input type="text" placeholder="Alexander" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 text-white text-sm focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-2">Last Name</label>
                <input type="text" placeholder="Sterling" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 text-white text-sm focus:outline-none focus:border-primary transition-colors" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-2">Email</label>
              <input type="email" placeholder="alex@example.com" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 text-white text-sm focus:outline-none focus:border-primary transition-colors" />
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-2">Interest</label>
              <select title="Select your interest" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 text-white/50 text-sm focus:outline-none focus:border-primary transition-colors appearance-none">
                <option value="">Select your interest</option>
                <option value="attend">Attend a Summit</option>
                <option value="speak">Become a Speaker</option>
                <option value="partner">Partnership Inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-2">Message</label>
              <textarea rows={4} placeholder="Tell us about yourself..." className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 text-white text-sm focus:outline-none focus:border-primary transition-colors resize-none" />
            </div>
            
            <button type="submit" className="w-full group bg-primary py-5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-500 hover:bg-white hover:text-primary text-white">
              Send Message
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
