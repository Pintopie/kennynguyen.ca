"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollProgress() {
    const barRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.to(barRef.current, {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: 0.3,
            },
        });
    });

    return (
        <div className="fixed top-0 left-0 right-0 z-[100] h-[3px] pointer-events-none">
            <div
                ref={barRef}
                className="h-full w-full origin-left"
                style={{
                    transform: "scaleX(0)",
                    background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--ring)), hsl(var(--primary)))",
                    backgroundSize: "200% 100%",
                    animation: "shimmer 2s linear infinite",
                    boxShadow: "0 0 12px hsl(var(--primary) / 0.5)",
                }}
            />
        </div>
    );
}
