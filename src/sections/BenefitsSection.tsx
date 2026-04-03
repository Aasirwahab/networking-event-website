'use client';

import { Users, TrendingUp, Target, ShieldCheck } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';

const benefits = [
  {
    icon: Users,
    title: 'Elite Networking',
    description: 'Connect with over 200+ C-suite executives, founders, and industry pioneers in an exclusive setting.'
  },
  {
    icon: Target,
    title: 'Strategic Insights',
    description: 'Gain a competitive edge with high-level briefings on market trends and future-proof business strategies.'
  },
  {
    icon: TrendingUp,
    title: 'Growth Opportunities',
    description: 'Unlock exclusive partnerships and early-stage investment opportunities within the London ecosystem.'
  },
  {
    icon: ShieldCheck,
    title: 'VIP Experience',
    description: 'Enjoy premium hospitality, private meeting lounges, and a dedicated concierge for a seamless experience.'
  }
];

export function BenefitsSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <h2 className="text-3xl lg:text-5xl font-light tracking-tight text-dark mb-6">
              Why the World's Leaders <br />
              <span className="font-medium italic">Choose Actos</span>
            </h2>
            <p className="text-text-secondary text-lg">
              We curate more than just events; we facilitate the high-impact connections that define the future of business.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={benefit.title} delay={index * 0.1}>
              <div className="group p-8 rounded-2xl bg-gray-50 hover:bg-dark transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium text-dark group-hover:text-white mb-4 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary group-hover:text-white/70 leading-relaxed transition-colors">
                  {benefit.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
