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
    role: 'Strategic Leaders & Decision Makers',
    image: '/images/toWEBP/1772737367964.webp',
  },
  {
    id: '2',
    name: 'Startup Founders',
    role: 'Innovation & Scaling Experts',
    image: '/images/toWEBP/1773258579171.webp',
  },
  {
    id: '3',
    name: 'Investors & VCs',
    role: 'Capital & Growth Partners',
    image: '/images/toWEBP/1773258579685.webp',
  },
  {
    id: '4',
    name: 'Entrepreneurs',
    role: 'Visionaries & Disruptors',
    image: '/images/toWEBP/1773258581117.webp',
  },
];

export const events: Event[] = [
  {
    id: '1',
    date: 'Monthly Exclusive',
    location: 'London SW15',
    title: 'London Directors & Founders Meetup',
    category: 'Executive Networking',
    description: 'Our signature monthly gathering bringing together London-based founders, CEOs, and industry leaders for high-level relationship building and strategic opportunities.',
  },
  {
    id: '2',
    date: 'Quarterly Summit',
    location: 'London SW15',
    title: 'Tech Founders & Investors Networking',
    category: 'Investor Matches',
    description: 'A dedicated, relaxed session where promising entrepreneurs and active investors connect naturally. No formal pitches—just genuine conversations that spark real equity partnerships.',
  },
  {
    id: '3',
    date: 'Bi-Weekly Session',
    location: 'London SW15',
    title: 'Small Business Owners Mastermind',
    category: 'Business Growth',
    description: 'An exclusive, welcoming space for local small business owners to share proven strategies, explore collaborative ventures, and aggressively grow their professional networks in London.',
  },
  {
    id: '4',
    date: 'Monthly Series',
    location: 'London SW15',
    title: 'Elite Professionals Networking London',
    category: 'Professional Network',
    description: 'Whether you are scaling a 10-person enterprise or seeking your next strategic career pivot, join us for a dynamic, results-driven networking event that is genuinely enjoyable.',
  },
];

export const stats: Stat[] = [
  {
    value: 2025,
    suffix: '',
    label: 'Established in London to make networking human and effective.',
  },
  {
    value: 50,
    suffix: '+',
    label: 'Transformative industries represented at every exclusive gathering.',
  },
  {
    value: 500,
    suffix: '+',
    label: 'London professionals scaling businesses through our events.',
  },
  {
    value: 1,
    suffix: '',
    label: 'Singular goal: Creating lasting, high-value professional relationships.',
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
    title: 'Game-Changing Connections',
    content: 'Networx London completely changed my view on professional networking. It is the first time I built genuine rapport with leading investors without the pressure of a boardroom pitch.',
    author: 'Cameron Williamson',
    location: 'Director, Tech Solutions',
    avatar: '/images/avatar-1.jpg',
  },
  {
    id: '2',
    title: 'The Best Networking Hub in London',
    content: 'Scaling my business became significantly easier after joining their regular networking sessions. The mix of CEOs and startup founders provides high-value, actionable insights every time.',
    author: 'Darlene Robertson',
    location: 'Founder, AI Vision',
    avatar: '/images/avatar-2.jpg',
  },
  {
    id: '3',
    title: 'Unmatched Business Value',
    content: 'I have attended dozens of London startup events, but the curated attendee list here is unmatched. I\'ve built lasting professional relationships and secured two new enterprise clients.',
    author: 'Courtney Henry',
    location: 'Managing Partner',
    avatar: '/images/avatar-3.jpg',
  },
  {
    id: '4',
    title: 'Finally, Networking Done Right',
    content: 'A welcoming and dynamic space to connect. This is the only London networking event tailored for small business owners that feels productive, relaxed, and genuinely enjoyable.',
    author: 'Brooklyn Simmons',
    location: 'Growth Lead, FinTech',
    avatar: '/images/avatar-4.jpg',
  },
];

export const socialLinks = [
  { href: 'https://twitter.com/networxlondon', label: 'X (Twitter)' },
  { href: 'https://linkedin.com/company/networxlondon', label: 'LinkedIn' },
  { href: 'https://instagram.com/networxlondon', label: 'Instagram' },
  { href: 'https://youtube.com/@networxlondon', label: 'YouTube' },
];

export const contactInfo = {
  email: 'hello@networxlondon.com',
  address: 'London SW15 3SR, United Kingdom',
};

