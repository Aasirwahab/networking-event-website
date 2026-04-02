export interface Speaker {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface Event {
  id: string;
  date: string;
  location: string;
  title: string;
  category: string;
  description?: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Sponsor {
  name: string;
  logo: React.ReactNode;
}

export interface Testimonial {
  id: string;
  title: string;
  content: string;
  author: string;
  location: string;
  avatar: string;
}
