'use client';

import ServiceCard from '@/components/ServiceCard';
import { Rocket, Globe, Paintbrush, Speech, Binary } from 'lucide-react';

const services = [
  {
    title: 'SEO Optimization',
    description: 'SEO (Search Engine Optimization) is the process of improving your website’s visibility on search engines like Google. When done right, it helps your business show up when potential customers are actively searching for your services — leading to higher traffic and better-quality leads. Unlike paid ads, SEO builds long-term credibility and organic growth. For small and medium-sized businesses, strong SEO levels the playing field, allowing you to compete with larger brands and attract local customers more effectively.',
    icon: <Globe className="w-8 h-8 text-red-800" />,
  },
  {
    title: 'Web Design',
    description: 'A well-designed website is more than just an online presence — it’s your brand’s first impression. It communicates who you are, what you offer, and why customers should trust you, all within seconds. A strong website builds credibility, reflects your brand’s personality, and makes it easier for users to navigate and take action. For small and medium-sized businesses, it’s a powerful tool to stand out in a crowded market and build lasting customer relationships.',
    icon: <Binary className="w-8 h-8 text-red-800" />,
  },
  {
    title: 'Growth Strategy',
    description: 'Our marketing campaigns are built with strategy, creativity, and your business goals in mind. We take a professional, data-informed approach to reach the right audience with the right message — every time. Each campaign is tailored to your brand’s voice and needs, whether you’re launching a new service or growing your customer base. Best of all, we make high-quality marketing accessible, offering personalized solutions at affordable prices for small and medium-sized businesses.',
    icon: <Rocket className="w-8 h-8 text-red-800" />,
  },
  {
    title: 'Marketing Campaigns',
    description: 'Tailored digital plans to grow your business online.',
    icon: <Paintbrush className="w-8 h-8 text-red-800" />,
  },
  {
    title: 'Experience Management',
    description: 'Experience management is all about understanding your customers and using that insight to improve how you serve them. By collecting real-time feedback and user data, we help you make smarter decisions that enhance the customer journey. From surveys to analytics, we provide tools that turn feedback into actionable improvements. Our goal is to help you build stronger relationships and deliver experiences that keep customers coming back.',
    icon: <Speech className="w-8 h-8 text-red-800" />,
  },
  {
    title: 'Workflow Automation',
    description: 'Workflow automation is about making your daily operations easier. Tasks like sending emails, confirming appointments, or updating records can quietly eat up time — time you could be spending on serving your customers and growing your business. We help you simplify those repetitive steps with the right tools and technology. Our goal is to take some of the weight off your shoulders so you can focus on what matters most. Let us lend a hand and help you stay ahead with smart, modern solutions.',
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
