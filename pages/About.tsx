import React from 'react';
import { Container } from '../components/Container';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">About the Writer</h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              I’m Alex, a freelance content writer specializing in SEO blogs, web content, and long-form articles. I help businesses improve visibility, authority, and conversions through clear, research-driven writing.
            </p>
            <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://picsum.photos/seed/alexwriter/800/1000" 
                alt="Alex Wordsmith working" 
                className="rounded-2xl shadow-xl w-full object-cover h-[500px]"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">More Than Just Words</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                With over 5 years of experience in digital marketing and technical writing, I understand that content isn't just about filling space—it's about solving problems for your audience.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                I've written for industries ranging from Fintech and SaaS to Lifestyle and Education. My approach blends data-backed SEO strategies with human-centric storytelling.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-600" />
                  <span className="font-semibold text-slate-900">5+ Years Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-600" />
                  <span className="font-semibold text-slate-900">SEO-Optimized & Human-Friendly</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-600" />
                  <span className="font-semibold text-slate-900">Data-Backed Storytelling</span>
                </div>
                 <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-600" />
                  <span className="font-semibold text-slate-900">Multi-Industry Expertise</span>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-all"
              >
                Let's Work Together
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;