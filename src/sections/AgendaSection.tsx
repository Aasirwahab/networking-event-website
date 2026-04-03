'use client';

import { ScrollReveal } from '@/components/ScrollReveal';

const agenda = [
  {
    time: '09:00 AM',
    title: 'VIP Welcome & Networking',
    description: 'An exclusive morning reception with artisanal coffee and high-level networking in the Sky Lounge.'
  },
  {
    time: '10:30 AM',
    title: 'Keynote: The Future of Global Growth',
    description: 'A visionary address from our lead speaker on navigating the complex landscape of 2024.'
  },
  {
    time: '12:30 PM',
    title: 'Executive Luncheon',
    description: 'A curated 3-course dining experience designed for conversation and strategic partnership building.'
  },
  {
    time: '02:30 PM',
    title: 'Roundtable Strategic Sessions',
    description: 'Intimate, focused groups diving deep into niche industry challenges and innovative solutions.'
  },
  {
    time: '04:30 PM',
    title: 'Rooftop Cocktail Reception',
    description: 'Concluding the summit with sunset views of London, signature cocktails, and final connections.'
  }
];

export function AgendaSection() {
  return (
    <section className="py-20 lg:py-32 bg-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-32">
            <h2 className="text-3xl lg:text-5xl font-light tracking-tight mb-6">
              A Day of <span className="font-medium italic">Strategic Value</span>
            </h2>
            <p className="text-white/60 text-lg">
              Every moment is curated to maximize your networking ROI and provide high-level insights.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          
          <div className="space-y-12 lg:space-y-24">
            {agenda.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.1} direction={index % 2 === 0 ? 'left' : 'right'}>
                <div className={`relative flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className="flex-1 w-full lg:w-1/2 p-8 lg:p-12 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 group hover:bg-white/10 transition-colors">
                    <span className="text-primary font-medium tracking-widest uppercase mb-4 block">
                      {item.time}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-medium mb-4 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-base lg:text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-0 lg:left-1/2 top-10 lg:top-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_rgba(234,179,8,0.5)] z-10" />
                  
                  {/* Empty space for grid alignment */}
                  <div className="flex-1 hidden lg:block" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
