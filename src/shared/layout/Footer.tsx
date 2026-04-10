"use client";

import React, { useRef } from "react";
import { CURRENT_YEAR } from "@/constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
    const footerRef = useRef<HTMLElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!footerRef.current || !innerRef.current) return;

        // Footer "reveal" — content slides up as footer appears
        gsap.from(innerRef.current, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: footerRef.current,
                start: "top 92%",
            }
        });
    }, { scope: footerRef });

    return (
        <footer
            ref={footerRef}
            className="relative w-full mt-auto pt-16 pb-8 border-t border-[var(--border)]"
        >
            {/* Gradient fade at top */}
            <div
                className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
                style={{
                    background: "linear-gradient(to bottom, hsl(var(--background)), transparent)",
                    transform: "translateY(-100%)",
                }}
            />
            <div ref={innerRef} className="flex flex-col items-center gap-4">
                <p className="text-sm font-medium text-[var(--foreground)] tracking-tight">
                    Kenny Nguyen
                </p>
                <p className="text-xs text-[var(--muted-foreground)]">
                    &copy; {CURRENT_YEAR} · Built with React + Next.js, and a lot of Timmies.
                </p>
            </div>
        </footer>
    );
}
