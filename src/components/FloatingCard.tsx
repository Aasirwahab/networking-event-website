'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';

export function FloatingCard() {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="hidden md:block absolute bottom-8 right-8 lg:right-16 bg-dark rounded-xl p-5 text-white w-[280px]"
    >
      <h3 className="text-sm font-medium mb-4">Main Speakers</h3>
      
      {/* Speaker Avatars */}
      <div className="flex items-center mb-4">
        <div className="flex -space-x-3">
          <Image
            src="/images/speaker-1.jpg"
            alt="Speaker 1"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full border-2 border-dark object-cover"
          />
          <Image
            src="/images/speaker-2.jpg"
            alt="Speaker 2"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full border-2 border-dark object-cover"
          />
          <Image
            src="/images/speaker-3.jpg"
            alt="Speaker 3"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full border-2 border-dark object-cover"
          />
        </div>
      </div>

      {/* Contact Info */}
      <div className="space-y-2">
        <a 
          href="tel:+4805550103" 
          className="flex items-center gap-2 text-sm text-text-muted hover:text-white transition-colors"
        >
          <Phone className="w-4 h-4" />
          +(480) 555-0103
        </a>
        <a 
          href="mailto:info@example.com" 
          className="flex items-center gap-2 text-sm text-text-muted hover:text-white transition-colors"
        >
          <Mail className="w-4 h-4" />
          info@example.com
        </a>
      </div>
    </motion.div>
  );
}
