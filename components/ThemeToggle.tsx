"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggle = () => {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", dark ? "light" : "dark");
    setDark(!dark);
  };

  return (
    <button className="bg-white/60 dark:bg-zinc-700 px-3 py-1 rounded-full text-sm">
      <span onClick={toggle}>{dark ? "🌙" : "☀️"}</span>
    </button>
  );
}