'use client';

import { ScrollReveal } from '@/components/ScrollReveal';

const agenda = [
  {
    time: '08:00 AM',
    title: 'Arrival & Welcome Coffee',
    description: 'Arrive, grab a coffee, and settle in. Meet fellow attendees in a relaxed, no-pressure environment.'
  },
  {
    time: '08:30 AM',
    title: 'Breakfast & Open Networking',
    description: 'Enjoy a quality breakfast while having genuine conversations with directors, founders, and professionals from across London.'
  },
  {
    time: '09:15 AM',
    title: 'Roundtable Introductions',
    description: 'A guided session where everyone shares who they are and what they do — naturally and without formal pitches.'
  },
  {
    time: '09:45 AM',
    title: 'Free Networking & Connections',
    description: 'The best part — open time to follow up on conversations, exchange details, and build real relationships.'
  },
  {
    time: '10:30 AM',
    title: 'Wrap Up & Next Steps',
    description: 'Close the morning with key takeaways, upcoming event dates, and plans to stay connected.'
  }
];

export function AgendaSection() {
  return (
    <section className="py-20 lg:py-32 bg-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-32">
            <h2 className="text-3xl lg:text-5xl font-light tracking-tight mb-6">
              A Morning of <span className="font-medium italic">Real Connections</span>
            </h2>
            <p className="text-white/60 text-lg">
              Every breakfast is designed to be relaxed, enjoyable, and genuinely valuable for your network.
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
