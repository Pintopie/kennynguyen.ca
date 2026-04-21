"use client";

import React from "react";
import { User } from "lucide-react";
import ScrollReveal from "@/shared/ui/ScrollReveal";

export default function About() {
    return (
        <section className="w-full max-w-6xl mb-24" id="about">
            <ScrollReveal className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                    <div className="mb-12 flex items-center gap-3">
                         <div className="p-2 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)]">
                             <User size={24} />
                         </div>
                         <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">About Me</h2>
                    </div>
                    
                    <div className="space-y-2">
                        <h3 className="text-3xl md:text-4xl font-bold text-[var(--foreground)]">
                            Building <span className="text-primary">useful software</span> across AI, web, and UX.
                        </h3>
                        <div className="h-1 w-20 bg-primary rounded-full" />
                    </div>

                    <div className="prose dark:prose-invert text-[var(--muted-foreground)] leading-relaxed text-lg">
                        <p>
                            I am an Information Science student at the University of Toronto, with a software development
                            background from Broward College and hands-on experience in backend engineering, web delivery, and AI.
                        </p>
                        <p>
                            I have built FastAPI services, containerized deployment pipelines, and responsive web experiences,
                            while also working directly on redesigns, content updates, hosting, and SEO improvements.
                        </p>
                        <p>
                            The common thread is simple: I like work that is technically solid, easy to use, and ready for real
                            users.
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

                {/* Right Side - Interactive Terminal/Code Showcase */}
                <div className="relative group">
                    <div className="relative rounded-xl border border-[var(--border)] bg-[var(--card)]/90 backdrop-blur-xl overflow-hidden shadow-2xl">
                        {/* Terminal Header */}
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)] bg-[var(--muted)]/50">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <div className="ml-4 text-xs font-mono text-[var(--muted-foreground)]">config.json — kenny-shell</div>
                        </div>
                        
                        {/* Terminal Content */}
                        <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
                            <div className="text-[var(--foreground)]">
                                <span className="text-blue-600 dark:text-purple-400">const</span> <span className="text-indigo-600 dark:text-blue-400">developer</span> = <span className="text-yellow-600 dark:text-yellow-400">{"{"}</span>
                            </div>
                            <div className="pl-4">
                                <span className="text-red-600 dark:text-red-400">name</span>: <span className="text-green-600 dark:text-green-400">"Kenny Nguyen"</span>,
                            </div>
                            <div className="pl-4">
                                <span className="text-red-600 dark:text-red-400">location</span>: <span className="text-green-600 dark:text-green-400">"Toronto, ON M6A 1T4"</span>,
                            </div>
                            <div className="pl-4">
                                <span className="text-red-600 dark:text-red-400">education</span>: <span className="text-green-600 dark:text-green-400">"University of Toronto"</span>,
                            </div>
                            <div className="pl-4">
                                <span className="text-red-600 dark:text-red-400">focus</span>: <span className="text-yellow-600 dark:text-yellow-400">["Backend", "AI", "UX"]</span>,
                            </div>
                             <div className="pl-4">
                                <span className="text-red-600 dark:text-red-400">traits</span>: <span className="text-yellow-600 dark:text-yellow-400">{"{"}</span>
                            </div>
                            <div className="pl-8">
                                <span className="text-red-600 dark:text-red-400">problem_solver</span>: <span className="text-blue-600 dark:text-purple-400">true</span>,
                            </div>
                            <div className="pl-8">
                                <span className="text-red-600 dark:text-red-400">coffee_level</span>: <span className="text-orange-600 dark:text-orange-400">"High"</span>
                            </div>
                            <div className="pl-4">
                                <span className="text-yellow-600 dark:text-yellow-400">{"}"}</span>,
                            </div>
                            <div className="pl-4">
                                <span className="text-[var(--muted-foreground)]">{"// Ready for internships and full-time roles"}</span>
                            </div>
                            <div className="pl-4">
                                <span className="text-red-600 dark:text-red-400">status</span>: <span className="text-green-600 dark:text-green-400">"Open to opportunities"</span>
                            </div>
                            <div>
                                <span className="text-yellow-600 dark:text-yellow-400">{"}"}</span>;
                            </div>
                            
                            <div className="mt-4 flex items-center gap-2">
                                <span className="text-green-600 dark:text-green-400">➜</span>
                                <span className="text-blue-600 dark:text-blue-400">~</span>
                                <span className="animate-pulse w-2 h-4 bg-[var(--primary)] block"></span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Floating decorative elements */}
                    <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[var(--primary)]/10 rounded-full blur-2xl"></div>
                    <div className="absolute -left-4 -top-4 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>
                </div>
            </ScrollReveal>
        </section>
    );
}
