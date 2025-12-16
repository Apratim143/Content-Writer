import React from 'react';
import { Container } from '../components/Container';
import { BlogCard } from '../components/BlogCard';
import { BLOG_POSTS } from '../constants';
import { User } from 'lucide-react';

const Blog: React.FC = () => {
  const categories = ['All', 'Content Writing Tips', 'SEO & Blogging', 'Freelancing', 'Marketing & Branding'];

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <Container>
        <div className="max-w-4xl mx-auto mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">The Writer's Room</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
                Insights on content strategy, SEO, and the art of technical writing. 
                Everything I've learned from 5+ years in the industry.
            </p>
            
            <div className="flex flex-wrap justify-center gap-2">
                {categories.map((cat, idx) => (
                    <button 
                        key={idx}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${idx === 0 ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-400'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {BLOG_POSTS.map(post => (
                <BlogCard key={post.id} post={post} />
            ))}
        </div>

        {/* Author Bio Box */}
        <div className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center shrink-0 border-2 border-white shadow-md overflow-hidden">
                <User size={32} className="text-slate-400" />
            </div>
            <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">About the Author</h3>
                <p className="text-slate-600 text-sm">
                    Alex Wordsmith is a freelance content writer obsessed with clarity and conversion. 
                    When not writing, he's probably reading about the latest Google algorithm update.
                </p>
            </div>
        </div>
      </Container>
    </div>
  );
};

export default Blog;