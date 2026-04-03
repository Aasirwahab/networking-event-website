"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { navLinks } from "@/data/content";
import { usePageTransition } from "./TransitionProvider";

interface MenuOverlayProps {
  isOpen: boolean;
  onLinkClick?: () => void;
}

export const MenuOverlay = ({ isOpen, onLinkClick }: MenuOverlayProps) => {
  const container = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const { navigateTo } = usePageTransition();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (onLinkClick) onLinkClick(); // Close the menu overlay

    // The TransitionProvider's navigateTo handles the animation out and then pushes the route.
    navigateTo(href);
  };

  useGSAP(() => {
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

    // Split text for reveal animation
    const links = container.current?.querySelectorAll(".nav-items a");
    if (links) {
      links.forEach((link) => {
        new SplitType(link as HTMLElement, {
          types: "lines",
          lineClass: "line-inner",
        });
      });
    }

    return () => {
      timeline.current?.kill();
    };
  }, { scope: container });

  useEffect(() => {
    if (!timeline.current) return;

    if (isOpen) {
      timeline.current.play();
      gsap.fromTo(
        ".line-inner",
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
      gsap.to(".line-inner", {
        y: "110%",
        duration: 0.4,
        ease: "power4.in",
      });
    }
  }, [isOpen]);

  return (
    <div
      ref={container}
      className={`nav-content font-sans ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      <div className="nav-bg"></div>
      <div className="nav-bg"></div>
      <div className="nav-bg"></div>
      <div className="nav-bg"></div>

      <div className="nav-items">
        {/* Left column: socials + legal */}
        <div className="nav-items-col">
          <div className="nav-socials">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
          <div className="nav-bottom">
            <div className="nav-legal">
              <Link href="/privacy-policy" onClick={(e) => handleLinkClick(e, "/privacy-policy")}>Privacy Policy</Link>
              <Link href="/licensing" onClick={(e) => handleLinkClick(e, "/licensing")}>Licensing</Link>
              <Link href="/styleguide" onClick={(e) => handleLinkClick(e, "/styleguide")}>Style Guide</Link>
              <Link href="/contact" onClick={(e) => handleLinkClick(e, "/contact")}>Contact us</Link>
            </div>
          </div>
        </div>

        {/* Right column: primary + secondary nav */}
        <div className="nav-items-col">
          <div className="nav-primary-links font-bold">
            <Link href="/" onClick={(e) => handleLinkClick(e, "/")}>Home</Link>
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} onClick={(e) => handleLinkClick(e, link.href)}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="nav-secondary-links">
            <Link href="/faq" onClick={(e) => handleLinkClick(e, "/faq")}>FAQ</Link>
            <Link href="/changelog" onClick={(e) => handleLinkClick(e, "/changelog")}>Changelog</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
