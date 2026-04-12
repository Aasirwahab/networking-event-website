'use client';

import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

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

export const LenisProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let lenisInstance: Lenis | null = null;
    let tickerCallback: ((time: number) => void) | null = null;

    try {
      lenisInstance = new Lenis({
        duration: 0.8,
        easing: (t) => 1 - Math.pow(1 - t, 3),
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.8,
      });

      lenisRef.current = lenisInstance;

      lenisInstance.on('scroll', ScrollTrigger.update);

      tickerCallback = (time: number) => {
        lenisInstance!.raf(time * 1000);
      };
      gsap.ticker.add(tickerCallback);
      gsap.ticker.lagSmoothing(0);
    } catch {
      // Graceful fallback: site works without smooth scroll
    }

    // Single state update triggers one render instead of two
    setIsReady(true);

    return () => {
      if (lenisInstance) lenisInstance.destroy();
      if (tickerCallback) gsap.ticker.remove(tickerCallback);
      lenisRef.current = null;
    };
  }, []);

  const value = useMemo<LenisContextValue>(
    () => ({ lenis: lenisRef.current, isReady }),
    [isReady]
  );

  return (
    <LenisContext.Provider value={value}>
      {children}
    </LenisContext.Provider>
  );
};
