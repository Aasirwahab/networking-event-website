'use client';

import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { AgendaCard } from '@/components/AgendaCard';

const agenda = [
  {
    time: '08:00 AM',
    title: 'Arrival & Welcome Coffee',
    description: 'Arrive, grab a coffee, and settle in. Meet fellow attendees in a relaxed, no-pressure environment.',
    src: '/images/london/1.png',
    color: '#111111'
  },
  {
    time: '08:30 AM',
    title: 'Breakfast & Open Networking',
    description: 'Enjoy a quality breakfast while having genuine conversations with directors, founders, and professionals from across London.',
    src: '/images/london/2.png',
    color: '#161616'
  },
  {
    time: '09:15 AM',
    title: 'Roundtable Introductions',
    description: 'A guided session where everyone shares who they are and what they do — naturally and without formal pitches.',
    src: '/images/london/3.png',
    color: '#1A1A1A'
  },
  {
    time: '09:45 AM',
    title: 'Free Networking & Connections',
    description: 'The best part — open time to follow up on conversations, exchange details, and build real relationships.',
    src: '/images/london/4.png',
    color: '#1E1E1E'
  },
  {
    time: '10:30 AM',
    title: 'Wrap Up & Next Steps',
    description: 'Close the morning with key takeaways, upcoming event dates, and plans to stay connected.',
    src: '/images/london/5.png',
    color: '#222222'
  }
];

const SCALE_STEP = 0.05;

export function AgendaSection() {
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  const rangeStep = 1 / agenda.length;

  return (
    <section className="bg-dark text-white relative pt-20 lg:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-20">
          <h2 className="text-3xl lg:text-5xl font-light tracking-tight mb-6">
            A Morning of <span className="font-medium italic">Real Connections</span>
          </h2>
          <p className="text-white/60 text-lg">
            Every breakfast is designed to be relaxed, enjoyable, and genuinely valuable for your network.
          </p>
        </div>
      </div>

      <div ref={container} className="relative mt-[10vh]">
        {agenda.map((item, index) => {
          const targetScale = 1 - ((agenda.length - index) * SCALE_STEP);
          return (
            <AgendaCard
              key={item.time}
              index={index}
              {...item}
              progress={scrollYProgress}
              range={[index * rangeStep, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}
