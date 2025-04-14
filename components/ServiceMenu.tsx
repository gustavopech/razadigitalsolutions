'use client';

import ServiceCard from '@/components/ServiceCard';
import { useTranslation } from '@/translation/LocaleContext';

import { Rocket, Globe, Paintbrush, Speech, Binary } from 'lucide-react';

export default function ServiceMenu() {
  const t = useTranslation();

  const services = [
    {
      title: t('webDesign'),
      description: t('services.webDesignDesc'),
      icon: <Binary className="w-8 h-8 text-red-800" />,
    },
    {
      title: t('seo'),
      description: t('services.seoDesc'),
      icon: <Globe className="w-8 h-8 text-red-800" />,
    },
    {
      title: t('growthStrategy'),
      description: t('services.growthStrategyDesc'),
      icon: <Rocket className="w-8 h-8 text-red-800" />,
    },
    {
      title: t('marketingCampaigns'),
      description: t('services.marketingDesc'),
      icon: <Paintbrush className="w-8 h-8 text-red-800" />,
    },
    {
      title: t('experienceMgmt'),
      description: t('services.experienceDesc'),
      icon: <Speech className="w-8 h-8 text-red-800" />,
    },
    {
      title: t('automation'),
      description: t('services.automationDesc'),
      icon: <Rocket className="w-8 h-8 text-red-800" />,
    },
  ];

  return (
    <div className="w-full my-10 space-y-10">
      <div className="flex items-center w-full">
        <div className="flex-grow h-px bg-gray-300" />
        <h2 className="px-6 text-2xl font-bold tracking-wide text-gray-900 whitespace-nowrap">
          {t('nav.services')}
        </h2>
        <div className="flex-grow h-px bg-gray-300" />
      </div>

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
