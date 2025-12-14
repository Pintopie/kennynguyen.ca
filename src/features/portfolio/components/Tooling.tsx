"use client";

import React from "react";
import { motion } from "framer-motion";
import { TOOLING, containerVariants } from "@/constants";
import AnimatedCard from "@/shared/ui/AnimatedCard";
import { Command, ArrowUpRight } from "lucide-react";

export default function Tooling() {
    return (
        <section className="w-full max-w-6xl mb-16" id="stack">
            <motion.div
                className="flex items-center gap-2 mb-4 text-[var(--primary)]"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
            >
                <Command size={18} />
                <h2 className="text-2xl font-semibold">Tools</h2>
            </motion.div>
            <motion.div
                className="grid gap-4 md:grid-cols-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
            >
                {TOOLING.map((tool, idx) => {
                    const IconComp = tool.icon;
                    return (
                        <AnimatedCard
                            key={tool.name}
                            delay={idx * 0.05}
                            className="rounded-2xl border border-[var(--border)] bg-[var(--card)]/90 p-5 shadow-[0_20px_40px_rgba(15,23,42,0.15)]"
                        >
                            <a href={tool.href} target="_blank" rel="noreferrer" className="flex items-start justify-between">
                                <motion.div className="flex items-center gap-2 text-lg font-semibold" whileHover={{ scale: 1.05 }}>
                                    <motion.span whileHover={{ scale: 1.2, rotate: 8 }} transition={{ type: "spring", stiffness: 400 }}>
                                        <IconComp size={20} />
                                    </motion.span>
                                    {tool.name}
                                </motion.div>
                                <motion.span className="text-[var(--muted-foreground)]" whileHover={{ x: 4, y: -2 }}>
                                    <ArrowUpRight size={16} />
                                </motion.span>
                            </a>
                            <p className="text-sm text-[var(--muted-foreground)] mt-2">{tool.detail}</p>
                        </AnimatedCard>
                    );
                })}
            </motion.div>
        </section>
    );
}
