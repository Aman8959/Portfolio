"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useEffect, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const listeners = new Set<() => void>();

function readTheme(): Theme {
  const stored = window.localStorage.getItem("theme") as Theme | null;
  return stored ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}

function subscribeToTheme(callback: () => void) {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const onStorage = () => callback();
  listeners.add(callback);
  mediaQuery.addEventListener("change", onStorage);
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(callback);
    mediaQuery.removeEventListener("change", onStorage);
    window.removeEventListener("storage", onStorage);
  };
}

function setThemePreference(theme: Theme) {
  window.localStorage.setItem("theme", theme);
  listeners.forEach((listener) => listener());
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribeToTheme, readTheme, () => "dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    setThemePreference(next);
  }

  return (
    <button aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`} className="icon-button" onClick={toggleTheme} type="button">
      {theme === "dark" ? <SunIcon aria-hidden="true" /> : <MoonIcon aria-hidden="true" />}
    </button>
  );
}
