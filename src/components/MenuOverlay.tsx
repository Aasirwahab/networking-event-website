"use client";

import React, { useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import gsap from "gsap";
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

  const handleLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      if (onLinkClick) onLinkClick();
      navigateTo(href);
    },
    [onLinkClick, navigateTo]
  );

  // Build timeline on mount
  useEffect(() => {
    const el = container.current;
    if (!el) return;

    const bgs = el.querySelectorAll(".nav-bg");
    const items = el.querySelector(".nav-items");
    const links = el.querySelectorAll(".nav-link-reveal");

    const tl = gsap.timeline({ paused: true });

    tl.to(bgs, {
      scaleY: 1,
      duration: 0.6,
      stagger: 0.08,
      ease: "power3.inOut",
      force3D: true,
    });

    tl.to(
      items,
      {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      },
      "-=0.3"
    );

    tl.fromTo(
      links,
      { y: "100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 0.5,
        stagger: 0.03,
        ease: "power3.out",
        force3D: true,
      },
      "-=0.2"
    );

    timeline.current = tl;

    return () => {
      tl.kill();
    };
  }, []);

  // Play/reverse on isOpen change
  useEffect(() => {
    if (!timeline.current) return;

    if (isOpen) {
      timeline.current.timeScale(1).play();
    } else {
      timeline.current.timeScale(1.4).reverse();
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

      <div className="nav-items">
        {/* Left column: socials + legal */}
        <div className="nav-items-col">
          <div className="nav-socials">
            {[
              { href: "https://twitter.com", label: "X (Twitter)" },
              { href: "https://linkedin.com", label: "LinkedIn" },
              { href: "https://instagram.com", label: "Instagram" },
              { href: "https://youtube.com", label: "YouTube" },
            ].map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
                <span className="nav-link-reveal inline-block">{social.label}</span>
              </a>
            ))}
          </div>
          <div className="nav-bottom">
            <div className="nav-legal">
              {[
                { href: "/privacy-policy", label: "Privacy Policy" },
                { href: "/licensing", label: "Licensing" },
                { href: "/styleguide", label: "Style Guide" },
                { href: "/contact", label: "Contact us" },
              ].map((link) => (
                <Link key={link.label} href={link.href} onClick={(e) => handleLinkClick(e, link.href)}>
                  <span className="nav-link-reveal inline-block">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right column: primary + secondary nav */}
        <div className="nav-items-col">
          <div className="nav-primary-links font-bold">
            <Link href="/" onClick={(e) => handleLinkClick(e, "/")}>
              <span className="nav-link-reveal inline-block">Home</span>
            </Link>
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} onClick={(e) => handleLinkClick(e, link.href)}>
                <span className="nav-link-reveal inline-block">{link.label}</span>
              </Link>
            ))}
          </div>

          <div className="nav-secondary-links">
            <Link href="/faq" onClick={(e) => handleLinkClick(e, "/faq")}>
              <span className="nav-link-reveal inline-block">FAQ</span>
            </Link>
            <Link href="/changelog" onClick={(e) => handleLinkClick(e, "/changelog")}>
              <span className="nav-link-reveal inline-block">Changelog</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
