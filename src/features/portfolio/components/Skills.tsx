"use client";

import React from "react";
import { motion } from "framer-motion";
import { containerVariants, SKILLS } from "@/constants";
import AnimatedCard from "@/shared/ui/AnimatedCard";

export default function Skills() {
    return (
        <section className="w-full max-w-5xl mb-16" id="skills">
            <motion.div
                className="flex items-center justify-between mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-2xl font-semibold text-[var(--primary)]">Skills</h2>
                <p className="text-xs uppercase tracking-[0.4em] text-[var(--muted-foreground)]">Stack favorites</p>
            </motion.div>
            <motion.div
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {SKILLS.map((skill, idx) => {
                    const Icon = skill.icon;
                    return (
                        <AnimatedCard
                            key={skill.label}
                            delay={idx * 0.05}
                            className="rounded-2xl border border-[var(--border)] bg-[var(--card)]/85 p-4 shadow-sm"
                        >
                            <motion.div className="flex items-center gap-3" whileHover={{ x: 4 }}>
                                <motion.span
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--background)]/70"
                                    style={{ color: skill.color }}
                                    whileHover={{ scale: 1.15, rotate: 8 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <Icon size={22} />
                                </motion.span>
                                <div>
                                    <p className="font-semibold text-[var(--foreground)]">{skill.label}</p>
                                    <p className="text-xs text-[var(--muted-foreground)]">{skill.tooltip}</p>
                                </div>
                            </motion.div>
                        </AnimatedCard>
                    );
                })}
            </motion.div>
        </section>
    );
}
