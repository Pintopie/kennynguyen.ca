"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    variant?: "fade" | "chars" | "words";
}

export default function ScrollReveal({ children, className = "", variant = "fade" }: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const el = ref.current;
        if (!el) return;

        if (variant === "chars" || variant === "words") {
            // Find text elements and split them
            const textNodes = el.querySelectorAll("h2, h3, p.reveal-text");
            textNodes.forEach((node) => {
                const text = node.textContent || "";
                const splitBy = variant === "chars" ? "" : " ";
                const items = text.split(splitBy).filter(Boolean);
                const wrapperClass = variant === "chars" ? "reveal-char" : "reveal-word";

                node.innerHTML = items
                    .map((item) => {
                        if (item === " " || item === "") return `<span class="inline-block">&nbsp;</span>`;
                        return `<span class="inline-block ${wrapperClass}" style="will-change: transform, opacity">${item}${variant === "words" ? "&nbsp;" : ""}</span>`;
                    })
                    .join("");

                gsap.from(node.querySelectorAll(`.${wrapperClass}`), {
                    opacity: 0,
                    y: variant === "chars" ? 40 : 25,
                    rotateX: variant === "chars" ? -60 : 0,
                    filter: "blur(4px)",
                    duration: 0.6,
                    stagger: variant === "chars" ? 0.02 : 0.06,
                    ease: "back.out(1.4)",
                    scrollTrigger: {
                        trigger: node,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                });
            });
        } else {
            gsap.fromTo(el,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 82%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }
    }, { scope: ref });

    return (
        <div
            ref={ref}
            className={`${variant === "fade" ? "opacity-0" : ""} ${className}`}
        >
            {children}
        </div>
    );
}
