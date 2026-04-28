'use client';

import { useCallback, useEffect, useState, useTransition } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { MenuOverlay } from './MenuOverlay';
import { usePageTransition } from './TransitionProvider';
import { INTRO_END_DELAY_SEC } from './Intro';


export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [, startTransition] = useTransition();
  const { navigateTo } = usePageTransition();
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const next = window.scrollY > 50;
        startTransition(() => setIsScrolled(next));
        ticking = false;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const didNavigate = navigateTo('/');
      if (didNavigate) {
        setTimeout(() => setMobileMenuOpen(false), 300);
      } else {
        setMobileMenuOpen(false);
      }
    },
    [navigateTo]
  );

  const handleMenuToggle = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const handleMenuClose = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  // If we are on the homepage, delay the Navbar reveal until the Intro cinematic finishes
  const shouldDelay = pathname === '/';
  const delayAmount = shouldDelay ? INTRO_END_DELAY_SEC : 0;

  // Theme-based colors
  const isDarkTheme = !isScrolled && !mobileMenuOpen;
  const textColor = isDarkTheme ? 'text-white' : 'text-slate-900';
  const iconBg = isDarkTheme ? 'bg-white' : 'bg-slate-900';
  const subTextColor = isDarkTheme ? 'text-white/70 group-hover:text-white' : 'text-slate-500 group-hover:text-slate-900';

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: delayAmount, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ease-in-out ${isScrolled && !mobileMenuOpen
          ? 'bg-transparent py-4'
          : 'bg-transparent py-8'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <nav className="grid grid-cols-3 items-center">

            {/* Left: Text Logo with masked translateY reveal */}
            <Link
              href="/"
              onClick={handleLogoClick}
              className="group flex items-end gap-1.5 transition-transform duration-300 hover:scale-[1.02] justify-self-start"
            >
              <span className="overflow-hidden inline-block leading-[0.95] pb-[2px]">
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.9, delay: delayAmount + 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className={`block text-2xl font-black tracking-tighter uppercase transition-colors duration-500 ${textColor}`}
                >
                  Networx
                </motion.span>
              </span>
              <span className="overflow-hidden inline-block leading-[0.95] pb-[2px] ml-1">
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.9, delay: delayAmount + 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-[10px] tracking-[0.6em] uppercase font-bold text-primary"
                >
                  London
                </motion.span>
              </span>
            </Link>

            {/* Center: Logo Image with masked reveal */}
            <div className="flex justify-center">
              <Link href="/" onClick={handleLogoClick} className="transition-transform duration-300 hover:scale-[1.03]">
                <span className="overflow-hidden inline-block pb-[2px]">
                  <motion.span
                    initial={{ y: '110%' }}
                    animate={{ y: '0%' }}
                    transition={{ duration: 0.9, delay: delayAmount + 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="block"
                  >
                    <Image
                      src="/images/logo.png"
                      alt="Networx London"
                      width={160}
                      height={80}
                      className={`object-contain h-20 w-auto transition-all duration-500 ${isDarkTheme ? 'brightness-0 invert' : 'brightness-0'}`}
                      priority
                    />
                  </motion.span>
                </span>
              </Link>
            </div>

            {/* Right: Menu Toggler */}
            <div className="flex items-center gap-8 justify-self-end">
              <button
                className={`flex flex-col justify-center items-end gap-[5px] p-2 cursor-pointer bg-transparent border-none group outline-none`}
                onClick={handleMenuToggle}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                {...{
                  "aria-expanded": mobileMenuOpen ? "true" : "false",
                  ...(mobileMenuOpen ? { "aria-controls": "mobile-menu" } : {}),
                }}
              >
                <span className={`h-[1px] ease-custom-out transition-all duration-500 ${mobileMenuOpen
                  ? 'w-8 bg-white translate-y-[6px] rotate-45'
                  : `w-8 group-hover:w-10 ${iconBg} shadow-sm`
                  }`}></span>
                <span className={`h-[1px] ease-custom-out transition-all duration-500 ${mobileMenuOpen
                  ? 'w-8 bg-white -translate-y-[0px] -rotate-45'
                  : `w-5 group-hover:w-10 ${iconBg} shadow-sm`
                  }`}></span>
                {!mobileMenuOpen && (
                  <span className={`text-[9px] uppercase tracking-[0.3em] font-bold mt-1 transition-all duration-500 ${subTextColor}`}>
                    Menu
                  </span>
                )}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <MenuOverlay isOpen={mobileMenuOpen} onLinkClick={handleMenuClose} />
        )}
      </AnimatePresence>
    </>
  );
}
