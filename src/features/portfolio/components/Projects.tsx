"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { PROJECTS } from "@/constants";
import AnimatedCard from "@/shared/ui/AnimatedCard";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollReveal from "@/shared/ui/ScrollReveal";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
    const containerRef = useRef<HTMLElement>(null);
    const isInternalHref = (href: string) => href.startsWith("/");

    useGSAP(() => {
        // Stagger project cards
        gsap.from(".project-card", {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".project-grid",
                start: "top 80%",
            }
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="w-full max-w-6xl mb-16" id="projects">
            <ScrollReveal className="mb-12">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)]">
                            <FolderGit2 size={24} />
                        </div>
                        <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">Projects</h2>
                    </div>
                    <p className="text-xs uppercase tracking-[0.4em] text-[var(--muted-foreground)] hidden sm:block">Selected builds</p>
                </div>
            </ScrollReveal>

            <div className="project-grid grid gap-6 md:grid-cols-2">
                {PROJECTS.map((project, idx) => (
                    <div key={idx} className="project-card">
                        <AnimatedCard
                            className="h-full rounded-3xl border border-[var(--border)] bg-[var(--card)]/90 p-6 flex flex-col gap-4 shadow-[0_35px_55px_rgba(15,23,42,0.2)]"
                        >
                            <div>
                                <h3 className="group/title text-lg font-bold flex items-center gap-2 cursor-pointer transition-transform hover:translate-x-1">
                                    {project.title}
                                    <span className="transition-transform group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5">
                                        <ArrowUpRight size={18} className="text-[var(--muted-foreground)]" />
                                    </span>
                                </h3>
                                <p className="text-sm text-[var(--muted-foreground)] mt-2">{project.description}</p>
                            </div>
                            
                            <ul className="flex flex-wrap gap-2 text-xs text-[var(--muted-foreground)]">
                                {project.tech.map((tech) => (
                                    <li
                                        key={tech}
                                        className="px-3 py-1 rounded-full bg-[var(--background)] border border-[var(--border)]/40"
                                    >
                                        {tech}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-4 text-sm mt-auto">
                                {project.links.map((link) => (
                                    isInternalHref(link.href) ? (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className="inline-flex items-center gap-1 text-[var(--primary)] hover:underline transition-transform hover:translate-x-0.5"
                                        >
                                            {link.label}
                                            <ArrowUpRight size={14} />
                                        </Link>
                                    ) : (
                                        <a
                                            key={link.href}
                                            href={link.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-1 text-[var(--primary)] hover:underline transition-transform hover:translate-x-0.5 hover:text-[var(--primary)]"
                                        >
                                            {link.label}
                                            <ArrowUpRight size={14} />
                                        </a>
                                    )
                                ))}
                            </div>
                        </AnimatedCard>
                    </div>
                ))}
            </div>
        </section>
    );
}
