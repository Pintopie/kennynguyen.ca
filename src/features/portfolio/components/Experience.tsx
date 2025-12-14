"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { EXPERIENCE, EDUCATION, containerVariants, itemVariants } from "@/constants";

export default function Experience() {
    return (
        <section className="w-full max-w-5xl mb-16" id="experience">
            <div className="space-y-10">
                {/* Work Experience */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-3xl border border-[var(--border)] bg-[var(--card)]/70 backdrop-blur-md p-6 shadow-xl"
                >
                    <motion.h3
                        className="text-xl font-bold mb-6 text-[var(--primary)]"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                    >
                        Work Experience
                    </motion.h3>

                    <motion.div className="space-y-6">
                        {EXPERIENCE.map((item, idx) => (
                            <motion.div
                                key={`${item.company}-${idx}`}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ delay: idx * 0.08, duration: 0.45 }}
                                className="rounded-2xl border border-[var(--border)]/60 bg-[var(--background)]/70 p-5 shadow-sm"
                            >
                                <div className="flex items-start gap-4 mb-3">
                                    <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--card)]">
                                        {item.logo ? (
                                            <Image src={item.logo} alt={item.company} fill className="object-cover" sizes="56px" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-lg">→</div>
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between gap-3 flex-wrap">
                                            <div>
                                                <h4 className="text-lg font-bold text-[var(--foreground)]">{item.role}</h4>
                                                <p className="text-sm text-[var(--primary)] font-semibold">{item.company}</p>
                                            </div>
                                            <span className="text-xs uppercase tracking-wide text-[var(--muted-foreground)] whitespace-nowrap">
                                                {item.startDate} – {item.endDate}
                                            </span>
                                        </div>
                                        <p className="text-xs text-[var(--muted-foreground)] mt-1">{item.location}</p>
                                    </div>
                                </div>

                                <ul className="space-y-2 mb-4">
                                    {item.highlights.map((highlight, hIdx) => (
                                        <motion.li
                                            key={hIdx}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.08 + hIdx * 0.04 + 0.2 }}
                                            className="text-sm text-[var(--muted-foreground)] flex gap-2"
                                        >
                                            <span className="text-[var(--primary)] mt-0.5">•</span>
                                            <span>{highlight}</span>
                                        </motion.li>
                                    ))}
                                </ul>

                                <motion.div
                                    className="flex flex-wrap gap-2"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={containerVariants}
                                >
                                    {item.tech.map((tech) => (
                                        <motion.span
                                            key={tech}
                                            variants={itemVariants}
                                            className="inline-block px-2 py-1 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/30 text-xs text-[var(--primary)] font-mono"
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </motion.div>

                                {idx < EXPERIENCE.length - 1 && (
                                    <div className="mt-5 flex justify-center">
                                        <div className="h-2 w-20 rounded-full bg-[var(--primary)]/15" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Education */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="rounded-3xl border border-[var(--border)] bg-[var(--card)]/70 backdrop-blur-md p-6 shadow-xl"
                >
                    <motion.h3
                        className="text-xl font-bold mb-6 text-[var(--primary)]"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                    >
                        Education
                    </motion.h3>

                    <motion.div className="space-y-6">
                        {EDUCATION.map((item, idx) => (
                            <motion.div
                                key={`${item.school}-${idx}`}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ delay: idx * 0.08, duration: 0.45 }}
                                className="rounded-2xl border border-[var(--border)]/60 bg-[var(--background)]/70 p-5 shadow-sm"
                            >
                                <div className="flex items-start gap-4 mb-3">
                                    <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--card)]">
                                        {item.logo ? (
                                            <Image src={item.logo} alt={item.school} fill className="object-cover" sizes="56px" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-lg">📚</div>
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between gap-3 flex-wrap">
                                            <div>
                                                <h4 className="text-lg font-bold text-[var(--foreground)]">{item.degree}</h4>
                                                <p className="text-sm text-[var(--primary)] font-semibold">{item.school}</p>
                                            </div>
                                            <span className="text-xs uppercase tracking-wide text-[var(--muted-foreground)] whitespace-nowrap">
                                                {item.startDate && `${item.startDate} – ${item.endDate}`}
                                            </span>
                                        </div>
                                        <p className="text-xs text-[var(--muted-foreground)] mt-1">{item.location}</p>
                                    </div>
                                </div>

                                {(item.gpa || item.grade) && (
                                    <motion.p
                                        className="text-sm font-semibold text-[var(--primary)] mb-3"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 + 0.2 }}
                                    >
                                        {item.gpa ? `GPA: ${item.gpa}` : `Grade: ${item.grade}`}
                                    </motion.p>
                                )}

                                <ul className="space-y-2">
                                    {item.highlights.map((highlight, hIdx) => (
                                        <motion.li
                                            key={hIdx}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.08 + hIdx * 0.04 + 0.2 }}
                                            className="text-sm text-[var(--muted-foreground)] flex gap-2"
                                        >
                                            <span className="text-[var(--primary)] mt-0.5">•</span>
                                            <span>{highlight}</span>
                                        </motion.li>
                                    ))}
                                </ul>

                                {idx < EDUCATION.length - 1 && (
                                    <div className="mt-5 flex justify-center">
                                        <div className="h-2 w-20 rounded-full bg-[var(--primary)]/12" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
