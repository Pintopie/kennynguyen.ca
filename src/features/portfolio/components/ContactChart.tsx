"use client";

import React from "react";
import Image from "next/image";
import ScrollReveal from "@/shared/ui/ScrollReveal";
import { Mail, Github, Linkedin, FileText } from "lucide-react";

export default function ContactChart() {
    return (
        <section className="w-full max-w-2xl mb-8" id="contact">
             <div className="flex items-center justify-center gap-3 mb-12">
                <div className="p-2 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)]">
                    <Mail size={24} />
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">Contact</h2>
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
                    href="mailto:hoangnhan20192@gmail.com"
                    className="block rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 hover:shadow-lg transition-transform hover:-translate-y-1"
                >
                    <div className="flex items-center gap-3">
                        <div className="rounded-xl bg-[var(--primary)]/10 p-2 text-[var(--primary)]">
                            <Mail size={18} />
                        </div>
                        <div>
                            <p className="font-semibold text-[var(--foreground)]">Email</p>
                            <p className="text-sm text-[var(--muted-foreground)]">hoangnhan20192@gmail.com</p>
                        </div>
                    </div>
                </a>
                <a
                    href="https://www.linkedin.com/in/kennyngdev-ca/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 hover:shadow-lg transition-transform hover:-translate-y-1"
                >
                    <div className="flex items-center gap-3">
                        <div className="rounded-xl bg-[var(--primary)]/10 p-2 text-[var(--primary)]">
                            <Linkedin size={18} />
                        </div>
                        <div>
                            <p className="font-semibold text-[var(--foreground)]">LinkedIn</p>
                            <p className="text-sm text-[var(--muted-foreground)]">linkedin.com/in/kennyngdev-ca</p>
                        </div>
                    </div>
                </a>
                <a
                    href="https://github.com/Pintopie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 hover:shadow-lg transition-transform hover:-translate-y-1"
                >
                    <div className="flex items-center gap-3">
                        <div className="rounded-xl bg-[var(--primary)]/10 p-2 text-[var(--primary)]">
                            <Github size={18} />
                        </div>
                        <div>
                            <p className="font-semibold text-[var(--foreground)]">GitHub</p>
                            <p className="text-sm text-[var(--muted-foreground)]">github.com/Pintopie</p>
                        </div>
                    </div>
                </a>
                <a
                    href="/resume/Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 hover:shadow-lg transition-transform hover:-translate-y-1"
                >
                    <div className="flex items-center gap-3">
                        <div className="rounded-xl bg-[var(--primary)]/10 p-2 text-[var(--primary)]">
                            <FileText size={18} />
                        </div>
                        <div>
                            <p className="font-semibold text-[var(--foreground)]">Resume PDF</p>
                            <p className="text-sm text-[var(--muted-foreground)]">View my resume</p>
                        </div>
                    </div>
                </a>
                </div>
            </ScrollReveal>
        </section>
    );
}
