"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "dark" | "light";
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function getEffectiveTheme(theme: Theme): "dark" | "light" {
  if (typeof window === "undefined") return "dark";

  if (theme === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return theme;
}

function applyThemeToDOM(effectiveTheme: "dark" | "light") {
  if (typeof window === "undefined") return;

  const root = document.documentElement;

  // Remove both classes first
  root.classList.remove("dark", "light");

  // Add the effective theme class
  root.classList.add(effectiveTheme);

  // Set data attribute for additional styling options
  root.setAttribute("data-theme", effectiveTheme);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === "undefined") return "system";
    const savedTheme = localStorage.getItem("theme") as Theme;
    return savedTheme || "system";
  });

  const [resolvedTheme, setResolvedTheme] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") return "dark";
    const savedTheme = (localStorage.getItem("theme") as Theme) || "system";
    const effectiveTheme = getEffectiveTheme(savedTheme);
    // Apply theme immediately on initialization
    applyThemeToDOM(effectiveTheme);
    return effectiveTheme;
  });

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      if (theme === "system") {
        const effectiveTheme = getEffectiveTheme("system");
        setResolvedTheme(effectiveTheme);
        applyThemeToDOM(effectiveTheme);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  // Re-apply theme when component mounts or theme changes
  useEffect(() => {
    const effectiveTheme = getEffectiveTheme(theme);
    applyThemeToDOM(effectiveTheme);
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
    const effectiveTheme = getEffectiveTheme(newTheme);
    setResolvedTheme(effectiveTheme);
    applyThemeToDOM(effectiveTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
