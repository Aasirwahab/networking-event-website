'use client';

import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import Lenis from 'lenis';

interface LenisContextValue {
  lenis: Lenis | null;
  isReady: boolean;
}

const LenisContext = createContext<LenisContextValue>({
  lenis: null,
  isReady: false,
});

export const useLenisScroll = () => useContext(LenisContext);

export const getScroller = (context: LenisContextValue) => {
  // Return undefined so GSAP ScrollTrigger defaults to the window/document body
  // instead of trying to read getComputedStyle from the Lenis instance object.
  return undefined;
};

export const LenisProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const [isReady, setIsReady] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenisInstance;
    setLenis(lenisInstance);
    setIsReady(true);

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisInstance.destroy();
      setIsReady(false);
    };
  }, []);

  return (
    <LenisContext.Provider value={{ lenis, isReady }}>
      {children}
    </LenisContext.Provider>
  );
};
