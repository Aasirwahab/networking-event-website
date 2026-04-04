'use client';

import { motion } from 'framer-motion';

const brands = [
  'Luminous', 'Capsule', 'Epicurious', 'Lightbox', 
  'Spherule', 'Hourglass', 'FeatherDev', 'GlobalBank'
];

export function InfiniteMarquee() {
  // Triple the brands to ensure enough width for any screen
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <div className="w-full overflow-hidden py-8 select-none relative group">
      {/* Premium Integrated Look - No Background */}
      
      {/* Decorative Gradient Overlays for Fade-In/Out effect */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/40 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/40 to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex whitespace-nowrap gap-28 items-center px-10 relative z-0"
        initial={{ x: 0 }}
        animate={{ x: "-33.33%" }}
        transition={{
          repeat: Infinity,
          duration: 35,
          ease: "linear",
        }}
      >
        {duplicatedBrands.map((brand, i) => (
          <div 
            key={i} 
            className="flex items-center gap-28"
          >
            <span className="text-white/60 text-[11px] md:text-xs font-bold uppercase tracking-[0.6em] hover:text-white transition-colors duration-300">
              {brand}
            </span>
            <div className="flex items-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-primary/60">
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="currentColor"/>
              </svg>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
