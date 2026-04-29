'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLenisScroll } from '@/contexts/LenisContext';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const DEFAULT_POSITIONS = [
  { x: -0.8, y: -0.6 }, { x: 0.7, y: 0.4 }, { x: -0.5, y: 0.7 }, { x: 0.6, y: -0.5 },
  { x: -0.8, y: 0.2 }, { x: 0.8, y: -0.3 }, { x: -0.6, y: -0.8 }, { x: 0.4, y: 0.6 },
  { x: -0.7, y: 0.5 }, { x: 0.5, y: -0.7 }, { x: -0.4, y: -0.4 }, { x: 0.3, y: 0.8 },
  { x: -0.8, y: 0.3 }, { x: 0.6, y: 0.2 }, { x: -0.2, y: -0.7 }, { x: 0.7, y: -0.6 },
  { x: -0.5, y: 0.4 }, { x: 0.4, y: -0.4 }, { x: -0.6, y: 0.6 }, { x: 0.8, y: 0.5 },
  { x: -0.3, y: -0.5 }, { x: 0.5, y: 0.3 }, { x: -0.7, y: -0.2 }, { x: 0.2, y: 0.7 },
  { x: -0.4, y: 0.8 }, { x: 0.6, y: -0.8 }, { x: -0.8, y: 0.1 }, { x: 0, y: 0 },
];

export interface ImagesFlowProps {
  introTitle: string;
  introSubtitle?: string;
  introEyebrow?: string;
  introCtaLabel?: string;
  introCtaHref?: string;
  introImage?: string;
  introImages?: string[];
  flowText?: string;
  images: string[];
  className?: string;
}

const IntroBackground = ({ images, y }: { images: string[], y: MotionValue<string> }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="absolute inset-0 z-0 h-full w-full overflow-hidden bg-[#0a0a0a]">
      {images.map((src, i) => {
        const isActive = i === index;
        return (
          <motion.div
            key={src}
            initial={{ opacity: i === 0 ? 1 : 0 }}
            animate={{ opacity: isActive ? 1 : 0 }}
            transition={{
              opacity: {
                // Active image fades in smoothly; outgoing image only drops to 0
                // AFTER the new one has fully covered it, preventing a black flash.
                duration: isActive ? 1.4 : 0,
                delay: isActive ? 0 : 1.4,
                ease: 'linear',
              },
            }}
            style={{ zIndex: isActive ? 2 : 1 }}
            className="absolute inset-0 h-full w-full"
          >
            <motion.div
              style={{ y }}
              initial={{ scale: 1.1 }}
              animate={{ scale: isActive ? 1 : 1.1 }}
              transition={{ duration: 6, ease: 'linear' }}
              className="relative h-full w-full"
            >
              <Image
                src={src}
                alt={`Intro background ${i + 1}`}
                fill
                priority={i < 2}
                className="object-cover"
                sizes="100vw"
              />
            </motion.div>
          </motion.div>
        );
      })}
      {/* Gradient overlay for left-aligned text readability */}
      <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/85 via-black/55 to-black/30" />
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
    </div>
  );
};

