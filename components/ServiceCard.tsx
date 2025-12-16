import React from 'react';
import { Service } from '../types';
import { Check, Search, PenTool, Mail, Globe, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  service: Service;
}

const IconMap = {
  search: Search,
  pen: PenTool,
  mail: Mail,
  globe: Globe,
  user: User
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  // @ts-ignore
  const Icon = IconMap[service.iconName] || PenTool;

  return (
    <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
      <p className="text-slate-600 mb-6 leading-relaxed flex-grow">{service.description}</p>
      
      <div className="space-y-3 mb-8">
        {service.features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-2">
            <Check size={18} className="text-green-500 mt-1 shrink-0" />
            <span className="text-sm text-slate-700">{feature}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-auto">
        <Link 
          to="/contact" 
          className="w-full text-center py-3 rounded-lg border border-slate-900 text-slate-900 font-semibold hover:bg-slate-900 hover:text-white transition-all"
        >
          Request a Quote
        </Link>
      </div>
    </div>
  );
};