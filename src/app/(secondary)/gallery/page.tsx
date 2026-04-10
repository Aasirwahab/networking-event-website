'use client';

import ImagesFlow from "@/components/ui/scroll/ImagesFlow";
import { galleryImages } from "@/data/content";

const introImages = [
  "/images/toWEBP/1772655969089.webp",
  "/images/toWEBP/1772655970617.webp",
  "/images/toWEBP/1772737367964.webp",
  "/images/toWEBP/1773258579171.webp",
  "/images/toWEBP/1773258579685.webp"
];

export default function GalleryPage() {
  const images = galleryImages.map(img => img.src);
  
  return (
    <div className="min-h-screen bg-[#050505]">
      <main>
        <ImagesFlow
          introEyebrow="Our Gallery"
          introTitle={"Moments That\nMade Us."}
          introSubtitle="A curated look at the people, the conversations and the connections sparked at Networx London events. Real founders, real stories, real momentum."
          introCtaLabel="Join Next Event"
          introCtaHref="/events"
          introImages={introImages}
          flowText={'Where connection meets vision.\nMeaningful conversations, recorded forever.'}
          images={images}
        />
      </main>
    </div>
  );
}
