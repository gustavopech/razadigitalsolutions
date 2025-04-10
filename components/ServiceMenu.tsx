'use client';

import ServiceCard from '@/components/ServiceCard';
import { Rocket, Globe, Paintbrush, Speech, Binary } from 'lucide-react';

const services = [
  {
    title: 'SEO Optimization',
    description: 'Improve your ranking on Google with modern SEO strategies.',
    icon: <Globe className="w-8 h-8 text-red-800" />,
  },
  {
    title: 'Web Design',
    description: 'Custom websites built for performance and conversion.',
    icon: <Binary className="w-8 h-8 text-red-800" />,
  },
  {
    title: 'Growth Strategy',
    description: 'Tailored digital plans to grow your business online.',
    icon: <Rocket className="w-8 h-8 text-red-800" />,
  },
  {
    title: 'Marketing Campaigns',
    description: 'Tailored digital plans to grow your business online.',
    icon: <Paintbrush className="w-8 h-8 text-red-800" />,
  },
  {
    title: 'Experience Management',
    description: 'Tailored digital plans to grow your business online.',
    icon: <Speech className="w-8 h-8 text-red-800" />,
  },
  {
    title: 'Growth Strategy',
    description: 'Tailored digital plans to grow your business online.',
    icon: <Rocket className="w-8 h-8 text-red-800" />,
  },
];

export default function ServiceMenu() {
  return (
    <div className="w-full my-10 space-y-10">
      {/* Section Title */}
      <div className="flex items-center w-full">
        <div className="flex-grow h-px bg-gray-300" />
        <h2 className="px-6 text-2xl font-bold tracking-wide text-gray-900 whitespace-nowrap">
          Services
        </h2>
        <div className="flex-grow h-px bg-gray-300" />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
}
