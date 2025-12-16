import React from 'react';
import { Container } from './Container';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12 mt-auto">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Alex Wordsmith.</h3>
            <p className="text-slate-600 max-w-sm mb-6 leading-relaxed">
              Freelance content writer helping brands grow through powerful words. SEO blogs, website copy, and content strategy.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Github size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Mail size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-slate-600 hover:text-blue-600">Blog Writing</Link></li>
              <li><Link to="/services" className="text-slate-600 hover:text-blue-600">SEO Content</Link></li>
              <li><Link to="/services" className="text-slate-600 hover:text-blue-600">Website Copy</Link></li>
              <li><Link to="/services" className="text-slate-600 hover:text-blue-600">Ghostwriting</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Menu</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-slate-600 hover:text-blue-600">About</Link></li>
              <li><Link to="/portfolio" className="text-slate-600 hover:text-blue-600">Portfolio</Link></li>
              <li><Link to="/blog" className="text-slate-600 hover:text-blue-600">Blog</Link></li>
              <li><Link to="/contact" className="text-slate-600 hover:text-blue-600">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Alex Wordsmith. All rights reserved.</p>
          <p>San Francisco, CA (Remote Available)</p>
        </div>
      </Container>
    </footer>
  );
};