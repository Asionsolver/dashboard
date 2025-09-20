"use client";

import { motion, AnimatePresence } from "motion/react";
import { type ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
}: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-2 sm:p-4"
          >
            {/* Modal Content */}
            <motion.div
              key="modal-content"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 360, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border-border relative flex max-h-[95vh] w-full flex-col rounded-lg border shadow-lg sm:max-w-2xl sm:rounded-xl"
            >
              {title && (
                <div className="border-border bg-card/80 sticky top-0 z-10 flex items-center justify-between rounded-t-xl border-b p-4 backdrop-blur-sm sm:p-6">
                  <h2 className="text-foreground truncate text-lg font-semibold sm:text-xl">
                    {title}
                  </h2>
                  <motion.button
                    onClick={onClose}
                    className="border-border hover:bg-destructive hover:text-primary-foreground rounded-md border px-2 py-0.5 text-lg leading-none transition-all"
                  >
                    ✕
                  </motion.button>
                </div>
              )}
              <div className="overflow-y-auto p-4 sm:p-6">{children}</div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
