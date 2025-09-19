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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          >
            {/* Modal Content */}
            <motion.div
              key="modal-content"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 360, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border-border max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg border shadow-lg"
            >
              {title && (
                <div className="border-border flex items-center justify-between border-b p-6">
                  <h2 className="text-foreground text-xl font-semibold">
                    {title}
                  </h2>
                  <motion.button
                    onClick={onClose}
                    className="text-background bg-destructive-foreground hover:bg-destructive hover:text-primary-foreground rounded-md px-2 py-0.5 transition-all"
                  >
                    ✕
                  </motion.button>
                </div>
              )}
              <div className="p-6">{children}</div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
