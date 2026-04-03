'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-30 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left Column */}
          <div className="lg:col-span-4 space-y-6">
            <ScrollReveal delay={0}>
              <p className="text-text-secondary text-base lg:text-lg leading-relaxed">
                We handle every detail of event planning, ensuring a smooth and stress-free experience.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <motion.div
                className="overflow-hidden rounded-xl"
                whileHover="hover"
              >
                <motion.div
                  className="relative w-full h-[400px] lg:h-[500px]"
                  variants={{
                    hover: { scale: 1.03 }
                  }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src="/images/about-1.jpg"
                    alt="Event networking"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </motion.div>
              </motion.div>
            </ScrollReveal>
          </div>

          {/* Center Column */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal delay={0.15}>
              <motion.div
                className="overflow-hidden rounded-xl"
                whileHover="hover"
              >
                <motion.div
                  className="relative w-full h-[250px] lg:h-[300px]"
                  variants={{
                    hover: { scale: 1.03 }
                  }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src="/images/about-2.jpg"
                    alt="Conference room"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                </motion.div>
              </motion.div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-text-secondary text-base leading-relaxed">
                Actos is leading global event management company dedicated to delivering exceptional events, from intimate gatherings to grand conferences.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.25}>
              <a
                href="#about-more"
                className="group inline-flex items-center gap-2 bg-dark text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-dark/90 hover:scale-[1.02]"
              >
                Discover More
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </ScrollReveal>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-3 space-y-6">
            <ScrollReveal delay={0.3}>
              <p className="text-text-secondary text-base leading-relaxed">
                Our dedicated team brings passion and precision to every event, building lasting connections across boundaries.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.4}>
              <motion.div
                className="overflow-hidden rounded-xl h-[400px] lg:h-[500px]"
                whileHover="hover"
              >
                <motion.div
                  className="relative w-full h-full"
                  variants={{
                    hover: { scale: 1.03 }
                  }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src="/images/gallery-2.png"
                    alt="Premium London networking event"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 25vw"
                  />
                </motion.div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
