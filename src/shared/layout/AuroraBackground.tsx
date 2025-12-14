"use client";

import React, { useEffect, useRef } from "react";

interface AuroraBackgroundProps {
    dark: boolean;
}

export default function AuroraBackground({ dark }: AuroraBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        // Particle settings
        // Reduced count for cleaner look, modern feel
        const particleCount = width < 768 ? 40 : 80;
        const connectionDistance = 150;
        const mouseDistance = 200;

        interface Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
        }

        const particles: Particle[] = [];

        // Mouse state
        const mouse = { x: -9999, y: -9999 };

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.5, // Slow movement
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
            });
        }

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);

        // Colors based on theme
        // We use hex/rgba for canvas performance avoiding computed styles in loop if possible
        // Light mode: Slate/Gray dots. Dark mode: Blue/Primary dots.
        const getColors = () => {
            if (dark) {
                return {
                    particle: "rgba(100, 116, 139, 0.5)", // Slate 500
                    link: "rgba(100, 116, 139, 0.15)",
                    highlight: "rgba(56, 189, 248, 0.4)", // Sky 400
                };
            } else {
                return {
                    particle: "rgba(148, 163, 184, 0.5)", // Slate 400
                    link: "rgba(148, 163, 184, 0.2)",
                    highlight: "rgba(14, 165, 233, 0.4)", // Sky 500
                };
            }
        };

        let animationFrameId: number;

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            const colors = getColors();

            // Update and draw particles
            particles.forEach((p, i) => {
                // Move
                p.x += p.vx;
                p.y += p.vy;

                // Bounce off edges
                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                // Interactive mouse repulsion/attraction
                const dxMouse = mouse.x - p.x;
                const dyMouse = mouse.y - p.y;
                const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

                if (distMouse < mouseDistance) {
                    // Gentle push away or pull towards? 
                    // Let's do a subtle "excite" effect where they move slightly faster or connect
                    // For now, let's just highlight them
                }

                // Draw particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = distMouse < mouseDistance ? colors.highlight : colors.particle;
                ctx.fill();

                // Draw connections
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDistance) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = colors.link;
                        ctx.lineWidth = 1 - dist / connectionDistance;
                        ctx.stroke();
                    }
                }

                // Connect to mouse
                if (distMouse < mouseDistance) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.strokeStyle = colors.link; // Make mouse connections subtle
                    ctx.lineWidth = 1 - distMouse / mouseDistance;
                    ctx.stroke();
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [dark]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-[-1] pointer-events-none bg-[var(--background)] transition-colors duration-500"
        />
    );
}
