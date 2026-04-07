'use client';

import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

interface AgendaCardProps {
  index: number;
  time: string;
  title: string;
  description: string;
  src: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export const AgendaCard = ({
  index,
  time,
  title,
  description,
  src,
  color,
  progress,
  range,
  targetScale
}: AgendaCardProps) => {
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{
          backgroundColor: color, 
          scale, 
          top: `calc(-5vh + ${index * 25}px)`
        }} 
        className="relative flex flex-col h-[600px] w-full max-w-[1000px] rounded-3xl p-8 lg:p-12 origin-top border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden"
      >
        <div className="flex h-full gap-8 lg:gap-12 flex-col lg:flex-row items-center">
          {/* Text Content */}
          <div className="w-full lg:w-2/5 flex flex-col justify-center h-full">
            <span className="text-primary font-medium tracking-widest uppercase mb-4 block">
              {time}
            </span>
            <h2 className="text-3xl lg:text-4xl font-medium mb-6 text-white">
              {title}
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              {description}
            </p>
          </div>

          {/* Image Content */}
          <div className="relative w-full lg:w-3/5 h-[300px] lg:h-full rounded-2xl overflow-hidden shadow-2xl">
            <motion.div
              className="w-full h-full"
              style={{ scale: imageScale }}
            >
              <Image
                fill
                src={src}
                alt={title}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
