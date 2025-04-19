'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/translation/LocaleContext';

export default function Location() {
  const t = useTranslation();

  return (
    <section className="bg-gray-50 py-16 px-6 sm:px-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center"
      >
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            {t('location.title')}
          </h2>
          <p className="text-gray-700 text-lg">
            {t('location.description')}
          </p>

          <a
            href="mailto:info@razadigitalsolutions.com"
            className="inline-block mt-2 rounded-md bg-red-800 px-6 py-3 text-white font-semibold hover:bg-red-700 transition"
          >
            {t('location.button')}
          </a>
        </div>

        {/* Embedded Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full h-64 sm:h-80 rounded-lg overflow-hidden shadow-md"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.2740229346!2d-118.69192097796092!3d34.02016129784883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c0b6e4bb432d%3A0x9488ddda39b5b6bb!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1712415590937!5m2!1sen!2sus"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </motion.div>
    </section>
  );
}
