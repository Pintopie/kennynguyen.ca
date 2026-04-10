"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxBackgroundProps {
    dark?: boolean;
}

export default function ParallaxBackground({ dark = false }: ParallaxBackgroundProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const shape1Ref = useRef<HTMLDivElement>(null);
    const shape2Ref = useRef<HTMLDivElement>(null);
    const shape3Ref = useRef<HTMLDivElement>(null);
    const lightBeamRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
            },
        });

        tl.to(shape1Ref.current, { y: -window.innerHeight * 0.5, rotation: 45, ease: "none" }, 0)
          .to(shape2Ref.current, { y: -window.innerHeight * 0.2, rotation: -60, ease: "none" }, 0)
          .to(shape3Ref.current, { y: -window.innerHeight * 0.8, ease: "none" }, 0);

        // Light beam animation
         gsap.to(lightBeamRef.current, {
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "300px top",
                scrub: true,
            },
            opacity: 0,
            scale: 1.15,
        });

        // Gradient hue shift as user scrolls through sections
        const shapes = [shape1Ref.current, shape2Ref.current, shape3Ref.current];
        const darkColors = [
            ["rgba(167, 139, 250, 0.25)", "rgba(6, 182, 212, 0.20)", "rgba(167, 139, 250, 0.30)"],  // top: violet
            ["rgba(6, 182, 212, 0.20)", "rgba(236, 72, 153, 0.15)", "rgba(6, 182, 212, 0.25)"],     // mid: cyan/pink
            ["rgba(236, 72, 153, 0.15)", "rgba(167, 139, 250, 0.20)", "rgba(236, 72, 153, 0.20)"],  // bottom: pink
        ];
        const lightColors = [
            ["rgba(37, 99, 235, 0.12)", "rgba(6, 182, 212, 0.10)", "rgba(37, 99, 235, 0.14)"],     // top: blue
            ["rgba(6, 182, 212, 0.10)", "rgba(139, 92, 246, 0.08)", "rgba(6, 182, 212, 0.12)"],    // mid: cyan
            ["rgba(139, 92, 246, 0.08)", "rgba(37, 99, 235, 0.10)", "rgba(139, 92, 246, 0.10)"],   // bottom: violet
        ];

        const colorSets = dark ? darkColors : lightColors;

        shapes.forEach((shape, i) => {
            if (!shape) return;

            // Shift through 3 color phases as user scrolls
            const scrollTl = gsap.timeline({
                scrollTrigger: {
                    trigger: document.body,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 2,
                },
            });

            scrollTl
                .to(shape, { backgroundColor: colorSets[0][i], duration: 0.33 })
                .to(shape, { backgroundColor: colorSets[1][i], duration: 0.34 })
                .to(shape, { backgroundColor: colorSets[2][i], duration: 0.33 });
        });

    }, { scope: containerRef, dependencies: [dark] });

    return (
        <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Base gradient background */}
            <div
                className="absolute inset-0 transition-colors duration-1000"
                style={{
                    background: dark
                        ? "radial-gradient(circle at 20% 20%, rgba(103,183,255,0.25), transparent 55%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.12), transparent 50%), linear-gradient(130deg, rgba(7,37,112,0.9), rgba(2,77,190,0.25))"
                        : "radial-gradient(circle at 20% 20%, rgba(37,99,235,0.12), transparent 55%), radial-gradient(circle at 80% 0%, rgba(100,200,255,0.08), transparent 50%), linear-gradient(130deg, rgba(244,247,250,0.95), rgba(37,99,235,0.08))",
                }}
            />
            {/* Noise texture overlay */}
            <div
                className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />
            {/* Floating shapes with scroll-driven color transitions */}
            <div
                ref={shape1Ref}
                className={`absolute top-[12%] left-[8%] w-[30vw] h-[30vw] rounded-full opacity-[0.12] blur-3xl transition-colors duration-1000`}
                style={{ backgroundColor: dark ? 'rgba(103,183,255,0.25)' : 'rgba(37,99,235,0.25)' }}
            />
            <div
                ref={shape2Ref}
                className={`absolute top-[45%] right-[12%] w-[40vw] h-[40vw] rounded-full opacity-[0.1] blur-3xl transition-colors duration-1000`}
                style={{ backgroundColor: dark ? 'rgba(6,182,212,0.20)' : 'rgba(6,182,212,0.20)' }}
            />
            <div
                ref={shape3Ref}
                className={`absolute top-[78%] left-[22%] w-[25vw] h-[25vw] rounded-full opacity-[0.14] blur-3xl transition-colors duration-1000`}
                style={{ backgroundColor: dark ? 'rgba(103,183,255,0.30)' : 'rgba(37,99,235,0.30)' }}
            />
            {/* Grid pattern – subtle */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            {/* Dynamic light beam */}
            <div
                ref={lightBeamRef}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_top,var(--primary-accent),transparent_70%)] blur-3xl opacity-50 scale-100 origin-top"
            />
        </div>
    );
}
