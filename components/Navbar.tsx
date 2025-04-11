'use client';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ConsultationModal from '@/components/ConsulationModal';

type MenuKey = 'About' | 'Services' | 'Contact' ;

type MenuItem = {
  title: string;
  href: string;
};

const menuItems: Record<MenuKey, MenuItem[]> = {
  About: [
    { title: 'Our Story', href: '/about' },
    { title: 'Frequently Asked Questions', href: '/team' },
  ],
  Services: [
    { title: 'Web Design', href: '/services/web' },
    { title: 'SEO', href: '/services/seo' },
    { title: 'Marketing Campaigns', href: '/services/web' },
    { title: 'Experience Management', href: '/services/seo' },
    { title: 'Growth Strategy', href: '/services/web' },
    { title: 'Workflow Automation', href: '/services/seo' },
  ],
  Contact: [{ title: 'Email Us', href: '/contact' }],

};

export default function Navbar() {
  const [openFlyout, setOpenFlyout] = useState<MenuKey | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleFlyout = (menu: MenuKey) => {
    setOpenFlyout((prev) => (prev === menu ? null : menu));
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-red-600 font-bold text-xl shrink-0">
          <img src="/test.png" alt="Raza Logo" className="h-16 w-auto object-contain" />
        </Link>

        <nav aria-label="Global" className="hidden md:flex items-center space-x-8 text-lg font-semibold tracking-wide">
          {(Object.keys(menuItems) as MenuKey[]).map((label) => (
            <div className="relative" key={label}>
              <button
                onClick={() => toggleFlyout(label)}
                className="inline-flex items-center gap-x-1 text-gray-950 hover:text-red-600 transition"
              >
                <span>{label}</span>
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <AnimatePresence>
                {openFlyout === label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className="absolute left-1/2 z-10 mt-4 flex w-screen max-w-max -translate-x-1/2 px-4"
                  >
                    <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm ring-1 shadow-lg ring-gray-900/5">
                      <div className="p-4">
                        {menuItems[label].map((item) => (
                          <div key={item.title} className="group relative flex gap-x-4 rounded-lg p-4 hover:bg-gray-50">
                            <div className="flex size-11 items-center justify-center rounded-lg bg-gray-100 group-hover:bg-white">
                              <svg
                                className="size-6 text-gray-950 group-hover:text-red-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.023 9.348h4.992" />
                              </svg>
                            </div>
                            <div>
                              <Link href={item.href} className="font-semibold text-gray-900">
                                {item.title}
                              </Link>
                              <p className="text-gray-700">{item.title.toLowerCase()}...</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ConsultationModal />
          <a
            className="hidden rounded-md bg-stone-50 px-5 py-2.5 text-sm font-medium text-red-800 hover:text-red-700 md:block"
            href="#"
          >
            Español
          </a>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="block rounded-sm bg-gray-100 p-2.5 text-gray-950 hover:text-gray-800 transition md:hidden"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <div className="px-4 pb-4 md:hidden">
          <ul className="space-y-3 text-base font-medium tracking-wide">
            {(Object.keys(menuItems) as MenuKey[]).map((label) => (
              <li key={label}>
                <a className="block text-gray-950 hover:text-red-600" href="#">
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a className="block text-red-800 border border-red-800 rounded px-3 py-1" href="#">
                Español
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
