import type { Speaker, Event, Stat, Testimonial } from '@/types';
import { Zap, Circle, Utensils, Box, Globe, Clock, Feather, Hexagon } from 'lucide-react';

export const speakers: Speaker[] = [
  {
    id: '1',
    name: 'Marvin McKinney',
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
    name: 'Savannah Nguyen',
    role: 'Marketing Head',
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
    date: '20-30th of December',
    location: 'New Jersey, USA',
    title: 'Innovating Event Experiences for Global Connections',
    category: 'Concert',
  },
  {
    id: '2',
    date: '11.00 - 14.00',
    location: 'New York, USA',
    title: 'Global Education & Learning Expo',
    category: 'Education',
    description: 'An interactive workshop designed for marketing professionals to enhance their skills and learn new strategies from top experts.',
  },
  {
    id: '3',
    date: '10.00 - 16.00',
    location: 'New Jersey, USA',
    title: 'Sports Excellence Tournament',
    category: 'Sports Event',
    description: 'A large-scale expo showcasing cutting-edge digital solutions and technologies with keynotes from top industry leaders.',
  },
  {
    id: '4',
    date: '09.00 - 14.30',
    location: 'New York, USA',
    title: 'Marketing Mastery Workshop',
    category: 'Workshop',
    description: 'An interactive workshop designed for marketing professionals to enhance their skills and learn new strategies from top experts.',
  },
];

export const stats: Stat[] = [
  {
    value: 20,
    suffix: '+',
    label: 'Over two decades in the industry.',
  },
  {
    value: 98,
    suffix: '%',
    label: 'Satisfaction rate from our clients.',
  },
  {
    value: 15,
    suffix: '+',
    label: 'Award wins for event management',
  },
  {
    value: 5,
    suffix: 'M+',
    label: 'Managing events with 5M attendees',
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
    title: 'Exceptional Experience',
    content: 'Actos exceeded our expectations. The attention to detail and the seamless coordination were exceptional, making the entire experience stress-free for us.',
    author: 'Cameron Williamson',
    location: 'Georgia, USA',
    avatar: '/images/avatar-1.jpg',
  },
  {
    id: '2',
    title: 'Exceeded All Expectations',
    content: 'Actos exceeded all our expectations. Their team\'s attention to detail and dedication to excellence were evident throughout the planning and execution of our event.',
    author: 'Darlene Robertson',
    location: 'Texas, USA',
    avatar: '/images/avatar-2.jpg',
  },
  {
    id: '3',
    title: 'Unmatched Professionalism',
    content: 'The professionalism of the Actos team is unmatched. They handled every detail with care, ensuring that our event was not only successful but also seamless.',
    author: 'Courtney Henry',
    location: 'California, USA',
    avatar: '/images/avatar-3.jpg',
  },
  {
    id: '4',
    title: 'Highly Recommended',
    content: 'Their expertise and attention to detail are unmatched. The entire process, from planning to execution, was smooth and stress-free, leaving us with a fantastic event.',
    author: 'Brooklyn Simmons',
    location: 'Florida, US',
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

export const galleryImages = [
  {
    id: '1',
    src: '/images/gallery-1.png',
    title: 'Future Tech Summit',
    category: 'Conference',
    width: 800,
    height: 1000,
  },
  {
    id: '2',
    src: '/images/gallery-2.png',
    title: 'Rooftop Networking',
    category: 'Networking',
    width: 800,
    height: 600,
  },
  {
    id: '3',
    src: '/images/gallery-3.png',
    title: 'Keynote Excellence',
    category: 'Keynote',
    width: 800,
    height: 800,
  },
  {
    id: '4',
    src: '/images/gallery-4.png',
    title: 'Interactive Workshop',
    category: 'Workshop',
    width: 800,
    height: 1100,
  },
  {
    id: '5',
    src: '/images/gallery-5.png',
    title: 'Gala Celebration',
    category: 'Gala',
    width: 800,
    height: 600,
  },
  {
    id: '6',
    src: '/images/gallery-6.png',
    title: 'Outdoor Music Fest',
    category: 'Festival',
    width: 800,
    height: 900,
  },
];
