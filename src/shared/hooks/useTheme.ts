"use client";

import { useEffect, useState } from "react";

type ThemePreference = "dark" | "light";

export function useThemePreference(storageKey: string = "theme") {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem(storageKey) as ThemePreference | null;

    if (storedTheme === "dark") {
      setDark(true);
    } else if (storedTheme === "light") {
      setDark(false);
    }
  }, [storageKey]);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem(storageKey, "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem(storageKey, "light");
    }
  }, [dark, storageKey]);

  return { dark, setDark };
}
