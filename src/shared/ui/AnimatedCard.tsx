"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedCard({
    children,
    className = "",
    delay = 0,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) {
    const cardRef = useRef<HTMLDivElement>(null);

    const { contextSafe } = useGSAP(() => {
        gsap.fromTo(cardRef.current,
            { opacity: 0, scale: 0.95 },
            {
                opacity: 1,
                scale: 1,
                duration: 0.5,
                delay: delay,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 85%",
                }
            }
        );
    }, { scope: cardRef });

    const onMouseEnter = contextSafe(() => {
        gsap.to(cardRef.current, { y: -8, boxShadow: "0 25px 50px rgba(0, 0, 0, 0.25)", duration: 0.3, ease: "power2.out" });
    });

    const onMouseLeave = contextSafe(() => {
        gsap.to(cardRef.current, { y: 0, boxShadow: "none", duration: 0.3, ease: "power2.out" });
    });

    return (
        <div
            ref={cardRef}
            className={`opacity-0 ${className}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {children}
        </div>
    );
}
