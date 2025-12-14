"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PROJECTS, containerVariants, itemVariants } from "@/constants";
import AnimatedCard from "@/shared/ui/AnimatedCard";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
    const isInternalHref = (href: string) => href.startsWith("/");

    return (
        <section className="w-full max-w-6xl mb-16" id="projects">
            <motion.div
                className="flex items-center justify-between mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-2xl font-semibold text-[var(--primary)]">Projects</h2>
                <p className="text-xs uppercase tracking-[0.4em] text-[var(--muted-foreground)]">Selected builds</p>
            </motion.div>
            <motion.div
                className="grid gap-6 md:grid-cols-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
            >
                {PROJECTS.map((project, idx) => (
                    <AnimatedCard
                        key={project.title}
                        delay={idx * 0.1}
                        className="rounded-3xl border border-[var(--border)] bg-[var(--card)]/90 p-6 flex flex-col gap-4 shadow-[0_35px_55px_rgba(15,23,42,0.2)]"
                    >
                        <div>
                            <motion.h3 className="text-lg font-bold flex items-center gap-2" whileHover={{ x: 4 }}>
                                {project.title}
                                <motion.span whileHover={{ x: 2, y: -2 }}>
                                    <ArrowUpRight size={18} className="text-[var(--muted-foreground)]" />
                                </motion.span>
                            </motion.h3>
                            <p className="text-sm text-[var(--muted-foreground)] mt-2">{project.description}</p>
                        </div>
                        <motion.ul
                            className="flex flex-wrap gap-2 text-xs text-[var(--muted-foreground)]"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {project.tech.map((tech) => (
                                <motion.li
                                    key={tech}
                                    variants={itemVariants}
                                    className="px-3 py-1 rounded-full bg-[var(--background)] border border-[var(--border)]/40"
                                >
                                    {tech}
                                </motion.li>
                            ))}
                        </motion.ul>
                        <motion.div
                            className="flex flex-wrap gap-4 text-sm mt-auto"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {project.links.map((link) => (
                                isInternalHref(link.href) ? (
                                    <motion.div key={link.href} variants={itemVariants} whileHover={{ x: 2 }}>
                                        <Link
                                            href={link.href}
                                            className="inline-flex items-center gap-1 text-[var(--primary)] hover:underline"
                                        >
                                            {link.label}
                                            <ArrowUpRight size={14} />
                                        </Link>
                                    </motion.div>
                                ) : (
                                    <motion.a
                                        key={link.href}
                                        href={link.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        variants={itemVariants}
                                        whileHover={{ x: 2, color: "var(--primary)" }}
                                        className="inline-flex items-center gap-1 text-[var(--primary)] hover:underline"
                                    >
                                        {link.label}
                                        <ArrowUpRight size={14} />
                                    </motion.a>
                                )
                            ))}
                        </motion.div>
                    </AnimatedCard>
                ))}
            </motion.div>
        </section>
    );
}
