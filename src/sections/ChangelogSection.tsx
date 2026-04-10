'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';

const changelog = [
  {
    version: '3.0',
    date: 'April 2026',
    title: 'Website Redesign',
    changes: [
      'Complete visual overhaul with professional hero sections across all pages',
      'New FAQ section with interactive accordion',
      'Enhanced gallery experience with scroll-driven image flow',
      'Improved mobile responsiveness and performance',
    ],
  },
  {
    version: '2.0',
    date: 'January 2026',
    title: 'Community Expansion',
    changes: [
      'Launched monthly membership tiers and annual passes',
      'Added speaker spotlight and nomination features',
      'Introduced event schedule with live availability tracking',
      'New contact form with real-time validation',
    ],
  },
  {
    version: '1.0',
    date: 'September 2025',
    title: 'Initial Launch',
    changes: [
      'Networx London website goes live',
      'Core pages: home, about, events, gallery, and contact',
      'Smooth scroll experience powered by Lenis',
      'GSAP-driven intro animation and section reveals',
    ],
  },
];

export function ChangelogSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[200px] rounded-full" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <ScrollReveal>
          <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase block mb-4">
            What&apos;s New
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-20">
            Latest <br />
            <span className="text-white/20">updates.</span>
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-white/10 hidden md:block" />

          <div className="space-y-16">
            {changelog.map((entry, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="flex gap-8">
                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-col items-center pt-2">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15, type: 'spring', stiffness: 300 }}
                      className="w-10 h-10 rounded-full border-2 border-primary bg-[#050505] flex items-center justify-center flex-shrink-0"
                    >
                      <span className="text-primary text-xs font-bold">{entry.version}</span>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-10 backdrop-blur-xl">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="md:hidden text-primary text-xs font-bold bg-primary/10 px-3 py-1 rounded-full">
                        v{entry.version}
                      </span>
                      <span className="text-white/30 text-sm font-medium">{entry.date}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
                      {entry.title}
                    </h3>
                    <ul className="space-y-3">
                      {entry.changes.map((change, i) => (
                        <li key={i} className="flex items-start gap-3 text-white/50">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{change}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
