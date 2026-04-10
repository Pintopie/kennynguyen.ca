"use client";

import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";
import Image from "next/image";
import { CURRENT_YEAR, AVATAR_URL } from "@/constants";
import { Mail, Eye } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function MagneticButton({ children, className = "", ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { children: React.ReactNode }) {
    const ref = useRef<HTMLAnchorElement>(null);

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(el, { x: x * 0.3, y: y * 0.3, duration: 0.4, ease: "power2.out" });
    }, []);

    const handleMouseLeave = useCallback(() => {
        if (ref.current) {
            gsap.to(ref.current, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" });
        }
    }, []);

    return (
        <a
            ref={ref}
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            {children}
        </a>
    );
}

export default function Hero() {
    const [typingIndex, setTypingIndex] = useState(0);
    const [typingText, setTypingText] = useState("");
    const containerRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const nameRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLDivElement>(null);
    const badgeRef = useRef<HTMLParagraphElement>(null);

    // Entry animation
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

    // Parallax depth layers on scroll
    useGSAP(() => {
        if (!containerRef.current) return;

        // Avatar moves slower (further away)
        gsap.to(imageRef.current, {
            y: -80,
            scale: 0.95,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 1,
            },
        });

        // Name moves at medium speed
        gsap.to(nameRef.current, {
            y: -50,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 1,
            },
        });

        // Subtitle moves faster (closer to viewer)
        gsap.to(subtitleRef.current, {
            y: -30,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 1,
            },
        });

        // Badge drifts the fastest
        gsap.to(badgeRef.current, {
            y: -120,
            opacity: 0,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "50% top",
                scrub: 1,
            },
        });

        // CTA buttons float up and fade
        gsap.to(".hero-cta-row", {
            y: -20,
            opacity: 0,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "30% top",
                end: "60% top",
                scrub: 1,
            },
        });

    }, { scope: containerRef });

    // Character-level name animation
    useGSAP(() => {
        if (!nameRef.current) return;
        const text = nameRef.current.textContent || "";
        nameRef.current.innerHTML = text
            .split("")
            .map((char) =>
                char === " "
                    ? `<span class="inline-block">&nbsp;</span>`
                    : `<span class="inline-block hero-char">${char}</span>`
            )
            .join("");

        gsap.from(".hero-char", {
            opacity: 0,
            y: 60,
            rotateX: -90,
            duration: 0.8,
            stagger: 0.03,
            ease: "back.out(1.7)",
            delay: 0.6,
        });
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
                 <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[var(--background)] shadow-2xl ring-2 ring-[var(--border)] transition-transform duration-500 hover:scale-105">
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
                    <p ref={badgeRef} className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--primary)] mb-4">
                        Based in Toronto • {CURRENT_YEAR}
                    </p>
                    
                    <h1
                        ref={nameRef}
                        className="text-6xl sm:text-8xl lg:text-9xl font-extrabold tracking-tighter text-[var(--foreground)] mb-6 leading-[0.9]"
                        style={{ perspective: "1000px" }}
                    >
                        Kenny Nguyen
                    </h1>

                    <div ref={subtitleRef}>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[var(--muted-foreground)] mb-10 tracking-tight min-h-[3rem]">
                            <span className="font-mono">{typingText}</span>
                            <span className="animate-pulse text-[var(--primary)] ml-1">|</span>
                        </h2>
                    </div>
                </div>

                
                <div className="hero-anim hero-cta-row flex flex-wrap gap-4 justify-center">
                    <MagneticButton
                        href="https://www.linkedin.com/in/kennyngdev-ca/"
                        target="_blank"
                        rel="noreferrer"
                        className="group flex flex-row items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background)]/50 backdrop-blur-sm px-8 py-4 transition-all hover:border-[var(--primary)] hover:bg-[var(--primary)]/5"
                    >
                        <Mail className="w-5 h-5 text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors" />
                        <span className="text-base font-semibold text-[var(--foreground)]">Contact via LinkedIn</span>
                    </MagneticButton>
                    <MagneticButton
                        href="https://docs.google.com/document/d/1F9rAZXCzFa28XcxsBtjAspJGUK9-ynaLZXxcKrnZ5fA/edit?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                        className="group flex flex-row items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background)]/50 backdrop-blur-sm px-8 py-4 transition-all hover:border-[var(--primary)] hover:bg-[var(--primary)]/5"
                    >
                        <Eye className="w-5 h-5 text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors" />
                        <span className="text-base font-semibold text-[var(--foreground)]">View Resume</span>
                    </MagneticButton>
                </div>
            </div>
        </section>
    );
}
