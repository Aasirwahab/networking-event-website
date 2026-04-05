'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { networxStories } from '@/data/content';
import { Maximize2, MapPin, Play } from 'lucide-react';

interface StoryCardProps {
  story: typeof networxStories[0];
  index: number;
}

function StoryCard({ story, index }: StoryCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { amount: 0.5 });
  
  return (
    <motion.div 
      ref={cardRef}
      className="relative flex-shrink-0 w-full h-[85vh] md:h-[90vh] snap-center rounded-[32px] md:rounded-[48px] overflow-hidden border border-white/10 group cursor-pointer"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Background Media */}
      <Image 
        src={story.thumbnail} 
        alt={story.title}
        fill
        className={`object-cover transition-transform duration-1000 ${isInView ? 'scale-110' : 'scale-100'}`}
      />
      
      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
      
      {/* Header Overlays (TikTok Style) */}
      <div className="absolute top-8 left-8 flex items-center gap-2">
        <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase text-white/80 tracking-widest border border-white/5">
          {story.category}
        </span>
      </div>
      
      <div className="absolute top-8 right-8">
        <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white transition-colors">
          <Maximize2 className="w-4 h-4" />
        </div>
      </div>

      {/* Main Content (Bottom Overlays) */}
      <div className="absolute bottom-10 left-10 right-10">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          {/* Brand Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary rounded-full text-[9px] font-black uppercase text-white tracking-[0.2em]">
            <Play className="w-2.5 h-2.5 fill-white" />
            {story.brand}
          </div>
          
          <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight drop-shadow-2xl">
            {story.title}
          </h3>
          
          <div className="flex items-center gap-2 text-white/50 text-xs font-semibold uppercase tracking-widest">
            <MapPin className="w-3 h-3 text-primary" />
            {story.location}
          </div>
        </motion.div>
      </div>

      {/* Progress Bar (TikTok Style) */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
        <motion.div 
          className="h-full bg-primary"
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 15, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}

export function NetworxStories() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section className="py-20 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex items-end justify-between">
          <div className="space-y-4">
             <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase block">Networx Stories</span>
             <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
               MOMENTS THAT <br />
               <span className="text-white/20">MATTER.</span>
             </h2>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-white/40 text-sm max-w-[200px] font-light leading-relaxed">
              Scroll through highlights from our breakfast networking events.
            </p>
          </div>
        </div>

        {/* Stories Feed */}
        <div 
          ref={containerRef}
          className="relative h-[90vh] overflow-y-scroll snap-y snap-mandatory hide-scrollbar space-y-6 md:space-y-8 pb-32"
        >
          {networxStories.map((story, index) => (
            <StoryCard key={story.id} story={story} index={index} />
          ))}
        </div>
      </div>
      
      {/* Visual Depth Decor */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 blur-[150px] pointer-events-none rounded-full" />
    </section>
  );
}
