import React from "react";

export default function Loading() {
  return (
    <div className="loading-root bg-[var(--background)] text-[var(--foreground)] w-full h-screen">
      <div className="loading-ring">
        <div className="loading-dot" />
      </div>
      <div className="text-center">
        <h1 className="loading-label">Kenny Nguyen</h1>
        <p className="loading-sub">Loading ...</p>
      </div>
    </div>
  );
}
