'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, ChevronDown, Menu, X } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { navLinks } from '@/data/content';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const { scrolled } = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-nav' 
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-text-primary">
            Actos
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-text-primary hover:text-primary transition-colors duration-250"
              >
                {link.label}
              </a>
            ))}
            
            {/* Pages Dropdown */}
            <div className="relative">
              <button
                onClick={() => setPagesOpen(!pagesOpen)}
                className="flex items-center gap-1 text-sm font-medium text-text-primary hover:text-primary transition-colors duration-250"
              >
                Pages
                <ChevronDown 
                  className={`w-4 h-4 transition-transform duration-200 ${pagesOpen ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {pagesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-card border border-border py-2"
                  >
                    <a href="#gallery" className="block px-4 py-2 text-sm text-text-secondary hover:text-primary hover:bg-bg-gray transition-colors">Gallery</a>
                    <a href="#faq" className="block px-4 py-2 text-sm text-text-secondary hover:text-primary hover:bg-bg-gray transition-colors">FAQ</a>
                    <a href="#contact" className="block px-4 py-2 text-sm text-text-secondary hover:text-primary hover:bg-bg-gray transition-colors">Contact us</a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Cart */}
            <a href="#cart" className="relative flex items-center gap-1 text-sm font-medium text-text-primary hover:text-primary transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden sm:inline">Cart</span>
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </a>

            {/* Contact Button */}
            <Button 
              className="hidden sm:flex bg-primary hover:bg-primary-hover text-white rounded-lg px-5 py-2 text-sm font-medium transition-all duration-300 hover:scale-[1.02]"
            >
              Contact us
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-text-primary"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-border"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-medium text-text-primary hover:text-primary transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a href="#gallery" className="block text-sm font-medium text-text-primary hover:text-primary transition-colors py-2">Gallery</a>
              <a href="#faq" className="block text-sm font-medium text-text-primary hover:text-primary transition-colors py-2">FAQ</a>
              <a href="#contact" className="block text-sm font-medium text-text-primary hover:text-primary transition-colors py-2">Contact us</a>
              <Button className="w-full bg-primary hover:bg-primary-hover text-white rounded-lg px-5 py-2 text-sm font-medium mt-4">
                Contact us
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
