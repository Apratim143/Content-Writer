import React from 'react';
import { Container } from '../components/Container';
import { SERVICES } from '../constants';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">Premium Content Services</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
                I create strategic assets that help you acquire customers, 
                explain your product, and establish authority in your niche.
            </p>
        </div>

        <div className="space-y-12">
            {SERVICES.map((service, index) => (
                <div key={service.id} className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 order-2 md:order-1">
                        <div className="inline-block px-3 py-1 rounded-lg bg-blue-50 text-blue-600 font-bold text-sm mb-4 uppercase tracking-wider">
                            {service.title}
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            {service.description}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {service.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                        <Check size={12} className="text-green-600" />
                                    </div>
                                    <span className="text-slate-700 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center gap-6 border-t border-slate-100 pt-6">
                             <p className="text-xl font-bold text-slate-900">{service.price}</p>
                             <Link 
                                to="/contact" 
                                className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors ml-auto"
                            >
                                Request a Quote <ArrowRight size={16} className="ml-2" />
                             </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;