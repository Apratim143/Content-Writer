import React from 'react';
import { BlogPost } from '../types';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, featured = false }) => {
  const postLink = `/blog/${post.id}`;

  if (featured) {
    return (
      <div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 grid md:grid-cols-2 gap-0">
        <div className="h-64 md:h-full w-full overflow-hidden">
            <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
        </div>
        <div className="p-8 flex flex-col justify-center">
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase mb-2">{post.category}</span>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                <Link to={postLink}>{post.title}</Link>
            </h3>
            <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed">{post.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
            </div>
            <Link to={postLink} className="inline-flex items-center text-slate-900 font-semibold hover:text-blue-600 transition-colors">
                Read Article <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="group bg-white rounded-xl border border-slate-100 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      <div className="h-56 overflow-hidden">
        <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
            <span className="text-blue-600 text-xs font-bold uppercase tracking-wider">{post.category}</span>
            <span className="text-slate-400 text-xs flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
            <Link to={postLink}>{post.title}</Link>
        </h3>
        <p className="text-slate-600 text-sm mb-4 flex-grow line-clamp-3">{post.excerpt}</p>
        <Link to={postLink} className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors mt-auto">
            Read More <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
};