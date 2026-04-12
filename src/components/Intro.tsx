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

export const INTRO_END_DELAY_SEC = 0.35 + (IMAGES.length - 1) * 0.5 + 1.2 + 1.4 + 0.85;

const INITIAL_SCALE = 0.35;

const Z_CLASSES = ["z-0", "z-[1]", "z-[2]", "z-[3]", "z-[4]", "z-[5]"] as const;

const Intro = () => {
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);
  const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const radialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const imgs = imgRefs.current.filter(Boolean);
      const overlays = overlayRefs.current.filter(Boolean);
      if (!imgs.length) return;

      gsap.set(container, { scale: INITIAL_SCALE });

      const timeline = gsap.timeline();

      // Phase 1: Slow, premium staggered image reveals inside the centered box
      timeline.to(imgs, {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.2,
        delay: 0.35,
        stagger: { each: 0.5, ease: "power2.inOut" },
      });

      // Shading effect via opacity overlay (GPU-accelerated, replaces filter: brightness)
      timeline.to(
        overlays,
        {
          opacity: 0,
          duration: 1.0,
          stagger: 0.5,
          ease: "power2.out",
        },
        0.35
      );

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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-zinc-950 overflow-hidden">
      <div
        ref={containerRef}
        className="relative w-full h-[100dvh] will-change-transform"
      >
        {IMAGES.map((src, i) => (
          <div key={src} className={`absolute inset-0 ${Z_CLASSES[i]}`} aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={(el) => {
                imgRefs.current[i] = el;
              }}
              src={src}
              alt=""
              className="absolute inset-0 w-full h-full object-cover intro-image-initial"
              // Last image is on top and visible first — mark as high priority for LCP
              {...(i === IMAGES.length - 1 ? { fetchPriority: 'high' as const } : {})}
              loading="eager"
            />
            {/* Dark overlay for shading effect — opacity animation is GPU-accelerated */}
            <div
              ref={(el) => {
                overlayRefs.current[i] = el;
              }}
              className="absolute inset-0 bg-black/50 pointer-events-none intro-image-initial will-change-[opacity]"
            />
          </div>
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
