"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  ReactNode,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import gsap from "gsap";

const TransitionContext = createContext<{ navigateTo: (href: string) => void; }>({ navigateTo: () => {}});

export const usePageTransition = () => useContext(TransitionContext);

export default function TransitionProvider({
  children,
  column = 6,
}: {
  children: ReactNode;
  column?: number;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const colRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isTransitioning = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    if (!isTransitioning.current) return;
    
    // Clear any previous transition safety timeout
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    const cols = colRefs.current;
    gsap.set(cols, { y: "0%" }); // ensure we start from full coverage

    gsap.to(cols, {
      y: "-100%",
      duration: 0.8,
      ease: "power4.inOut",
      stagger: 0.05,
      onComplete: () => {
        isTransitioning.current = false;
      },
    });
    
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    }
  }, [pathname]);

  const navigateTo = useCallback(
    (href: string) => {
      if (isTransitioning.current) return false;
      if (pathname === href) return false;

      isTransitioning.current = true;
      const cols = colRefs.current;
      
      // Set a safety timeout to reset state if navigation is interrupted
      timeoutRef.current = setTimeout(() => {
        if (isTransitioning.current) {
          console.warn("Page transition timed out, resetting state.");
          isTransitioning.current = false;
        }
      }, 3000);

      gsap.set(cols, { y: "100%" });

      gsap.to(cols, {
        y: "0%",
        duration: 0.6,
        ease: "power4.inOut",
        stagger: 0.05,
        onComplete: () => {
          router.push(href);
        },
      });
      return true;
    },
    [router, pathname]
  );

  const contextValue = useMemo(() => ({ navigateTo: (href: string) => { navigateTo(href) } }), [navigateTo]);

  return (
    <TransitionContext.Provider value={contextValue}>
      {children}
      <div className="w-screen h-screen fixed inset-0 z-[9999] flex pointer-events-none">
        {Array.from({ length: column }).map((_, idx) => (
          <div
            key={idx}
            ref={(el) => {
              colRefs.current[idx] = el;
            }}
            className="w-full h-full bg-slate-950 border-r border-white/5 translate-y-full"
          />
        ))}
      </div>
    </TransitionContext.Provider>
  );
}
