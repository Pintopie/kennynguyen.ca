"use client";

import React from "react";
import { SKILLS } from "@/constants";
import AnimatedCard from "@/shared/ui/AnimatedCard";
import ScrollReveal from "@/shared/ui/ScrollReveal";
import { Zap } from "lucide-react";

export default function Skills() {
    return (
        <section className="w-full max-w-5xl mb-16" id="skills">
            <ScrollReveal className="mb-12">
                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)]">
                            <Zap size={24} />
                        </div>
                        <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">Skills</h2>
                    </div>
                    <p className="text-xs uppercase tracking-[0.4em] text-[var(--muted-foreground)] hidden sm:block">Stack favorites</p>
                </div>
            </ScrollReveal>
            <div
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
                {SKILLS.map((skill, idx) => {
                    const Icon = skill.icon;
                    return (
                        <AnimatedCard
                            key={skill.label}
                            delay={idx * 0.05}
                            className="rounded-2xl border border-[var(--border)] bg-[var(--card)]/85 p-4 shadow-sm"
                        >
                            <div className="flex items-center gap-3 transition-transform hover:translate-x-1">
                                <span
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--background)]/70 transition-transform hover:scale-110 hover:rotate-6"
                                    style={{ color: skill.color }}
                                >
                                    <Icon size={22} />
                                </span>
                                <div>
                                    <p className="font-semibold text-[var(--foreground)]">{skill.label}</p>
                                    <p className="text-xs text-[var(--muted-foreground)]">{skill.tooltip}</p>
                                </div>
                            </div>
                        </AnimatedCard>
                    );
                })}
            </div>
        </section>
    );
}
