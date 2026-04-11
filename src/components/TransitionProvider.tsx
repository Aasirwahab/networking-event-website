"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  ReactNode,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import gsap from "gsap";

const TransitionContext = createContext<{
  navigateTo: (href: string) => boolean;
}>({ navigateTo: () => false });

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
  const coverTweenRef = useRef<gsap.core.Tween | null>(null);
  const pendingHref = useRef<string | null>(null);
  const coverDone = useRef(false);
  const [revealReady, setRevealReady] = useState(false);

  // Kill any in-flight cover tween on unmount
  useEffect(() => {
    return () => {
      coverTweenRef.current?.kill();
    };
  }, []);

  // Reveal columns (slide them off-screen to show the new page)
  useEffect(() => {
    if (!revealReady) return;

    const cols = colRefs.current;
    gsap.set(cols, { y: "0%" });

    const tween = gsap.to(cols, {
      y: "-100%",
      duration: 0.8,
      ease: "power4.inOut",
      stagger: 0.05,
      onComplete: () => {
        pendingHref.current = null;
        coverDone.current = false;
        setRevealReady(false);
      },
    });

    return () => {
      // Kill in-flight tween on unmount — don't revert finished ones to avoid visual pop
      tween.kill();
    };
  }, [revealReady]);

  // When pathname changes, check if it matches our pending navigation
  useEffect(() => {
    if (!pendingHref.current || !coverDone.current) return;
    if (pathname === pendingHref.current) {
      // New page is rendered — trigger reveal on next frame
      requestAnimationFrame(() => {
        setRevealReady(true);
      });
    }
  }, [pathname]);

  const navigateTo = useCallback(
    (href: string) => {
      if (pendingHref.current) return false;
      if (pathname === href) return false;

      pendingHref.current = href;
      coverDone.current = false;
      const cols = colRefs.current;

      gsap.set(cols, { y: "100%" });

      coverTweenRef.current?.kill();
      coverTweenRef.current = gsap.to(cols, {
        y: "0%",
        duration: 0.6,
        ease: "power4.inOut",
        stagger: 0.05,
        onComplete: () => {
          coverDone.current = true;
          router.push(href);
        },
      });
      return true;
    },
    [router, pathname]
  );

  const contextValue = useMemo(
    () => ({ navigateTo: (href: string) => navigateTo(href) }),
    [navigateTo]
  );

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
