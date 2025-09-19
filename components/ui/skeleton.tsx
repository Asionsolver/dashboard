"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
  animate?: boolean;
}

export default function Skeleton({
  className = "",
  animate = true,
}: SkeletonProps) {
  const Component = animate ? motion.div : "div";

  return (
    <Component
      {...(animate && {
        animate: { opacity: [0.5, 1, 0.5] },
        transition: {
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        },
      })}
      className={cn(`bg-muted rounded ${className}`)}
    />
  );
}
