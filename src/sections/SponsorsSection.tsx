'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { sponsorIcons } from '@/data/content';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export function SponsorsSection() {
  return (
    <section className="py-20 lg:py-30 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-12">
          <span className="text-text-primary text-xs font-medium tracking-[0.2em] uppercase mb-4 block underline underline-offset-4">
            PARTNERS
          </span>
          <h2 className="text-3xl lg:text-section font-semibold text-text-primary">
            Event Sponsors
          </h2>
        </ScrollReveal>

        {/* Sponsors Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6"
        >
          {sponsorIcons.map((sponsor) => {
            const Icon = sponsor.icon;
            return (
              <motion.div
                key={sponsor.name}
                variants={itemVariants}
                whileHover={{ 
                  borderColor: '#2563EB',
                  y: -4,
                  transition: { duration: 0.3 }
                }}
                className="flex items-center justify-center gap-3 p-6 lg:p-8 border border-border rounded-xl bg-white transition-all duration-300 cursor-pointer"
              >
                <Icon className="w-6 h-6 text-text-muted" strokeWidth={1.5} />
                <span className="text-text-secondary font-medium">{sponsor.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
