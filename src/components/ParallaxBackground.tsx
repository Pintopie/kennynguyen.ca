"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

interface ParallaxBackgroundProps {
    dark?: boolean;
}

export default function ParallaxBackground({ dark = false }: ParallaxBackgroundProps) {
    const { scrollY } = useScroll();
    const [windowHeight, setWindowHeight] = useState(0);

    useEffect(() => {
        const updateHeight = () => setWindowHeight(window.innerHeight);
        updateHeight();
        window.addEventListener("resize", updateHeight);
        return () => window.removeEventListener("resize", updateHeight);
    }, []);

    const smoothScrollY = useSpring(scrollY, {
        stiffness: 80,
        damping: 40,
        restDelta: 0.001,
    });

    const y1 = useTransform(smoothScrollY, [0, windowHeight * 2], [0, -windowHeight * 0.5]);
    const y2 = useTransform(smoothScrollY, [0, windowHeight * 2], [0, -windowHeight * 0.2]);
    const y3 = useTransform(smoothScrollY, [0, windowHeight * 2], [0, -windowHeight * 0.8]);
    const rotate1 = useTransform(smoothScrollY, [0, windowHeight * 2], [0, 45]);
    const rotate2 = useTransform(smoothScrollY, [0, windowHeight * 2], [0, -60]);

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
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
            {/* Floating shapes – clearer and color‑adjusted */}
            <motion.div
                style={{ y: y1, rotate: rotate1 }}
                className={`absolute top-[12%] left-[8%] w-[30vw] h-[30vw] rounded-full ${dark ? 'bg-[#67B7FF]/25' : 'bg-[#2563EB]/25'} opacity-[0.12] blur-3xl`}
            />
            <motion.div
                style={{ y: y2, rotate: rotate2 }}
                className={`absolute top-[45%] right-[12%] w-[40vw] h-[40vw] rounded-full ${dark ? 'bg-[#06B6D4]/20' : 'bg-[#06B6D4]/20'} opacity-[0.1] blur-3xl`}
            />
            <motion.div
                style={{ y: y3 }}
                className={`absolute top-[78%] left-[22%] w-[25vw] h-[25vw] rounded-full ${dark ? 'bg-[#67B7FF]/30' : 'bg-[#2563EB]/30'} opacity-[0.14] blur-3xl`}
            />
            {/* Grid pattern – subtle */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            {/* Dynamic light beam */}
            <motion.div
                style={{
                    opacity: useTransform(smoothScrollY, [0, 300], [0.5, 0]),
                    scale: useTransform(smoothScrollY, [0, 300], [1, 1.15]),
                }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_top,var(--primary-accent),transparent_70%)] blur-3xl"
            />
        </div>
    );
}
