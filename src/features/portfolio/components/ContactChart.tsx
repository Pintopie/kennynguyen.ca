"use client";

import React from "react";
import Image from "next/image";
import ScrollReveal from "@/shared/ui/ScrollReveal";
import { Activity } from "lucide-react";

export default function ContactChart() {
    return (
        <section className="w-full max-w-2xl mb-8" id="contact">
             <div className="flex items-center justify-center gap-3 mb-12">
                <div className="p-2 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)]">
                    <Activity size={24} />
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">GitHub Activity</h2>
            </div>

            <ScrollReveal className="flex flex-col items-center justify-center gap-4">
                <a
                    href="https://github.com/Pintopie"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub activity graph"
                    className="block w-full max-w-xl transition-transform hover:scale-[1.02]"
                >
                    <Image
                        src="https://ghchart.rshah.org/Pintopie"
                        alt="GitHub activity graph for Pintopie"
                        width={900}
                        height={200}
                        className="rounded-lg border border-[var(--border)] bg-[var(--card)]"
                        priority
                    />
                </a>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl">
                    <a
                        href="https://github.com/Pintopie"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 text-center hover:shadow-lg transition-transform hover:-translate-y-1"
                    >
                        <p className="text-lg font-semibold text-[var(--primary)]">GitHub Profile</p>
                        <p className="text-sm text-[var(--muted-foreground)]">@Pintopie</p>
                        <p className="text-xs text-[var(--muted)] mt-2">View repositories & contributions</p>
                    </a>
                    <a
                        href="https://github.com/Pintopie?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 text-center hover:shadow-lg transition-transform hover:-translate-y-1"
                    >
                        <p className="text-lg font-semibold text-[var(--primary)]">Repositories</p>
                        <p className="text-sm text-[var(--muted-foreground)]">Projects & Code</p>
                        <p className="text-xs text-[var(--muted)] mt-2">Explore my open source work</p>
                    </a>
                </div>
            </ScrollReveal>
        </section>
    );
}
