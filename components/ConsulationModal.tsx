"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ConsultationModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="block rounded-md bg-red-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-600 transition"
      >
        Free Consultation
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
              <h2 className="text-xl font-semibold mb-4">Schedule a Consultation</h2>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                }}
              >
                <div className="mb-3">
                  <label className="block text-sm mb-1">Full Name</label>
                  <input type="text" className="w-full px-3 py-2 border rounded" required />
                </div>

                <div className="mb-3">
                  <label className="block text-sm mb-1">Email</label>
                  <input type="email" className="w-full px-3 py-2 border rounded" required />
                </div>

                <div className="mb-3">
                  <label className="block text-sm mb-1">Preferred Date</label>
                  <input type="date" className="w-full px-3 py-2 border rounded" required />
                </div>

                <div className="mb-3">
                  <label className="block text-sm mb-1">Preferred Time</label>
                  <input type="time" className="w-full px-3 py-2 border rounded" required />
                </div>

                <div className="mb-4">
                  <label className="block text-sm mb-1">Message</label>
                  <textarea className="w-full px-3 py-2 border rounded" rows={3} />
                </div>

                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 border rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-red-800 text-white rounded hover:bg-red-600"
                  >
                    Submit
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
