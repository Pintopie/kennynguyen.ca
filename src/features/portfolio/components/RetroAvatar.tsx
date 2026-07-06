"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function RetroAvatar() {
    const rootRef = useRef<HTMLAnchorElement>(null);
    const frame = useRef<number | null>(null);

    useEffect(() => {
        const root = rootRef.current;

        if (!root) {
            return;
        }

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

        if (reduceMotion.matches) {
            return;
        }

        const handlePointerMove = (event: PointerEvent) => {
            if (frame.current) {
                cancelAnimationFrame(frame.current);
            }

            frame.current = requestAnimationFrame(() => {
                const rect = root.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const x = (event.clientX - centerX) / window.innerWidth;
                const y = (event.clientY - centerY) / window.innerHeight;
                const clampedX = Math.max(-1, Math.min(1, x * 4));
                const clampedY = Math.max(-1, Math.min(1, y * 4));

                root.style.setProperty("--avatar-look-x", `${(clampedX * 4).toFixed(2)}px`);
                root.style.setProperty("--avatar-look-y", `${(clampedY * 3).toFixed(2)}px`);
                root.style.setProperty("--avatar-tilt", `${(clampedX * 2).toFixed(2)}deg`);
            });
        };

        const resetAvatar = () => {
            root.style.setProperty("--avatar-look-x", "0px");
            root.style.setProperty("--avatar-look-y", "0px");
            root.style.setProperty("--avatar-tilt", "0deg");
        };

        window.addEventListener("pointermove", handlePointerMove, { passive: true });
        window.addEventListener("pointerleave", resetAvatar);

        return () => {
            window.removeEventListener("pointermove", handlePointerMove);
            window.removeEventListener("pointerleave", resetAvatar);

            if (frame.current) {
                cancelAnimationFrame(frame.current);
            }
        };
    }, []);

    return (
        <a
            href="#contact"
            className="retro-avatar"
            ref={rootRef}
            aria-label="Stylized animated avatar of Kenny Nguyen. Jump to contact."
        >
            <Image
                src="/images/kenny-character-avatar.png"
                alt=""
                fill
                priority
                sizes="(max-width: 768px) 82vw, 360px"
                className="retro-avatar__image"
            />

            <span className="retro-avatar__label">Say hi</span>
        </a>
    );
}
