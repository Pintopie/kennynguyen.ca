"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { HACKATHONS } from "@/constants";
import { ArrowUpRight, Trophy } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hackathons() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(".hackathon-title", {
            opacity: 0,
            x: -20,
            duration: 0.5,
            scrollTrigger: {
                trigger: ".hackathon-title",
                start: "top 80%",
            }
        });

        const items = gsap.utils.toArray<HTMLElement>(".hackathon-item");
        items.forEach((item, i) => {
            gsap.from(item, {
                opacity: 0,
                x: -30,
                duration: 0.5,
                delay: i * 0.1,
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                }
            });

            const dot = item.querySelector(".timeline-dot");
            if (dot) {
                gsap.from(dot, {
                    scale: 0,
                    duration: 0.5,
                    delay: i * 0.1 + 0.2,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                    }
                });
            }
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="w-full max-w-6xl mb-16" id="hackathons">
            <div className="flex items-center gap-3 mb-12 hackathon-title">
                <div className="p-2 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)]">
                    <Trophy size={24} />
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">Hackathons & Competitions</h2>
            </div>

            <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--primary)]/30 to-[var(--primary)]/10" />

                <div className="space-y-6">
                    {HACKATHONS.map((item, idx) => (
                        <div key={`${item.name}-${idx}`} className="relative pl-20 hackathon-item">
                            <div className="timeline-dot absolute left-0 w-10 h-10 rounded-full border-4 border-[var(--card)] bg-primary/60 shadow-lg flex items-center justify-center text-white overflow-hidden">
                                {item.logo ? (
                                    <Image src={item.logo} alt={item.name} fill className="object-cover" sizes="40px" />
                                ) : (
                                    <span className="text-lg">🏆</span>
                                )}
                            </div>

                            <div className="group rounded-2xl border border-[var(--border)]/60 bg-[var(--background)]/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                                <div className="flex items-start justify-between gap-4 mb-2">
                                    <div>
                                        <h4 className="text-lg font-bold text-[var(--foreground)]">{item.name}</h4>
                                        <p className="text-sm text-[var(--primary)] font-semibold">{item.status}</p>
                                    </div>
                                    <span className="text-xs uppercase tracking-wide text-[var(--muted-foreground)] whitespace-nowrap">
                                        {item.startDate} – {item.endDate}
                                    </span>
                                </div>
                                <p className="text-xs text-[var(--muted-foreground)] mb-3">{item.location}</p>

                                {item.summary && (
                                    <p className="text-sm text-[var(--foreground)]/90 leading-relaxed mb-4">
                                        {item.summary}
                                    </p>
                                )}

                                <ul className="space-y-2 mb-4">
                                    {item.highlights.map((highlight, highlightIndex) => (
                                        <li key={highlightIndex} className="text-sm text-[var(--muted-foreground)] flex gap-2">
                                            <span className="text-[var(--primary)] mt-0.5">•</span>
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>

                                {item.tech && (
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {item.tech.map((techItem, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                                            >
                                                {techItem}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {item.link && (
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-[var(--primary)] hover:text-[var(--primary)]/80 text-sm font-semibold transition-colors"
                                    >
                                        Pipeline details <ArrowUpRight className="w-4 h-4" />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}