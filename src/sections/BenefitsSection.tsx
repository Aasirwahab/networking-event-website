'use client';

import { Users, TrendingUp, Target, ShieldCheck } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

const benefits = [
  {
    icon: Users,
    title: 'Diverse Community',
    description: 'Meet company directors, CEOs, entrepreneurs, founders, startups, small business owners, investors, and working professionals.'
  },
  {
    icon: Target,
    title: 'Meaningful Conversations',
    description: 'No formal pitches or awkward introductions. Just genuine, relaxed conversations that lead to real connections.'
  },
  {
    icon: TrendingUp,
    title: 'Grow Your Network',
    description: 'Whether scaling a business, exploring new ventures, or simply expanding your professional circle — this is your space.'
  },
  {
    icon: ShieldCheck,
    title: 'High-Value Community',
    description: 'Connect with London\'s brightest minds in a welcoming and dynamic setting. Networking should be productive, actionable, and enjoyable.'
  }
];

function BenefitCard({ benefit, index }: { benefit: typeof benefits[0], index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlightBackground = useMotionTemplate`
    radial-gradient(
      400px circle at ${mouseX}px ${mouseY}px,
      rgba(197, 160, 89, 0.15),
      transparent 80%
    )
  `;

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative p-8 rounded-3xl bg-gray-50 hover:bg-dark transition-colors duration-700 overflow-hidden border border-transparent hover:border-white/10"
    >
      {/* Hover Spotlight Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100"
        style={{ background: spotlightBackground }}
      />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500 ease-out">
          <benefit.icon className="w-7 h-7 text-primary" />
        </div>
        
        <h3 className="text-xl font-bold text-dark group-hover:text-white mb-4 transition-colors duration-500">
          {benefit.title}
        </h3>
        
        <p className="text-text-secondary group-hover:text-white/70 leading-relaxed transition-colors duration-500">
          {benefit.description}
        </p>
      </div>
    </motion.div>
  );
}

export function BenefitsSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <h2 className="text-3xl lg:text-5xl font-light tracking-tight text-dark mb-6">
              Why London Professionals <br />
              <span className="font-medium italic">Choose Networx</span>
            </h2>
            <p className="text-text-secondary text-lg">
              We make networking human, relaxed, and genuinely transformative — fostering meaningful business relationships and robust partnerships.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.title} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
