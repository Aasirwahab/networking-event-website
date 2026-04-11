'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { contactInfo } from '@/data/content';

const SPEAKERS = [
  { src: '/images/speaker-1.jpg', alt: 'Speaker 1' },
  { src: '/images/speaker-2.jpg', alt: 'Speaker 2' },
  { src: '/images/speaker-3.jpg', alt: 'Speaker 3' },
] as const;

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
          {SPEAKERS.map((speaker) => (
            <Image
              key={speaker.src}
              src={speaker.src}
              alt={speaker.alt}
              width={40}
              height={40}
              className="w-10 h-10 rounded-full border-2 border-dark object-cover"
            />
          ))}
        </div>
      </div>

      {/* Contact Info */}
      <div className="space-y-2">
        <a
          href={`mailto:${contactInfo.email}`}
          className="flex items-center gap-2 text-sm text-text-muted hover:text-white transition-colors"
        >
          <Mail className="w-4 h-4" />
          {contactInfo.email}
        </a>
      </div>
    </motion.div>
  );
}
