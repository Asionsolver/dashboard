import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

type DropdownProps = {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  placement?: "top" | "bottom" | "left" | "right"; // placement & animation
};

export default function Dropdown({
  trigger,
  children,
  className,
  placement = "bottom",
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const motionVariants = {
    initial: {},
    animate: { opacity: 1, x: 0, y: 0, scale: 1 },
    exit: {},
  };

  let positionClasses = "mt-2 left-0"; // default bottom

  switch (placement) {
    case "top":
      motionVariants.initial = { opacity: 0, y: 10, scale: 0.95 };
      motionVariants.exit = { opacity: 0, y: 10, scale: 0.95 };
      positionClasses = "bottom-full left-0 mb-2"; // menu upar
      break;
    case "bottom":
      motionVariants.initial = { opacity: 0, y: -10, scale: 0.95 };
      motionVariants.exit = { opacity: 0, y: -10, scale: 0.95 };
      positionClasses = "top-full left-0 mt-2"; // menu niche
      break;
    case "left":
      motionVariants.initial = { opacity: 0, x: 10, scale: 0.95 };
      motionVariants.exit = { opacity: 0, x: 10, scale: 0.95 };
      positionClasses = "top-0 right-full mr-2";
      break;
    case "right":
      motionVariants.initial = { opacity: 0, x: -10, scale: 0.95 };
      motionVariants.exit = { opacity: 0, x: -10, scale: 0.95 };
      positionClasses = "top-0 left-full ml-2";
      break;
  }

  return (
    <div ref={ref} className="relative">
      <div onClick={() => setIsOpen((prev) => !prev)}>{trigger}</div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={motionVariants.initial}
            animate={motionVariants.animate}
            exit={motionVariants.exit}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className={cn(
              `bg-sidebar border-border absolute z-20 rounded-lg border p-2 shadow-xl ${positionClasses} ${className}`,
            )}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// className={`bg-sidebar absolute z-20 mt-2 rounded-lg border border-gray-700 p-2 shadow-xl ${className}`}
