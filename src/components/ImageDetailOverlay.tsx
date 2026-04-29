"use client";

import { useEffect } from "react";
import type { ImageItem } from "@/data/gallery";
import { overlayConfig } from "@/data/gallery";
import { cn } from "@/lib/utils";

interface Props {
  image: ImageItem | null;
  onClose: () => void;
}

export default function ImageDetailOverlay({ image, onClose }: Props) {
  useEffect(() => {
    if (!image) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [image, onClose]);

  const open = !!image;

  const eyebrow =
    image && image.category
      ? overlayConfig.frameDetailLabel
        ? `${image.category} — ${overlayConfig.frameDetailLabel}`
        : image.category
      : "";

  return (
    <div
      onClick={onClose}
      className={cn(
        "fixed inset-0 bg-[#0a0a0a]/94 backdrop-blur-md z-[100] flex items-center justify-center p-8 lg:p-16 transition-opacity [transition-duration:350ms] ease-in-out",
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
    >
      {image && (
        <div
          onClick={(e) => e.stopPropagation()}
          className={cn(
            "grid grid-cols-1 lg:grid-cols-[1.4fr_0.9fr] gap-8 lg:gap-14 max-w-[1520px] w-full max-h-full items-center transition-transform [transition-duration:350ms] ease-in-out",
            open ? "scale-100" : "scale-[0.98]"
          )}
        >
          {/* Image */}
          <div className="relative flex items-center justify-center max-h-[calc(100vh-128px)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image.src}
              alt={image.title}
              className="block max-w-full max-h-[calc(100vh-128px)] object-contain shadow-[0_40px_100px_rgba(0,0,0,0.5)] rounded-sm"
            />
          </div>

          {/* Text panel */}
          <div className="text-white font-sans flex flex-col gap-6 max-h-[calc(100vh-128px)] overflow-auto">
            {eyebrow && (
              <p className="text-[11px] tracking-[0.14em] uppercase opacity-55 m-0">
                {eyebrow}
              </p>
            )}

            {image.title && (
              <h2 className="font-serif text-[clamp(28px,2.6vw,40px)] font-normal leading-[1.15] tracking-tight m-0">
                {image.title}
              </h2>
            )}

            {image.description && (
              <p className="text-[16px] lg:text-[18px] leading-[1.65] text-white/85 m-0">
                {image.description}
              </p>
            )}

            {overlayConfig.closeLabel && (
              <button
                onClick={onClose}
                className="self-start mt-4 bg-transparent text-white border border-white/35 py-2.5 px-6 font-sans text-[13px] tracking-wider cursor-pointer transition-all duration-200 hover:bg-white/10 hover:border-white/60 rounded-sm"
              >
                {overlayConfig.closeLabel}
              </button>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
