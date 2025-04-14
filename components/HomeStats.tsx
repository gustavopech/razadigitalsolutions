'use client';

import React from 'react';
import { useTranslation } from '@/translation/LocaleContext';

const stats = (t: (key: string) => string) => [
  {
    label: t('stats.noDigitalEdge.title'),
    description: t('stats.noDigitalEdge.desc'),
    percent: 40,
    source: "https://visualobjects.com/digital-marketing/blog/small-business-digital-marketing"
  },
  {
    label: t('stats.brandingMatters.title'),
    description: t('stats.brandingMatters.desc'),
    percent: 73,
    source: "https://news.constantcontact.com/2024-04-23-New-Research-from-Constant-Contact-Reveals-Small-Businesses-Struggle-to-Market-Effectively-Due-to-Low-Confidence,-Limited-Time,-and-Lack-of-Knowledge"
  },
  {
    label: t('stats.websiteImpact.title'),
    description: t('stats.websiteImpact.desc'),
    percent: 70,
    source: "https://www.restaurantdive.com/news/77-of-diners-visit-restaurant-websites-before-going-survey-finds/562008/"
  },
  {
    label: t('stats.searchReady.title'),
    description: t('stats.searchReady.desc'),
    percent: 93,
    source: "https://www.searchenginejournal.com/seo-101/what-is-seo/"
  }
];

const ProgressRing = ({ percentage }: { percentage: number }) => {
  const radius = 60;
  const stroke = 6;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        stroke="#E5E7EB"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke="#991B1B"
        fill="transparent"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <text
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
        fontSize="24"
        fill="#111827"
        fontWeight="bold"
      >
        {percentage}%
      </text>
    </svg>
  );
};

const HomeStats = () => {
  const t = useTranslation();

  return (
    <div className="w-full my-10 space-y-10">
      {/* Section Title */}
      <div className="flex items-center w-full">
        <div className="flex-grow h-px bg-gray-300" />
        <h2 className="px-6 text-2xl font-bold tracking-wide text-gray-900 whitespace-nowrap">
          {t('stats.title')}
        </h2>
        <div className="flex-grow h-px bg-gray-300" />
      </div>

      <section className="px-6 py-6 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats(t).map((stat) => (
            <div
              key={stat.label}
              className="bg-white shadow rounded-lg p-6 text-center space-y-3 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center">
                <ProgressRing percentage={stat.percent} />
              </div>
              <p className="text-xl text-gray-900 font-semibold">{stat.label}</p>
              <p className="text-sm text-gray-500">{stat.description}</p>
              <a
                href={stat.source}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-orange-600 underline hover:text-red-600 block"
              >
                {t('stats.sourceLink')}
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomeStats;
