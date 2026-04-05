'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MenuOverlay } from './MenuOverlay';
import { usePageTransition } from './TransitionProvider';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { navigateTo } = usePageTransition();

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`top-0 left-0 right-0 z-[9999] transition-all duration-500 ease-[cubic-bezier(0.16_1_0.3_1)] ${
          mobileMenuOpen
            ? 'fixed bg-transparent text-white pt-8'
            : 'absolute bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <nav className="flex items-center justify-between">
            {/* Logo: Premium Branding */}
            <Link 
              href="/" 
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                navigateTo('/');
              }} 
              className={`group flex items-center gap-1.5 transition-transform duration-300 hover:scale-[1.02]`}
            >
              <span className={`text-2xl font-black tracking-tighter uppercase transition-all duration-500 text-white`}>
                Networx
              </span>
              <span className="text-[10px] tracking-[0.6em] uppercase font-bold text-primary ml-1">
                London
              </span>
            </Link>

            {/* Right Side: Elite Menu Toggler */}
            <div className="flex items-center gap-8">
              <button 
                className={`flex flex-col justify-center items-end gap-[5px] p-2 cursor-pointer bg-transparent border-none group outline-none`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Menu"
              >
                <span className={`h-[1px] transition-all duration-500 ease-[cubic-bezier(0.16_1_0.3_1)] ${
                  mobileMenuOpen 
                    ? 'w-8 bg-white translate-y-[6px] rotate-45' 
                    : `w-8 group-hover:w-10 bg-white shadow-xl`
                }`}></span>
                <span className={`h-[1px] transition-all duration-500 ease-[cubic-bezier(0.16_1_0.3_1)] ${
                  mobileMenuOpen 
                    ? 'w-8 bg-white -translate-y-[0px] -rotate-45' 
                    : `w-5 group-hover:w-10 bg-white shadow-xl`
                }`}></span>
                {!mobileMenuOpen && (
                   <span className={`text-[9px] uppercase tracking-[0.3em] font-bold mt-1 transition-all duration-500 text-white/70 group-hover:text-white`}>
                     Menu
                   </span>
                )}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Full Screen Menu Overlay */}
      <MenuOverlay isOpen={mobileMenuOpen} onLinkClick={() => setMobileMenuOpen(false)} />
    </>
  );
}
