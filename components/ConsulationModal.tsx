"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/translation/LocaleContext";

export default function ConsultationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    message: "",
  });

  const t = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setIsOpen(false);
          setSubmitted(false);
          setFormData({ name: "", email: "", date: "", time: "", message: "" });
        }, 3000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
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

              {submitted ? (
                <p className="text-green-600 font-medium">
                  {t("consultation.successMessage") || "Thank you! Confirmation sent to your email."}
                </p>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="block text-sm mb-1">{t("consultation.name")}</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="block text-sm mb-1">{t("consultation.email")}</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="block text-sm mb-1">{t("consultation.date")}</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="block text-sm mb-1">{t("consultation.time")}</label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm mb-1">{t("consultation.message")}</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded"
                      rows={3}
                    />
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
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}