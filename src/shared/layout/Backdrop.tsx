"use client";

import { useEffect, useRef } from "react";

const SHAPES = [
    "backdrop-shape--red-block",
    "backdrop-shape--blue-bar",
    "backdrop-shape--yellow-dot",
    "backdrop-shape--ink-ring",
    "backdrop-shape--cream-card",
    "backdrop-shape--red-chip",
];

export default function Backdrop() {
    const frame = useRef<number | null>(null);

    useEffect(() => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

        if (reduceMotion.matches) {
            return;
        }

        const updateDrift = (event: PointerEvent) => {
            if (frame.current) {
                cancelAnimationFrame(frame.current);
            }

            frame.current = requestAnimationFrame(() => {
                const x = (event.clientX / window.innerWidth - 0.5) * 18;
                const y = (event.clientY / window.innerHeight - 0.5) * 14;
                const softX = x * 0.45;
                const softY = y * 0.45;
                const reverseX = x * -0.55;
                const reverseY = y * -0.55;

                document.documentElement.style.setProperty("--backdrop-shift-x", `${x.toFixed(2)}px`);
                document.documentElement.style.setProperty("--backdrop-shift-y", `${y.toFixed(2)}px`);
                document.documentElement.style.setProperty("--backdrop-shift-x-soft", `${softX.toFixed(2)}px`);
                document.documentElement.style.setProperty("--backdrop-shift-y-soft", `${softY.toFixed(2)}px`);
                document.documentElement.style.setProperty("--backdrop-shift-x-reverse", `${reverseX.toFixed(2)}px`);
                document.documentElement.style.setProperty("--backdrop-shift-y-reverse", `${reverseY.toFixed(2)}px`);
            });
        };

        window.addEventListener("pointermove", updateDrift, { passive: true });

        return () => {
            window.removeEventListener("pointermove", updateDrift);

            if (frame.current) {
                cancelAnimationFrame(frame.current);
            }
        };
    }, []);

    return (
        <div className="memphis-backdrop" aria-hidden="true">
            <div className="memphis-backdrop__stage">
                {SHAPES.map((shape) => (
                    <span className={`backdrop-shape ${shape}`} key={shape} />
                ))}
                <span className="backdrop-squiggle backdrop-squiggle--one">~~~~</span>
                <span className="backdrop-squiggle backdrop-squiggle--two">~~~~~</span>
            </div>
        </div>
    );
}
