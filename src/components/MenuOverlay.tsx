"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { navLinks, footerLinks } from "@/data/content";

interface MenuOverlayProps {
  isOpen: boolean;
}

export const MenuOverlay = ({ isOpen }: MenuOverlayProps) => {
  const container = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    // Initial timeline for the background blocks and menu container
    timeline.current = gsap.timeline({ paused: true });

    timeline.current.to(".nav-bg", {
      scaleY: 1,
      duration: 0.75,
      stagger: 0.1,
      ease: "power3.inOut",
    });

    timeline.current.to(
      ".nav-items",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.75,
        ease: "power3.inOut",
      },
      "-=0.6"
    );

    // Split text logic - strictly targeting only the text nodes
    const links = container.current?.querySelectorAll(".nav-items a");
    if (links) {
      links.forEach((link) => {
        new SplitType(link as HTMLElement, { 
          types: "lines", 
          lineClass: "line-inner" 
        });
      });
    }

    // Cleanup: Reset any transforms if needed
    return () => {
      timeline.current?.kill();
    };
  }, { scope: container });

  useEffect(() => {
    if (!timeline.current) return;

    if (isOpen) {
      timeline.current.play();
      // Animate lines in - targeting the split results
      gsap.fromTo(".line-inner", 
        { y: "110%" },
        {
          y: "0%",
          duration: 0.8,
          stagger: 0.02,
          ease: "power4.out",
          delay: 0.8,
        }
      );
    } else {
      timeline.current.reverse();
      // Animate lines out
      gsap.to(".line-inner", {
        y: "110%",
        duration: 0.4,
        ease: "power4.in",
      });
    }
  }, [isOpen]);

  return (
    <div ref={container} className={`nav-content font-sans ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      <div className="nav-bg"></div>
      <div className="nav-bg"></div>
      <div className="nav-bg"></div>
      <div className="nav-bg"></div>

      <div className="nav-items">
        <div className="nav-items-col">
          <div className="nav-socials">
            <a href="#">X (Twitter)</a>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
          </div>
          <div className="nav-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#licensing">Licensing</a>
            <a href="#styleguide">Style Guide</a>
            <a href="#contact">Contact us</a>
          </div>
        </div>
        <div className="nav-items-col">
          <div className="nav-primary-links font-bold">
            <a href="/">Home</a>
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="nav-secondary-links">
            <a href="#gallery">Gallery</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
            <a href="#changelog">Changelog</a>
          </div>
        </div>
      </div>
    </div>
  );
};
