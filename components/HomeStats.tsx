'use client';

import React from 'react';

const stats = [
  {
    label: "Website Impact",
    value: "70%",
    description: " Your website can make or break you — 70% of diners say they’ve been turned off by a restaurant's website.",
    percent: 77,
    source: "https://www.prnewswire.com/news-releases/survey-nearly-70-of-us-diners-say-a-restaurants-website-has-discouraged-them-from-visiting-300909229.html"
  },
  {
    label: "Social Media Impact",
    value: "65%",
    description: " consumers feel closer to brands active on social media. Consistency and quality matter — people want to see the real humans behind your business. Showing up online builds trust and keeps your brand top of mind.",
    percent: 70,
    source: "https://www.hubspot.com/marketing-statistics"
  },
  {
    label: "Cups of Coffee",
    value: "88%",
    description: "Late-night coding fuel",
    percent: 88,
    source: "https://www.ncausa.org/Research-Trends"
  },
  {
    label: "Satisfied Clients",
    value: "112",
    description: "Businesses we’ve helped grow",
    percent: 85,
    source: "https://www.salesforce.com/research/customer-expectations/"
  },
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
  return (
    <div className="w-full my-10 space-y-10">
      {/* Section Title */}
      <div className="flex items-center w-full">
        <div className="flex-grow h-px bg-gray-300" />
        <h2 className="px-6 text-2xl font-bold tracking-wide text-gray-900 whitespace-nowrap">
          Why Your Digital Footprint Matters
        </h2>
        <div className="flex-grow h-px bg-gray-300" />
      </div>

      <section className="px-6 py-6 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white shadow rounded-lg p-6 text-center space-y-3 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center">
                <ProgressRing percentage={stat.percent} />
              </div>
              <p className="text-xl text-gray-900 font-semibold">{stat.label}</p>
              <p className="text-2xl font-extrabold text-red-800">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.description}</p>
              <a
                href={stat.source}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-orange-600 underline hover:text-red-600 block"
              >
                Click for Source
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomeStats;
