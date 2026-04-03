'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { MenuOverlay } from './MenuOverlay';
import { usePageTransition } from './TransitionProvider';

export function Navbar() {
  const { scrolled } = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { navigateTo } = usePageTransition();

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          mobileMenuOpen
            ? 'bg-transparent text-white'
            : scrolled 
              ? 'bg-white/95 backdrop-blur-md shadow-nav text-slate-900' 
              : 'bg-white text-slate-900'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link 
              href="/" 
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                navigateTo('/');
              }} 
              className={`text-2xl font-bold transition-colors ${mobileMenuOpen ? 'text-white' : 'text-slate-900'}`}
            >
              Actos
            </Link>

            {/* Right Side - Only Menu */}
            <div className="flex items-center">
              <button 
                className={`nav-toggler flex flex-col justify-center items-center gap-[6px] p-2 cursor-pointer bg-transparent border-none group ${mobileMenuOpen ? 'open' : ''}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Menu"
              >
                <span className={`w-8 h-[2px] transition-all duration-400 ease-in-out ${mobileMenuOpen ? 'bg-white translate-y-[4px] rotate-45 scale-x-90' : 'bg-current'}`}></span>
                <span className={`w-8 h-[2px] transition-all duration-400 ease-in-out ${mobileMenuOpen ? 'bg-white -translate-y-[4px] -rotate-45 scale-x-90' : 'bg-current'}`}></span>
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
