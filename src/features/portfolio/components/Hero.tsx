"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { METRICS, AVATAR_URL } from "@/constants";
import AOS from "aos";
import "aos/dist/aos.css";
import { Mail, Eye } from "lucide-react";


interface HeroProps {
    onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
    const [typingIndex, setTypingIndex] = useState(0);
    const [typingText, setTypingText] = useState("");
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

    useEffect(() => {
        AOS.init({ duration: 700, once: true });
    }, []);

    return (
        <section className="w-full max-w-6xl grid gap-8 lg:grid-cols-[1.15fr,0.85fr] items-stretch mb-16 mt-6" data-aos="fade-up">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)]/70 backdrop-blur-md p-8 shadow-[0_25px_50px_rgba(15,23,42,0.18)]"
            >
                <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden>
                    <div className="absolute -top-32 -right-20 h-64 w-64 rounded-full bg-[var(--primary)]/20 blur-3xl" />
                    <div className="absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
                </div>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="text-xs uppercase tracking-[0.3em] text-[var(--muted-foreground)]"
                >
                    Portfolio · 2025
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="flex items-center gap-4 mb-4"
                >
                    <motion.div
                        whileHover={{ scale: 1.08, rotate: 2 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative flex-shrink-0 w-20 h-20 rounded-2xl overflow-hidden border border-[var(--border)] shadow-lg bg-gradient-to-br from-[var(--background)] via-[var(--card)] to-[var(--primary)]/20"
                    >
                        <Image src={AVATAR_URL} alt="Kenny Nguyen avatar" fill className="object-cover" priority sizes="80px" />
                    </motion.div>
                    <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Kenny Nguyen</h1>
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35, duration: 0.6 }}
                    className="text-xl sm:text-2xl font-medium text-[var(--primary)] mb-4 min-h-[2.5rem]"
                >
                    <span className="inline-flex items-center gap-2">
                        <span className="inline-block w-1 h-6 rounded-full bg-[var(--primary)]" />
                        <span className="font-mono">{typingText}</span>
                    </span>
                </motion.h2>



                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.52, duration: 0.6 }}
                    className="mt-5 rounded-2xl border border-[var(--border)] bg-[var(--background)]/40 p-4"
                >
                    <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted-foreground)]">About me</p>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-base sm:text-lg text-[var(--muted-foreground)] mt-4 "
                    >
                        Hi! I'm Kenny, a third year student at University of Toronto and a passionate software engineer dedicated to crafting efficient and user-friendly web applications.
                        With a strong foundation in both front-end and back-end development, I thrive on transforming complex problems into elegant solutions that enhance user experiences.
                    </motion.p>
                    
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.55, duration: 0.6 }}
                    className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full sm:w-fit"
                >
                    <motion.a
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        href="https://www.linkedin.com/in/kennyngdev-ca/"
                        target="_blank"
                        rel="noreferrer"
                        className="group flex flex-row items-center justify-center gap-2 rounded-xl border border-dashed border-[var(--border)] bg-[var(--background)]/50 px-3 py-2 transition-colors hover:border-[var(--primary)] hover:bg-[var(--accent)]"
                    >
                        <Mail className="w-4 h-4 text-[var(--primary)]" />
                        <span className="text-sm font-medium text-[var(--muted-foreground)] group-hover:text-[var(--foreground)]">Contact via LinkedIn</span>
                    </motion.a>
                    <motion.button
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        type="button"
                        onClick={onOpenResume}
                        className="group flex flex-row items-center justify-center gap-2 rounded-xl border border-dashed border-[var(--border)] bg-[var(--background)]/50 px-3 py-2 transition-colors hover:border-[var(--primary)] hover:bg-[var(--accent)]"
                    >
                        <Eye className="w-4 h-4 text-[var(--primary)]" />
                        <span className="text-sm font-medium text-[var(--muted-foreground)] group-hover:text-[var(--foreground)]">Preview Resume</span>
                    </motion.button>
                </motion.div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-8 grid grid-cols-2 gap-3"
            >
                {METRICS.map((metric, idx) => (
                    <motion.div
                        key={metric.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.65 + idx * 0.05, duration: 0.5 }}
                        whileHover={{ y: -4 }}
                        className="rounded-2xl border border-[var(--border)] bg-[var(--background)]/70 p-4 shadow-sm"
                    >
                        <p className="text-xs uppercase tracking-wide text-[var(--muted-foreground)]">{metric.label}</p>
                        <p className="text-lg font-semibold text-[var(--foreground)]">{metric.value}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section >
    );
}
