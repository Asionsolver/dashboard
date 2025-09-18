"use client";

import Card from "@/components/ui/card";
import { motion } from "motion/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[600px] items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="max-w-md text-center">
          <div className="mb-4 text-6xl">🔍</div>
          <h1 className="text-foreground mb-2 text-3xl font-bold">
            Page Not Found
          </h1>
          <p className="text-muted-foreground mb-6">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 py-3 font-medium transition-colors"
            >
              Back to Dashboard
            </motion.button>
          </Link>
        </Card>
      </motion.div>
    </div>
  );
}
