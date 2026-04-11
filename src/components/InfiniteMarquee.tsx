'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const brands = [
  'Capsule', 'Epicurious', 'Lightbox',
  'Spherule', 'Hourglass', 'FeatherDev', 'GlobalBank', 'Luminous'
];

export function InfiniteMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const firstSet = track.children[0] as HTMLElement;
    if (!firstSet) return;

    let frame = 0;
    const ctx = gsap.context(() => {
      // Wait for layout to settle, then measure and animate
      frame = requestAnimationFrame(() => {
        const setWidth = firstSet.offsetWidth;
        const shift = setWidth + 32; // set width + gap (gap-8 = 32px)

        gsap.set(track, { x: 0 });
        gsap.to(track, {
          x: -shift,
          duration: 25,
          ease: 'none',
          repeat: -1,
        });
      });
    }, trackRef);

    return () => {
      cancelAnimationFrame(frame);
      ctx.revert();
    };
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
      {/* Edge fades removed for transparency */}

      <div
        ref={trackRef}
        className="flex items-center gap-8 w-max-content"
      >
        <div className="flex items-center gap-8 shrink-0">{items}</div>
        <div className="flex items-center gap-8 shrink-0" aria-hidden="true">{items}</div>
      </div>
    </div>
  );
}
