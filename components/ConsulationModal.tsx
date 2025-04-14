"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/translation/LocaleContext";

export default function ConsultationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslation();

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="block rounded-md bg-red-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-600 transition"
      >
        {t("consultation.openButton")}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center min-h-screen bg-black/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <h2 className="text-xl font-semibold mb-4">{t("consultation.title")}</h2>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                }}
              >
                <div className="mb-3">
                  <label className="block text-sm mb-1">{t("consultation.name")}</label>
                  <input type="text" className="w-full px-3 py-2 border rounded" required />
                </div>

                <div className="mb-3">
                  <label className="block text-sm mb-1">{t("consultation.email")}</label>
                  <input type="email" className="w-full px-3 py-2 border rounded" required />
                </div>

                <div className="mb-3">
                  <label className="block text-sm mb-1">{t("consultation.date")}</label>
                  <input type="date" className="w-full px-3 py-2 border rounded" required />
                </div>

                <div className="mb-3">
                  <label className="block text-sm mb-1">{t("consultation.time")}</label>
                  <input type="time" className="w-full px-3 py-2 border rounded" required />
                </div>

                <div className="mb-4">
                  <label className="block text-sm mb-1">{t("consultation.message")}</label>
                  <textarea className="w-full px-3 py-2 border rounded" rows={3} />
                </div>

                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 border rounded"
                  >
                    {t("consultation.cancel")}
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-red-800 text-white rounded hover:bg-red-600"
                  >
                    {t("consultation.submit")}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
