"use client";

import React from "react";
import { motion } from "framer-motion";
import { Command, Zap, Heart } from "lucide-react";

export default function About() {
    return (
        <section className="w-full max-w-5xl mb-24" id="about">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-2 gap-12 items-start"
            >
                <div className="space-y-6">
                    <div className="space-y-2">
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)]">
                            From Terminal to <span className="text-primary">Human Experience</span>.
                        </h2>
                        <div className="h-1 w-20 bg-primary rounded-full" />
                    </div>

                    <div className="prose dark:prose-invert text-[var(--muted-foreground)] leading-relaxed text-lg">
                        <p>
                            My journey began in the rigid world of Computer Science, where I fell in love with the logic of backend
                            systems and the efficiency of clean code.
                        </p>
                        <p>
                            But as I built more complex systems, I realized a crucial truth:{" "}
                            <strong className="text-[var(--foreground)]">
                                resilient infrastructure means nothing if the user experience is broken.
                            </strong>
                        </p>
                        <p>
                            Today, I operate at the intersection of these two worlds. I'm a full-stack engineer who builds with the
                            empathy of a designer, and a problem-solver who ensures that every pixel serves a purpose.
                        </p>

                    </div>

                    <div className="flex gap-4 pt-4">
                        <div className="px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--card)]/50 backdrop-blur-sm text-sm font-medium flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            Builder
                        </div>
                        <div className="px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--card)]/50 backdrop-blur-sm text-sm font-medium flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                            Strategic
                        </div>
                        <div className="px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--card)]/50 backdrop-blur-sm text-sm font-medium flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                            Curious
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 to-transparent blur-3xl rounded-full opacity-30" />
                    <div className="relative grid grid-cols-1 gap-4">
                        <div className="bg-[var(--card)]/80 backdrop-blur-md border border-[var(--border)] p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-lg font-bold mb-2">My Philosophy</h3>
                            <p className="text-[var(--muted-foreground)] text-sm">
                                "Complexity should be managed by the system, not the user."
                            </p>
                        </div>
                        <div className="bg-[var(--card)]/80 backdrop-blur-md border border-[var(--border)] p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-lg font-bold mb-2">Focus Areas</h3>
                            <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
                                <li className="flex items-center gap-2">
                                    <Command size={16} className="text-[var(--primary)]" />
                                    Local-First Software
                                </li>
                                <li className="flex items-center gap-2">
                                    <Zap size={16} className="text-[var(--primary)]" />
                                    High-Performance APIs
                                </li>
                                <li className="flex items-center gap-2">
                                    <Heart size={16} className="text-[var(--primary)]" />
                                    Accessible Design Systems
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
