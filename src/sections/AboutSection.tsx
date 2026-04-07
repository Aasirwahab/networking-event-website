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
              <div className="space-y-4">
                <p className="text-text-secondary text-base lg:text-lg leading-relaxed">
                  Networx London makes networking human, relaxed, and genuinely enjoyable. Founded in 2025, we specialize in high-end events services that bring together a diverse mix of company directors, CEOs, entrepreneurs, startups, investors, and professionals.
                </p>
                <p className="text-text-secondary text-sm lg:text-base leading-relaxed opacity-80">
                  Whether you are scaling a business or exploring new ventures, this is a welcoming and dynamic space to connect, share ideas, and build lasting relationships.
                </p>
              </div>
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
                    src="/images/toWEBP/1773258581277.webp"
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
                    src="/images/toWEBP/1774468095390.webp"
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
                Our focus is on fostering meaningful conversations rather than formal pitches. By removing the pressure of traditional networking, we create an environment where genuine partnerships flourish and businesses actively scale.
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
                Join our exclusive community of London&apos;s brightest minds to access unparalleled professional opportunities, expert insights, and collaborative ventures.
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
                    src="/images/toWEBP/1774468101559.webp"
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
