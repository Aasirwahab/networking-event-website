'use client';

import { memo } from 'react';
import { useCountUp } from '@/hooks/useCountUp';
import { stats } from '@/data/content';
import { ScrollReveal } from '@/components/ScrollReveal';

const StatItem = memo(function StatItem({ value, suffix, label, index }: { value: number; suffix: string; label: string; index: number }) {
  const { ref, countSpanRef } = useCountUp(value, 2000);
  const isAccent = index === 1 || index === 2;

  return (
    <div
      ref={ref}
      className={`group relative px-6 py-10 lg:py-12 ${index !== 0 ? 'lg:border-l' : ''} border-slate-200/70 transition-colors duration-500`}
    >
      <p className="text-text-muted text-[10px] font-bold uppercase tracking-[0.25em] mb-4">
        {String(index + 1).padStart(2, '0')} / {index === 0 ? 'Founded' : index === 1 ? 'Reach' : index === 2 ? 'Community' : 'Mission'}
      </p>

      <div className="flex items-baseline gap-1 mb-5">
        <span
          ref={countSpanRef}
          className={`text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight tabular-nums leading-none transition-colors duration-500 ${
            isAccent ? 'text-primary' : 'text-slate-900'
          }`}
        >
          0
        </span>
        <span className={`text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-none ${
          isAccent ? 'text-primary' : 'text-slate-900'
        }`}>
          {suffix}
        </span>
      </div>

      <p className="text-text-secondary text-sm font-light leading-relaxed max-w-[220px]">
        {label}
      </p>

      {/* Hover accent bar */}
      <div className="absolute left-6 top-0 h-[2px] w-0 bg-primary group-hover:w-12 transition-all duration-500" />
    </div>
  );
});

export function StatsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-50/50 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal className="mb-12 lg:mb-16 text-center max-w-2xl mx-auto">
          <span className="text-primary text-xs font-medium tracking-[0.2em] uppercase block mb-4 underline underline-offset-8">By the numbers</span>
          <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.1]">
            Quietly building{' '}
            <span className="text-primary italic">London&apos;s</span> most engaged room.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 border-y border-slate-200/70">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.1}>
              <StatItem
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                index={index}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
