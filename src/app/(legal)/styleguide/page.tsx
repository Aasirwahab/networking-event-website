import { Metadata } from 'next';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/sections/Footer";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: 'Style Guide | Actos',
  description: 'Brand assets, typography, and design principles defining the Actos brand.',
};

export default function StyleGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <PageHeader 
          title="Style Guide" 
          description="Explore the visual identity of Actos, including our typography, color palettes, and component library."
        />
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <p className="text-xl text-gray-500">Style Guide overview coming soon.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
