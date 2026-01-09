"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/constants";
import { Moon, Sun } from "lucide-react";

interface NavBarProps {
    dark: boolean;
    setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavBar({ dark, setDark }: NavBarProps) {
    const [hoveredPath, setHoveredPath] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 inset-x-0 z-50 h-16 transition-all duration-300 ${
                scrolled 
                ? "bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--border)] shadow-sm" 
                : "bg-transparent border-transparent"
            }`}
        >
            <div className="max-w-6xl mx-auto h-full flex items-center justify-between px-4 sm:px-6">
                {/* Logo Area */}
                <Link 
                    href="/" 
                    className="relative group shrink-0 flex items-center gap-2"
                >
                   {/* Logo: High contrast foreground box with background text */}
                   <div className="h-9 w-9 rounded-xl bg-[var(--foreground)] flex items-center justify-center shadow-lg shadow-black/5 group-hover:scale-105 transition-transform duration-300">
                        <span className="text-[var(--background)] font-bold text-xl leading-none font-mono">K</span>
                   </div>
                   <span className="font-bold text-lg tracking-tight text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors hidden sm:block">
                       Kenny Nguyen
                   </span>
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-1 bg-[var(--background)]/50 p-1 rounded-full border border-[var(--border)]/50 backdrop-blur-sm shadow-sm">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href} className="relative">
                            <Link
                                href={link.href}
                                className={`relative z-10 block px-4 py-1.5 text-sm font-medium transition-colors ${
                                    hoveredPath === link.href ? "text-[var(--foreground)]" : "text-[var(--muted-foreground)]"
                                }`}
                                onMouseEnter={() => setHoveredPath(link.href)}
                                onMouseLeave={() => setHoveredPath(null)}
                            >
                                {link.label}
                                {hoveredPath === link.href && (
                                    <motion.div
                                        layoutId="navbar-hover"
                                        className="absolute inset-0 -z-10 rounded-full bg-[var(--background)] border border-[var(--border)] shadow-sm"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                    />
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Right Side Actions */}
                <div className="flex items-center gap-4">
                     {/* Theme Toggle */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setDark(!dark)}
                        className="relative p-2.5 rounded-full border border-[var(--border)] bg-[var(--background)]/50 hover:bg-[var(--accent)] text-[var(--foreground)] transition-colors shadow-sm"
                        aria-label="Toggle theme"
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={dark ? "dark" : "light"}
                                initial={{ y: -20, opacity: 0, rotate: -90 }}
                                animate={{ y: 0, opacity: 1, rotate: 0 }}
                                exit={{ y: 20, opacity: 0, rotate: 90 }}
                                transition={{ duration: 0.2 }}
                            >
                                {dark ? <Moon size={18} /> : <Sun size={18} />}
                            </motion.div>
                        </AnimatePresence>
                    </motion.button>
                </div>
            </div>
        </motion.nav>
    );
}
