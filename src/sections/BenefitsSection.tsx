'use client';

import { Users, TrendingUp, Target, ShieldCheck } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';

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
