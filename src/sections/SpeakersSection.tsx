'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { speakers } from '@/data/content';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export function SpeakersSection() {
  return (
    <section id="speakers" className="py-20 lg:py-30 bg-bg-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-12">
          <span className="text-text-primary text-xs font-medium tracking-[0.2em] uppercase mb-4 block underline underline-offset-4">
            TEAM ACTOS
          </span>
          <h2 className="text-3xl lg:text-section font-semibold text-text-primary">
            Our Speakers
          </h2>
        </ScrollReveal>

        {/* Speakers Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {speakers.map((speaker) => (
            <motion.div
              key={speaker.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-xl mb-4">
                <motion.div
                  className="relative w-full aspect-[3/4]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </motion.div>
              </div>

              {/* Info */}
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-text-muted text-sm mb-1">{speaker.role}</p>
                  <h3 className="text-text-primary text-lg font-semibold">{speaker.name}</h3>
                </div>
                <motion.div
                  className="mt-1"
                  whileHover={{ rotate: 45 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-primary transition-colors" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
