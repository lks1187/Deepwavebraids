"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"warm" | "dark-rose">("warm");

  useEffect(() => {
    const saved = localStorage.getItem("dwb-theme") as "warm" | "dark-rose" | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved === "warm" ? "" : saved);
    }
  }, []);

  const toggle = () => {
    const next = theme === "warm" ? "dark-rose" : "warm";
    setTheme(next);
    localStorage.setItem("dwb-theme", next);
    document.documentElement.setAttribute("data-theme", next === "warm" ? "" : next);
  };

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-xl border border-border hover:border-accent/40 transition-colors bg-surface"
      aria-label="Changer de thème"
      title={theme === "warm" ? "Passer en Noir & Rosé" : "Passer en Warm & Earthy"}
    >
      {theme === "warm" ? <Moon size={18} className="text-foreground" /> : <Sun size={18} className="text-foreground" />}
    </button>
  );
}
