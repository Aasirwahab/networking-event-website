'use client';

import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useLenisScroll } from '@/contexts/LenisContext';

gsap.registerPlugin(ScrollTrigger);

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
  introImage?: string;
  introImages?: string[];
  flowText?: string;
  outroTitle: string;
  outroSubtitle?: string;
  images: string[];
  className?: string;
}

const IntroBackground = ({ images, y }: { images: string[], y: any }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="absolute inset-0 z-0 h-full w-full overflow-hidden flex items-center justify-center">
      {images.map((src, i) => (
        <motion.div
          key={src}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: i === index ? 1 : 0,
            zIndex: i === index ? 2 : 1
          }}
          transition={{ 
            opacity: { duration: 2, ease: "easeInOut" }
          }}
          className="absolute inset-0 h-full w-full"
        >
          <motion.div 
            style={{ y }} 
            initial={{ scale: 1.15 }}
            animate={{ scale: i === index ? 1 : 1.15 }}
            transition={{ duration: 6, ease: "linear" }}
            className="relative h-full w-full"
          >
            <Image
              src={src}
              alt={`Intro background ${i + 1}`}
              fill
              priority={i === 0}
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </motion.div>
      ))}
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/50 z-20" />
    </div>
  );
};

const ImagesFlow: React.FC<ImagesFlowProps> = ({
  introTitle,
  introSubtitle,
  introImage,
  introImages,
  flowText = 'Every moment holds a universe waiting to be discovered',
  outroTitle,
  outroSubtitle,
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
    setIsAnimationReady(true);

    const maxTotalDelay = 0.6;
    const delayStep = Math.min(0.03, maxTotalDelay / Math.max(1, images.length));
    const lastImgDelay = (images.length - 1) * delayStep;
    const progressMultiplier = 1 / (1 - lastImgDelay);
    const endScreens = progressMultiplier / 0.4;

    const st = ScrollTrigger.create({
      trigger: flow,
      start: 'top top',
      end: `+=${screenHeight * endScreens}px`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;

        imgElements.forEach((eachImage, index) => {
          const imgDelay = index * delayStep;
          const imgProgress = Math.max(0, (progress - imgDelay) * progressMultiplier);

          const start = initPos[index];
          const end = finalPos[index];

          let currentProgress = imgProgress;
          if (index === images.length - 1) {
            currentProgress = Math.min(1, imgProgress);
          }

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

    // Refresh after a frame to ensure layout is calculated
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      st.kill();
      setIsAnimationReady(false);
    };
  }, [images, lenisContext.isReady]);

  return (
    <main ref={containerRef} className={cn('w-full overflow-x-hidden', className)}>
      {/* Intro */}
      <section
        ref={introRef}
        className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden"
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
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-[100] -translate-x-1/2 -translate-y-1/2 text-center">
          <h1
            className="mb-4 bg-gradient-to-br from-white to-white/60 bg-clip-text font-extralight uppercase tracking-[0.3em] text-transparent text-[clamp(2rem,8vw,6rem)]"
          >
            {introTitle}
          </h1>
          {introSubtitle && (
            <p
              className="font-light tracking-[0.15em] text-white/70 text-[clamp(0.75rem,2vw,1.2rem)]"
            >
              {introSubtitle}
            </p>
          )}
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
              style={{ opacity: isAnimationReady ? 1 : 0 }}
              className={cn(
                'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d]',
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

      {/* Outro */}
      <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#0B0B0F]">
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-[100] -translate-x-1/2 -translate-y-1/2 text-center">
          <h1
            className="mb-4 bg-gradient-to-br from-white to-white/60 bg-clip-text font-extralight uppercase tracking-[0.3em] text-transparent text-[clamp(2rem,8vw,6rem)]"
          >
            {outroTitle}
          </h1>
          {outroSubtitle && (
            <p
              className="font-light tracking-[0.15em] text-white/70 text-[clamp(0.75rem,2vw,1.2rem)]"
            >
              {outroSubtitle}
            </p>
          )}
        </div>
      </section>
    </main>
  );
};

export default ImagesFlow;
