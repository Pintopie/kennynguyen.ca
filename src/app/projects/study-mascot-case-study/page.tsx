"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, Zap, ArrowUpRight } from "lucide-react";
import { useThemePreference } from "@/shared/hooks/useTheme";
import AuroraBackground from "@/shared/layout/AuroraBackground";
import { Section } from "@/features/case-study/components/Section";
import { StatCard } from "@/features/case-study/components/StatCard";
import { Callout } from "@/features/case-study/components/Callout";
import Footer from "@/shared/layout/Footer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StudyMascotCaseStudy() {
    const { dark, setDark } = useThemePreference();
    const containerRef = useRef(null);
    const navRef = useRef(null);
    const headerRef = useRef(null);

    useGSAP(() => {
        // Nav animation
        gsap.from(navRef.current, {
            y: -100,
            duration: 0.5,
            ease: "power2.out"
        });

        // Hero Parallax
        if (headerRef.current) {
            gsap.to(headerRef.current, {
                opacity: 0,
                scale: 0.95,
                y: 50,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "20% top",
                    scrub: true
                }
            });
            
            // Hero content fade in
            gsap.from(".hero-content", {
                opacity: 0,
                y: 20,
                duration: 0.8,
                delay: 0.2
            });
            
            // Hero stats stagger
            gsap.from(".hero-stat", {
                opacity: 0,
                y: 20,
                duration: 0.6,
                stagger: 0.1,
                delay: 0.4
            });
        }

        // Generic fade up sections
        const fadeUps = gsap.utils.toArray<HTMLElement>(".gsap-fade-up");
        fadeUps.forEach(elem => {
            gsap.from(elem, {
                opacity: 0,
                y: 40,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: elem,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });
        });
        
        // Stagger containers
        const staggers = gsap.utils.toArray<HTMLElement>(".gsap-stagger-container");
        staggers.forEach(container => {
            const children = container.querySelectorAll(".gsap-stagger-item");
            if(children.length > 0) {
                 gsap.from(children, {
                    opacity: 0,
                    y: 20,
                    duration: 0.6,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: container,
                        start: "top 80%",
                    }
                });
            }
        });

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-x-hidden selection:bg-[var(--primary)]/20 selection:text-[var(--primary)]">
            <AuroraBackground dark={dark} />
            {/* Navigation */}
            <nav
                ref={navRef}
                className="fixed top-0 z-50 w-full bg-[var(--background)]/80 backdrop-blur-sm border-b border-[var(--border)] supports-[backdrop-filter]:bg-[var(--background)]/40"
            >
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link
                        href="/#projects"
                        className="flex items-center gap-2 text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors group"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Return to Projects
                    </Link>
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--muted-foreground)]">
                        <a href="#" className="hover:text-[var(--primary)] hover:scale-105 transition-all">Overview</a>
                        <a href="#primary-research" className="hover:text-[var(--primary)] hover:scale-105 transition-all">Primary Research</a>
                        <a href="#research" className="hover:text-[var(--primary)] hover:scale-105 transition-all">Persona</a>
                        <a href="#ideation" className="hover:text-[var(--primary)] hover:scale-105 transition-all">Ideation</a>
                        <a href="#design" className="hover:text-[var(--primary)] hover:scale-105 transition-all">Low-Fi Prototype</a>
                        <a href="#prototypes" className="hover:text-[var(--primary)] hover:scale-105 transition-all">Med-Fi Prototypes</a>
                    </div>
                    {/* Theme Toggle */}
                    <button
                        aria-label="Toggle dark mode"
                        className="ml-4 p-2 rounded-full border border-[var(--border)] bg-[var(--card)] shadow hover:shadow-lg transition hover:bg-[var(--primary)]/10"
                        onClick={() => setDark((d) => !d)}
                    >
                        {dark ? (
                            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" fill="currentColor" /></svg>
                        ) : (
                            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" /><path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41" stroke="currentColor" strokeWidth="2" /></svg>
                        )}
                    </button>
                </div>
            </nav>
            {/* Main Content */}
            <main className="relative z-10 pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
                {/* 1. Hero */}
                <header
                    ref={headerRef}
                    className="max-w-5xl mx-auto mb-32 origin-top"
                >
                    <div className="hero-content">
                        <div className="mb-10 inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--card)]/70 px-3 py-2 shadow-sm">
                            <Image
                                src="/logos/university_of_toronto_logo.jpg"
                                alt="University of Toronto logo"
                                width={120}
                                height={32}
                                className="h-8 w-auto"
                                priority
                            />
                            <span className="text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)]">University of Toronto</span>
                        </div>
                        <div className="mb-6 text-2xl font-bold text-[var(--foreground)]"> INF352H1 Design Studio II  Case Study</div>

                        <div className="mb-6 max-w-2xl border-l-2 border-[var(--primary)]/60 pl-4 text-[var(--muted-foreground)] italic">
                            Instructed by Dr. Olivier St-Cyr, PhD, LEL
                        </div>

                        <p className="text-xl md:text-2xl text-[var(--muted-foreground)] max-w-2xl mb-6 leading-relaxed font-light">
                            Students don't need another timer. They need a <span className="text-[var(--foreground)] font-medium underline">companion</span>. We designed a mascot-based system to turn isolation into passive connection.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-[var(--border)]/40 pt-8">
                        {[
                            { label: "Role", value: "UX Researcher & Interaction Designer" },
                            { label: "Team", value: "5 Members" },
                            { label: "Tools", value: "Figma, Miro, Paper Prototypes" },
                            { label: "Timeline", value: "Sep - Dec 2025" }
                        ].map((item, i) => (
                            <div key={i} className="hero-stat">
                                <div className="text-xs uppercase tracking-wider text-[var(--muted-foreground)]/60 mb-2">{item.label}</div>
                                <div className="font-semibold text-[var(--foreground)]/90">{item.value}</div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 grid md:grid-cols-4 gap-4">
                        {[
                            { label: "Context", value: "INF352 (UofT)" },
                            { label: "Platform", value: "Mobile prototype" },
                            { label: "Constraints", value: "Short timeline + student schedules" },
                            { label: "Deliverables", value: "Research, flows, prototypes, testing" }
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="rounded-2xl border border-[var(--border)] bg-[var(--card)]/40 backdrop-blur-sm p-5"
                            >
                                <div className="text-xs uppercase tracking-wider text-[var(--muted-foreground)]/60 mb-2">{item.label}</div>
                                <div className="text-sm font-semibold text-[var(--foreground)]/90">{item.value}</div>
                            </div>
                        ))}
                    </div>
                </header>

                {/* Design Thinking Process */}
                <div className="mb-32 gsap-stagger-container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)]">Design Thinking Process</h2>
                    </div>

                    <div className="relative">
                        <div className="hidden lg:block absolute inset-x-6 top-14 h-px bg-gradient-to-r from-[var(--primary)]/0 via-[var(--primary)]/40 to-[var(--primary)]/0" />
                        <div className="flex flex-col lg:flex-row gap-6 lg:gap-4">
                            {[ 
                                { num: "01", title: "EMPATHIZE", desc: "Interviews, surveys, and observations to map real student pain." },
                                { num: "02", title: "DEFINE", desc: "Synthesize themes into a focused problem & success criteria." },
                                { num: "03", title: "IDEATE", desc: "Diverge on many options, cluster, and vote on high-impact ideas." },
                                { num: "04", title: "PROTOTYPE", desc: "Low- then mid-fi flows to make the concept testable fast." },
                                { num: "05", title: "TEST", desc: "Usability sessions to validate motivation, clarity, and trust." },
                                { num: "06", title: "REFINE", desc: "Tighten interactions, states, and accessibility details." }
                            ].map((step, idx) => (
                                <div
                                    key={step.num}
                                    className="relative flex-1 min-w-[180px] gsap-stagger-item"
                                >
                                    {/* Connector dot for desktop */}
                                    <div className="hidden lg:block absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--primary)]/70 ring-4 ring-[var(--primary)]/15" />
                                    <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--card)]/60 backdrop-blur-sm p-5 shadow-sm hover:border-[var(--primary)]/40 hover:-translate-y-1 transition duration-300">
                                        <div className="flex items-center justify-between mb-3">

                                            <span className="px-2 py-1 text-[10px] uppercase tracking-widest bg-[var(--primary)]/10 text-[var(--primary)] rounded-full">STAGE</span>
                                            <span className="text-sm font-mono text-[var(--primary)]">{step.num}</span>
                                        </div>
                                        <h3 className="text-sm font-semibold text-[var(--foreground)] mb-2 tracking-wide">{step.title}</h3>
                                        <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">{step.desc}</p>
                                    </div>
                                    {/* Mobile connector */}
                                    {idx < 5 && (
                                        <div className="lg:hidden flex justify-center mt-3">
                                            <div className="h-6 w-px bg-gradient-to-b from-[var(--primary)]/20 to-[var(--primary)]/0" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Secondary Research */}
                <Section id="overview" title="Secondary Research" eyebrow="Understanding the Problem">
                    <div className="prose prose-lg dark:prose-invert max-w-3xl mb-16 text-[var(--muted-foreground)] gsap-fade-up">
                        <p>
                            We analyzed five key sources to understand why students struggle with consistency.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {[
                            { 
                                source: "Svartdal et al. (2021)", 
                                insight: "Behavioral Design & Small Wins", 
                                desc: "Students fail not because of motivation, but lack of follow-through structure. Design must build confidence through small, visible wins (streaks) to foster self-discipline." 
                            },
                            { 
                                source: "Rosen et al. (2013)", 
                                insight: "The Cost of Multitasking", 
                                desc: "Technology is a powerful distraction. Frequent multitasking fragments learning and leaves 'attention residue,' proving the need for a solution that mitigates digital interference." 
                            },
                            { 
                                source: "Acacia Learning", 
                                insight: "Routine is King", 
                                desc: "Successful studying requires distraction-free environments and 'eating the frog' (tackling hard tasks first). A consistent weekly schedule is critical for long-term habits." 
                            },
                            { 
                                source: "Kaur & Singh (2020)", 
                                insight: "Habits are Acquired", 
                                desc: "Study habits are patterns acquired through repetition. Inconsistent habits lead to stress, while good routines enhance retention. We can 'train' consistency." 
                            }
                        ].map((item) => (
                            <div
                                key={item.source}
                                className="p-6 rounded-2xl bg-[var(--card)]/50 border border-[var(--border)] backdrop-blur-sm hover:bg-[var(--card)]/80 transition-colors gsap-fade-up"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="text-sm font-bold text-[var(--primary)] uppercase tracking-wide">{item.insight}</div>
                                </div>
                                <p className="font-bold text-[var(--foreground)] mb-2">{item.source}</p>
                                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    
                    <div className="p-8 rounded-3xl bg-[var(--primary)]/5 border border-[var(--primary)]/10 gsap-fade-up">
                        <h3 className="flex items-center gap-2 font-bold text-[var(--foreground)] text-lg mb-4">
                            <Zap className="text-[var(--primary)]" size={20} />
                            The Core Behavioral Challenge
                        </h3>
                        <p className="text-[var(--muted-foreground)] leading-relaxed italic">
                            "Procrastination is a self-defeating behavior that provides short-term relief but leads to long-term anxiety. It reflects a <strong className="text-[var(--foreground)]">lack of structure, not motivation</strong>." - A Guide to Understanding Procrastination
                        </p>
                    </div>
                </Section>

                {/* Primary Research */}
                <Section id="primary-research" title="Primary Research" eyebrow="Methodology">
                    <div className="prose prose-lg dark:prose-invert max-w-3xl mb-16 text-[var(--muted-foreground)] gsap-fade-up">
                        <p>
                            We conducted mixed-method research over a two-week period to gather both quantitative and qualitative data from the UofT student community.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-24">
                        <div className="p-8 rounded-3xl bg-[var(--card)]/50 border border-[var(--border)] backdrop-blur-sm gsap-fade-up">
                            <div className="text-xs uppercase tracking-widest text-[var(--primary)] font-bold mb-6">SEMI-STRUCTURED INTERVIEWS</div>
                            <div className="space-y-4 text-[var(--muted-foreground)]">
                                <div className="flex justify-between border-b border-[var(--border)]/50 pb-2">
                                    <span>Participants</span>
                                    <span className="font-bold text-[var(--foreground)]">13 UofT Students</span>
                                </div>
                                <div className="flex justify-between border-b border-[var(--border)]/50 pb-2">
                                    <span>Format</span>
                                    <span className="font-bold text-[var(--foreground)]">In-person & Online</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Duration</span>
                                    <span className="font-bold text-[var(--foreground)]">15–25 minutes</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 rounded-3xl bg-[var(--card)]/50 border border-[var(--border)] backdrop-blur-sm gsap-fade-up">
                            <div className="text-xs uppercase tracking-widest text-[var(--primary)] font-bold mb-6">ONLINE SURVEYS</div>
                            <div className="space-y-4 text-[var(--muted-foreground)]">
                                <div className="flex justify-between border-b border-[var(--border)]/50 pb-2">
                                    <span>Responses</span>
                                    <span className="font-bold text-[var(--foreground)]">26 Responses</span>
                                </div>
                                <div className="flex justify-between border-b border-[var(--border)]/50 pb-2">
                                    <span>Platform</span>
                                    <span className="font-bold text-[var(--foreground)]">Google Forms</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Duration</span>
                                    <span className="font-bold text-[var(--foreground)]">1 week</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-3xl font-bold mb-8">Quantitative Findings</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 gsap-stagger-container">
                        <div className="gsap-stagger-item"><StatCard value="65%" label="Inconsistent" caption="17 of 26 students reported lack of a stable routine." /></div>
                        <div className="gsap-stagger-item"><StatCard value="31%" label="Top Barrier" caption="Digital distractions (social media) was the #1 blocker." /></div>
                        <div className="gsap-stagger-item"><StatCard value="88.5%" label="Want Accountability" caption="Believe social proof would help them stay on track." /></div>
                        <div className="gsap-stagger-item"><StatCard value="61.5%" label="Market Fit" caption="Would use a 'BeReal-style' app for studying." /></div>
                    </div>

                    {/* Affinity Diagram */}
                    <div className="gsap-fade-up mb-24">
                        <h3 className="text-3xl font-bold mb-4">Qualitative Analysis</h3>
                        <p className="text-[var(--muted-foreground)] mb-12 max-w-3xl">
                            We used an affinity diagram to synthesize interview data into key themes. The core recurring pattern was an <strong className="text-[var(--foreground)]">emotional cycle of procrastination</strong>.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "EMOTIONAL PATTERNS",
                                    points: [
                                        "Cycle: Stress/Guilt -> Start -> Flow -> Relief.",
                                        "Hardest part is starting 'Activation Energy'.",
                                        "Studying feels like a chore, not a meaningful activity."
                                    ]
                                },
                                {
                                    title: "ENVIRONMENT",
                                    points: [
                                        "11/13 prefer libraries/cafes over home.",
                                        "Structured environments provide focus.",
                                        "Phones are the universal distraction."
                                    ]
                                },
                                {
                                    title: "SOCIAL PREFERENCE",
                                    points: [
                                        "Independent study is preferred for focus.",
                                        "Peer groups provide motivation.",
                                        "Desire for 'Passive Social' (presence without pressure)."
                                    ]
                                }
                            ].map((category) => (
                                <div
                                    key={category.title}
                                    className="gsap-fade-up p-6 rounded-2xl bg-[var(--card)]/50 border border-[var(--border)] backdrop-blur-sm"
                                >
                                    <div className="text-xs uppercase tracking-widest text-[var(--primary)] font-bold mb-4">{category.title}</div>
                                    <ul className="space-y-3">
                                        {category.points.map((point, j) => (
                                            <li key={j} className="text-sm text-[var(--muted-foreground)] leading-relaxed flex gap-2">
                                                <span className="text-[var(--primary)] mt-1">•</span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 max-w-full">
                            <Callout type="highlight">
                                <div className="space-y-3 text-[var(--muted-foreground)]">
                                    <p>
                                        <strong className="text-[var(--foreground)]">Insight:</strong> Students prefer studying alone for focus, but still want
                                        a sense of presence to reduce isolation.
                                    </p>
                                    <p>
                                        <strong className="text-[var(--foreground)]">Design decision:</strong> Build “passive social” accountability: friends
                                        can see that you’re studying without needing chat or live co-working.
                                    </p>
                                </div>
                            </Callout>
                        </div>
                    </div>
                </Section>

                {/* Persona */}
                <Section id="research" title="Persona" eyebrow="Meet the User">
                    <div className="gsap-fade-up prose prose-lg dark:prose-invert max-w-full mb-12 text-[var(--muted-foreground)]">
                        <p>
                            Based on our research, we created <strong>Sofia the Student</strong>, a user persona representing the typical UofT student struggle.
                        </p>
                    </div>

                    <div className="gsap-fade-up mb-24">
                            <div className="bg-[var(--card)]/50 backdrop-blur border border-[var(--border)] rounded-3xl overflow-hidden shadow-2xl p-6 md:p-8 flex items-center justify-center">
                                <div className="text-center max-w-lg">
                                    <p className="mb-4 text-[var(--muted-foreground)]">Persona and large imagery are omitted from this published build to reduce asset size. View the full research artifacts and visuals in the Figma prototype.</p>
                                    <a
                                        href="https://www.figma.com/proto/gZGDMwAZt8D3Xlscso90Cg/Design-Part-2"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[var(--border)] bg-[var(--card)]/50 hover:bg-[var(--primary)]/5 transition"
                                    >
                                        View in Figma
                                        <ArrowUpRight size={16} />
                                    </a>
                                </div>
                            </div>
                    </div>

                        {/* Need Statements */}
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold mb-6">User Needs</h3>
                            {[
                                {
                                    title: "Study Tracking",
                                    desc: "Sofia needs a way to track her study progress and build consistent habits to feel accomplished and reduce guilt."
                                },
                                {
                                    title: "Supportive Accountability",
                                    desc: "Sofia needs a way to stay accountable through a non-judgmental community to avoid procrastination."
                                },
                                {
                                    title: "Distraction Management",
                                    desc: "Sofia needs a way to minimize phone and social media distractions to stay concentrated."
                                },
                                {
                                    title: "Life Balance",
                                    desc: "Sofia needs a way to organize her time between studying, work, and life to avoid burnout."
                                }
                            ].map((need, i) => (
                                <div
                                    key={i}
                                    className="gsap-fade-up p-6 bg-[var(--card)]/30 border border-[var(--border)] rounded-2xl"
                                >
                                    <h4 className="font-bold text-[var(--foreground)] mb-2">{need.title}</h4>
                                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                                        "{need.desc}"
                                    </p>
                                </div>
                            ))}
                        </div>
                    
                    {/* Empathy Map Image */}
                    <div className="mb-24">
                        <h3 className="text-3xl font-bold mt-28 mb-8 text-center text-[var(--muted-foreground)]"> Empathy Map</h3>
                        <p className="text-[var(--muted-foreground)] mb-12 max-w-3xl mx-auto text-center">
                            To better understand Sofia's mindset, we created an empathy map outlining her thoughts, feelings, and experiences during a typical study session.
                        </p>
                            <div className="gsap-fade-up border border-[var(--border)] rounded-3xl p-6 max-w-4xl mx-auto text-center">
                                <p className="text-[var(--muted-foreground)] mb-4">Empathy map images are available in the project Figma file. To keep this deployment lightweight, we've linked directly to the prototype and assets.</p>
                                <a href="https://www.figma.com/proto/gZGDMwAZt8D3Xlscso90Cg/Design-Part-2" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[var(--border)] hover:bg-[var(--primary)]/5 transition">
                                    Open Research Artifacts in Figma
                                    <ArrowUpRight size={14} />
                                </a>
                            </div>
                    </div>

                    {/* As-Is Scenario (Current Journey) */}
                    <div className="gsap-fade-up mb-24">
                        <h3 className="text-3xl font-bold mb-8">As-Is Scenario (Current Journey)</h3>
                        <p className="text-[var(--muted-foreground)] mb-8 max-w-full">
                            Sofia's current study routine is marked by procrastination and distraction. Below is a breakdown of her emotional journey through a typical study session, highlighting key pain points: distractions, lack of structure, inconsistent study schedule, and lack of motivation.
                        </p>
                        <div className="space-y-6">
                            {[
                                {
                                    phase: "1. DECIDING TO STUDY",
                                    action: "Opens laptop and spreads notes on desk. Putting on Music. Opens Notion and Quercus. Finding a library or cafe.",
                                    thoughts: "Okay let's studying for this mid-term. My Biggest challenge is I need a high activation energy *needed to start. I wonder which library or cafe is open right now. Studying is such a chore it's not an important task.",
                                    feelings: [
                                        { text: "Anxious", color: "text-red-600 dark:text-red-400" },
                                        { text: "Stressed", color: "text-red-600 dark:text-red-400" },
                                        { text: "Not Motivated", color: "text-orange-600 dark:text-orange-400" },
                                        { text: "Annoyed", color: "text-amber-600 dark:text-amber-400" },
                                        { text: "Lacking Urgency", color: "text-slate-600 dark:text-slate-400" }
                                    ],
                                    color: "border-red-500/30 bg-red-500/5"
                                },
                                {
                                    phase: "2. GETTING DISTRACTED",
                                    action: "Scrolls through Instagram and TikTok. Replies to Messages and group chats. Watches Short Videos. Plays on with friends on phone.",
                                    thoughts: "Let me check Instagram for 5 minutes. I'll start after replying to a few texts. Five more minutes. Where do I even begin? I'll feel more confident after a short break.",
                                    feelings: [
                                        { text: "Relaxed", color: "text-blue-600 dark:text-blue-400" },
                                        { text: "Distracted", color: "text-yellow-600 dark:text-yellow-400" },
                                        { text: "Procrastinating", color: "text-orange-600 dark:text-orange-400" },
                                        { text: "Avoidant", color: "text-amber-600 dark:text-amber-400" },
                                        { text: "Avoiding", color: "text-amber-600 dark:text-amber-400" },
                                        { text: "Dopamine rush", color: "text-purple-600 dark:text-purple-400" }
                                    ],
                                    color: "border-yellow-500/30 bg-yellow-500/5"
                                },
                                {
                                    phase: "3. ATTEMPTING TO FOCUS",
                                    action: "Organizes notes but doesn't actually study. Turns to Do Not Disturb on their phone (social Media). Highlights random sections to seem 'productive'. Checks the assignments tab on Quercus. Inconsistent Study schedule.",
                                    thoughts: "Why am I not processing any of this material? Out of sight out of mind(Phone). Using my phone disrupted my time. Where do I even begin? When will I have time for this?",
                                    feelings: [
                                        { text: "Stressed", color: "text-red-600 dark:text-red-400" },
                                        { text: "Pressured", color: "text-orange-600 dark:text-orange-400" },
                                        { text: "Guilty", color: "text-amber-600 dark:text-amber-400" },
                                        { text: "Confused", color: "text-yellow-600 dark:text-yellow-400" },
                                        { text: "Motivated", color: "text-green-600 dark:text-green-400" },
                                        { text: "Overwhelmed", color: "text-red-600 dark:text-red-400" }
                                    ],
                                    color: "border-orange-500/30 bg-orange-500/5"
                                },
                                {
                                    phase: "4. STUDYING LATE AT NIGHT",
                                    action: "Attempts to cram 10 chapters, searches summaries online. Does a Pomodoro Method. Drinks Coffee to stay awake. Checks Phone again when tired.",
                                    thoughts: "There's so much things to do I'm so unmotivated. I am finally having some progress! I should have started earlier. Study is a private discipline not a public performance.",
                                    feelings: [
                                        { text: "Mentally Drained", color: "text-slate-600 dark:text-slate-400" },
                                        { text: "Frustrated", color: "text-red-600 dark:text-red-400" },
                                        { text: "Fatigued", color: "text-amber-600 dark:text-amber-400" },
                                        { text: "Burnt out", color: "text-orange-600 dark:text-orange-400" },
                                        { text: "Disappointed", color: "text-slate-600 dark:text-slate-400" }
                                    ],
                                    color: "border-amber-500/30 bg-amber-500/5"
                                },
                                {
                                    phase: "5. FINISHING STUDIES",
                                    action: "Closes laptop. Packs up to head home. Scrolls phone again. Makes a Vague plan for 'Tomorrow'. Distractions. Inconsistent Study schedule.",
                                    thoughts: "At least I studied 4 chapters for the mid-term. I wonder what I missed on Instagram. I'll continue studying tomorrow. Omg I should go home and sleep. I have work in the morning.",
                                    feelings: [
                                        { text: "Confident", color: "text-green-600 dark:text-green-400" },
                                        { text: "Accomplished", color: "text-emerald-600 dark:text-emerald-400" },
                                        { text: "Satisfied", color: "text-blue-600 dark:text-blue-400" },
                                        { text: "Relieved", color: "text-cyan-600 dark:text-cyan-400" },
                                        { text: "Calm", color: "text-teal-600 dark:text-teal-400" }
                                    ],
                                    color: "border-slate-500/30 bg-slate-500/5"
                                }
                            ].map((step, i) => (
                                <div key={i} className={`p-6 rounded-2xl border ${step.color} backdrop-blur-sm grid md:grid-cols-4 gap-4`}>
                                    <div className="font-bold text-[var(--foreground)] uppercase tracking-wider text-sm md:col-span-1">{step.phase}</div>
                                    <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                        <div>
                                            <div className="text-[var(--muted-foreground)] text-xs uppercase mb-1 font-semibold">Doing</div>
                                            <div className="text-[var(--foreground)] leading-relaxed">{step.action}</div>
                                        </div>
                                        <div>
                                            <div className="text-[var(--muted-foreground)] text-xs uppercase mb-1 font-semibold">Thinking</div>
                                            <div className="italic text-[var(--muted-foreground)] leading-relaxed">"{step.thoughts}"</div>
                                        </div>
                                        <div>
                                            <div className="text-[var(--muted-foreground)] text-xs uppercase mb-1 font-semibold">Feeling</div>
                                            <div className="font-medium leading-relaxed flex flex-wrap gap-2">
                                                {Array.isArray(step.feelings) ? step.feelings.map((feeling, idx) => (
                                                    <span key={idx} className={`${feeling.color} font-semibold`}>
                                                        {feeling.text}{idx < step.feelings.length - 1 ? ',' : ''}
                                                    </span>
                                                )) : step.feelings}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>



                {/* Ideation */}
                <Section id="ideation" title="Ideation" eyebrow="Generating Solutions">
                        <div className="gsap-fade-up mb-12">
                        <h3 className="text-3xl font-bold mb-6">Ideas</h3>
                        <div className="bg-[var(--card)]/50 backdrop-blur border border-[var(--border)] rounded-3xl p-6 max-w-4xl">
                            <p className="text-[var(--muted-foreground)] mb-4">Workshop artifacts (sticky notes, dot voting) are available in the Figma project file. To keep the deployed build under Cloudflare Workers' asset limits, we've linked to the canonical source.</p>
                            <a href="https://www.figma.com/proto/gZGDMwAZt8D3Xlscso90Cg/Design-Part-2" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[var(--border)] bg-[var(--card)]/50 hover:bg-[var(--primary)]/5 transition">
                                Open Workshop Artifacts in Figma
                                <ArrowUpRight size={16} />
                            </a>
                        </div>
                    </div>

                    <div className="gsap-fade-up prose prose-lg dark:prose-invert max-w-4xl mb-12 text-[var(--muted-foreground)] leading-relaxed prose-headings:tracking-tight prose-headings:text-[var(--foreground)] prose-p:leading-relaxed prose-ul:pl-6 prose-li:leading-relaxed prose-strong:text-[var(--foreground)]">
                        <h3 className="text-3xl font-semibold text-[var(--foreground)] mb-6">Ideation Summary</h3>
                        <ul>
                            <li>
                                <strong>Two-round storm</strong>: everyone pitched two intentionally absurd ideas first to loosen thinking, then a second round of playful-but-workable concepts.
                            </li>
                            <li>
                                <strong>Clustered themes</strong>: motivation and rewards; accountability and anti-distraction; mascot-based emotional support; social collaboration.
                            </li>
                            <li>
                                <strong>Kept what was buildable</strong>: filtered for feasibility and clarity, keeping high-energy ideas that we could realistically ship—mostly motivation-forward concepts.
                            </li>
                        </ul>
                        <p>
                            <strong>Outcome:</strong> a practical direction that still carries the imaginative spark from the earliest round.
                        </p>
                    </div>

                    <div className="gsap-fade-up mb-24">
                        <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
                            <h3 className="text-3xl font-bold mb-6">Prioritization Grid</h3>
                            <span className="text-m font-semibold text-[var(--muted-foreground)]">Impact vs Feasibility</span>
                        </div>
                        <div className="bg-[var(--card)]/50 backdrop-blur border border-[var(--border)] rounded-3xl p-6">
                            <p className="text-[var(--muted-foreground)] mb-4">Prioritization visuals are included in the Figma prototype. Open the file to inspect the grid and rationale behind feature prioritization.</p>
                            <a href="https://www.figma.com/proto/gZGDMwAZt8D3Xlscso90Cg/Design-Part-2" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[var(--border)] hover:bg-[var(--primary)]/5 transition">
                                View Prioritization Grid in Figma
                                <ArrowUpRight size={14} />
                            </a>
                        </div>
                        <div className="text-[var(--muted-foreground)] mt-6 max-w-4xl space-y-3 leading-relaxed">
                            <p className="text-3xl mb-6 mt-12 text-[var(--foreground)] font-semibold">Prioritization Grid Summary</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>No brainers</strong>: Accountability Creature and The Noise Storm</li>
                                <li><strong>Quick wins</strong>: Stress-free scheduling and Study Seeds</li>
                                <li><strong>Big bets</strong>: distraction-blocking "Focus" Bubbles</li>
                                <li><strong>Further exploration</strong>: unclear or low-value items parked so the roadmap stays focused on high-impact, buildable tools.</li>
                            </ul>
                        </div>
                    </div>
                </Section>

                {/* To-Be Scenario */}
                <Section title="To-Be Scenario" eyebrow="The Ideal Journey">
                    <div className="gsap-fade-up mb-24">
                        <p className="text-[var(--muted-foreground)] mb-8 max-w-full">
                            With our proposed solution, Sofia's study sessions become structured and supported by her digital mascot. Below is a breakdown of her improved emotional journey through a typical study session.
                        </p>
                        <div className="space-y-6">
                            {[
                                {
                                    phase: "DECIDING TO STUDY",
                                    action: "Opens the Accountability mascot App first instead of social media. Sees their mascot waiting with the daily task list. Adds planned study tasks for the day. Checks if the mascot is happy, rewarding each added task.",
                                    thoughts: "Let's open the app to enter my tasks. Starting feels easier when my mascot is cheering me on. Let me finish the first task and earn some XP. Everything is already organized here. This lowers the pressure of figuring out where to start.",
                                    feelings: [
                                        { text: "Motivated", color: "text-emerald-600 dark:text-emerald-400" },
                                        { text: "Supported by the mascot", color: "text-green-600 dark:text-green-400" },
                                        { text: "Ready to begin", color: "text-teal-600 dark:text-teal-400" },
                                        { text: "Clear Head", color: "text-cyan-600 dark:text-cyan-400" }
                                    ],
                                    color: "border-green-500/30 bg-green-500/5"
                                },
                                {
                                    phase: "GETTING DISTRACTED",
                                    action: "Enters 'focus mode' which hides distracting apps. Enables a feature where the Mascot stays on screen as a gentle reminder not to open social media apps. Uses a timer to guide study sessions. Gains XP for every completed activity.",
                                    thoughts: "Oh my study mascot is sad because I got distracted by social media apps. I want to improve my progress. If I stay focused, I can unlock more items.",
                                    feelings: [
                                        { text: "Less tempted to scroll", color: "text-blue-600 dark:text-blue-400" },
                                        { text: "More disciplined", color: "text-indigo-600 dark:text-indigo-400" },
                                        { text: "Engaged and focused", color: "text-purple-600 dark:text-purple-400" },
                                        { text: "Proud of resisting distractions", color: "text-emerald-600 dark:text-emerald-400" }
                                    ],
                                    color: "border-amber-500/30 bg-amber-500/5"
                                },
                                {
                                    phase: "ATTEMPTING TO FOCUS",
                                    action: "Completes task one by one. Tracks progress through progress bar feature in the app. Earns rewards for each task done.",
                                    thoughts: "This feels like a challenge I actually want to win. I'm actually understanding the material now. Breaking this into smaller chunks helps a lot. Seeing progress makes studying feel doable.",
                                    feelings: [
                                        { text: "Calmer and less overwhelmed", color: "text-blue-600 dark:text-blue-400" },
                                        { text: "Confidence in progress", color: "text-emerald-600 dark:text-emerald-400" },
                                        { text: "Steady and in control", color: "text-teal-600 dark:text-teal-400" },
                                        { text: "Encouraged by real improvement", color: "text-green-600 dark:text-green-400" }
                                    ],
                                    color: "border-blue-500/30 bg-blue-500/5"
                                },
                                {
                                    phase: "STUDYING LATE AT NIGHT",
                                    action: "Gets reminders from the app earlier in the day. Interacts with mascot to avoid burnouts or mental fatigue. Checks friends mascots and progress through the app for accountability.",
                                    thoughts: "I have so many tasks listed but I see my friends are still studying, I am getting motivated! I don't have to cram anymore. My mascot keeps me on a good study schedule. Seeing others study keeps me motivated too.",
                                    feelings: [
                                        { text: "Energized rather than exhausted", color: "text-purple-600 dark:text-purple-400" },
                                        { text: "Supported by the community and mascot", color: "text-indigo-600 dark:text-indigo-400" },
                                        { text: "More relaxed during exam season", color: "text-cyan-600 dark:text-cyan-400" },
                                        { text: "Proud of building good habits", color: "text-emerald-600 dark:text-emerald-400" }
                                    ],
                                    color: "border-purple-500/30 bg-purple-500/5"
                                },
                                {
                                    phase: "FINISHING STUDIES",
                                    action: "Marks final task as complete. Upgrades or customizes the mascot through coins earned. Reviews progress bars, streaks and study hours. Makes new tasks and a clear plan for the upcoming days.",
                                    thoughts: "I will finish these tasks, and enter new tasks for upcoming days so that I have a clear plan!! I actually did everything I planned today. My progress streak looks great. My mascot is improving because I stayed consistent. I'm ready for tomorrow.",
                                    feelings: [
                                        { text: "Accomplished and satisfied", color: "text-emerald-600 dark:text-emerald-400" },
                                        { text: "Calm and organized", color: "text-blue-600 dark:text-blue-400" },
                                        { text: "Confidence for future tasks", color: "text-green-600 dark:text-green-400" },
                                        { text: "Motivated to return tomorrow", color: "text-teal-600 dark:text-teal-400" }
                                    ],
                                    color: "border-indigo-500/30 bg-indigo-500/5"
                                }
                            ].map((step, i) => (
                                <div key={i} className={`p-6 rounded-2xl border ${step.color} backdrop-blur-sm grid md:grid-cols-4 gap-4`}>
                                    <div className="font-bold text-[var(--foreground)] uppercase tracking-wider text-sm md:col-span-1">{step.phase}</div>
                                    <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                        <div>
                                            <div className="text-[var(--muted-foreground)] text-xs uppercase mb-1 font-semibold">Doing</div>
                                            <div className="text-[var(--foreground)] leading-relaxed">{step.action}</div>
                                        </div>
                                        <div>
                                            <div className="text-[var(--muted-foreground)] text-xs uppercase mb-1 font-semibold">Thinking</div>
                                            <div className="italic text-[var(--muted-foreground)] leading-relaxed">"{step.thoughts}"</div>
                                        </div>
                                        <div>
                                            <div className="text-[var(--muted-foreground)] text-xs uppercase mb-1 font-semibold">Feeling</div>
                                            <div className="font-medium leading-relaxed flex flex-wrap gap-2">
                                                {Array.isArray(step.feelings) ? step.feelings.map((feeling, idx) => (
                                                    <span key={idx} className={`${feeling.color} font-semibold`}>
                                                        {feeling.text}{idx < step.feelings.length - 1 ? ',' : ''}
                                                    </span>
                                                )) : step.feelings}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* Low-Fidelity Prototype */}
                <Section id="design" title="Low-Fidelity Prototype" eyebrow="Phase 3: Paper Prototypes">
                    <div className="gsap-fade-up prose prose-lg dark:prose-invert max-w-4xl mb-16 text-[var(--muted-foreground)]">
                        <p>
                            We started with hand-drawn paper sketches to quickly test our core concepts without getting distracted by visual design. We used a "Human Computer" method where one team member manually swapped screens based on user interactions.
                        </p>
                    </div>
                    <div className="gsap-fade-up mb-24">
                        <div className="bg-[var(--card)]/50 backdrop-blur border border-[var(--border)] rounded-3xl overflow-hidden shadow-2xl p-2 md:p-4">
                            <Image
                                src="/images/case-study/study-mascot/low_fi.jpeg"
                                alt="Low-Fidelity Paper Prototypes"
                                width={2400}
                                height={1350}
                                className="w-full h-auto rounded-2xl"
                            />
                        </div>
                    </div>
                </Section>

                {/* Low-Fidelity Evaluation */}
                <Section title="Low-Fidelity Evaluation" eyebrow="Validation Round 1">
                    <div className="gsap-fade-up mb-16">
                        <div className="bg-[var(--card)]/60 backdrop-blur border border-[var(--border)] p-8 rounded-3xl mb-10 space-y-6">
                            <div className="flex flex-wrap gap-3 text-xs font-semibold tracking-wide uppercase text-[var(--muted-foreground)]">
                                <span className="px-3 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">Paper prototype</span>
                                <span className="px-3 py-1 rounded-full bg-[var(--foreground)]/5 text-[var(--foreground)]">Human computer</span>
                                <span className="px-3 py-1 rounded-full bg-[var(--foreground)]/5 text-[var(--foreground)]">Think-aloud</span>
                                <span className="px-3 py-1 rounded-full bg-[var(--foreground)]/5 text-[var(--foreground)]">3 students</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[var(--foreground)] mb-4">Method & Setup</h3>
                                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4">
                                    Hand-drawn paper sketches with a "Human Computer" approach: one team member swapped screens in response to participant gestures. Participants received only a brief overview, no task instructions. Think-aloud protocol captured hesitations, actions, and verbal feedback as another team member observed.
                                </p>
                            </div>
                        </div>

                        <div className="mb-10">
                            <h3 className="text-lg font-bold text-[var(--foreground)] mb-4">Representative Users</h3>
                            <div className="grid md:grid-cols-3 gap-4 text-sm">
                                <div className="p-4 rounded-2xl bg-[var(--background)]/70 border border-[var(--border)]">
                                    <p className="font-semibold text-[var(--foreground)] mb-2">Productivity App User</p>
                                    <p className="text-[var(--muted-foreground)] text-xs leading-relaxed">Regularly uses focus and timer tools to manage study time.</p>
                                </div>
                                <div className="p-4 rounded-2xl bg-[var(--background)]/70 border border-[var(--border)]">
                                    <p className="font-semibold text-[var(--foreground)] mb-2">ADHD Student</p>
                                    <p className="text-[var(--muted-foreground)] text-xs leading-relaxed">Benefits from structure and guided study sessions; values distraction reduction.</p>
                                </div>
                                <div className="p-4 rounded-2xl bg-[var(--background)]/70 border border-[var(--border)]">
                                    <p className="font-semibold text-[var(--foreground)] mb-2">Gamification Enthusiast</p>
                                    <p className="text-[var(--muted-foreground)] text-xs leading-relaxed">Driven by reward systems, progress tracking, and unlockable customization.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-10">
                            <h3 className="text-lg font-bold text-[var(--foreground)] mb-4">Tasks Tested</h3>
                            <ul className="space-y-2 text-sm text-[var(--muted-foreground)] list-disc pl-5 leading-relaxed">
                                <li>Add a task and start a focus session</li>
                                <li>Understand and use focus mode (timer, session control)</li>
                                <li>Complete a task with verification (photo upload)</li>
                                <li>Access the shop to view rewards and customization options</li>
                            </ul>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                            <div className="p-6 rounded-3xl border border-emerald-500/25 bg-emerald-500/5">
                                <h4 className="font-bold text-emerald-600 dark:text-emerald-400 mb-4 tracking-tight">What Worked Well</h4>
                                <ul className="space-y-3 text-sm text-[var(--muted-foreground)] leading-relaxed">
                                    <li className="flex gap-2"><Check size={16} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" /> Core concept was motivating and easy to understand across all participants.</li>
                                    <li className="flex gap-2"><Check size={16} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" /> "Add Task" button location and task form flow felt natural and intuitive.</li>
                                    <li className="flex gap-2"><Check size={16} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" /> Mascot design, coins, and customization features described as welcoming and engaging.</li>
                                    <li className="flex gap-2"><Check size={16} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" /> ADHD participant excited about focus mode as a distraction-reduction tool.</li>
                                    <li className="flex gap-2"><Check size={16} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" /> Social accountability (seeing others study) resonated as motivating for all users.</li>
                                </ul>
                            </div>
                            <div className="p-6 rounded-3xl border border-amber-500/25 bg-amber-500/5">
                                <h4 className="font-bold text-amber-600 dark:text-amber-400 mb-4 tracking-tight">Usability Issues</h4>
                                <ul className="space-y-3 text-sm text-[var(--muted-foreground)] leading-relaxed">
                                    <li className="flex gap-2"><ArrowUpRight size={16} className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" /> No pause button; users felt trapped in focus mode without an exit path.</li>
                                    <li className="flex gap-2"><ArrowUpRight size={16} className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" /> Privacy concerns around photo uploads; unclear where proof images would be stored/shared.</li>
                                    <li className="flex gap-2"><ArrowUpRight size={16} className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" /> Abrupt transition into focus mode; users unsure if session had actually started.</li>
                                    <li className="flex gap-2"><ArrowUpRight size={16} className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" /> Photo upload timing confusing; some thought it occurred during the session, not after.</li>
                                    <li className="flex gap-2"><ArrowUpRight size={16} className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" /> Timer was not visually active; session state (running, paused, completed) was not clearly displayed.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="p-6 rounded-3xl border border-sky-500/25 bg-sky-500/5 mb-10">
                            <h4 className="font-bold text-sky-600 dark:text-sky-400 mb-4 tracking-tight">Design Implications</h4>
                            <ul className="space-y-2 text-sm text-[var(--muted-foreground)] leading-relaxed list-disc pl-5">
                                <li>Add a <strong>Pause button</strong> next to "End Session" for user control during focus mode.</li>
                                <li>Provide <strong>clear "Skip" option</strong> for photo upload to respect privacy preferences.</li>
                                <li>Clarify <strong>timing of photo upload</strong> with on-screen text that it occurs at session end and is optional.</li>
                                <li>Add a <strong>confirmation screen</strong> before entering focus mode so the start is unambiguous.</li>
                                <li>Make <strong>session state (running, paused, completed) explicitly visible</strong> and keep timer visually active.</li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-3xl border border-[var(--primary)]/25 bg-[var(--primary)]/5 text-center space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted-foreground)]">Outcome</p>
                            <h3 className="font-bold text-lg text-[var(--foreground)]">Core concept validated; UX refinements needed for clarity and trust</h3>
                            <p className="text-[var(--muted-foreground)] max-w-full mx-auto leading-relaxed text-sm">
                                The evaluation confirmed the concept resonates with our target audience: focus sessions, social accountability, and gamified rewards are engaging and motivating. Key findings surface usability gaps, mainly around system status visibility, privacy clarity, and user control that will guide the mid-fidelity prototype iteration.
                            </p>
                        </div>
                    </div>
                </Section>

                {/* Medium-Fidelity Prototype */}
                <Section id="prototypes" title="Medium-Fidelity Prototype" eyebrow="Phase 4: Clickable Mocks">
                    <div className="gsap-fade-up prose prose-lg dark:prose-invert mb-16 text-[var(--muted-foreground)]">
                        <p>
                            We incorporated the feedback to build a clickable Figma prototype. We focused on the three core flows: <strong className="text-[var(--foreground)]">Adding a Task</strong>, <strong className="text-[var(--foreground)]">Social Feed</strong>, and <strong className="text-[var(--foreground)]">Shop Customization</strong>.
                        </p>
                    </div>

                    <div className="mb-16">
                        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)]/60 backdrop-blur-sm p-6 text-center">
                            <h4 className="text-xl font-bold text-[var(--foreground)] mb-3">Medium-fidelity screens omitted</h4>
                            <p className="text-[var(--muted-foreground)] mb-4">To avoid shipping large image assets with this build, the detailed mid-fidelity screen images are hosted in the Figma file. Use the embedded prototype below or open Figma for full-resolution screens.</p>
                            <a href="https://www.figma.com/proto/gZGDMwAZt8D3Xlscso90Cg/Design-Part-2" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[var(--border)] bg-[var(--card)]/50 hover:bg-[var(--primary)]/5 transition">
                                Open Mid-Fidelity Screens in Figma
                                <ArrowUpRight size={16} />
                            </a>
                        </div>
                    </div>
                    <h3 className="text-3xl font-bold mb-8 text-center text-[var(--muted-foreground)]">Embedded Figma Prototype</h3>
                    {/* Figma Embed */}
                    <div className="gsap-fade-up mb-24">
                        <div className="mx-auto w-full max-w-[420px] sm:max-w-[520px] md:max-w-[620px]">
                            <div className="relative w-full aspect-[9/16] overflow-hidden rounded-4xl border border-[var(--border)] bg-[var(--card)] shadow-2xl">
                                <iframe
                                    title="Study Mascot medium-fidelity Figma prototype"
                                    src="https://embed.figma.com/proto/gZGDMwAZt8D3Xlscso90Cg/Design-Part-2?node-id=152-165&p=f&scaling=contain&content-scaling=fixed&page-id=148%3A2&starting-point-node-id=152%3A165&embed-host=share"
                                    allowFullScreen
                                    className="absolute inset-0 h-full w-full"
                                />
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Medium-Fidelity Evaluation */}
                <Section title="Medium-Fidelity Evaluation" eyebrow="Validation Round 2">
                    <div className="gsap-fade-up mb-24">
                        <div className="bg-[var(--card)]/60 backdrop-blur border border-[var(--border)] p-8 rounded-3xl mb-10 space-y-6">
                            <div className="flex flex-wrap gap-3 text-xs font-semibold tracking-wide uppercase text-[var(--muted-foreground)]">
                                <span className="px-3 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">3 students</span>
                                <span className="px-3 py-1 rounded-full bg-[var(--foreground)]/5 text-[var(--foreground)]">Think-aloud</span>
                                <span className="px-3 py-1 rounded-full bg-[var(--foreground)]/5 text-[var(--foreground)]">Zoom remote</span>
                                <span className="px-3 py-1 rounded-full bg-[var(--foreground)]/5 text-[var(--foreground)]">Clickable Figma</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[var(--foreground)] mb-4">Method & Setup</h3>
                                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4">
                                    We built a clickable medium-fidelity prototype in Figma, incorporating insights from low-fidelity testing. Participants interacted directly with the prototype via shared screens on Zoom using a think-aloud protocol. This approach let us observe natural navigation patterns without guidance, unless participants got completely stuck. The evaluation focused on core flow, clarity, usability friction, and reactions to motivation and accountability features.
                                </p>
                            </div>
                        </div>

                        <div className="mb-10">
                            <h3 className="text-lg font-bold text-[var(--foreground)] mb-4">Representative Users</h3>
                            <div className="space-y-3">
                                <div className="p-4 rounded-2xl bg-[var(--background)]/70 border border-[var(--border)]">
                                    <p className="font-semibold text-[var(--foreground)] mb-2">Participant 1: 4th Year, Tech-Savvy</p>
                                    <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">Experienced with productivity apps and Pomodoro timers. Provided precise feedback on motivation flow, logic gaps, and system feedback quality.</p>
                                </div>
                                <div className="p-4 rounded-2xl bg-[var(--background)]/70 border border-[var(--border)]">
                                    <p className="font-semibold text-[var(--foreground)] mb-2">Participant 2: 3rd Year, Moderate Tech Fluency</p>
                                    <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">Regular mobile app user. Focused feedback on visual clarity, icon affordances, and whether elements "felt" interactive.</p>
                                </div>
                                <div className="p-4 rounded-2xl bg-[var(--background)]/70 border border-[var(--border)]">
                                    <p className="font-semibold text-[var(--foreground)] mb-2">Participant 3: 2nd Year, Socially Motivated</p>
                                    <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">Frequent productivity-app user. Centered insights on motivation, shop, progress comparison, and friends' activity engagement.</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                            <div className="p-6 rounded-3xl border border-emerald-500/25 bg-emerald-500/5">
                                <h4 className="font-bold text-emerald-600 dark:text-emerald-400 mb-4 tracking-tight">What Worked Well</h4>
                                <ul className="space-y-3 text-sm text-[var(--muted-foreground)] leading-relaxed">
                                    <li className="flex gap-2"><Check size={16} className="text-emerald-600 dark:text-emerald-400" /> “Add Task” flow felt simple and direct.</li>
                                    <li className="flex gap-2"><Check size={16} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" /> "Add Task" flow described as "simple" and "straight to the point"; timer interface clean and easy to read.</li>
                                    <li className="flex gap-2"><Check size={16} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" /> Verification photo feature intuitive; camera icon made the path immediately obvious.</li>
                                    <li className="flex gap-2"><Check size={16} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" /> Shop and inventory screens clear; mascot customization enjoyed by all.</li>
                                    <li className="flex gap-2"><Check size={16} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" /> Social component added new engagement interest; visual simplicity and rewards felt welcoming.</li>
                                </ul>
                            </div>
                            <div className="p-6 rounded-3xl border border-amber-500/25 bg-amber-500/5">
                                <h4 className="font-bold text-amber-600 dark:text-amber-400 mb-4 tracking-tight">Usability Issues</h4>
                                <ul className="space-y-3 text-sm text-[var(--muted-foreground)] leading-relaxed">
                                    <li className="flex gap-2"><ArrowUpRight size={16} className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" /> Timer behavior unclear on app close; greyed-out pause button confusing; need clearer end-of-session states.</li>
                                    <li className="flex gap-2"><ArrowUpRight size={16} className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" /> Public vs private photos ambiguous; point system and photo-task linking unclear.</li>
                                    <li className="flex gap-2"><ArrowUpRight size={16} className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" /> Friends page structure confusing; users expected a list, not posts; wanted leaderboard.</li>
                                    <li className="flex gap-2"><ArrowUpRight size={16} className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" /> Shop "Buy" interpreted as instant purchase; subtle quantity indicators; limited inventory.</li>
                                    <li className="flex gap-2"><ArrowUpRight size={16} className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" /> Missing progress tracking (completed-task history, weekly summaries, top-task stats).</li>
                                </ul>
                            </div>
                        </div>

                        <div className="p-6 rounded-3xl border border-sky-500/25 bg-sky-500/5 mb-10">
                            <h4 className="font-bold text-sky-600 dark:text-sky-400 mb-4 tracking-tight">Design Implications</h4>
                            <ul className="space-y-2 text-sm text-[var(--muted-foreground)] leading-relaxed list-disc pl-5">
                                <li>Strengthen session controls with clearer pause/end/extend states; improve timer visibility when app is backgrounded.</li>
                                <li>Add explicit privacy labels and clarify photo-to-task linking; simplify points system explanation.</li>
                                <li>Restructure Friends page: separate social feed from friend list; add leaderboard for social motivation.</li>
                                <li>Clarify shop interactions: explicit "Confirm Purchase" step; surface pricing and quantities clearly; expand inventory over time.</li>
                                <li>Add progress-tracking features: completed-task history, weekly summaries, and top-task streaks.</li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-3xl border border-[var(--primary)]/25 bg-[var(--primary)]/5 text-center space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted-foreground)]">Outcome</p>
                            <h3 className="font-bold text-lg text-[var(--foreground)]">Core concept on the right track; UX clarity and feature depth need refinement</h3>
                            <p className="text-[var(--muted-foreground)] max-w-3xl mx-auto leading-relaxed text-sm">
                                Participants reported smooth, intriguing flows with meaningful social engagement. However, several usability gaps emerged around session controls, visibility rules, shop labeling, and friends page structure. Addressing these will reduce confusion, strengthen user confidence, and enhance long-term motivation and retention.
                            </p>
                        </div>

                    </div>
                </Section>

                {/* 7. Reflection */}
                <Section id="reflection" className="mt-0" title="Personal Reflection" eyebrow="What I Learned">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="gsap-fade-up mb-16">
                            <Callout type="quote">
                                <div className="space-y-3">
                                    <p>
                                        "Design is a powerful tool for solving problems and changing human behavior. When done well, it becomes invisible - not because it goes unnoticed, but because it works so seamlessly that users aren't aware of the design at all. They're only aware of what they've accomplished."
                                    </p>
                                    <p className="text-xs font-semibold text-[var(--muted-foreground)] pt-2">
                                        Don Norman, <em>The Design of Everyday Things</em>
                                    </p>
                                </div>
                            </Callout>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 text-left">
                            <div className="hover:-translate-y-1 transition-transform p-8 bg-gradient-to-br from-[var(--primary)]/10 to-transparent rounded-3xl border border-[var(--primary)]/20">
                                <h3 className="font-bold text-xl mb-4 text-[var(--primary)]">Wrap it up...</h3>
                                <p className="text-[var(--muted-foreground)] leading-relaxed">
                                    This project reinforced INF352's core principles: <strong className="text-[var(--foreground)]">iterative testing and user empathy</strong>. "Passive social" emerged as a powerful insight as students crave presence without judgment, not surveillance.
                                </p>
                            </div>
                            <div className="hover:-translate-y-1 transition-transform p-8 bg-[var(--card)]/50 backdrop-blur rounded-3xl border border-[var(--border)]">
                                <h3 className="font-bold text-xl mb-4">What's Next?</h3>
                                <p className="text-[var(--muted-foreground)] leading-relaxed">
                                    Refine the Friends List structure, harden session controls, and add accessibility modes. The goal: a design so seamless it becomes invisible.</p>
                            </div>
                        </div>
                    </div>
                </Section>

                <Footer />
            </main>
        </div>
    );
}








