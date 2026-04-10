'use client';

import { useCountUp } from '@/hooks/useCountUp';
import { stats } from '@/data/content';
import { ScrollReveal } from '@/components/ScrollReveal';

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, countSpanRef } = useCountUp(value, 2000);

  return (
    <div ref={ref} className="text-center">
      <div className="flex items-baseline justify-center gap-1">
        <span ref={countSpanRef} className="text-4xl lg:text-5xl font-bold text-primary">
          0
        </span>
        <span className="text-4xl lg:text-5xl font-bold text-primary">
          {suffix}
        </span>
      </div>
      <p className="text-text-secondary text-sm mt-2 max-w-[180px] mx-auto">
        {label}
      </p>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.1}>
              <StatItem
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
