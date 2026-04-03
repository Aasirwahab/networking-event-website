"use client"

import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

export const Heading = ({ children, className }: { children: ReactNode, className?: string }) => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headingRef.current) return;

    const split = new SplitType(headingRef.current, {
      types: "lines",
      lineClass: "overflow-hidden",
    });

    const innerLines = split.lines?.map(line => {
        const span = document.createElement("span");
        span.style.display = "block";
        span.className = "line-inner inline-block h-full w-full";
        span.innerHTML = line.innerHTML;
        line.innerHTML = "";
        line.appendChild(span);
        return span;
    });

    gsap.fromTo(
      innerLines || [],
      { yPercent: 120, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        stagger: 0.1,
        ease: "power4.out",
        duration: 1.2,
        delay: 0.2, // Small delay for the columns to finish sliding out
      }
    );

    return () => split.revert();
  }, []);

  return (
    <h1 ref={headingRef} className={`font-display tracking-tight ${className}`}>
      {children}
    </h1>
  );
};

export const SubHeading = ({ children, className }: { children: ReactNode, className?: string }) => {
  const subHeadingRef = useRef<HTMLParagraphElement>(null);
  
  useEffect(() => {
    if (!subHeadingRef.current) return;

    gsap.fromTo(subHeadingRef.current, 
        {
            opacity: 0,
            y: 20
        },
        {
            opacity: 1,
            y: 0,
            ease: "power3.out",
            duration: 1,
            delay: 0.4
        }
    )
  }, [])

  return (
    <p ref={subHeadingRef} className={`mt-8 leading-relaxed ${className}`}>
      {children}
    </p>
  );
};

const TransitionTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex justify-center items-center px-6">
        <div className="max-w-4xl mx-auto text-center">{children}</div>
      </main>
    </div>
  );
};

export default TransitionTemplate;
