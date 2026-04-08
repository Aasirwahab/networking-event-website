"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export const IMAGES = [
  "/images/gallery-6.png",
  "/images/gallery-2.png",
  "/images/networx_story_mayfair.png",
  "/images/gallery-4.png",
  "/images/networx_story_shard.png",
  "/images/networx_hero_event.png",
];

export const INTRO_END_DELAY_SEC = 0.35 + (IMAGES.length - 1) * 0.15 + 0.6 + 1.4 + 0.85;

const INITIAL_SCALE = 0.35;

const Intro = () => {
  const refs = useRef<(HTMLImageElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const radialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const imgs = refs.current.filter(Boolean);
    const container = containerRef.current;
    if (!imgs.length || !container) return;

    gsap.set(container, { scale: INITIAL_SCALE });

    const timeline = gsap.timeline();

    // Phase 1: Quick staggered image reveals inside the small centered box
    timeline.to(imgs, {
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 0.6,
      delay: 0.35,
      stagger: { each: 0.15, ease: "power1.out" },
    });

    // Phase 2: Smooth, balanced ZOOM from center (scale transform — GPU accelerated)
    timeline.to(container, {
      scale: 1,
      duration: 1.4,
      ease: "power3.inOut",
    });

    // Phase 3: Radial gradient fade-in
    timeline.to(
      radialRef.current,
      {
        opacity: 1,
        duration: 0.85,
        ease: "power2.out",
      },
      "-=0.3"
    );

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-zinc-950 overflow-hidden">
      <div
        ref={containerRef}
        className="relative w-full h-[100dvh] will-change-transform"
      >
        {IMAGES.map((src, i) => (
          <img
            key={src}
            ref={(el) => {
              refs.current[i] = el;
            }}
            src={src}
            alt=""
            className="absolute inset-0 size-full object-cover intro-image-initial"
            style={{ zIndex: i }}
          />
        ))}
        <div
          ref={radialRef}
          className="pointer-events-none absolute inset-0 z-10 opacity-0 intro-radial-overlay"
          aria-hidden
        />
      </div>
    </div>
  );
};

export default Intro;
