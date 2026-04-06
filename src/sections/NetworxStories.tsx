'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { networxStories } from '@/data/content';
import { MapPin, Play, Pause, Volume2, VolumeX, GripHorizontal } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css/effect-cards';
import 'swiper/css';

interface VideoCardProps {
  story: typeof networxStories[0];
  isActive: boolean;
  showDragHint: boolean;
}

function VideoCard({ story, isActive, showDragHint }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(!isMuted);
  };

  return (
    <div
      className="relative w-full max-w-[360px] rounded-[24px] overflow-hidden border border-white/10 bg-black"
      style={{ aspectRatio: '9/16' }}
      onClick={togglePlay}
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={story.videoUrl}
        poster={story.thumbnail}
        className="absolute inset-0 w-full h-full object-cover"
        loop
        muted={isMuted}
        playsInline
        preload="metadata"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70 pointer-events-none" />

      {/* Category badge - top left */}
      <div className="absolute top-5 left-5 z-10">
        <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase text-white/80 tracking-widest border border-white/5">
          {story.category}
        </span>
      </div>

      {/* Mute toggle - top right */}
      <button
        onClick={toggleMute}
        className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
      >
        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </button>

      {/* Drag hint - appears on hover, centered on card */}
      <AnimatePresence>
        {showDragHint && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
          >
            <div className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full shadow-xl">
              <GripHorizontal className="w-5 h-5 text-black" />
              <span className="text-sm font-bold text-black tracking-wide">drag</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Play/Pause center indicator - hide when drag hint is showing */}
      {!showDragHint && (
        <div className={`absolute inset-0 flex items-center justify-center z-10 pointer-events-none transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
            {isPlaying ? (
              <Pause className="w-6 h-6 text-white" />
            ) : (
              <Play className="w-6 h-6 text-white ml-1" />
            )}
          </div>
        </div>
      )}

      {/* Bottom content */}
      <div className="absolute bottom-6 left-5 right-5 z-10 pointer-events-none">
        <div className="space-y-3">
          {/* Brand pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary rounded-full text-[9px] font-black uppercase text-white tracking-[0.2em]">
            <Play className="w-2.5 h-2.5 fill-white" />
            {story.brand}
          </div>

          <h3 className="text-2xl md:text-3xl font-black text-white tracking-tighter leading-tight drop-shadow-2xl">
            {story.title}
          </h3>

          <div className="flex items-center gap-2 text-white/50 text-xs font-semibold uppercase tracking-widest">
            <MapPin className="w-3 h-3 text-primary" />
            {story.location}
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: '0%' }}
          animate={isActive && isPlaying ? { width: '100%' } : { width: '0%' }}
          transition={{ duration: 15, ease: 'linear' }}
        />
      </div>
    </div>
  );
}

export function NetworxStories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [hasSwiped, setHasSwiped] = useState(false);

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

        {/* Swipeable Video Cards */}
        <div
          className="relative w-full flex flex-col items-center justify-center min-h-[600px]"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <Swiper
            effect="cards"
            grabCursor={true}
            loop={true}
            className="w-full max-w-xl h-auto"
            modules={[EffectCards]}
            cardsEffect={{
              slideShadows: false,
              perSlideRotate: 4,
              perSlideOffset: 10,
              rotate: true,
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
              setHasSwiped(true);
            }}
          >
            {networxStories.map((story, index) => (
              <SwiperSlide key={story.id} className="!flex !items-start !justify-center bg-transparent">
                <VideoCard
                  story={story}
                  isActive={activeIndex === index}
                  showDragHint={isHovering && !hasSwiped && activeIndex === index}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
