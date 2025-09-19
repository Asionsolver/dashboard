"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

const Button = ({
  children,
  className = "",
  onClick,
  hover = false,
}: ButtonProps) => {
  const MotionButton = motion.button;
  return (
    <MotionButton
      whileHover={hover ? { scale: 1.05 } : undefined}
      whileTap={onClick ? { scale: 0.95 } : undefined}
      onClick={onClick}
      className={cn(
        "bg-primary after:bg-destructive relative z-30 cursor-pointer overflow-hidden rounded-md px-4 py-2 text-white transition-all duration-700 after:absolute after:bottom-0 after:left-5 after:-z-20 after:h-1 after:w-1 after:translate-y-full after:rounded-md after:transition-all after:duration-700 hover:after:scale-[300] after:hover:transition-all after:hover:duration-700",
        className,
      )}
    >
      {children}
    </MotionButton>
  );
};

export default Button;
