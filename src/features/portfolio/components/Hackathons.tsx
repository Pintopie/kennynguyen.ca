"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HACKATHONS } from "@/constants";
import { ArrowUpRight } from "lucide-react";

export default function Hackathons() {
    return (
        <section className="w-full max-w-6xl mb-16" id="hackathons">
            <div className="mb-12">
                <motion.h3
                    className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                >
                    Hackathons & Competitions
                </motion.h3>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--primary)]/30 to-[var(--primary)]/10" />

                    <motion.div className="space-y-6">
                        {HACKATHONS.map((item, idx) => (
                            <motion.div
                                key={`${item.name}-${idx}`}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="relative pl-20"
                            >
                                {/* Timeline dot with logo */}
                                <motion.div
                                    className="absolute left-0 w-10 h-10 rounded-full border-4 border-[var(--card)] bg-primary/60 shadow-lg flex items-center justify-center text-white overflow-hidden"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                                >
                                    {item.logo ? (
                                        <Image src={item.logo} alt={item.name} fill className="object-cover" sizes="40px" />
                                    ) : (
                                        <span className="text-lg">🏆</span>
                                    )}
                                </motion.div>

                                <motion.div
                                    className="rounded-2xl border border-[var(--border)]/60 bg-[var(--background)]/70 p-4"
                                    whileHover={{ y: -4, boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)" }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="flex items-start justify-between gap-4 mb-2">
                                        <div>
                                            <h4 className="text-lg font-bold text-[var(--foreground)]">{item.name}</h4>
                                            <p className="text-sm text-[var(--primary)] font-semibold">{item.status}</p>
                                        </div>
                                        <span className="text-xs uppercase tracking-wide text-[var(--muted-foreground)] whitespace-nowrap">
                                            {item.startDate && `${item.startDate} – ${item.endDate}`}
                                        </span>
                                    </div>
                                    <p className="text-xs text-[var(--muted-foreground)] mb-3">{item.location}</p>

                                    <ul className="space-y-2 mb-4">
                                        {item.highlights.map((highlight, hIdx) => (
                                            <motion.li
                                                key={hIdx}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: idx * 0.1 + hIdx * 0.05 + 0.3 }}
                                                className="text-sm text-[var(--muted-foreground)] flex gap-2"
                                            >
                                                <span className="text-[var(--primary)] mt-0.5">•</span>
                                                <span>{highlight}</span>
                                            </motion.li>
                                        ))}
                                    </ul>

                                    {item.tech && (
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {item.tech.map((t, tIdx) => (
                                                <span
                                                    key={tIdx}
                                                    className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Link */}
                                    {item.link && (
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-[var(--primary)] hover:text-[var(--primary)]/80 text-sm font-semibold transition-colors"
                                        >
                                            Learn more <ArrowUpRight className="w-4 h-4" />
                                        </a>
                                    )}
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
