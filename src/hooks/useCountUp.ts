'use client';

import { useEffect, useRef, useCallback } from 'react';

export function useCountUp(end: number, duration: number = 2000) {
  const containerRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const hasStarted = useRef(false);

  // Assign the span ref that will hold the count value
  const countSpanRef = useCallback((node: HTMLSpanElement | null) => {
    countRef.current = node;
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted.current) {
            hasStarted.current = true;
            startAnimation();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(container);

    let animationFrame: number;

    function startAnimation() {
      let startTime: number | null = null;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);

        // Ease out cubic
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(easeOut * end);

        // Direct DOM update — no React re-render
        if (countRef.current) {
          countRef.current.textContent = String(current);
        }

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
    }

    return () => {
      observer.disconnect();
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [end, duration]);

  return { ref: containerRef, countSpanRef };
}
