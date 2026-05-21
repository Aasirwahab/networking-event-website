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
    time: '6:30 PM',
    title: 'Arrival & Welcome',
    description: 'Doors open. Grab a drink, settle in, and start meeting the room at your own pace — no awkward icebreakers, just easy introductions.',
    src: '/images/london/1.webp',
    bgClass: 'bg-white/[0.02]'
  },
  {
    time: '7:00 PM',
    title: 'Open Networking',
    description: 'A short welcome from the founders, then the floor is yours. Move freely, find the conversations that matter, and skip the ones that don\'t.',
    src: '/images/london/2.webp',
    bgClass: 'bg-white/[0.04]'
  },
  {
    time: '7:45 PM',
    title: 'Roundtable Discussions',
    description: 'Sit down with six to eight others around a shared theme. Trade real problems, candid takes, and the kind of advice you only get face to face.',
    src: '/images/london/3.webp',
    bgClass: 'bg-white/[0.06]'
  },
  {
    time: '8:45 PM',
    title: 'Partnerships & Follow-Up',
    description: 'Dedicated time to swap details, line up coffees, and turn good conversations into something real before the night ends.',
    src: '/images/london/4.webp',
    bgClass: 'bg-white/[0.08]'
  },
  {
    time: '9:30 PM',
    title: 'Wrap & What\'s Next',
    description: 'A quick close-out — upcoming events, community announcements, and one last round before everyone heads out.',
    src: '/images/london/5.webp',
    bgClass: 'bg-white/10'
  }
];

export function AgendaSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 1023.98px)');
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
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
    const cards = cardRefs.current.filter(Boolean) as HTMLElement[];
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
              <button
                type="button"
                key={index}
                className={`agenda-step ${activeStep === index ? 'active' : ''}`}
                aria-label={`Jump to step ${index + 1}`}
                aria-current={activeStep === index ? 'step' : undefined}
                onClick={() => {
                  const card = cardRefs.current[index];
                  if (card) {
                    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }}
              >
                <p className="agenda-step-label">Step</p>
                <p className="agenda-step-index">{String(index + 1).padStart(2, '0')}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div ref={cardsRef} className="agenda-cards-col">
        {agenda.map((item, index) => (
          <div key={index} ref={(el) => { cardRefs.current[index] = el; }} className="agenda-card-wrapper">
            <AgendaCard
              {...item}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
