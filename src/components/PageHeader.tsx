import { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

export function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gray-900 overflow-hidden">
      {/* Decorative Blur Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0526ff]/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00a8ff]/20 rounded-full blur-[100px]" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
          {title}
        </h1>
        {description && (
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-white/70">
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}
