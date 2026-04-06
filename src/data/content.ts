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
    image: '/images/toWEBP/1772737367964.webp',
  },
  {
    id: '2',
    name: 'Startup Founders',
    role: 'Building the Future',
    image: '/images/toWEBP/1773258579171.webp',
  },
  {
    id: '3',
    name: 'Investors & VCs',
    role: 'Fuelling Growth',
    image: '/images/toWEBP/1773258579685.webp',
  },
  {
    id: '4',
    name: 'Entrepreneurs',
    role: 'Making It Happen',
    image: '/images/toWEBP/1773258581117.webp',
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
    thumbnail: '/images/toWEBP/1773258581277.webp',
    title: 'Morning Connections That Matter',
    category: 'Breakfast Networking',
    brand: 'Networx',
    location: 'London SW15',
  },
  {
    id: '2',
    videoUrl: '/videos/story-2.mp4',
    thumbnail: '/images/toWEBP/1773258582539.webp',
    title: 'Founders Meeting Over Coffee',
    category: 'Community',
    brand: 'Networx',
    location: 'London SW15',
  },
  {
    id: '3',
    videoUrl: '/videos/story-3.mp4',
    thumbnail: '/images/toWEBP/1773694964584.webp',
    title: 'Real Conversations, Real Results',
    category: 'Human Networking',
    brand: 'Networx',
    location: 'London SW15',
  },
  {
    id: '4',
    videoUrl: '/videos/story-4.mp4',
    thumbnail: '/images/toWEBP/1773868041123.webp',
    title: 'Building Lasting Relationships',
    category: 'Networking',
    brand: 'Networx',
    location: 'London SW15',
  },
];

export const galleryImages = [
  { id: '1', src: '/images/toWEBP/1773868043148.webp', title: 'The Shard Breakfast', category: 'Breakfast Club', width: 800, height: 1000 },
  { id: '2', src: '/images/toWEBP/1773868044945.webp', title: 'Mayfair Roundtable', category: 'Human Networking', width: 800, height: 600 },
  { id: '3', src: '/images/toWEBP/1773868045528.webp', title: 'City Mornings', category: 'Atmosphere', width: 800, height: 800 },
  { id: '4', src: '/images/toWEBP/1773868046417.webp', title: 'Meaningful Conversations', category: 'Interaction', width: 800, height: 1100 },
  { id: '5', src: '/images/toWEBP/1774468095390.webp', title: 'The Rooftop Mixer', category: 'Evening Synergy', width: 800, height: 600 },
  { id: '6', src: '/images/toWEBP/1774468101559.webp', title: 'London Skyline Morning', category: 'Venue', width: 800, height: 900 },
  { id: '7', src: '/images/toWEBP/1774468102382.webp', title: 'Great Atmosphere', category: 'Energy', width: 800, height: 1000 },
  { id: '8', src: '/images/toWEBP/1774558149756.webp', title: 'Morning Coffee', category: 'Start', width: 800, height: 600 },
  { id: '9', src: '/images/toWEBP/1774558154280.webp', title: 'Expert Talks', category: 'Insight', width: 800, height: 800 },
  { id: '10', src: '/images/toWEBP/1774558154645.webp', title: 'Networking Hub', category: 'Connections', width: 800, height: 1100 },
  { id: '11', src: '/images/toWEBP/1774558155480.webp', title: 'London Views', category: 'Skyline', width: 800, height: 1000 },
  { id: '12', src: '/images/toWEBP/1775069942548.webp', title: 'Synergy Mornings', category: 'Vibe', width: 800, height: 600 },
  { id: '13', src: '/images/toWEBP/1775069944270.webp', title: 'Professional Growth', category: 'Growth', width: 800, height: 800 },
  { id: '14', src: '/images/toWEBP/1775069945040.webp', title: 'Interactive Sessions', category: 'Learning', width: 800, height: 1100 },
  { id: '15', src: '/images/toWEBP/1775069945504.webp', title: 'The Breakfast Club', category: 'Food & Connection', width: 800, height: 1000 },
  { id: '16', src: '/images/toWEBP/1775069945612.webp', title: 'Building Relationships', category: 'Human', width: 800, height: 600 },
  { id: '17', src: '/images/toWEBP/1775158996685.webp', title: 'City Connections', category: 'London SW15', width: 800, height: 800 },
  { id: '18', src: '/images/toWEBP/1775159001230.webp', title: 'Authentic Networking', category: 'Real', width: 800, height: 1100 },
  { id: '19', src: '/images/toWEBP/1775159002011.webp', title: 'Community Growth', category: 'People', width: 800, height: 1000 },
  { id: '20', src: '/images/toWEBP/1775159002538.webp', title: 'Vision & Value', category: 'Purpose', width: 800, height: 600 },
];
