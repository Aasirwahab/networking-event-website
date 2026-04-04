'use client';

import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register standard GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface LenisContextValue {
  lenis: Lenis | null;
  isReady: boolean;
}

const LenisContext = createContext<LenisContextValue>({
  lenis: null,
  isReady: false,
});

export const useLenisScroll = () => useContext(LenisContext);

export const getScroller = (context: any) => {
  // Return undefined so GSAP ScrollTrigger defaults to the window/document body
  // instead of trying to read getComputedStyle from the Lenis instance object.
  return undefined;
};

export const LenisProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const [isReady, setIsReady] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Luxury Lenis Configuration
    const lenisInstance = new Lenis({
      duration: 1.5, // Heavier, more "executive" feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = lenisInstance;
    setLenis(lenisInstance);
    setIsReady(true);

    // Sync ScrollTrigger with Lenis
    lenisInstance.on('scroll', ScrollTrigger.update);

    // Synchronize GSAP ticker with Lenis
    // This ensures all animations are frame-perfect with the scroll
    gsap.ticker.add((time) => {
      lenisInstance.raf(time * 1000);
    });

    // Lag smoothing for heavy sections
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenisInstance.destroy();
      gsap.ticker.remove((time) => {
        lenisInstance.raf(time * 1000);
      });
      setIsReady(false);
    };
  }, []);

  return (
    <LenisContext.Provider value={{ lenis, isReady }}>
      {children}
    </LenisContext.Provider>
  );
};
