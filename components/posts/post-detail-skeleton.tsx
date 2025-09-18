"use client";

import Skeleton from "@/components/ui/skeleton";
import Card from "@/components/ui/card";
import { motion } from "motion/react";

export default function PostDetailSkeleton() {
  return (
    <div className="relative z-10 w-full flex-1 overflow-auto">
      <main className="w-full px-4 py-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6"
        >
          {/* Back link */}
          <Skeleton className="mb-4 h-4 w-28" />

          {/* badge + user */}
          <div className="mb-4 flex items-center gap-4">
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-4 w-16" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Card>
            {/* title */}
            <Skeleton className="mb-6 h-8 w-3/4" />

            {/* body text */}
            <div className="space-y-3">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-11/12" />
              <Skeleton className="h-5 w-10/12" />
            </div>

            {/* footer */}
            <div className="border-border mt-8 border-t pt-6">
              <div className="flex items-center justify-between">
                <Skeleton className="h-4 w-40" />
                <div className="flex gap-2">
                  <Skeleton className="h-9 w-20 rounded-lg" />
                  <Skeleton className="h-9 w-20 rounded-lg" />
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </main>
    </div>
  );
}
