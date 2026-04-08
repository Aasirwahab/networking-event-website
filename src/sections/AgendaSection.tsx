'use client';

import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { AgendaCard } from '@/components/AgendaCard';

const agenda = [
  {
    time: 'Phase 01',
    title: 'Arrival & Welcome Experience',
    description: 'Step into an immersive environment. Grab your morning coffee, settle in, and begin connecting with fellow professionals.',
    src: '/images/london/1.png',
    color: 'rgba(255, 255, 255, 0.02)'
  },
  {
    time: 'Phase 02',
    title: 'Welcome & Strategic Networking',
    description: 'A brief, impactful welcome from our founders followed by open networking with London\'s industry leaders and visionaries.',
    src: '/images/london/2.png',
    color: 'rgba(255, 255, 255, 0.04)'
  },
  {
    time: 'Phase 03',
    title: 'Curated Roundtable Discussions',
    description: 'Engage in guided, high-value conversations. Share your expertise, tackle industry challenges, and discover synergistic opportunities.',
    src: '/images/london/3.png',
    color: 'rgba(255, 255, 255, 0.06)'
  },
  {
    time: 'Phase 04',
    title: 'Partnerships & Open Dialogue',
    description: 'Dedicated time to forge meaningful business partnerships, exchange details, and solidify new professional relationships.',
    src: '/images/london/4.png',
    color: 'rgba(255, 255, 255, 0.08)'
  },
  {
    time: 'Phase 05',
    title: 'Closing Remarks & Next Steps',
    description: 'Wrap up the session with actionable takeaways, upcoming event calendars, and exclusive community announcements.',
    src: '/images/london/5.png',
    color: 'rgba(255, 255, 255, 0.1)'
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
    <section className="bg-[#5174d6] text-white relative pt-20 lg:pt-32" style={{ contain: 'layout style paint' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-20">
          <h2 className="text-3xl lg:text-5xl font-light tracking-tight mb-6">
            An Experience of <span className="font-medium italic text-primary">Real Connections</span>
          </h2>
          <p className="text-white/80 text-lg">
            Every session is designed to be relaxed, engaging, and genuinely valuable for building robust partnerships and growing your professional network.
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
              rangeStep={rangeStep}
            />
          );
        })}
      </div>
    </section>
  );
}
