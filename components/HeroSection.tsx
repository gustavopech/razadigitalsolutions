'use client';
import React from 'react';
import { useTranslation } from '@/translation/LocaleContext';

const HeroSection = () => {
  const t = useTranslation();

  return (
    <section className="px-6 py-12 bg-white">
      <div className="grid grid-cols-2 gap-4 items-center">
        
        {/* Left Column — align content to right */}
        <div className="flex flex-col items-end text-right space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            {t('hero.title.part1')}<br />
            {t('hero.title.part2')} <span className="text-red-800 font-bold">{t('hero.title.part3')}</span> {t('hero.title.part4')}
          </h1>

          <p className="text-gray-600 max-w-md">
            {t('hero.description.line1')}<br />
            {t('hero.description.line2')}
          </p>

          <button className="block rounded-md bg-red-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-600 transition">
            {t('hero.button')}
          </button>
        </div>

        {/* Right Column — align image to left */}
        <div className="flex justify-start items-center">
          <img src="/anime.png" alt="Hero" className="h-100 w-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
