"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

interface IntroTextProps {
  text: string;
  delay?: number;
  onAnimationComplete?: () => void;
  className?: string;
}

const IntroText: React.FC<IntroTextProps> = ({ 
  text, 
  delay = 0, 
  onAnimationComplete,
  className = "" 
}) => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    // Split the text into lines/words
    const split = new SplitType(textRef.current, { types: "lines,words" });
    
    // Initial state: hide the words below their line container (overflow hidden)
    gsap.set(split.words, { y: "110%", opacity: 0 });
    gsap.set(textRef.current, { opacity: 1 });

    const tl = gsap.timeline({
      delay,
      onComplete: () => {
        if (onAnimationComplete) onAnimationComplete();
      },
    });

    tl.to(split.words, {
      y: "0%",
      opacity: 1,
      duration: 1.2,
      stagger: 0.1,
      ease: "expo.out",
    });

    return () => {
      split.revert();
    };
  }, [text, delay, onAnimationComplete]);

  return (
    <div className={`overflow-hidden ${className}`}>
      <h2
        ref={textRef}
        className="text-[clamp(1.5rem,5vw,3rem)] font-bold text-white opacity-0 text-center"
      >
        {text}
      </h2>
    </div>
  );
};

export default IntroText;
