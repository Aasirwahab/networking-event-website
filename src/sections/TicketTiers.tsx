'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Check, ArrowRight } from 'lucide-react';

const tiers = [
  {
    name: "Single Event Access",
    price: "£25",
    description: "Try Networx London for a single networking event and experience our high-value community.",
    features: ["One Networking Event", "Full Event Access", "Open Networking Session", "Attendee Introductions"],
    accent: false
  },
  {
    name: "Monthly Member",
    price: "£20",
    description: "For professionals who want to attend regularly and build lasting professional connections.",
    features: ["Monthly Event Access", "Priority Registration", "Priority Seating", "Member Directory Access", "Exclusive Invitations"],
    accent: true
  },
  {
    name: "Annual Pass",
    price: "£180",
    description: "Best value for committed networkers. Join every event for a full year and maximize your reach.",
    features: ["12 Networking Events", "Priority Registration", "Priority Seating", "Full Member Directory Access", "Special VIP Event Invites"],
    accent: false
  }
];

export function TicketTiers() {
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-20">
           <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase block mb-4 underline underline-offset-8">Reservation Tiers</span>
           <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-8">
             JOIN THE <br />
             <span className="text-white/20">COLLECTIVE.</span>
           </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div 
              key={tier.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={`relative flex flex-col p-10 rounded-[48px] border transition-all duration-700 hover:scale-[1.02] ${
                tier.accent 
                ? 'bg-primary border-primary shadow-[0_30px_60px_rgba(37,99,235,0.25)]'
                : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
            >
              {tier.accent && (
                 <div className="absolute top-8 right-8 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[9px] font-black uppercase text-white tracking-widest leading-none">
                   Best Value
                 </div>
              )}
              
              <div className="mb-10">
                <h3 className={`text-2xl font-black uppercase tracking-tight mb-2 ${tier.accent ? 'text-white' : 'text-primary'}`}>
                  {tier.name}
                </h3>
                <p className={`text-sm font-light leading-relaxed ${tier.accent ? 'text-white/80' : 'text-white/40'}`}>
                  {tier.description}
                </p>
              </div>
              
              <div className="mb-10">
                <span className={`text-6xl font-black tracking-tight ${tier.accent ? 'text-white' : 'text-white'}`}>
                  {tier.price}
                </span>
                <span className={`text-xs font-bold uppercase tracking-widest ml-2 ${tier.accent ? 'text-white/60' : 'text-white/20'}`}>
                  / month
                </span>
              </div>
              
              <div className="space-y-6 mb-12 flex-1">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${tier.accent ? 'bg-white/20' : 'bg-primary/20'}`}>
                      <Check className={`w-3 h-3 ${tier.accent ? 'text-white' : 'text-primary'}`} />
                    </div>
                    <span className={`text-sm font-medium tracking-tight ${tier.accent ? 'text-white/90' : 'text-white/70'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              
              <button className={`w-full py-5 rounded-3xl font-black text-xs uppercase tracking-widest-plus flex items-center justify-center gap-3 transition-all duration-500 overflow-hidden group ${
                tier.accent 
                ? 'bg-white text-primary hover:bg-[#050505] hover:text-white' 
                : 'bg-primary text-white hover:bg-white hover:text-primary shadow-[0_15px_30px_rgba(37,99,235,0.15)]'
              }`}>
                Book Your Seat
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
    </section>
  );
}
