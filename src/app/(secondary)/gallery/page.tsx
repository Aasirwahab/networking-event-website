'use client';

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/sections/Footer";
import ImagesFlow from "@/components/ui/scroll/ImagesFlow";

const londonImages = [
  '/images/london/1.png',
  '/images/london/2.png',
  '/images/london/3.png',
  '/images/london/4.png',
  '/images/london/5.png',
  '/images/london/6.png',
  '/images/london/7.png',
  '/images/london/8.png',
  '/images/london/9.png',
  '/images/london/10.png',
  '/images/london/11.png',
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <ImagesFlow 
          introTitle="London Summit"
          introSubtitle="A cinematic look at the future of networking."
          introImage="/images/london/1.png"
          flowText={'Every connection holds a universe\nwaiting to be explored.'}
          outroTitle="Join the Circle"
          outroSubtitle="The journey of high-level networking stays with you."
          images={londonImages}
        />
      </main>
      <Footer />
    </div>
  );
}
