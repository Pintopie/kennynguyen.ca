"use client";

import React from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";

interface NavBarProps {
    dark: boolean;
    setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavBar({ dark, setDark }: NavBarProps) {
    return (
        <nav className="sticky top-0 z-40 w-full bg-[var(--background)]/12 backdrop-blur border-b border-[var(--border)]/80 shadow-sm">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
                <Link href="/" className="font-bold text-lg text-[var(--primary)]">Kenny Nguyen</Link>
                <ul className="flex gap-2 sm:gap-4">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="nav-link px-3 py-1 rounded transition-colors duration-200 hover:bg-[var(--primary)]/10 focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus:outline-none"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <button
                    aria-label="Toggle dark mode"
                    className="ml-4 p-2 rounded-full border border-[var(--border)] bg-[var(--card)] shadow hover:shadow-lg transition hover:bg-[var(--primary)]/10"
                    onClick={() => setDark((d) => !d)}
                >
                    {dark ? (
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                            <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" fill="currentColor" />
                        </svg>
                    ) : (
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
                            <path
                                d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41"
                                stroke="currentColor"
                                strokeWidth="2"
                            />
                        </svg>
                    )}
                </button>
            </div>
        </nav>
    );
}
