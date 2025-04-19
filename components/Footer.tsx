'use client';

import Link from 'next/link';
import { useTranslation } from '@/translation/LocaleContext';

export default function Footer() {
  const t = useTranslation();

  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl space-y-12 px-4 py-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="text-center lg:text-left">
            <div className="text-red-800">
              <img src="/test.png" alt="Your Company Logo" className="h-16 w-auto mx-auto lg:mx-0" />
            </div>

            <p className="mt-4 text-gray-500 max-w-md mx-auto lg:mx-0">
              {t("footer.description")}
            </p>

            <ul className="mt-8 flex justify-center lg:justify-start gap-6">
              {['Facebook', 'Instagram', 'Twitter', 'GitHub', 'Dribbble'].map((name, i) => (
                <li key={i}>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">{name}</span>
                    <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="..." />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center lg:text-left">
              <div>
                <p className="font-medium text-gray-900">{t("footer.sections.services")}</p>
                <ul className="mt-6 space-y-2 text-sm">
                  <li><Link href="#" className="text-gray-700 transition hover:opacity-75">{t("marketingCampaigns")}</Link></li>
                  <li><Link href="#" className="text-gray-700 transition hover:opacity-75">{t("experienceMgmt")}</Link></li>
                  <li><Link href="#" className="text-gray-700 transition hover:opacity-75">{t("automation")}</Link></li>
                  <li><Link href="#" className="text-gray-700 transition hover:opacity-75">{t("webDesign")}</Link></li>
                  <li><Link href="#" className="text-gray-700 transition hover:opacity-75">{t("seo")}</Link></li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-gray-900">{t("footer.sections.company")}</p>
                <ul className="mt-6 space-y-2 text-sm">
                  <li><Link href="/about" className="text-gray-700 transition hover:opacity-75">{t("ourStory")}</Link></li>

                </ul>
              </div>
              <div>
                <p className="font-medium text-gray-900">{t("footer.sections.links")}</p>
                <ul className="mt-6 space-y-2 text-sm">
                  <li><Link href="mailto:info@razadigitalsolutions.com" className="text-gray-700 transition hover:opacity-75">{t("contact")}</Link></li>

                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500 text-center">&copy; 2024. Raza Digital. {t("footer.rights")}</p>
      </div>
    </footer>
  );
}
