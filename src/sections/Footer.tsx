'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { footerLinks } from '@/data/content';

// Social icons as SVG components
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

export function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="bg-dark text-white pt-16 lg:pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-dark-border">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <a href="mailto:info@example.com" className="text-white text-lg font-medium hover:text-primary transition-colors block mb-4">
              info@example.com
            </a>
            <p className="text-text-muted text-sm leading-relaxed mb-4">
              1901 Thornridge Cir. Shiloh,<br />
              Hawaii 81063
            </p>
            <a href="tel:+9075550101" className="text-text-muted text-sm hover:text-white transition-colors block mb-6">
              +(907) 555-0101
            </a>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <motion.a 
                href="#twitter" 
                whileHover={{ scale: 1.1 }}
                className="text-text-muted hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon />
              </motion.a>
              <motion.a 
                href="#youtube" 
                whileHover={{ scale: 1.1 }}
                className="text-text-muted hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <YouTubeIcon />
              </motion.a>
              <motion.a 
                href="#facebook" 
                whileHover={{ scale: 1.1 }}
                className="text-text-muted hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </motion.a>
              <motion.a 
                href="#instagram" 
                whileHover={{ scale: 1.1 }}
                className="text-text-muted hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </motion.a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-white font-medium mb-4">&copy; 2024 Actos.</h4>
            <ul className="space-y-3">
              {footerLinks.column1.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-text-muted text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <ul className="space-y-3 mt-0 lg:mt-8">
              {footerLinks.column2.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-text-muted text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <ul className="space-y-3 mt-0 lg:mt-8">
              {footerLinks.column3.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-text-muted text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="py-10 border-b border-dark-border">
          <div className="max-w-xl">
            <h4 className="text-white font-medium text-lg mb-4">Subscribe Now</h4>
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full bg-transparent border-b border-dark-border py-3 pr-12 text-white placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 text-text-muted hover:text-white transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
            <p className="text-text-muted text-sm mt-4">
              It's easy to join our community! Stay informed & inspired. Enter your email below to join our community
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="/" className="text-2xl font-bold text-white">
            Actos
          </a>
          <p className="text-text-muted text-sm">
            Designed by <a href="#onmix" className="hover:text-white transition-colors">Onmix</a>. 
            Powered by <a href="#webflow" className="hover:text-white transition-colors">Webflow</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}
