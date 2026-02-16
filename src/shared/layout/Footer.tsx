"use client";

import React, { useRef } from "react";
import { CURRENT_YEAR } from "@/constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
    const footerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.from(footerRef.current, {
            opacity: 0,
            y: 10,
            duration: 0.8,
            scrollTrigger: {
                trigger: footerRef.current,
                start: "top 95%",
            }
        });
    }, { scope: footerRef });

    return (
        <footer
            ref={footerRef}
            className="w-full text-center text-xs text-[var(--muted-foreground)] mt-auto pt-8 border-t border-[var(--border)]"
        >
            &copy; {CURRENT_YEAR} Kenny Nguyen. Built with React + Next.js, and a lot of Timmies. 
        </footer>
    );
}
