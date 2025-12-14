"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { itemVariants } from "@/constants";
import ScrollReveal from "@/shared/ui/ScrollReveal";

export default function ContactChart() {
    return (
        <section className="w-full max-w-2xl mb-8" id="contact">
            <ScrollReveal className="flex flex-col items-center justify-center gap-4">
                <motion.a
                    href="https://github.com/Pintopie"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub activity graph"
                    className="block w-full max-w-xl"
                    variants={itemVariants}
                >
                    <Image
                        src="https://ghchart.rshah.org/Pintopie"
                        alt="GitHub activity graph for Pintopie"
                        width={900}
                        height={200}
                        className="rounded-lg border border-[var(--border)] bg-[var(--card)]"
                        priority
                    />
                </motion.a>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl">
                    <motion.a
                        href="https://github.com/Pintopie"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile — Pintopie"
                        variants={itemVariants}
                        className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 text-center hover:shadow-lg transition-shadow"
                    >
                        <p className="text-lg font-semibold text-[var(--primary)]">GitHub Profile</p>
                        <p className="text-sm text-[var(--muted-foreground)]">@Pintopie</p>
                        <p className="text-xs text-[var(--muted)] mt-2">View repositories & contributions</p>
                    </motion.a>
                    <motion.a
                        href="https://github.com/Pintopie?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Repositories — GitHub"
                        variants={itemVariants}
                        className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 text-center hover:shadow-lg transition-shadow"
                    >
                        <p className="text-lg font-semibold text-[var(--primary)]">Repositories</p>
                        <p className="text-sm text-[var(--muted-foreground)]">Projects & Code</p>
                        <p className="text-xs text-[var(--muted)] mt-2">Explore my open source work</p>
                    </motion.a>
                </div>
            </ScrollReveal>
        </section>
    );
}
