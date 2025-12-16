import React, { useState } from 'react';
import { Container } from '../components/Container';
import { Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'blog-writing',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thanks for your message! This is a demo form.');
    setFormData({ name: '', email: '', projectType: 'blog-writing', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <Container>
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            
            {/* Contact Info Sidebar */}
            <div className="bg-slate-900 p-10 md:w-5/12 text-white flex flex-col justify-between">
                <div>
                    <h2 className="text-2xl font-bold mb-6 font-serif">Have a project in mind?</h2>
                    <p className="text-slate-300 mb-10 leading-relaxed">
                        Let’s create content that works. Fill out the form and I'll get back to you with a custom quote.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <Mail className="text-blue-400 mt-1" size={20} />
                            <div>
                                <h4 className="font-semibold text-sm text-slate-400 uppercase tracking-wider mb-1">Email</h4>
                                <p className="text-white">alex@wordsmith.com</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Clock className="text-blue-400 mt-1" size={20} />
                            <div>
                                <h4 className="font-semibold text-sm text-slate-400 uppercase tracking-wider mb-1">Response Time</h4>
                                <p className="text-white">24–48 hours</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="mt-10 md:mt-0 pt-10 border-t border-slate-700">
                     <p className="text-slate-400 italic text-sm">
                        "Good writing is supposed to evoke sensation in the reader—not the fact that it is raining, but the feeling of being rained upon."
                     </p>
                </div>
            </div>

            {/* Form Area */}
            <div className="p-10 md:w-7/12">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-semibold text-slate-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                            placeholder="you@company.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="projectType" className="text-sm font-semibold text-slate-700">Project Type</label>
                        <select
                            id="projectType"
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                        >
                            <option value="blog-writing">Blog Writing</option>
                            <option value="seo-content">SEO Content</option>
                            <option value="website-copy">Website Copy</option>
                            <option value="ghostwriting">Ghostwriting</option>
                            <option value="strategy">Content Strategy</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-semibold text-slate-700">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                            placeholder="Tell me about your business and goals..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg active:scale-[0.99] flex items-center justify-center gap-2"
                    >
                        Send Message <Send size={18} />
                    </button>
                </form>
            </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;