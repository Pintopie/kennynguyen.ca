"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import { CURRENT_YEAR, AVATAR_URL } from "@/constants";
import { Mail, Eye } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
    const [typingIndex, setTypingIndex] = useState(0);
    const [typingText, setTypingText] = useState("");
    const containerRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

        tl.from(containerRef.current, { opacity: 0, duration: 1 })
          .from(imageRef.current, { scale: 0.8, opacity: 0, duration: 0.8, ease: "back.out(1.7)" }, "-=0.5")
          .from(contentRef.current, { y: 30, opacity: 0, duration: 0.8 }, "-=0.6")
          .from(".hero-anim", { 
              opacity: 0, 
              y: 20, 
              duration: 0.6, 
              stagger: 0.1 
          }, "-=0.4");
    }, { scope: containerRef });

    const typingRoles = useMemo(
        () => [
            "Software Engineer",
            "Developer who is always curious",
            "AI enthusiast – loves solving real-world problems",
        ],
        []
    );

    const [roleIdx, setRoleIdx] = useState(0);
    const typingTimeout = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (typingIndex < typingRoles[roleIdx].length) {
            typingTimeout.current = setTimeout(() => {
                setTypingText((prev) => prev + typingRoles[roleIdx][typingIndex]);
                setTypingIndex((i) => i + 1);
            }, 60);
        } else {
            typingTimeout.current = setTimeout(() => {
                setTypingText("");
                setTypingIndex(0);
                setRoleIdx((idx) => (idx + 1) % typingRoles.length);
            }, 1200);
        }
        return () => {
            if (typingTimeout.current) {
                clearTimeout(typingTimeout.current);
            }
        };
    }, [typingIndex, roleIdx, typingRoles]);

    return (
        <section
            ref={containerRef}
            className="w-full max-w-[95vw] mx-auto relative pt-32 pb-20 flex flex-col items-center justify-center text-center min-h-[85vh]"
        >
            <div ref={imageRef} className="relative z-10 mb-8">
                 <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[var(--background)] shadow-2xl ring-2 ring-[var(--border)]">
                    <Image
                        src={AVATAR_URL}
                        alt="Kenny Nguyen"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            <div
                ref={contentRef}
                className="relative z-10 flex flex-col items-center max-w-5xl"
            >
                <div className="hero-anim mb-6 flex flex-col items-center">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--primary)] mb-4">
                        Based in Toronto • {CURRENT_YEAR}
                    </p>
                    
                    <h1 className="text-6xl sm:text-8xl lg:text-9xl font-extrabold tracking-tighter text-[var(--foreground)] mb-6 leading-[0.9]">
                        Kenny Nguyen
                    </h1>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[var(--muted-foreground)] mb-10 tracking-tight min-h-[3rem]">
                        <span className="font-mono">{typingText}</span>
                        <span className="animate-pulse text-[var(--primary)] ml-1">|</span>
                    </h2>
                </div>

                
                <div className="hero-anim flex flex-wrap gap-4 justify-center">
                    <a
                        href="https://www.linkedin.com/in/kennyngdev-ca/"
                        target="_blank"
                        rel="noreferrer"
                        className="group flex flex-row items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background)]/50 backdrop-blur-sm px-8 py-4 transition-all hover:border-[var(--primary)] hover:bg-[var(--primary)]/5 hover:-translate-y-0.5"
                    >
                        <Mail className="w-5 h-5 text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors" />
                        <span className="text-base font-semibold text-[var(--foreground)]">Contact via LinkedIn</span>
                    </a>
                    <a
                        href="https://docs.google.com/document/d/1F9rAZXCzFa28XcxsBtjAspJGUK9-ynaLZXxcKrnZ5fA/edit?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                        className="group flex flex-row items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background)]/50 backdrop-blur-sm px-8 py-4 transition-all hover:border-[var(--primary)] hover:bg-[var(--primary)]/5 hover:-translate-y-0.5"
                    >
                        <Eye className="w-5 h-5 text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors" />
                        <span className="text-base font-semibold text-[var(--foreground)]">View Resume</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
