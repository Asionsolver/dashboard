"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export default function Card({
  children,
  className = "",
  hover = false,
  onClick,
}: CardProps) {
  const MotionDiv = motion.div;

  return (
    <MotionDiv
      whileHover={hover ? { scale: 1.02, y: -2 } : undefined}
      whileTap={onClick ? { scale: 0.98 } : undefined}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className={cn(
        "card-content bg-card border-border rounded-lg border p-6 shadow-sm",
        onClick ? "cursor-pointer" : "",
        className,
      )}
    >
      {children}
    </MotionDiv>
  );
}
