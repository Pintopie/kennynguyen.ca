"use client";

import { useEffect } from "react";

type SmoothScrollProps = {
  children: React.ReactNode;
};

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;
    const previousDataScrollBehavior = root.dataset.scrollBehavior;

    root.style.scrollBehavior = "smooth";
    root.dataset.scrollBehavior = "smooth";

    return () => {
      root.style.scrollBehavior = previousScrollBehavior;

      if (previousDataScrollBehavior === undefined) {
        delete root.dataset.scrollBehavior;
      } else {
        root.dataset.scrollBehavior = previousDataScrollBehavior;
      }
    };
  }, []);

  return <>{children}</>;
}