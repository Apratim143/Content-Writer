import React from 'react';
import { Container } from '../components/Container';
import { PORTFOLIO_ITEMS } from '../constants';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">Selected Work</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
                A collection of articles, guides, and copy written for clients across various industries.
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {PORTFOLIO_ITEMS.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                    <div className="h-48 overflow-hidden relative">
                        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                        <img 
                            src={item.imageUrl} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md z-20">
                            {item.category}
                        </span>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                        <p className="text-slate-600 mb-6">{item.description}</p>
                        <a href={item.link} className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-800">
                            Read Sample <ExternalLink size={16} className="ml-2" />
                        </a>
                    </div>
                </div>
            ))}
        </div>

        <div className="bg-slate-900 rounded-2xl p-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Want similar content?</h2>
            <p className="text-slate-300 mb-8">I can create custom samples for your specific niche.</p>
            <Link to="/contact" className="px-8 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Contact Me
            </Link>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;