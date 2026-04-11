"use client";

import React, { useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import gsap from "gsap";
import { navLinks, socialLinks } from "@/data/content";
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
      // Start the page transition first (covers the screen),
      // then close the menu so the closing animation happens behind the cover
      const didNavigate = navigateTo(href);
      if (didNavigate && onLinkClick) {
        setTimeout(() => onLinkClick(), 300);
      } else if (onLinkClick) {
        onLinkClick();
      }
    },
    [onLinkClick, navigateTo]
  );

  // Build timeline on mount
  useEffect(() => {
    const el = container.current;
    if (!el) return;

    const ctx = gsap.context(() => {
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
    }, container);

    return () => ctx.revert();
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

  // Keyboard accessibility: Escape closes, Tab cycles within the overlay
  useEffect(() => {
    if (!isOpen) return;
    const root = container.current;
    if (!root) return;

    const prevActive = document.activeElement as HTMLElement | null;
    const getFocusables = () =>
      Array.from(
        root.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => !el.hasAttribute("inert"));

    // Focus first focusable on next frame (after animation start)
    const focusTimer = window.setTimeout(() => {
      getFocusables()[0]?.focus();
    }, 300);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onLinkClick?.();
        return;
      }
      if (e.key !== "Tab") return;
      const focusables = getFocusables();
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey) {
        if (active === first || !root.contains(active)) {
          e.preventDefault();
          last.focus();
        }
      } else if (active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", handleKeyDown);
      prevActive?.focus?.();
    };
  }, [isOpen, onLinkClick]);

  return (
    <div
      ref={container}
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Main navigation"
      className={`nav-content font-sans ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      <div className="nav-bg"></div>
      <div className="nav-bg"></div>
      <div className="nav-bg"></div>

      <nav className="nav-items" role="navigation" aria-label="Main navigation">
        {/* Left column: socials + legal */}
        <div className="nav-items-col">
          <div className="nav-socials">
            {socialLinks.map((social) => (
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

        </div>
      </nav>
    </div>
  );
};
