'use client';

import { useRef, useState, useEffect } from 'react';

export function useFooterSticky() {
  const footerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const updateLayout = () => {
      const footer = footerRef.current;
      const wrapper = wrapperRef.current;
      const inner = innerRef.current;
      if (!footer || !wrapper || !inner) return;

      const fh = footer.getBoundingClientRect().height;
      const wh = window.innerHeight;
      const sticky = fh > 0 && wh > 0 && fh <= wh;

      setIsSticky(sticky);
      wrapper.style.setProperty('--footer-h', sticky ? `${fh}px` : 'auto');
      inner.style.height = sticky ? `${fh}px` : '';
    };

    const handleResize = () => updateLayout();
    window.addEventListener('resize', handleResize);

    const resizeObserver = new ResizeObserver(() => updateLayout());
    if (footerRef.current) {
      resizeObserver.observe(footerRef.current);
    }

    updateLayout();

    return () => {
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
    };
  }, []);

  return { footerRef, wrapperRef, innerRef, isSticky };
}
