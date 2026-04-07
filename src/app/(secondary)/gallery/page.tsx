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
          introTitle="Networx London"
          introSubtitle="A look at the people and moments from our networking events."
          introImages={introImages}
          flowText={'Where connection meets vision.\nMeaningful conversations, recorded forever.'}
          outroTitle="The Connection"
          outroSubtitle="The connections you make at our events stay with you long after the morning."
          images={images}
        />
      </main>
    </div>
  );
}