const ImagesFlow: React.FC<ImagesFlowProps> = ({
  introTitle,
  introSubtitle,
  introEyebrow,
  introCtaLabel,
  introCtaHref,
  introImage,
  introImages,
  flowText = 'Every moment holds a universe waiting to be discovered',
  images,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const flowRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: introRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lenisContext = useLenisScroll();
  const [isAnimationReady, setIsAnimationReady] = useState(false);

  useEffect(() => {
    const flow = flowRef.current;
    const imgElements = imageRefs.current.filter(Boolean);
    if (!flow || imgElements.length === 0 || !lenisContext.isReady) return;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const isMobile = screenWidth < 800;
    const spread = isMobile ? 1.5 : 0.7;

    const positions = DEFAULT_POSITIONS.slice(0, Math.max(images.length, DEFAULT_POSITIONS.length));
    while (positions.length < images.length) {
      positions.push({
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2,
      });
    }

    const initPos = images.map(() => ({
      xPercent: -50,
      yPercent: -50,
      x: 0,
      y: 0,
      z: -1000,
      scale: 0,
      opacity: 1,
    }));
    const finalPos = images.map((_, i) => ({
      xPercent: -50,
      yPercent: -50,
      x: (positions[i]?.x ?? 0) * screenWidth * spread,
      y: (positions[i]?.y ?? 0) * screenHeight * spread,
      z: 2000,
      scale: 1,
    }));

    // Set initial hidden state
    imgElements.forEach((el, i) => gsap.set(el, initPos[i]));

    const maxTotalDelay = 0.6;
    const delayStep = Math.min(0.03, maxTotalDelay / Math.max(1, images.length));
    const lastImgDelay = (images.length - 1) * delayStep;
    const progressMultiplier = 1 / (1 - lastImgDelay);
    // Add extra buffer (1.5 screens) so the last image holds in place before unpin
    const endScreens = (progressMultiplier / 0.4) + 1.5;

    const st = ScrollTrigger.create({
      trigger: flow,
      start: 'top top',
      end: `+=${screenHeight * endScreens}px`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      anticipatePin: 1,
      onUpdate: (self) => {
        const progress = self.progress;

        imgElements.forEach((eachImage, index) => {
          const imgDelay = index * delayStep;
          const imgProgress = Math.max(0, (progress - imgDelay) * progressMultiplier);

          const start = initPos[index];
          const end = finalPos[index];

          // Clamp all images to [0, 1] — extra scroll distance is a hold zone
          const currentProgress = Math.min(1, imgProgress);

          let interpX = gsap.utils.interpolate(start.x, end.x, currentProgress);
          let interpY = gsap.utils.interpolate(start.y, end.y, currentProgress);
          let interpZ = gsap.utils.interpolate(start.z, end.z, currentProgress);
          const scale = gsap.utils.interpolate(start.scale, end.scale, currentProgress);

          if (index === images.length - 1) {
            interpX = 0;
            interpY = 0;
            interpZ = gsap.utils.interpolate(start.z, 0, currentProgress);
          }

          gsap.set(eachImage, {
            xPercent: -50,
            yPercent: -50,
            x: interpX,
            y: interpY,
            z: interpZ,
            scale,
          });
        });
      },
    });

    // Refresh after a frame to ensure layout is calculated, then reveal
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      setIsAnimationReady(true);
    });

    return () => {
      st.kill();
      setIsAnimationReady(false);
    };
  }, [images, lenisContext.isReady]);

  return (
    <main ref={containerRef} className={cn('relative w-full overflow-x-hidden', className)}>
      {/* Intro */}
      <section
        ref={introRef}
        className="relative flex min-h-screen w-full flex-col items-start justify-center overflow-hidden"
      >
        {introImages && introImages.length > 0 ? (
          <IntroBackground images={introImages} y={y} />
        ) : introImage ? (
          <motion.div
            style={{ y }}
            className="absolute inset-0 z-0"
          >
            <Image
              src={introImage}
              alt="Intro background"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/60" />
          </motion.div>
        ) : null}
        <div className="relative z-[100] w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl text-left"
          >
            {introEyebrow && (
              <span className="inline-block mb-5 text-primary text-xs sm:text-sm font-bold uppercase tracking-[0.3em]">
                {introEyebrow}
              </span>
            )}
            <h1 className="whitespace-pre-line font-black text-white leading-[1] tracking-tight text-[clamp(2rem,5.2vw,4.5rem)]">
              {introTitle}
            </h1>
            {introSubtitle && (
              <p className="mt-6 max-w-xl text-white/75 font-light leading-relaxed text-[clamp(0.95rem,1.3vw,1.15rem)]">
                {introSubtitle}
              </p>
            )}
            {introCtaLabel && introCtaHref && (
              <Link
                href={introCtaHref}
                className="group mt-9 inline-flex items-center gap-3 rounded-full bg-primary pl-7 pr-2 py-2 text-white font-bold text-sm sm:text-base uppercase tracking-wider hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/30"
              >
                <span>{introCtaLabel}</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            )}
          </motion.div>
        </div>
      </section>

      {/* Flow */}
      <section
        ref={flowRef}
        className="relative min-h-screen overflow-hidden bg-[#1c1c1c]"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-[100] w-full -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <p
            className="whitespace-pre-line opacity-80 text-[clamp(1.5rem,5vw,2rem)] tracking-[0.05em]"
          >
            {flowText}
          </p>
        </div>
        <div
          className="absolute left-0 top-0 h-full w-full [perspective:1000px] [transform-style:preserve-3d]"
        >
          {images.map((src, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) imageRefs.current[index] = el;
              }}
              className={cn(
                'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d] transition-opacity duration-200',
                isAnimationReady ? 'opacity-100' : 'opacity-0',
                index === images.length - 1
                  ? 'h-full w-full'
                  : 'h-[350px] w-[500px] max-w-[90vw]'
              )}
            >
              <div
                className={cn(
                  'relative h-full w-full overflow-hidden',
                  index === images.length - 1 && 'after:absolute after:inset-0 after:bg-black/40'
                )}
              >
                <Image
                  src={src}
                  alt={`Networx London event photo ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes={index === images.length - 1 ? '100vw' : '500px'}
                  priority={index < 5}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ImagesFlow;
