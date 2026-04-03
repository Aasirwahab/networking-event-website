import { Metadata } from 'next';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/sections/Footer";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: 'Changelog | Actos',
  description: 'Track the latest updates and improvements to the Actos platform and events.',
};

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <PageHeader 
          title="Changelog" 
          description="Stay informed about the newest features, enhancements, and organizational updates for Actos."
        />
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <p className="text-xl text-gray-500">Changelog content will be updated soon.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
