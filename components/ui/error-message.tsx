"use client";

import { motion } from "motion/react";

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export default function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-destructive/10 border-destructive/20 rounded-lg border p-4 text-center"
    >
      <div className="text-destructive mb-2 font-medium">⚠️ Error</div>
      <p className="text-foreground mb-4">{message}</p>
      {onRetry && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onRetry}
          className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-4 py-2 transition-colors"
        >
          Try Again
        </motion.button>
      )}
    </motion.div>
  );
}
