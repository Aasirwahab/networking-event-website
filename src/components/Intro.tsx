"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export const IMAGES = [
  "/images/gallery-6.png",
  "/images/gallery-2.png",
  "/images/networx_story_mayfair.png",
  "/images/networx_story_shard.png",
  "/images/networx_hero_event.png",
];

export const INTRO_END_DELAY_SEC =
  0.35 + (IMAGES.length - 1) * 0.25 + 1 + 1;

/** Static z-index classes — Tailwind JIT can detect these at build time */
const Z_INDEX_CLASSES = ['z-0', 'z-10', 'z-20', 'z-30', 'z-40'] as const;

const Intro = () => {
  const refs = useRef<(HTMLImageElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const radialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const imgs = refs.current.filter(Boolean);
    if (!imgs.length) return;

    const timeline = gsap.timeline();

    timeline.to(imgs, {
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 1,
      delay: 0.35,
      stagger: { each: 0.25, ease: "power1.out" },
    });

    timeline.to(containerRef.current, {
      width: "100%",
      height: "100dvh",
      maxWidth: "none",
      aspectRatio: "unset",
      margin: 0,
      duration: 1,
      ease: "power3.inOut",
    });

    timeline.to(
      radialRef.current,
      {
        opacity: 1,
        duration: 0.85,
        ease: "power2.out",
      },
      ">"
    );

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        ref={containerRef}
        className="relative aspect-video w-[min(88vw,28rem)] overflow-hidden md:w-[42vw]"
      >
        {IMAGES.map((src, i) => (
          <img
            key={src}
            ref={(el) => {
              refs.current[i] = el;
            }}
            src={src}
            alt=""
            className={`absolute inset-0 size-full object-cover intro-img-hidden ${Z_INDEX_CLASSES[i] ?? 'z-auto'}`}
          />
        ))}
        {/* No custom gradients, exactly matching Next-Timeline-main */}
        <div
          ref={radialRef}
          className="pointer-events-none absolute inset-0 z-10 opacity-0 intro-radial-overlay"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default Intro;
