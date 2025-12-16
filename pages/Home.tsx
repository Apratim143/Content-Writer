import React from 'react';
import { Container } from '../components/Container';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, TrendingUp, Search, PenTool, Clock } from 'lucide-react';
import { BLOG_POSTS, SERVICES, TESTIMONIALS } from '../constants';
import { BlogCard } from '../components/BlogCard';
import { ServiceCard } from '../components/ServiceCard';

const Home: React.FC = () => {
  const featuredPost = BLOG_POSTS[0];
  const recentPosts = BLOG_POSTS.slice(1, 4);

  return (
    <div className="flex flex-col gap-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <Container className="relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6 font-serif">
              Freelance Content Writer Helping Brands Grow Through <span className="text-blue-600">Powerful Words</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              SEO blogs, website copy, and content strategy that turns readers into customers. Words that build brands, drive traffic, and convert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Hire Me
              </Link>
              <Link
                to="/blog"
                className="inline-flex items-center justify-center px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-full font-semibold hover:bg-slate-50 transition-all"
              >
                Read My Blogs
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust Indicators */}
      <section className="border-b border-slate-100 pb-12">
        <Container>
          <p className="text-center text-slate-500 font-medium mb-8 uppercase tracking-widest text-sm">Trusted by startups, agencies & founders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="flex items-center gap-2 text-xl font-bold text-slate-800"><Search size={24} /> SEO Experts</div>
             <div className="flex items-center gap-2 text-xl font-bold text-slate-800"><PenTool size={24} /> Top Blogs</div>
             <div className="flex items-center gap-2 text-xl font-bold text-slate-800"><TrendingUp size={24} /> Growth Inc</div>
             <div className="flex items-center gap-2 text-xl font-bold text-slate-800">FounderWeekly</div>
          </div>
        </Container>
      </section>

      {/* Why Choose Me Section */}
      <section>
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-serif">Why Choose Me?</h2>
            <p className="text-slate-600">
              I don't just fill pages with text. I create strategic assets that work for your business.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'SEO-Driven Content', desc: 'Content designed to rank and bring organic traffic.', icon: Search },
              { title: 'Research-Backed', desc: 'Deep research for authoritative, trustworthy articles.', icon: TrendingUp },
              { title: 'Clear & Engaging', desc: 'Writing that hooks readers and keeps them reading.', icon: PenTool },
              { title: 'On-Time Delivery', desc: 'Reliable deadlines. No chasing required.', icon: Clock },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                  <item.icon size={20} />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="bg-slate-50 py-20">
        <Container>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4 font-serif">Services Preview</h2>
                    <p className="text-slate-600 max-w-xl">
                        Specialized writing services tailored to your business goals.
                    </p>
                </div>
                <Link to="/services" className="text-blue-600 font-semibold hover:text-blue-800 inline-flex items-center">
                    View All Services <ArrowRight size={16} className="ml-1" />
                </Link>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                {SERVICES.map(service => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
        </Container>
      </section>

      {/* Featured Blog */}
      <section className="py-20">
        <Container>
            <h2 className="text-3xl font-bold text-slate-900 mb-12 font-serif text-center">Latest from the Blog</h2>
            <div className="mb-12">
                <BlogCard post={featuredPost} featured={true} />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {recentPosts.map(post => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>
             <div className="text-center mt-12">
                <Link 
                    to="/blog"
                    className="inline-flex items-center px-6 py-3 border border-slate-300 rounded-full font-semibold text-slate-700 hover:bg-white hover:shadow-sm transition-all"
                >
                    View All Articles
                </Link>
            </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-900 py-20 text-white">
        <Container>
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-white mb-4 font-serif">Client Success Stories</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                {TESTIMONIALS.map(testimonial => (
                    <div key={testimonial.id} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-sm">
                        <div className="flex gap-1 text-yellow-400 mb-6">
                            {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                        </div>
                        <p className="text-lg text-slate-300 mb-6 italic">"{testimonial.text}"</p>
                        <div className="flex items-center gap-4">
                            <img src={testimonial.avatarUrl} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover border-2 border-slate-600" />
                            <div>
                                <h4 className="font-bold text-white">{testimonial.name}</h4>
                                <p className="text-sm text-slate-400">{testimonial.role}, {testimonial.company}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20">
        <Container>
            <div className="bg-blue-600 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="40"/>
                    </svg>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif relative z-10">
                    Ready to build your brand?
                </h2>
                <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto relative z-10">
                    Let's create content that works.
                </p>
                <Link
                    to="/contact"
                    className="relative z-10 inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-slate-100 transition-all hover:shadow-lg hover:-translate-y-0.5"
                >
                    Hire Me
                </Link>
            </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;