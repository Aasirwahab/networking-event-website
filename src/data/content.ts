import type { Speaker, Event, Stat, Testimonial } from '@/types';
import { Zap, Circle, Utensils, Box, Globe, Clock, Feather, Hexagon } from 'lucide-react';

export const logo = {
  name: 'NETWORX',
  suffix: 'LONDON',
};

export const speakers: Speaker[] = [
  {
    id: '1',
    name: 'Alexander Sterling',
    role: 'CEO & Founder',
    image: '/images/speaker-1.jpg',
  },
  {
    id: '2',
    name: 'Darlene Robertson',
    role: 'Chief AI Scientist',
    image: '/images/speaker-2.jpg',
  },
  {
    id: '3',
    name: 'James Harrington',
    role: 'Founding Partner',
    image: '/images/speaker-3.jpg',
  },
  {
    id: '4',
    name: 'Leslie Alexander',
    role: 'Creative Director',
    image: '/images/speaker-4.jpg',
  },
];

export const events: Event[] = [
  {
    id: '1',
    date: 'Monthly, 08:30',
    location: 'The Shard, London SE1',
    title: 'The Founders Breakfast: High-Stakes Connections',
    category: 'Breakfast Summit',
  },
  {
    id: '2',
    date: 'Fortnightly, 09:00',
    location: 'Mayfair, London W1J',
    title: 'Angel Investors Roundtable & Coffee',
    category: 'Roundtable',
    description: 'An intimate morning session focused on fostering meaningful conversations between investors and rising entrepreneurs.',
  },
  {
    id: '3',
    date: 'Quarterly, 18:30',
    location: 'Canary Wharf, London E14',
    title: 'Evening Synergy: Beyond the Formal Pitch',
    category: 'Evening Mixer',
    description: 'A relaxed evening mixer where formal pitches are traded for genuine connections and shared ideas.',
  },
  {
    id: '4',
    date: 'Monthly, 08:30',
    location: 'Southwark, London SE1',
    title: 'Creative Minds Breakfast Club',
    category: 'Networking',
    description: 'Grow your professional network over a great breakfast in a welcoming and dynamic space built for builders.',
  },
];

export const stats: Stat[] = [
  {
    value: 2025,
    suffix: '',
    label: 'Founded to make networking human and relaxed.',
  },
  {
    value: 98,
    suffix: '%',
    label: 'Meaningful connections made per event.',
  },
  {
    value: 50,
    suffix: '+',
    label: 'Diverse industries represented monthly',
  },
  {
    value: 10,
    suffix: '',
    label: 'Elite hubs for breakfast summits across London',
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
  { label: 'Speakers', href: '/speakers' },
  { label: 'Gallery', href: '/gallery' },
];

export const footerLinks = {
  column1: [
    { label: 'About us', href: '/about' },
    { label: 'Events', href: '/events' },
    { label: 'Speakers', href: '/speakers' },
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
    title: 'Sunrise Summit at The Shard',
    category: 'Breakfast Club',
    brand: 'Networx',
    location: 'London Bridge',
  },
  {
    id: '2',
    videoUrl: '/videos/story-2.mp4',
    thumbnail: '/images/networx_story_mayfair.png',
    title: 'Founders Circle: Scaling Fast',
    category: 'Mastermind',
    brand: 'VC Insights',
    location: 'Mayfair',
  },
  {
    id: '3',
    videoUrl: '/videos/story-3.mp4',
    thumbnail: '/images/stories/story-3.jpg',
    title: 'Connecting Over Coffee',
    category: 'Human Networking',
    brand: 'Networx',
    location: 'Southwark',
  },
  {
    id: '4',
    videoUrl: '/videos/story-4.mp4',
    thumbnail: '/images/stories/story-4.jpg',
    title: 'The Future of London Tech',
    category: 'Panel Highlights',
    brand: 'Networx',
    location: 'Canary Wharf',
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
