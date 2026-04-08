'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { AgendaCard } from '@/components/AgendaCard';
import './AgendaSection.css';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

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
    title: 'Strategic Networking',
    description: 'A brief, impactful welcome from our founders followed by open networking with London\'s industry leaders and visionaries.',
    src: '/images/london/2.png',
    color: 'rgba(255, 255, 255, 0.04)'
  },
  {
    time: 'Phase 03',
    title: 'Roundtable Discussions',
    description: 'Engage in guided, high-value conversations. Share your expertise, tackle industry challenges, and discover synergistic opportunities.',
    src: '/images/london/3.png',
    color: 'rgba(255, 255, 255, 0.06)'
  },
  {
    time: 'Phase 04',
    title: 'Partnerships & Dialogue',
    description: 'Dedicated time to forge meaningful business partnerships, exchange details, and solidify new professional relationships.',
    src: '/images/london/4.png',
    color: 'rgba(255, 255, 255, 0.08)'
  },
  {
    time: 'Phase 05',
    title: 'Closing & Next Steps',
    description: 'Wrap up the session with actionable takeaways, upcoming event calendars, and exclusive community announcements.',
    src: '/images/london/5.png',
    color: 'rgba(255, 255, 255, 0.1)'
  }
];

export function AgendaSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useGSAP(() => {
    if (isMobile || !containerRef.current || !headerRef.current || !cardsRef.current) return;

    // Pin the header
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom bottom',
      pin: headerRef.current,
      pinSpacing: false,
    });

    // Track active step
    const cards = gsap.utils.toArray<HTMLElement>('.agenda-card-wrapper');
    cards.forEach((card, index) => {
      ScrollTrigger.create({
        trigger: card,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActiveStep(index),
        onEnterBack: () => setActiveStep(index),
      });
    });
  }, { dependencies: [isMobile], scope: containerRef });

  return (
    <section ref={containerRef} className="agenda-section">
      <div ref={headerRef} className="agenda-header-col">
        <div className="agenda-header-content">
          <h2 className="text-3xl lg:text-5xl font-light tracking-tight mb-8 text-white">
            An Experience of <span className="font-medium italic text-primary">Real Connections</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10">
            Every session is designed to be relaxed, engaging, and genuinely valuable for building robust partnerships and growing your professional network.
          </p>

          <div className="agenda-steps">
            {agenda.map((_, index) => (
              <div
                key={index}
                className={`agenda-step ${activeStep === index ? 'active' : ''}`}
                onClick={() => {
                  const card = document.querySelectorAll('.agenda-card-wrapper')[index];
                  if (card) {
                    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }}
              >
                <p className="agenda-step-label">Phase</p>
                <p className="agenda-step-index">{index + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div ref={cardsRef} className="agenda-cards-col">
        {agenda.map((item, index) => (
          <div key={index} className="agenda-card-wrapper">
            <AgendaCard
              index={index}
              {...item}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
