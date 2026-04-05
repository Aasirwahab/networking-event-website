'use client';

import { useEffect, useRef } from 'react';

const brands = [
  'Capsule', 'Epicurious', 'Lightbox',
  'Spherule', 'Hourglass', 'FeatherDev', 'GlobalBank', 'Luminous'
];

export function InfiniteMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Measure the first set (half the content) to know the loop point
    const firstSet = track.children[0] as HTMLElement;
    if (!firstSet) return;

    const setWidth = firstSet.offsetWidth;
    // Account for the gap between the two sets
    const gap = 32; // gap-8 = 32px
    const totalShift = setWidth + gap;

    // Set CSS custom property for the animation
    track.style.setProperty('--marquee-shift', `-${totalShift}px`);
  }, []);

  const items = brands.map((brand, i) => (
    <div key={i} className="flex items-center shrink-0">
      <span className="text-white/50 text-[11px] md:text-xs font-semibold uppercase tracking-[0.35em] hover:text-white/80 transition-colors duration-300 whitespace-nowrap">
        {brand}
      </span>
      <svg width="4" height="4" viewBox="0 0 24 24" fill="none" className="text-primary/30 ml-8 shrink-0">
        <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="currentColor" />
      </svg>
    </div>
  ));

  return (
    <div className="w-full overflow-hidden py-4 select-none relative">
      {/* Edge fades */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black/60 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/60 to-transparent z-10 pointer-events-none" />

      <div
        ref={trackRef}
        className="marquee-track flex items-center gap-8"
      >
        <div className="flex items-center gap-8 shrink-0">{items}</div>
        <div className="flex items-center gap-8 shrink-0" aria-hidden="true">{items}</div>
      </div>
    </div>
  );
}
