import React from 'react';
import { BlogPost, Service, Testimonial, PortfolioItem } from './types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'How SEO Content Helps Freelancers Get More Clients',
    excerpt: 'Stop chasing leads and start attracting them. Learn how strategic content can build your authority and fill your pipeline.',
    date: 'Jan 15, 2024',
    readTime: '6 min read',
    category: 'Freelancing',
    imageUrl: 'https://picsum.photos/seed/blog1/800/600',
    content: React.createElement(React.Fragment, null, [
      React.createElement('p', { className: "mb-4" }, "Freelancing is often a feast or famine game. One month you are overwhelmed with work, and the next, you are staring at an empty inbox. The solution? Inbound marketing through SEO content."),
      React.createElement('h3', { className: "text-2xl font-bold mt-8 mb-4 text-slate-900" }, "Why Content is Your Best Salesperson"),
      React.createElement('p', { className: "mb-4" }, "When you publish high-quality, optimized content, you remain visible 24/7. Prospective clients are searching for solutions to their problems. If your blog post provides that solution, you immediately establish trust."),
      React.createElement('p', { className: "mb-4" }, "Unlike cold outreach, where you are interrupting someone's day, inbound leads are already interested. They found you."),
      React.createElement('h3', { className: "text-2xl font-bold mt-8 mb-4 text-slate-900" }, "Targeting the Right Keywords"),
      React.createElement('p', { className: "mb-4" }, "Don't just write about 'freelancing'. Write about specific pain points your clients face. For example, instead of 'Why you need a writer', try 'How to scale content production for SaaS startups'."),
      React.createElement('p', { className: "mb-4" }, "By narrowing your focus, you attract higher-quality leads who are ready to buy."),
    ])
  },
  {
    id: '2',
    title: 'Blog Writing vs Copywriting: What’s the Difference?',
    excerpt: 'One informs, the other sells. Understanding the nuance between these two skills is key to a successful content strategy.',
    date: 'Feb 02, 2024',
    readTime: '5 min read',
    category: 'Content Writing Tips',
    imageUrl: 'https://picsum.photos/seed/blog2/800/600',
    content: React.createElement(React.Fragment, null, [
      React.createElement('p', { className: "mb-4" }, "In the world of digital marketing, the terms 'content writing' and 'copywriting' are often used interchangeably. However, they serve very different purposes."),
      React.createElement('h3', { className: "text-2xl font-bold mt-8 mb-4 text-slate-900" }, "The Goal of Copywriting"),
      React.createElement('p', { className: "mb-4" }, "Copywriting is designed to persuade. It pushes the reader to take a specific action, such as buying a product, signing up for a newsletter, or booking a call. It is salesmanship in print."),
      React.createElement('h3', { className: "text-2xl font-bold mt-8 mb-4 text-slate-900" }, "The Goal of Content Writing"),
      React.createElement('p', { className: "mb-4" }, "Content writing, on the other hand, is about education and engagement. It builds a relationship with the audience over time. Blogs, whitepapers, and guides fall into this category."),
      React.createElement('p', { className: "mb-4" }, "To build a successful brand, you need both. Content brings them in; copy closes the deal."),
    ])
  },
  {
    id: '3',
    title: 'How to Rank Blogs on Google in 2025',
    excerpt: 'The algorithm has changed. Here is a breakdown of E-E-A-T, search intent, and the new rules of engagement for SEO.',
    date: 'Feb 20, 2024',
    readTime: '8 min read',
    category: 'SEO & Blogging',
    imageUrl: 'https://picsum.photos/seed/blog3/800/600',
    content: React.createElement(React.Fragment, null, [
      React.createElement('p', { className: "mb-4" }, "SEO is no longer just about keywords. Google's helpful content updates have shifted the focus entirely to user experience and expertise."),
      React.createElement('h3', { className: "text-2xl font-bold mt-8 mb-4 text-slate-900" }, "Understanding E-E-A-T"),
      React.createElement('p', { className: "mb-4" }, "Experience, Expertise, Authoritativeness, and Trustworthiness. Google wants to know that the person writing the content actually knows what they are talking about."),
      React.createElement('ul', { className: "list-disc pl-6 mb-6 space-y-2" }, [
        React.createElement('li', null, "Include personal anecdotes."),
        React.createElement('li', null, "Cite reputable sources."),
        React.createElement('li', null, "Keep your author bio updated."),
      ]),
      React.createElement('h3', { className: "text-2xl font-bold mt-8 mb-4 text-slate-900" }, "Search Intent is King"),
      React.createElement('p', { className: "mb-4" }, "Before you write a single word, Google the keyword. What comes up? Is it a listicle? A how-to guide? A product page? You must match the format of the top results to stand a chance at ranking."),
    ])
  },
  {
    id: '4',
    title: 'Mistakes New Content Writers Must Avoid',
    excerpt: 'From keyword stuffing to weak headlines, we explore the common pitfalls that kill engagement and how to fix them.',
    date: 'Mar 10, 2024',
    readTime: '4 min read',
    category: 'Marketing & Branding',
    imageUrl: 'https://picsum.photos/seed/blog4/800/600',
    content: React.createElement(React.Fragment, null, [
      React.createElement('p', { className: "mb-4" }, "Breaking into content writing is easier than ever, but standing out is harder. Here are the common traps beginners fall into."),
      React.createElement('h3', { className: "text-2xl font-bold mt-8 mb-4 text-slate-900" }, "1. Weak Headlines"),
      React.createElement('p', { className: "mb-4" }, "80% of people will read your headline, but only 20% will read the rest. If your headline is boring, your article doesn't exist."),
      React.createElement('h3', { className: "text-2xl font-bold mt-8 mb-4 text-slate-900" }, "2. Fluff"),
      React.createElement('p', { className: "mb-4" }, "Don't use 50 words when 10 will do. Readers are busy. Respect their time by getting straight to the point."),
      React.createElement('h3', { className: "text-2xl font-bold mt-8 mb-4 text-slate-900" }, "3. Ignoring Formatting"),
      React.createElement('p', { className: "mb-4" }, "Huge walls of text scare readers away. Use bullet points, subheaders, and short paragraphs to make your content scannable."),
    ])
  },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Blog Writing',
    description: 'Engaging, well-researched articles that educate your audience and build brand authority.',
    price: 'From $250/post',
    features: ['SEO-optimized long-form blogs', 'Keyword research included', 'Industry research & original insights', 'formatting for readability'],
    iconName: 'pen',
  },
  {
    id: '2',
    title: 'SEO Content Writing',
    description: 'Strategic content designed to rank. I write for humans first, but keep the algorithms happy.',
    price: 'From $300/page',
    features: ['Search-intent focused', 'Google-friendly structure', 'Internal linking strategy', 'Meta titles & descriptions'],
    iconName: 'search',
  },
  {
    id: '3',
    title: 'Website Content',
    description: 'Clear, conversion-focused copy for your core pages that turns visitors into leads.',
    price: 'Custom Quote',
    features: ['Home, About, Services pages', 'Brand voice development', 'UX-focused layout advice', 'Conversion copywriting'],
    iconName: 'globe',
  },
  {
    id: '4',
    title: 'Ghostwriting',
    description: 'Your thoughts, my words. I help founders and executives build their personal brand on LinkedIn and blogs.',
    price: 'Retainer based',
    features: ['Personal brands & founders', 'LinkedIn articles & blogs', 'Thought leadership pieces', 'Confidentiality guaranteed'],
    iconName: 'user',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'CMO',
    company: 'TechFlow',
    text: 'Alex captured our brand voice perfectly. The SEO blog series he wrote helped us double our organic traffic in 6 months.',
    avatarUrl: 'https://picsum.photos/seed/user1/100/100',
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Founder',
    company: 'StartupX',
    text: 'Professional, on-time, and incredibly talented. The website copy Alex delivered converted cold traffic into paying users.',
    avatarUrl: 'https://picsum.photos/seed/user2/100/100',
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: '1',
    title: 'The Future of Fintech',
    description: 'A deep dive into blockchain adoption in traditional banking sectors.',
    category: 'Finance',
    link: 'https://example.com/fintech-article',
    imageUrl: 'https://picsum.photos/seed/port1/800/600'
  },
  {
    id: '2',
    title: 'SaaS Marketing Guide',
    description: 'Comprehensive guide on scaling B2B SaaS companies through content.',
    category: 'SaaS',
    link: 'https://example.com/saas-guide',
    imageUrl: 'https://picsum.photos/seed/port2/800/600'
  },
  {
    id: '3',
    title: 'Sustainable Living Blog',
    description: 'Ghostwritten series for a lifestyle brand focused on eco-friendly products.',
    category: 'Lifestyle',
    link: 'https://example.com/sustainable-living',
    imageUrl: 'https://picsum.photos/seed/port3/800/600'
  }
];