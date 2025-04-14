// lib/LocaleContext.tsx
'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import messages from './messages';

type Locale = 'en' | 'es';

type TranslationFunction = (key: string) => string;

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationFunction;
}

export const LocaleContext = createContext<LocaleContextType>({
  locale: 'en',
  setLocale: () => {},
  t: (key) => key,
});

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>('en');

  const t: TranslationFunction = (key) => {
    const keys = key.split('.');
    let value: any = messages[locale];

    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) return key;
    }

    return value;
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useTranslation = () => {
  const { t } = useContext(LocaleContext);
  return t;
};
