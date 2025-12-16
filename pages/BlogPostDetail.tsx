import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Container } from '../components/Container';
import { BLOG_POSTS } from '../constants';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';

const BlogPostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <article className="py-12 bg-white min-h-screen">
      {/* Header Image */}
      <div className="w-full h-[400px] md:h-[500px] bg-slate-100 relative mb-12">
        <img 
          src={post.imageUrl} 
          alt={post.title}
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
        <Container className="absolute bottom-0 left-0 right-0 py-12">
          <Link to="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors font-medium">
            <ArrowLeft size={16} className="mr-2" /> Back to Blog
          </Link>
          <div className="max-w-4xl">
            <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm">
               <div className="flex items-center gap-2">
                 <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/30">
                   <User size={14} />
                 </div>
                 <span className="font-semibold">Alex Wordsmith</span>
               </div>
               <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
               <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
            </div>
          </div>
        </Container>
      </div>

      {/* Content */}
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-slate prose-headings:font-serif prose-headings:text-slate-900 prose-p:text-slate-600 prose-a:text-blue-600">
            {post.content}
          </div>
          
          <div className="mt-16 pt-8 border-t border-slate-100">
            <div className="bg-slate-50 p-8 rounded-2xl flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
               <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center border-2 border-slate-200 shadow-sm shrink-0 overflow-hidden">
                 <User size={32} className="text-slate-400" />
               </div>
               <div>
                 <h4 className="text-xl font-bold text-slate-900 mb-2">Written by Alex Wordsmith</h4>
                 <p className="text-slate-600 mb-4">
                   Freelance content writer tailored for the tech and finance sectors. 
                   Helping brands tell their story one word at a time.
                 </p>
                 <Link to="/contact" className="text-blue-600 font-semibold hover:text-blue-800">
                   Work with me &rarr;
                 </Link>
               </div>
            </div>
          </div>
        </div>
      </Container>
    </article>
  );
};

export default BlogPostDetail;