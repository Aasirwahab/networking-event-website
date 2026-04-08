'use client';

import { Users, TrendingUp, Target, ShieldCheck } from 'lucide-react';
import { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform, MotionValue } from 'framer-motion';
import Image from 'next/image';
import { ScrollReveal } from '@/components/ScrollReveal';

const benefits = [
  {
    icon: Users,
    title: 'Diverse Community',
    description: 'Meet company directors, CEOs, entrepreneurs, founders, startups, small business owners, investors, and working professionals.',
    src: '/images/toWEBP/1775159002011.webp',
    color: 'rgba(255, 255, 255, 0.95)'
  },
  {
    icon: Target,
    title: 'Meaningful Conversations',
    description: 'No formal pitches or awkward introductions. Just genuine, relaxed conversations that lead to real connections.',
    src: '/images/toWEBP/1773868046417.webp',
    color: 'rgba(240, 249, 255, 0.95)'
  },
  {
    icon: TrendingUp,
    title: 'Grow Your Network',
    description: 'Whether scaling a business, exploring new ventures, or simply expanding your professional circle — this is your space.',
    src: '/images/toWEBP/1775069944270.webp',
    color: 'rgba(255, 255, 255, 0.95)'
  },
  {
    icon: ShieldCheck,
    title: 'High-Value Community',
    description: 'Connect with London\'s brightest minds in a welcoming and dynamic setting. Networking should be productive, actionable, and enjoyable.',
    src: '/images/toWEBP/1775159002538.webp',
    color: 'rgba(240, 249, 255, 0.95)'
  }
];

interface BenefitCardProps {
  benefit: typeof benefits[0];
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  rangeStep: number;
}

function BenefitCard({ benefit, index, progress, range, targetScale, rangeStep }: BenefitCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlightBackground = useMotionTemplate`
    radial-gradient(
      400px circle at ${mouseX}px ${mouseY}px,
      rgba(37, 99, 235, 0.08),
      transparent 80%
    )
  `;

  const imageEntryStart = Math.max(0, range[0] - rangeStep);
  const imageEntryEnd = range[0];
  const imageScale = useTransform(progress, [imageEntryStart, imageEntryEnd], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div className="h-screen flex items-center justify-center sticky top-0 px-4 sm:px-6">
      <motion.div
        style={{
          backgroundColor: benefit.color,
          scale,
          top: `calc(-5vh + ${index * 25}px)`
        }}
        onMouseMove={handleMouseMove}
        className="group relative flex flex-col h-[600px] w-full max-w-[1000px] rounded-[40px] p-8 lg:p-12 origin-top border border-black/5 shadow-[0_20px_40px_rgba(0,0,0,0.06)] overflow-hidden backdrop-blur-2xl will-change-transform"
      >
        {/* Hover Spotlight Glow */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100"
          style={{ background: spotlightBackground }}
        />
        
        <div className="flex h-full gap-8 lg:gap-12 flex-col lg:flex-row items-center relative z-10">
          {/* Text Content */}
          <div className="w-full lg:w-2/5 flex flex-col justify-center h-full">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500 ease-out">
              <benefit.icon className="w-7 h-7 text-primary" />
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 transition-colors duration-500">
              {benefit.title}
            </h3>
            
            <p className="text-slate-500 text-lg leading-relaxed transition-colors duration-500">
              {benefit.description}
            </p>
          </div>

          {/* Image Content */}
          <div className="relative w-full lg:w-3/5 h-[280px] lg:h-full rounded-3xl overflow-hidden shadow-2xl">
            <motion.div
              className="relative w-full h-full will-change-transform"
              style={{ scale: imageScale }}
            >
              <Image
                fill
                src={benefit.src}
                alt={benefit.title}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

const SCALE_STEP = 0.05;

export function BenefitsSection() {
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  const rangeStep = 1 / benefits.length;

  return (
    <section className="bg-white text-slate-900 relative py-20 lg:py-32" style={{ contain: 'layout style paint' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <h2 className="text-3xl lg:text-5xl font-light tracking-tight text-slate-900 mb-6 font-sans">
              Why London Professionals <br />
              <span className="font-semibold italic text-primary">Choose Networx</span>
            </h2>
            <p className="text-slate-500 text-xl font-light">
              We make networking human, relaxed, and genuinely transformative — fostering meaningful business relationships and robust partnerships.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <div ref={container} className="relative mt-[10vh]">
        {benefits.map((benefit, index) => {
          const targetScale = 1 - ((benefits.length - index) * SCALE_STEP);
          return (
            <BenefitCard 
              key={benefit.title} 
              benefit={benefit} 
              index={index}
              progress={scrollYProgress}
              range={[index * rangeStep, 1]}
              targetScale={targetScale}
              rangeStep={rangeStep}
            />
          );
        })}
      </div>
    </section>
  );
}
