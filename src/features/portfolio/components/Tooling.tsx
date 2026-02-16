"use client";

import React, { useRef } from "react";
import { TOOLING } from "@/constants";
import { Terminal, Cpu, PenTool, Cloud } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollReveal from "@/shared/ui/ScrollReveal";

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES = [
    {
        id: "stack",
        label: "Core Stack",
        icon: Cpu,
        items: ["React + TypeScript", "Node.js + npm", "FastAPI + Python", "PostgreSQL + MongoDB"]
    },
    {
        id: "infra",
        label: "Infrastructure",
        icon: Cloud,
        items: ["Docker & Compose", "AWS + Cloud Services", "Git + GitHub"]
    },
    {
        id: "workspace",
        label: "Workspace",
        icon: PenTool,
        items: ["VS Code + Extensions", "Figma", "Jupyter Notebooks", "LangChain + Ollama"]
    }
];

export default function Tooling() {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const cats = gsap.utils.toArray<HTMLElement>(".tool-category");
        cats.forEach((cat, i) => {
            gsap.from(cat.querySelectorAll("li"), {
                y: 15,
                opacity: 0,
                duration: 0.5,
                stagger: 0.05,
                scrollTrigger: {
                    trigger: cat,
                    start: "top 85%",
                },
                delay: i * 0.1
            });
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="w-full max-w-6xl mb-24" id="stack">
            <ScrollReveal>
                <div className="flex items-center gap-3 mb-12">
                    <div className="p-2 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)]">
                        <Terminal size={24} />
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">Technical Environment</h2>
                </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                {CATEGORIES.map((category) => (
                    <div key={category.id} className="tool-category">
                        <div className="flex items-center gap-2 mb-6 border-b border-[var(--border)] pb-4">
                            <category.icon size={16} className="text-[var(--primary)]" />
                            <h3 className="font-semibold text-lg">{category.label}</h3>
                        </div>
                        <ul className="space-y-6">
                            {category.items.map((toolName) => {
                                const tool = TOOLING.find((t) => t.name === toolName);
                                if (!tool) return null;
                                const ToolIcon = tool.icon;

                                return (
                                    <li key={toolName} className="group flex items-start gap-4">
                                        <div className="shrink-0 mt-1 p-2 rounded-xl bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] group-hover:scale-110 group-hover:border-[var(--primary)]/30 transition-all duration-300">
                                            <ToolIcon size={18} />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                                                {tool.name}
                                            </h4>
                                            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mt-1">
                                                {tool.detail}
                                            </p>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
