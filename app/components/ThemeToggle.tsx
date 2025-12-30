"use client";

import { Button } from "@heroui/react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-12 rounded-xl bg-slate-100 dark:bg-slate-800/50 animate-pulse border border-slate-200 dark:border-white/10" />
    );
  }

  const isDark = resolvedTheme === "dark";

  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Button
      onPress={handleToggle}
      variant="flat"
      size="lg"
      className={`w-full justify-start font-semibold transition-all duration-300 ${
        isDark
          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
          : "bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-white border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
      }`}
      startContent={
        isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />
      }
    >
      <span className="flex-1 text-left">
        {isDark ? "Light Mode" : "Dark Mode"}
      </span>
      {isDark && (
        <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
      )}
    </Button>
  );
}
