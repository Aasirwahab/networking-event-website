import { Metadata } from 'next';
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how your data and privacy are protected and managed by Networx London.',
  openGraph: {
    title: 'Privacy Policy',
    description: 'Learn how your data and privacy are protected and managed by Networx London.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy',
    description: 'Learn how your data and privacy are protected and managed by Networx London.',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <PageHeader 
          title="Privacy Policy" 
          description="Your privacy is paramount. Discover how we protect, handle, and utilize your information responsibly."
        />
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <p className="text-xl text-gray-500">Privacy Policy terms arriving soon.</p>
        </section>
      </main>
    </div>
  );
}
