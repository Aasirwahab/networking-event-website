'use client';

import Image from 'next/image';

interface AgendaCardProps {
  index: number;
  time: string;
  title: string;
  description: string;
  src: string;
  color: string;
}

export const AgendaCard = ({
  time,
  title,
  description,
  src,
  color,
}: AgendaCardProps) => {
  return (
    <div 
      className="agenda-card group relative flex flex-col w-full rounded-[2rem] p-6 lg:p-10 border border-white/5 shadow-2xl overflow-hidden backdrop-blur-xl transition-all duration-500 hover:border-white/20"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-col gap-6 lg:gap-8">
        {/* Image Content */}
        <div className="relative w-full aspect-video lg:aspect-[16/10] rounded-2xl overflow-hidden">
          <Image
            fill
            src={src}
            alt={title}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col">
          <span className="text-[#a5b4fc] font-medium tracking-widest uppercase mb-3 block text-sm">
            {time}
          </span>
          <h2 className="text-2xl lg:text-3xl font-medium mb-4 text-white">
            {title}
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
