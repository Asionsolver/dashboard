"use client";

import Skeleton from "@/components/ui/skeleton";
import { motion } from "motion/react";

type Props = { index?: number };

export default function PostCardSkeleton({ index = 0 }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      className="bg-card border-border rounded-lg border p-6 shadow-sm"
      aria-hidden="true"
    >
      {/* top row: badge (left) + user (right) */}
      <div className="mb-3 flex items-start justify-between">
        <div className="flex items-center gap-3">
          {/* badge like "Post #1" */}
          <Skeleton className="h-6 w-24 rounded-full" />
        </div>
        {/* user pill at right */}
        <Skeleton className="h-4 w-16 rounded-full" />
      </div>

      {/* title — multiple lines with decreasing widths */}
      <div className="mb-3">
        <Skeleton className="mb-2 h-6 w-full rounded" />
        <Skeleton className="mb-2 h-6 w-5/6 rounded" />
      </div>

      {/* short excerpt lines */}
      <div className="mt-4 space-y-2">
        <Skeleton className="h-3 w-full rounded" />
        <Skeleton className="h-3 w-11/12 rounded" />
        <Skeleton className="h-3 w-3/4 rounded" />
      </div>

      {/* divider + "Read more" placeholder */}
      <div className="border-border mt-4 border-t pt-4">
        <Skeleton className="h-4 w-28 rounded" />
      </div>
    </motion.article>
  );
}
