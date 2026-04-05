'use client';

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/sections/Footer";
import ImagesFlow from "@/components/ui/scroll/ImagesFlow";
import { galleryImages } from "@/data/content";

export default function GalleryPage() {
  const images = galleryImages.map(img => img.src);
  
  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />
      <main>
        <ImagesFlow 
          introTitle="Networx London"
          introSubtitle="A look at the people and moments from our breakfast networking events."
          introImage="/images/networx_hero_breakfast.png"
          flowText={'Where breakfast meets vision.\nMeaningful conversations, recorded forever.'}
          outroTitle="The Connection"
          outroSubtitle="The connections you make over breakfast stay with you long after the morning."
          images={images}
        />
      </main>
      <Footer />
    </div>
  );
}
