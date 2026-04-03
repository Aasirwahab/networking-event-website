import { Metadata } from 'next';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/sections/Footer";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: 'Blogs | Actos - Global Networking Event',
  description: 'Read the latest insights, news, and stories from the Actos community.',
  openGraph: {
    title: 'Blogs | Actos',
    description: 'Read the latest insights, news, and stories from the Actos community.',
  },
};

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <PageHeader 
          title="Insights & News" 
          description="Stay updated with the latest trends, insights, and stories directly from industry leaders and our community."
        />
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <p className="text-xl text-gray-500">Blog content is coming soon. Stay tuned for our latest articles!</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
