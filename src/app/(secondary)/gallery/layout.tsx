import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    "Explore moments from Networx London networking events — founders, operators, and investors connecting across London's premier professional gatherings.",
  openGraph: {
    title: 'Gallery',
    description:
      'Moments from Networx London networking events for founders, operators, and investors.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gallery',
    description:
      'Moments from Networx London networking events for founders, operators, and investors.',
  },
  alternates: {
    canonical: '/gallery',
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