export const navLinks = [
  { label: 'About us', href: '/about' },
  { label: 'Events', href: '/events' },
  { label: 'Gallery', href: '/gallery' },
];

export const footerLinks = {
  column1: [
    { label: 'About us', href: '/about' },
    { label: 'Events', href: '/events' },
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
    title: 'High-Level Connections That Matter',
    category: 'Executive Networking',
    brand: 'Networx',
    location: 'London SW15',
  },
  {
    id: '2',
    videoUrl: '/videos/story-2.mp4',
    thumbnail: '/images/toWEBP/1773258582539.webp',
    title: 'Founders & Investors Aligning',
    category: 'Startup Community',
    brand: 'Networx',
    location: 'London SW15',
  },
  {
    id: '3',
    videoUrl: '/videos/story-3.mp4',
    thumbnail: '/images/toWEBP/1773694964584.webp',
    title: 'Real Conversations, Measurable Results',
    category: 'B2B Networking',
    brand: 'Networx',
    location: 'London SW15',
  },
  {
    id: '4',
    videoUrl: '/videos/story-4.mp4',
    thumbnail: '/images/toWEBP/1773868041123.webp',
    title: 'Building London’s Best Professional Relationships',
    category: 'Professional Network',
    brand: 'Networx',
    location: 'London SW15',
  },
];

export const galleryImages = [
  { id: '1', src: '/images/toWEBP/1773868043148.webp', title: 'The Shard Gathering', category: 'Executive Event', width: 800, height: 1000 },
  { id: '2', src: '/images/toWEBP/1773868044945.webp', title: 'Mayfair Roundtable', category: 'Human Networking', width: 800, height: 600 },
  { id: '3', src: '/images/toWEBP/1773868045528.webp', title: 'City Connections', category: 'Atmosphere', width: 800, height: 800 },
  { id: '4', src: '/images/toWEBP/1773868046417.webp', title: 'Meaningful Conversations', category: 'Interaction', width: 800, height: 1100 },
  { id: '5', src: '/images/toWEBP/1774468095390.webp', title: 'The Rooftop Mixer', category: 'Evening Synergy', width: 800, height: 600 },
  { id: '6', src: '/images/toWEBP/1774468101559.webp', title: 'London Skyline Matchmaking', category: 'Venue', width: 800, height: 900 },
  { id: '7', src: '/images/toWEBP/1774468102382.webp', title: 'Great Atmosphere', category: 'Energy', width: 800, height: 1000 },
  { id: '8', src: '/images/toWEBP/1774558149756.webp', title: 'Founder Introductions', category: 'Start', width: 800, height: 600 },
  { id: '9', src: '/images/toWEBP/1774558154280.webp', title: 'Expert Talks', category: 'Insight', width: 800, height: 800 },
  { id: '10', src: '/images/toWEBP/1774558154645.webp', title: 'London Networking Hub', category: 'Connections', width: 800, height: 1100 },
  { id: '11', src: '/images/toWEBP/1774558155480.webp', title: 'London Views', category: 'Skyline', width: 800, height: 1000 },
  { id: '12', src: '/images/toWEBP/1775069942548.webp', title: 'Synergy Events', category: 'Vibe', width: 800, height: 600 },
  { id: '13', src: '/images/toWEBP/1775069944270.webp', title: 'Professional Growth', category: 'Growth', width: 800, height: 800 },
  { id: '14', src: '/images/toWEBP/1775069945040.webp', title: 'Interactive Sessions', category: 'Learning', width: 800, height: 1100 },
  { id: '15', src: '/images/toWEBP/1775069945504.webp', title: 'The Founders Club', category: 'Connect & Scale', width: 800, height: 1000 },
  { id: '16', src: '/images/toWEBP/1775069945612.webp', title: 'Building Relationships', category: 'Human', width: 800, height: 600 },
  { id: '17', src: '/images/toWEBP/1775158996685.webp', title: 'City Connections', category: 'London SW15', width: 800, height: 800 },
  { id: '18', src: '/images/toWEBP/1775159001230.webp', title: 'Authentic Networking', category: 'Real', width: 800, height: 1100 },
  { id: '19', src: '/images/toWEBP/1775159002011.webp', title: 'Community Growth', category: 'People', width: 800, height: 1000 },
  { id: '20', src: '/images/toWEBP/1775159002538.webp', title: 'Vision & Value', category: 'Purpose', width: 800, height: 600 },
];
