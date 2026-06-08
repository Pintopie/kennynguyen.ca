"use client";

import Link from "next/link";
import { Moon, Sun } from "lucide-react";

const NAV_LINKS = [
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Work" },
    { href: "#skills", label: "Capabilities" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
];

interface NavBarProps {
    dark: boolean;
    setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavBar({ dark, setDark }: NavBarProps) {
    return (
        <nav className="site-nav" aria-label="Primary navigation">
            <div className="site-nav__inner">
                <Link href="/" className="site-nav__brand" aria-label="Kenny Nguyen, home">
                    KN
                </Link>

                <ul className="site-nav__links">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href}>{link.label}</Link>
                        </li>
                    ))}
                </ul>

                <button
                    type="button"
                    onClick={() => setDark(!dark)}
                    className="theme-toggle"
                    aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
                >
                    {dark ? (
                        <Sun aria-hidden="true" size={17} />
                    ) : (
                        <Moon aria-hidden="true" size={17} />
                    )}
                </button>
            </div>
        </nav>
    );
}
