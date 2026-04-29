import { Metadata } from 'next';
import { SubPageHero } from "@/components/SubPageHero";
import { ContactForm } from "@/sections/ContactForm";

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the Networx London team for partnerships, speaking inquiries, and event reservations.',
  openGraph: {
    title: 'Contact Us',
    description: 'Get in touch with the Networx London team for partnerships, speaking inquiries, and event reservations.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us',
    description: 'Get in touch with the Networx London team for partnerships, speaking inquiries, and event reservations.',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <SubPageHero
        backgroundImage="/images/networx_story_shard.webp"
        title={<>LET&apos;S <br /><span className="text-primary italic font-light">CONNECT.</span></>}
        subtitle="Partnerships, press, speaking slots or just a hello — drop us a line and the Networx London team will get back to you within 24 hours."
      />
      <main>
        <ContactForm />
      </main>
    </div>
  );
}
