'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import './ScrollReveal.css';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

const translateMap: Record<string, string> = {
  up: 'translate3d(0, 40px, 0) scale(0.97)',
  down: 'translate3d(0, -40px, 0) scale(0.97)',
  left: 'translate3d(40px, 0, 0) scale(0.97)',
  right: 'translate3d(-40px, 0, 0) scale(0.97)',
};

export function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className = ''
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Set CSS custom properties for dynamic values
    el.style.setProperty('--sr-delay', `${delay}s`);
    el.style.setProperty('--sr-transform-from', translateMap[direction]);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, direction]);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
