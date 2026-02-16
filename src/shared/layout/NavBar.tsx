"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import { Moon, Sun } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface NavBarProps {
    dark: boolean;
    setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavBar({ dark, setDark }: NavBarProps) {
    const [hoveredPath, setHoveredPath] = useState<string | null>(null);
    const navRef = useRef<HTMLElement>(null);
    const themeButtonRef = useRef<HTMLButtonElement>(null);

    useGSAP(() => {
        gsap.from(navRef.current, {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            delay: 0.5
        });
    });

    useGSAP(() => {
        if (themeButtonRef.current) {
            gsap.fromTo(themeButtonRef.current, 
                { rotate: -180, scale: 0.5 },
                { rotate: 0, scale: 1, duration: 0.4, ease: "back.out(1.7)" }
            );
        }
    }, [dark]);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        // Only interception for hash links on the main page
        if (href.startsWith("#")) {
            e.preventDefault();
            const targetId = href.replace('#', '');
            const elem = document.getElementById(targetId);
            if (elem) {
                // Scroll to center of the viewport
                elem.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    };

    return (
        <nav
            ref={navRef}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
        >
            <div className="flex items-center gap-2 p-1.5 pl-5 pr-2 rounded-full bg-[var(--background)]/40 dark:bg-[var(--background)]/20 backdrop-blur-xl border border-[var(--border)]/40 shadow-2xl transition-all duration-300 hover:bg-[var(--background)]/60 hover:scale-[1.02]">
                {/* Logo Area */}
                <Link
                    href="/"
                    className="relative group shrink-0 flex items-center mr-2"
                >
                    <span className="font-bold text-lg tracking-tight text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                        KN
                    </span>
                </Link>

                {/* Divider */}
                <div className="h-4 w-[1px] bg-[var(--border)]/50 hidden md:block mx-1" />

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-1">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href} className="relative">
                            <Link
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`relative z-10 block px-4 py-1.5 text-sm font-medium transition-colors rounded-full ${
                                    hoveredPath === link.href 
                                        ? "text-[var(--foreground)]" 
                                        : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                                    }`}
                                onMouseEnter={() => setHoveredPath(link.href)}
                                onMouseLeave={() => setHoveredPath(null)}
                            >
                                {link.label}
                                {hoveredPath === link.href && (
                                    <div
                                        className="absolute inset-0 -z-10 rounded-full bg-[var(--foreground)]/5 border border-[var(--foreground)]/5 transition-all duration-300"
                                    />
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Divider */}
                <div className="h-4 w-[1px] bg-[var(--border)]/50 hidden md:block mx-1" />

                {/* Right Side Actions */}
                <div className="flex items-center">
                    {/* Theme Toggle */}
                    <button
                        ref={themeButtonRef}
                        onClick={() => setDark(!dark)}
                        className="relative p-2.5 rounded-full bg-[var(--foreground)]/5 hover:bg-[var(--foreground)]/10 text-[var(--foreground)] transition-all shadow-sm focus:outline-none"
                        aria-label="Toggle theme"
                    >
                        {dark ? <Moon size={16} /> : <Sun size={16} />}
                    </button>
                </div>
            </div>
        </nav>
    );
}
