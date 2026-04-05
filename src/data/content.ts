import type { Speaker, Event, Stat, Testimonial } from '@/types';
import { Zap, Circle, Utensils, Box, Globe, Clock, Feather, Hexagon } from 'lucide-react';

export const logo = {
  name: 'NETWORX',
  suffix: 'LONDON',
};

export const communityMembers: Speaker[] = [
  {
    id: '1',
    name: 'Company Directors',
    role: 'Strategic Leaders',
    image: '/images/speaker-1.jpg',
  },
  {
    id: '2',
    name: 'Startup Founders',
    role: 'Building the Future',
    image: '/images/speaker-2.jpg',
  },
  {
    id: '3',
    name: 'Investors & VCs',
    role: 'Fuelling Growth',
    image: '/images/speaker-3.jpg',
  },
  {
    id: '4',
    name: 'Entrepreneurs',
    role: 'Making It Happen',
    image: '/images/speaker-4.jpg',
  },
];

export const events: Event[] = [
  {
    id: '1',
    date: 'Monthly, 08:00',
    location: 'London SW15',
    title: 'Networx Breakfast: Connect Over Coffee',
    category: 'Breakfast Networking',
    description: 'Our signature monthly breakfast bringing together founders, CEOs, and professionals for meaningful conversations over great food.',
  },
  {
    id: '2',
    date: 'Monthly, 08:00',
    location: 'London SW15',
    title: 'Founders & Investors Morning',
    category: 'Breakfast Networking',
    description: 'A relaxed morning session where entrepreneurs and investors connect naturally — no formal pitches, just real conversations.',
  },
  {
    id: '3',
    date: 'Monthly, 08:00',
    location: 'London SW15',
    title: 'Small Business Owners Breakfast',
    category: 'Breakfast Networking',
    description: 'A welcoming space for small business owners to share ideas, explore new ventures, and grow their professional network.',
  },
  {
    id: '4',
    date: 'Monthly, 08:00',
    location: 'London SW15',
    title: 'Professionals Networking Breakfast',
    category: 'Breakfast Networking',
    description: 'Whether you are scaling a business or simply growing your network, join us for a dynamic and genuinely enjoyable morning.',
  },
];

export const stats: Stat[] = [
  {
    value: 2025,
    suffix: '',
    label: 'Founded in London to make networking human.',
  },
  {
    value: 50,
    suffix: '+',
    label: 'Diverse industries represented at our events.',
  },
  {
    value: 100,
    suffix: '+',
    label: 'Professionals connected through our breakfasts.',
  },
  {
    value: 1,
    suffix: '',
    label: 'Simple goal: genuine connections over great food.',
  },
];

export const sponsorIcons = [
  { name: 'Luminous', icon: Zap },
  { name: 'Capsule', icon: Circle },
  { name: 'Epicurious', icon: Utensils },
  { name: 'Lightbox', icon: Box },
  { name: 'Spherule', icon: Globe },
  { name: 'Hourglass', icon: Clock },
  { name: 'FeatherDev', icon: Feather },
  { name: 'GlobalBank', icon: Hexagon },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    title: 'Genuinely Enjoyable',
    content: 'Networx makes networking human and relaxed. It was the first time I felt I could have a real conversation without the pressure of a pitch.',
    author: 'Cameron Williamson',
    location: 'Director, Tech Solutions',
    avatar: '/images/avatar-1.jpg',
  },
  {
    id: '2',
    title: 'The Best Breakfast Hub',
    content: 'Scaling my business became much easier after joining the Networx breakfast sessions. The connections are high-value and organic.',
    author: 'Darlene Robertson',
    location: 'Founder, AI Vision',
    avatar: '/images/avatar-2.jpg',
  },
  {
    id: '3',
    title: 'Unmatched Connections',
    content: 'The mix of CEOs and entrepreneurs is perfect. I\'ve built lasting professional relationships here that I couldn\'t find elsewhere.',
    author: 'Courtney Henry',
    location: 'Managing Partner',
    avatar: '/images/avatar-3.jpg',
  },
  {
    id: '4',
    title: 'Simply Human',
    content: 'A welcoming and dynamic space to connect. Finally, a networking event that actually feels productive and enjoyable at the same time.',
    author: 'Brooklyn Simmons',
    location: 'Growth Lead, FinTech',
    avatar: '/images/avatar-4.jpg',
  },
];

export const navLinks = [
  { label: 'About us', href: '/about' },
  { label: 'Events', href: '/events' },
  { label: 'Community', href: '/community' },
  { label: 'Gallery', href: '/gallery' },
];

export const footerLinks = {
  column1: [
    { label: 'About us', href: '/about' },
    { label: 'Events', href: '/events' },
    { label: 'Community', href: '/community' },
    { label: 'Gallery', href: '/gallery' },
  ],
  column2: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact us', href: '/contact' },
    { label: 'Licensing', href: '/licensing' },
  ],
  column3: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Style Guide', href: '/styleguide' },
    { label: 'Changelog', href: '/changelog' },
  ],
};

// Data for the TikTok-inspired 'Networx Stories' Section
export const networxStories = [
  {
    id: '1',
    videoUrl: '/videos/story-1.mp4',
    thumbnail: '/images/networx_story_shard.png',
    title: 'Morning Connections That Matter',
    category: 'Breakfast Networking',
    brand: 'Networx',
    location: 'London SW15',
  },
  {
    id: '2',
    videoUrl: '/videos/story-2.mp4',
    thumbnail: '/images/networx_story_mayfair.png',
    title: 'Founders Meeting Over Coffee',
    category: 'Community',
    brand: 'Networx',
    location: 'London SW15',
  },
  {
    id: '3',
    videoUrl: '/videos/story-3.mp4',
    thumbnail: '/images/stories/story-3.jpg',
    title: 'Real Conversations, Real Results',
    category: 'Human Networking',
    brand: 'Networx',
    location: 'London SW15',
  },
  {
    id: '4',
    videoUrl: '/videos/story-4.mp4',
    thumbnail: '/images/stories/story-4.jpg',
    title: 'Building Lasting Relationships',
    category: 'Networking',
    brand: 'Networx',
    location: 'London SW15',
  },
];

export const galleryImages = [
  {
    id: '1',
    src: '/images/gallery-1.png',
    title: 'The Shard Breakfast',
    category: 'Breakfast Club',
    width: 800,
    height: 1000,
  },
  {
    id: '2',
    src: '/images/gallery-2.png',
    title: 'Mayfair Roundtable',
    category: 'Human Networking',
    width: 800,
    height: 600,
  },
  {
    id: '3',
    src: '/images/gallery-3.png',
    title: 'City Mornings',
    category: 'Atmosphere',
    width: 800,
    height: 800,
  },
  {
    id: '4',
    src: '/images/gallery-4.png',
    title: 'Meaningful Conversations',
    category: 'Interaction',
    width: 800,
    height: 1100,
  },
  {
    id: '5',
    src: '/images/gallery-5.png',
    title: 'The Rooftop Mixer',
    category: 'Evening Synergy',
    width: 800,
    height: 600,
  },
  {
    id: '6',
    src: '/images/gallery-6.png',
    title: 'London Skyline Morning',
    category: 'Venue',
    width: 800,
    height: 900,
  },
];
