"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { themes } from "@/lib/theme";

export function ThemeSwitch() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = (newTheme: string) => {
    try {
      setTheme(newTheme);
    } catch (error) {
      console.error("Failed to set theme:", error);
    }
  };

  if (!mounted) {
    return (
      <div className="bg-muted flex items-center gap-1 rounded-lg p-1">
        <div className="bg-muted-foreground/20 h-8 w-8 animate-pulse rounded" />
        <div className="bg-muted-foreground/20 h-8 w-8 animate-pulse rounded" />
        <div className="bg-muted-foreground/20 h-8 w-8 animate-pulse rounded" />
      </div>
    );
  }

  return (
    <div className="bg-muted relative flex items-center gap-1 rounded-lg p-1">
      {themes.map((themeOption) => {
        const Icon = themeOption.icon;
        const isActive =
          themeOption.name === "system"
            ? theme === "system"
            : resolvedTheme === themeOption.name;

        return (
          <button
            key={themeOption.name}
            onClick={() => handleThemeChange(themeOption.name)}
            className={`relative flex h-8 w-8 items-center justify-center rounded transition-colors ${isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"} `}
            title={`Switch to ${themeOption.label} theme`}
          >
            {isActive && (
              <motion.div
                layoutId="theme-indicator"
                className="bg-primary absolute inset-0 rounded"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              />
            )}
            <Icon className="relative z-10 h-4 w-4" />
          </button>
        );
      })}
    </div>
  );
}
