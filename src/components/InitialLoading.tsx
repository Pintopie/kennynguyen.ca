"use client";

import { useEffect, useState } from "react";

export default function InitialLoading() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const hide = () => {
      clearTimeout(timer);
      setShow(false);
    };

    // Hide after real 'load' event or fallback to short delay
    if (typeof window !== "undefined") {
      if (document.readyState === "complete") {
        timer = setTimeout(hide, 300);
      } else {
        window.addEventListener("load", hide, { once: true });
        // fallback in case "load" doesn't fire reliably
        timer = setTimeout(hide, 1000);
      }
    }

    return () => {
      clearTimeout(timer);
      if (typeof window !== "undefined") {
        window.removeEventListener("load", hide);
      }
    };
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--background)]/95 backdrop-blur-sm">
      <div className="loading-root">
        <div className="loading-ring">
          <div className="loading-dot" />
        </div>
        <div className="text-center mt-6">
          <h1 className="loading-label">Kenny Nguyen</h1>
          <p className="loading-sub">Loading portfolio — preparing your experience</p>
        </div>
      </div>
    </div>
  );
}
