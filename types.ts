export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
  content: React.ReactNode; // Changed to support JSX content for better formatting
}

export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  features: string[];
  iconName: 'pen' | 'search' | 'globe' | 'user';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  avatarUrl: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  link: string;
  imageUrl: string;
}