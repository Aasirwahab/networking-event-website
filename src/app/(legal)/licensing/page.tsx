import { Metadata } from 'next';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/sections/Footer";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: 'Licensing | Actos',
  description: 'Information regarding licensing, copyrights, and intellectual property for Actos content.',
};

export default function LicensingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <PageHeader 
          title="Licensing" 
          description="A comprehensive guide to the licensing terms and copyright policies covering Actos resources and content."
        />
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <p className="text-xl text-gray-500">Licensing information coming soon.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
