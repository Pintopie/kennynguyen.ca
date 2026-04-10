"use client";

import React, { useRef, useCallback } from "react";
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
    const glowRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
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

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        const el = cardRef.current;
        const glow = glowRef.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        gsap.to(el, {
            rotateX,
            rotateY,
            scale: 1.02,
            duration: 0.4,
            ease: "power2.out",
            transformPerspective: 800,
        });

        if (glow) {
            gsap.to(glow, {
                x: x - rect.width / 2,
                y: y - rect.height / 2,
                opacity: 1,
                duration: 0.3,
            });
        }
    }, []);

    const handleMouseLeave = useCallback(() => {
        const el = cardRef.current;
        const glow = glowRef.current;
        if (!el) return;

        gsap.to(el, {
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            duration: 0.6,
            ease: "elastic.out(1, 0.5)",
        });

        if (glow) {
            gsap.to(glow, { opacity: 0, duration: 0.4 });
        }
    }, []);

    return (
        <div
            ref={cardRef}
            className={`opacity-0 relative overflow-hidden ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transformStyle: "preserve-3d" }}
        >
            {/* Specular highlight glow */}
            <div
                ref={glowRef}
                className="pointer-events-none absolute w-40 h-40 rounded-full opacity-0"
                style={{
                    background: "radial-gradient(circle, hsl(var(--primary) / 0.15), transparent 70%)",
                    filter: "blur(30px)",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            />
            {children}
        </div>
    );
}
