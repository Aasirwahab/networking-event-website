'use client';

import { memo, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, PanInfo } from 'framer-motion';
import Image from 'next/image';
import { networxStories } from '@/data/content';
import { MapPin, Play, Pause, Volume2, VolumeX, GripHorizontal } from 'lucide-react';

interface VideoCardProps {
  story: typeof networxStories[0];
  isActive: boolean;
  showDragHint: boolean;
}

const VideoCard = memo(function VideoCard({ story, isActive, showDragHint }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;

    // Lazily set the video src on first play attempt
    if (!videoLoaded && !videoError) {
      videoRef.current.src = story.videoUrl;
      videoRef.current.load();
      setVideoLoaded(true);
    }

    if (videoRef.current.paused) {
      videoRef.current.play().catch(() => {
        setVideoError(true);
        setIsPlaying(false);
      });
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
      className="relative w-full rounded-[24px] overflow-hidden border border-white/10 bg-black aspect-9-16 cursor-pointer [transform:translateZ(0)]"
      onClick={togglePlay}
    >
      {/* Thumbnail image (always visible as background) */}
      {story.thumbnail && (
        <Image
          src={story.thumbnail}
          alt={story.title}
          fill
          sizes="(max-width: 768px) 80vw, 340px"
          className={`object-cover transition-opacity duration-300 ${isPlaying && videoLoaded && !videoError ? 'opacity-0' : 'opacity-100'}`}
        />
      )}

      {/* Video (lazy loaded, only shown when playing) */}
      <video
        ref={videoRef}
        poster={story.thumbnail}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isPlaying && videoLoaded && !videoError ? 'opacity-100' : 'opacity-0'}`}
        loop
        muted={isMuted}
        playsInline
        preload="none"
        onError={() => setVideoError(true)}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70 pointer-events-none" />

      {/* Category badge - top left */}
      <div className="absolute top-5 left-5 z-10">
        <span className={`px-3 py-1 ${isActive ? 'bg-white/10 backdrop-blur-md' : 'bg-black/40'} rounded-full text-[10px] font-bold uppercase text-white/80 tracking-widest border border-white/5`}>
          {story.category}
        </span>
      </div>

      {/* Mute toggle - top right */}
      <button
        onClick={toggleMute}
        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        className={`absolute top-5 right-5 z-10 w-9 h-9 rounded-full ${isActive ? 'bg-white/10 backdrop-blur-md' : 'bg-black/40'} border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors`}
      >
        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </button>

      {/* Drag hint */}
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

      {/* Play/Pause center indicator */}
      {!showDragHint && (
        <div className={`absolute inset-0 flex flex-col items-center justify-center gap-3 z-10 pointer-events-none transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
          <div className={`relative w-20 h-20 rounded-full ${isActive ? 'bg-white shadow-[0_15px_40px_rgba(0,0,0,0.4)]' : 'bg-white/15 backdrop-blur-md border border-white/20'} flex items-center justify-center transition-all duration-300`}>
            {isActive && !isPlaying && (
              <span className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
            )}
            {isPlaying ? (
              <Pause className={`w-7 h-7 ${isActive ? 'text-primary' : 'text-white'}`} />
            ) : (
              <Play className={`w-7 h-7 ml-1 ${isActive ? 'text-primary fill-primary' : 'text-white fill-white'}`} />
            )}
          </div>
          {isActive && (
            <span className="px-3 py-1.5 bg-white/15 backdrop-blur-md rounded-full text-[10px] font-bold uppercase text-white tracking-[0.2em] border border-white/20">
              Watch Story
            </span>
          )}
        </div>
      )}

      {/* Bottom content */}
      <div className="absolute bottom-6 left-5 right-5 z-10 pointer-events-none">
        <div className="space-y-3">
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
          className="h-full w-full bg-primary origin-left"
          initial={{ scaleX: 0 }}
          animate={isActive && isPlaying ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 15, ease: 'linear' }}
        />
      </div>
    </div>
  );
});

// Fan card layout — returns transform values for each card position
function getFanTransform(offset: number, total: number) {
  // offset: distance from active card (-2, -1, 0, 1, 2)
  const rotation = offset * 8; // degrees per card
  const translateX = offset * 60; // px shift per card
  const translateY = Math.abs(offset) * 15; // cards away from center drop down slightly
  const scale = 1 - Math.abs(offset) * 0.06;
  const zIndex = total - Math.abs(offset);
  const opacity = 1 - Math.abs(offset) * 0.15;

  return { rotation, translateX, translateY, scale, zIndex, opacity };
}

export function NetworxStories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [hasSwiped, setHasSwiped] = useState(false);
  const dragX = useMotionValue(0);
  const dragRotate = useTransform(dragX, [-200, 0, 200], [-8, 0, 8]);

  const total = networxStories.length;

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
    setHasSwiped(true);
  }, [total]);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
    setHasSwiped(true);
  }, [total]);

  const handleDragEnd = useCallback((_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -60) goNext();
    else if (info.offset.x > 60) goPrev();
  }, [goNext, goPrev]);

  const getOffset = useCallback((index: number) => {
    let offset = index - activeIndex;
    const half = Math.floor(total / 2);
    if (offset > half) offset -= total;
    if (offset < -half) offset += total;
    return offset;
  }, [activeIndex, total]);

  return (
    <section className="py-20 bg-primary overflow-hidden contain-strict">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex items-end justify-between">
          <div className="space-y-4">
            <span className="text-white/80 text-xs font-bold tracking-[0.4em] uppercase block">Networx Stories</span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none uppercase">
              Moments That <br />
              <span className="text-white/40">Matter.</span>
            </h2>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-white/70 text-sm max-w-[200px] font-light leading-relaxed">
              Scroll through highlights from our exclusive networking events.
            </p>
          </div>
        </div>

        {/* Fan Card Stack */}
        <div
          className="relative w-full flex items-center justify-center h-stories"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {networxStories.map((story, index) => {
            const offset = getOffset(index);
            const { rotation, translateX, translateY, scale, zIndex, opacity } = getFanTransform(offset, total);
            const isActive = offset === 0;

            return (
              <motion.div
                key={story.id}
                className="absolute cursor-grab active:cursor-grabbing w-card-fan"
                style={{
                  zIndex,
                  willChange: 'transform',
                  ...(isActive ? { rotate: dragRotate } : {}),
                }}
                animate={{
                  x: translateX,
                  y: translateY,
                  rotate: rotation,
                  scale,
                  opacity,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                }}
                drag={isActive ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.7}
                onDragEnd={isActive ? handleDragEnd : undefined}
                dragMomentum={false}
                onClick={() => {
                  if (!isActive) {
                    setActiveIndex(index);
                    setHasSwiped(true);
                  }
                }}
              >
                <VideoCard
                  story={story}
                  isActive={isActive}
                  showDragHint={isHovering && !hasSwiped && isActive}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
