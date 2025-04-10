'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl space-y-12 px-4 py-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="text-center lg:text-left">
            <div className="text-red-800">
              <img src="/test.png" alt="Your Company Logo" className="h-16 w-auto mx-auto lg:mx-0" />
            </div>

            <p className="mt-4 text-gray-500 max-w-md mx-auto lg:mx-0">
              Raza Digital empowers businesses with expert digital solutions. We help you make smarter digital decisions that drive results.
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
                <p className="font-medium text-gray-900">Services</p>
                <ul className="mt-6 space-y-2 text-sm">
                  <li><Link href="#" className="text-gray-700 transition hover:opacity-75">Marketing Campaigns</Link></li>
                  <li><Link href="#" className="text-gray-700 transition hover:opacity-75">Experience Management</Link></li>
                  <li><Link href="#" className="text-gray-700 transition hover:opacity-75">Workflow Optimization</Link></li>
                  <li><Link href="#" className="text-gray-700 transition hover:opacity-75">Web Development</Link></li>
                  <li><Link href="#" className="text-gray-700 transition hover:opacity-75">SEO Optimisation</Link></li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-gray-900">Company</p>
                <ul className="mt-6 space-y-2 text-sm">
                  <li><Link href="/about" className="text-gray-700 transition hover:opacity-75">About</Link></li>
                  <li><Link href="#" className="text-gray-700 transition hover:opacity-75">Meet the Team</Link></li>
                  <li><Link href="#" className="text-gray-700 transition hover:opacity-75">FAQs</Link></li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-gray-900">Helpful Links</p>
                <ul className="mt-6 space-y-2 text-sm">
                  <li><Link href="#" className="text-gray-700 transition hover:opacity-75">Contact</Link></li>
                  <li><Link href="#" className="text-gray-700 transition hover:opacity-75">FAQs</Link></li>
                  <li><Link href="#" className="text-gray-700 transition hover:opacity-75">Live Chat</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500 text-center">&copy; 2022. Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
}
