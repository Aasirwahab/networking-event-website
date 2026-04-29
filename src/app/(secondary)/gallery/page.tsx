'use client';

import { useEffect, useRef, useState } from "react";
import VortexGallery from "@/lib/VortexGallery";
import { vortexGalleryImages } from "@/data/gallery";
import ImageDetailOverlay from "@/components/ImageDetailOverlay";

const imageSrcs = vortexGalleryImages.map((i) => i.src);

export default function GalleryPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const vortexRef = useRef<VortexGallery | null>(null);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  useEffect(() => {
    if (!canvasRef.current || imageSrcs.length === 0) return;

    // Delay WebGL init so the page-transition reveal animation finishes
    // before the heavy texture-atlas build runs on the main thread.
    const timer = setTimeout(() => {
      if (!canvasRef.current) return;
      const vortex = new VortexGallery(canvasRef.current, imageSrcs);
      vortexRef.current = vortex;
    }, 900);

    return () => {
      clearTimeout(timer);
      vortexRef.current?.destroy();
      vortexRef.current = null;
    };
  }, []);

  useEffect(() => {
    vortexRef.current?.setPaused(selectedIdx !== null);
  }, [selectedIdx]);

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const vortex = vortexRef.current;
    const canvas = canvasRef.current;
    if (!vortex || !canvas) return;
    const idx = vortex.pickAtScreen(
      e.clientX,
      e.clientY,
      canvas.getBoundingClientRect()
    );
    if (idx !== null) {
      setSelectedIdx(idx);
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#0F172A]">
      {/* WebGL Canvas — the entire page is the vortex */}
      <canvas
        ref={canvasRef}
        onClick={handleCanvasClick}
        className="absolute top-0 left-0 w-full h-full z-[1] cursor-pointer"
      />

      {/* UI Overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
        {/* Footer hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-sans text-[12px] font-normal text-white/30 tracking-wider select-none">
          Scroll to explore · Click to view
        </div>
      </div>

      <ImageDetailOverlay
        image={selectedIdx !== null ? vortexGalleryImages[selectedIdx] : null}
        onClose={() => setSelectedIdx(null)}
      />
    </div>
  );
}
