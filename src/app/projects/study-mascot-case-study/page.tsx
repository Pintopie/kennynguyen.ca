"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, Check, Zap, ArrowUpRight } from "lucide-react";
import { useThemePreference } from "@/shared/hooks/useTheme";
import AuroraBackground from "@/shared/layout/AuroraBackground";
import { Section } from "@/features/case-study/components/Section";
import { StatCard } from "@/features/case-study/components/StatCard";
import { Callout } from "@/features/case-study/components/Callout";

// Animation Variants
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

export default function StudyMascotCaseStudy() {
    const { dark, setDark } = useThemePreference();
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
    const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 50]);

    return (
        <div ref={containerRef} className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-x-hidden selection:bg-[var(--primary)]/20 selection:text-[var(--primary)]">
            <AuroraBackground dark={dark} />
            {/* Navigation */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
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
                        <a href="#overview" className="hover:text-[var(--primary)] hover:scale-105 transition-all">Overview</a>
                        <a href="#research" className="hover:text-[var(--primary)] hover:scale-105 transition-all">Research</a>
                        <a href="#ideation" className="hover:text-[var(--primary)] hover:scale-105 transition-all">Ideation</a>
                        <a href="#design" className="hover:text-[var(--primary)] hover:scale-105 transition-all">Design</a>
                        <a href="#prototypes" className="hover:text-[var(--primary)] hover:scale-105 transition-all">Prototypes</a>
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
            </motion.nav>
            {/* Main Content */}
            <main className="relative z-10 pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
                {/* 1. Hero */}
                <motion.header
                    style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
                    className="max-w-5xl mx-auto mb-32 origin-top"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <div className="mb-6 text-2xl font-bold text-[var(--foreground)]"> INF352 Case Study</div>
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[1] bg-clip-text text-transparent bg-gradient-to-br from-[var(--foreground)] to-[var(--foreground)]">
                            Study Mascot <br /> <span className="text-[var(--muted-foreground)]/80 font-medium">Accountability App</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-[var(--muted-foreground)] max-w-2xl mb-12 leading-relaxed font-light">
                            Students don't need another timer. They need a <span className="text-[var(--foreground)] font-medium underline">companion</span>. We designed a mascot-based system to turn isolation into passive connection.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-[var(--border)]/40 pt-8"
                    >
                        {[
                            { label: "Role", value: "UX Researcher & Interaction Designer" },
                            { label: "Team", value: "5 Members" },
                            { label: "Tools", value: "Figma, Miro, Paper Prototypes" },
                            { label: "Timeline", value: "Sep - Dec 2025" }
                        ].map((item, i) => (
                            <motion.div key={i} variants={fadeInUp}>
                                <div className="text-xs uppercase tracking-wider text-[var(--muted-foreground)]/60 mb-2">{item.label}</div>
                                <div className="font-semibold text-[var(--foreground)]/90">{item.value}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.header>

                {/* Design Thinking Process */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="mb-32"
                >
                    <div className="text-center mb-16">
                        <div className="text-xs uppercase tracking-widest text-[var(--primary)] font-semibold mb-4">Methodology</div>
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
                                <motion.div
                                    key={step.num}
                                    variants={fadeInUp}
                                    className="relative flex-1 min-w-[180px]"
                                >
                                    {/* Connector dot for desktop */}
                                    <div className="hidden lg:block absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--primary)]/70 ring-4 ring-[var(--primary)]/15" />
                                    <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--card)]/60 backdrop-blur-sm p-5 shadow-sm hover:border-[var(--primary)]/40 hover:-translate-y-1 transition duration-300">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-sm font-mono text-[var(--primary)]">{step.num}</span>
                                            <span className="px-2 py-1 text-[10px] uppercase tracking-widest bg-[var(--primary)]/10 text-[var(--primary)] rounded-full">Stage</span>
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
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Secondary Research */}
                <Section id="overview" title="Secondary Research" eyebrow="Understanding the Problem">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="prose prose-lg dark:prose-invert max-w-3xl mb-16 text-[var(--muted-foreground)]"
                    >
                        <p>
                            We analyzed five key sources to understand why students struggle with consistency.
                        </p>
                    </motion.div>

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
                        ].map((item, i) => (
                            <motion.div
                                key={item.source}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 rounded-2xl bg-[var(--card)]/50 border border-[var(--border)] backdrop-blur-sm hover:bg-[var(--card)]/80 transition-colors"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="text-sm font-bold text-[var(--primary)] uppercase tracking-wide">{item.insight}</div>
                                </div>
                                <h4 className="font-bold text-[var(--foreground)] mb-2">{item.source}</h4>
                                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-3xl bg-[var(--primary)]/5 border border-[var(--primary)]/10"
                    >
                        <h4 className="flex items-center gap-2 font-bold text-[var(--foreground)] text-lg mb-4">
                            <Zap className="text-[var(--primary)]" size={20} />
                            The Core Behavioral Challenge
                        </h4>
                        <p className="text-[var(--muted-foreground)] leading-relaxed italic">
                            "Procrastination is a self-defeating behavior that provides short-term relief but leads to long-term anxiety. It reflects a <strong className="text-[var(--foreground)]">lack of structure, not motivation</strong>." - A Guide to Understanding Procrastination
                        </p>
                    </motion.div>
                </Section>

                {/* Primary Research */}
                <Section title="Primary Research" eyebrow="Methodology">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="prose prose-lg dark:prose-invert max-w-3xl mb-16 text-[var(--muted-foreground)]"
                    >
                        <p>
                            We conducted mixed-method research over a two-week period to gather both quantitative and qualitative data from the UofT student community.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 mb-24">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl bg-[var(--card)]/50 border border-[var(--border)] backdrop-blur-sm"
                        >
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
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl bg-[var(--card)]/50 border border-[var(--border)] backdrop-blur-sm"
                        >
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
                        </motion.div>
                    </div>

                    <h3 className="text-2xl font-bold mb-8">Quantitative Findings</h3>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
                    >
                        <motion.div variants={fadeInUp}><StatCard value="65%" label="Inconsistent" caption="17 of 26 students reported lack of a stable routine." /></motion.div>
                        <motion.div variants={fadeInUp}><StatCard value="31%" label="Top Barrier" caption="Digital distractions (social media) was the #1 blocker." /></motion.div>
                        <motion.div variants={fadeInUp}><StatCard value="88.5%" label="Want Accountability" caption="Believe social proof would help them stay on track." /></motion.div>
                        <motion.div variants={fadeInUp}><StatCard value="61.5%" label="Market Fit" caption="Would use a 'BeReal-style' app for studying." /></motion.div>
                    </motion.div>

                    {/* Affinity Diagram */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-24"
                    >
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
                                        "Hardest part is starting ('Activation Energy').",
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
                                        "BUT peer groups provide motivation.",
                                        "Desire for 'Passive Social' (presence without pressure)."
                                    ]
                                }
                            ].map((category, i) => (
                                <motion.div
                                    key={category.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-6 rounded-2xl bg-[var(--card)]/50 border border-[var(--border)] backdrop-blur-sm"
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
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </Section>

                {/* Persona */}
                <Section id="research" title="Persona" eyebrow="Meet the User">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="prose prose-lg dark:prose-invert max-w-3xl mb-12 text-[var(--muted-foreground)]"
                    >
                        <p>
                            Based on our research, we created <strong>Sofia the Student</strong>, a user persona representing the typical UofT student struggle.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mb-24"
                    >
                        <div className="bg-[var(--card)]/50 backdrop-blur border border-[var(--border)] rounded-3xl overflow-hidden shadow-2xl p-2 md:p-4">
                            <Image
                                src="/images/case-study/study-mascot/persona.png"
                                alt="Persona: Sofia the Student (Full Details)"
                                width={2400}
                                height={1350}
                                className="w-full h-auto rounded-2xl"
                                priority
                            />
                        </div>
                    </motion.div>

                        {/* Need Statements */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold mb-6">User Needs</h3>
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
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-6 bg-[var(--card)]/30 border border-[var(--border)] rounded-2xl"
                                >
                                    <h4 className="font-bold text-[var(--foreground)] mb-2">{need.title}</h4>
                                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                                        "{need.desc}"
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    
                    {/* Empathy Map Image */}
                    <div className="mb-24">
                        <h4 className="text-xl font-bold mb-8 text-center text-[var(--muted-foreground)]">Visualizing Sofia's Experience</h4>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-b from-[var(--card)]/50 to-[var(--card)]/30 border border-[var(--border)] rounded-3xl overflow-hidden shadow-2xl p-1 max-w-4xl mx-auto"
                        >
                            <div className="relative w-full rounded-2xl overflow-hidden bg-[var(--card)]/30">
                                <Image
                                    src="/images/case-study/study-mascot/empathy_map.png"
                                    alt="Empathy Map showing user thoughts, feelings, and experiences"
                                    width={2400}
                                    height={1350}
                                    className="w-full h-auto hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* As-Is Scenario (Current Journey) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-24"
                    >
                        <h3 className="text-2xl font-bold mb-8">As-Is Scenario (Current Journey)</h3>
                        <div className="space-y-6">
                            {[
                                {
                                    phase: "1. DECIDING TO STUDY",
                                    action: "Opens laptop, finds a library/cafe, puts on music.",
                                    thoughts: "Okay let's study... I wonder which library is open... My biggest challenge is activation energy.",
                                    feelings: "Anxious, Stressed, Overwhelmed",
                                    color: "border-red-500/30 bg-red-500/5"
                                },
                                {
                                    phase: "2. ATTEMPTING TO FOCUS",
                                    action: "Organizes notes but doesn't study. Highlights random sections. Attempts Pomodoro.",
                                    thoughts: "Let me check social media real quick... Studying is such a chore.",
                                    feelings: "Not Motivated, Annoyed, Procrastinating",
                                    color: "border-orange-500/30 bg-orange-500/5"
                                },
                                {
                                    phase: "3. GETTING DISTRACTED",
                                    action: "Scrolls Instagram/TikTok. Replies to messages. Watches short videos.",
                                    thoughts: "Five more minutes... I'll start after replying... Why am I not processing this?",
                                    feelings: "Relaxed -> Distracted -> Avoidant -> Guilty",
                                    color: "border-yellow-500/30 bg-yellow-500/5"
                                },
                                {
                                    phase: "4. FINISHING STUDIES",
                                    action: "Closes laptop. Packs up. Scrolls phone again. Makes vague plan for tomorrow.",
                                    thoughts: "At least I studied... I'll continue tomorrow... I should go home and sleep.",
                                    feelings: "Mentally Drained, Frustrated, Disappointed",
                                    color: "border-slate-500/30 bg-slate-500/5"
                                }
                            ].map((step, i) => (
                                <div key={i} className={`p-6 rounded-2xl border ${step.color} backdrop-blur-sm grid md:grid-cols-4 gap-4`}>
                                    <div className="font-bold text-[var(--foreground)] uppercase tracking-wider text-sm md:col-span-1">{step.phase}</div>
                                    <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                        <div>
                                            <div className="text-[var(--muted-foreground)] text-xs uppercase mb-1 font-semibold">Doing</div>
                                            <div className="text-[var(--foreground)]">{step.action}</div>
                                        </div>
                                        <div>
                                            <div className="text-[var(--muted-foreground)] text-xs uppercase mb-1 font-semibold">Thinking</div>
                                            <div className="italic text-[var(--muted-foreground)]">"{step.thoughts}"</div>
                                        </div>
                                        <div>
                                            <div className="text-[var(--muted-foreground)] text-xs uppercase mb-1 font-semibold">Feeling</div>
                                            <div className="font-medium">{step.feelings}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </Section>

                {/* User Future Journey (To-Be Scenario) */}


                {/* Ideation */}
                <Section id="ideation" title="Ideation" eyebrow="Generating Solutions">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="prose prose-lg dark:prose-invert max-w-4xl mb-16 text-[var(--muted-foreground)]"
                    >
                        <p>
                            We brainstormed intentional, unrestricted concepts before refining them into functional features. We organized ideas into four clusters: <strong className="text-[var(--foreground)]">Motivation</strong>, <strong className="text-[var(--foreground)]">Accountability</strong>, <strong className="text-[var(--foreground)]">Emotional Support</strong>, and <strong className="text-[var(--foreground)]">Collaboration</strong>.
                        </p>
                        <p>
                             We then filtered these using a <strong className="text-[var(--primary)]">Prioritization Grid</strong>. The voting process showed a clear preference for ideas that support accountability and simple progress guidance ("Quick Wins"), while complex distraction-based ideas like "bubble blockers" were deemed "Big Bets" for later.
                        </p>
                    </motion.div>

                    {/* Prioritization Grid placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mb-24"
                    >
                        <h3 className="text-3xl font-bold mb-8">Prioritization Grid</h3>
                        <div className="bg-[var(--card)]/50 backdrop-blur border border-[var(--border)] rounded-3xl overflow-hidden shadow-2xl p-2 md:p-4">
                            <Image
                                src="/images/case-study/study-mascot/prioritization_grid.png"
                                alt="Prioritization Grid: Impact vs Feasibility"
                                width={2400}
                                height={1350}
                                className="w-full h-auto rounded-2xl"
                            />
                        </div>
                    </motion.div>
                </Section>

                {/* To-Be Scenario */}
                <Section title="To-Be Scenario" eyebrow="The Ideal Journey">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-24"
                    >
                        <div className="space-y-6">
                            {[
                                {
                                    phase: "DECIDING TO STUDY",
                                    action: "Opens App instead of social media. Sees Mascot waiting. Adds tasks.",
                                    thoughts: "Starting feels easier when my mascot is cheering me on. Everything is organized.",
                                    feelings: "Motivated, Supported, Ready",
                                    color: "border-green-500/30 bg-green-500/5"
                                },
                                {
                                    phase: "ATTEMPTING TO FOCUS",
                                    action: "Enters 'Focus Mode'. Uses timer. Gains XP for completed tasks.",
                                    thoughts: "I want to improve my progress. If I stay focused, I can unlock items.",
                                    feelings: "Engaged, Focused, Less Overwhelmed",
                                    color: "border-blue-500/30 bg-blue-500/5"
                                },
                                {
                                    phase: "GETTING DISTRACTED... OR NOT",
                                    action: "Mascot appears as gentle reminder. Sees friends studying. Checks friends' mascots.",
                                    thoughts: "My mascot is sad because I got distracted... seeing others study keeps me motivated.",
                                    feelings: "Accountable, Encouraged, Supported",
                                    color: "border-purple-500/30 bg-purple-500/5"
                                },
                                {
                                    phase: "FINISHING STUDIES",
                                    action: "Completes tasks. Earns rewards. Upgrades mascot. Reviews streaks.",
                                    thoughts: "I actually did everything. My mascot is improving. I'm ready for tomorrow.",
                                    feelings: "Accomplished, Satisfied, Confident",
                                    color: "border-indigo-500/30 bg-indigo-500/5"
                                }
                            ].map((step, i) => (
                                <div key={i} className={`p-6 rounded-2xl border ${step.color} backdrop-blur-sm grid md:grid-cols-4 gap-4`}>
                                    <div className="font-bold text-[var(--foreground)] uppercase tracking-wider text-sm md:col-span-1">{step.phase}</div>
                                    <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                        <div>
                                            <div className="text-[var(--muted-foreground)] text-xs uppercase mb-1 font-semibold">Doing</div>
                                            <div className="text-[var(--foreground)]">{step.action}</div>
                                        </div>
                                        <div>
                                            <div className="text-[var(--muted-foreground)] text-xs uppercase mb-1 font-semibold">Thinking</div>
                                            <div className="italic text-[var(--muted-foreground)]">"{step.thoughts}"</div>
                                        </div>
                                        <div>
                                            <div className="text-[var(--muted-foreground)] text-xs uppercase mb-1 font-semibold">Feeling</div>
                                            <div className="font-medium">{step.feelings}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </Section>

                {/* Low-Fidelity Prototype */}
                <Section id="design" title="Low-Fidelity Prototype" eyebrow="Phase 3: Paper Prototypes">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="prose prose-lg dark:prose-invert max-w-4xl mb-16 text-[var(--muted-foreground)]"
                    >
                        <p>
                            We started with hand-drawn paper sketches to quickly test our core concepts without getting distracted by visual design. We used a "Human Computer" method where one team member manually swapped screens based on user interactions.
                        </p>
                    </motion.div>

                    {/* Placeholder for paper prototype images */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mb-24"
                    >
                        <div className="bg-[var(--card)]/50 backdrop-blur border border-[var(--border)] rounded-3xl overflow-hidden shadow-2xl p-2 md:p-4">
                            <Image
                                src="/images/case-study/study-mascot/low_fi.jpeg"
                                alt="Low-Fidelity Paper Prototypes"
                                width={2400}
                                height={1350}
                                className="w-full h-auto rounded-2xl"
                            />
                        </div>
                    </motion.div>
                </Section>

                {/* Low-Fidelity Evaluation */}
                <Section title="Low-Fidelity Evaluation" eyebrow="Validation Round 1">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <div className="bg-[var(--card)]/50 backdrop-blur border border-[var(--border)] p-8 rounded-3xl mb-12">
                            <h4 className="text-xl font-bold mb-6">Methodology & Setup</h4>
                            <div className="grid md:grid-cols-2 gap-8 text-sm text-[var(--muted-foreground)]">
                                <div>
                                    <strong className="block text-[var(--foreground)] mb-2">Representative Users (3 Students)</strong>
                                    <ul className="space-y-2 list-disc list-inside">
                                        <li>Student utilizing productivity apps</li>
                                        <li>Student with ADHD needing structure</li>
                                        <li>Student motivated by gamification</li>
                                    </ul>
                                </div>
                                <div>
                                    <strong className="block text-[var(--foreground)] mb-2">Tasks Tested</strong>
                                    <ul className="space-y-2 list-disc list-inside">
                                        <li>Add Task & Start Focus Mode</li>
                                        <li>View Friends Activity</li>
                                        <li>Access Shop & Rewards</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div>
                                <h4 className="flex items-center gap-2 font-bold mb-6 text-green-500">
                                    <Check size={20} /> What Worked Well
                                </h4>
                                <ul className="space-y-4">
                                    {[
                                        "Concept was motivating and easy to understand.",
                                        "All users quickly located 'Add Task' button.",
                                        "Mascot/Shop was described as welcoming and fun.",
                                        "Focus mode intrigued users with ADHD."
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-[var(--muted-foreground)]">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="flex items-center gap-2 font-bold mb-6 text-red-500">
                                    <span className="text-lg">!</span> Usability Issues (Critical)
                                </h4>
                                <ul className="space-y-4">
                                    {[
                                        { issue: "No Pause Button", fix: "Users felt trapped without a pause option." },
                                        { issue: "Privacy Concerns", fix: "Unclear where 'proof' photos went." },
                                        { issue: "Abrupt Transitions", fix: "Unsure if timer had actually started." },
                                        { issue: "System Status", fix: "Timer didn't look 'active' enough." }
                                    ].map((item, i) => (
                                        <li key={i} className="p-3 bg-red-500/5 rounded-lg border border-red-500/10 text-sm">
                                            <strong className="block text-red-600 dark:text-red-400 mb-1">{item.issue}</strong>
                                            <span className="text-[var(--muted-foreground)]">{item.fix}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-blue-500/5 border border-blue-500/10 p-6 rounded-2xl">
                            <h4 className="font-bold text-blue-500 mb-2">Design Implications</h4>
                            <p className="text-sm text-[var(--muted-foreground)]">
                                Added a <strong>Pause Button</strong>, a clear <strong>Skip Photo</strong> option for privacy, and a <strong>Confirmation Screen</strong> (Ready, Set, Go) to smooth the transition into focus mode.
                            </p>
                        </div>
                    </motion.div>
                </Section>

                {/* Medium-Fidelity Prototype */}
                <Section title="Medium-Fidelity Prototype" eyebrow="Phase 4: Clickable Mocks">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="prose prose-lg dark:prose-invert max-w-4xl mb-16 text-[var(--muted-foreground)]"
                    >
                        <p>
                            We incorporated the feedback to build a clickable Figma prototype. We focused on the three core flows: <strong className="text-[var(--foreground)]">Adding a Task</strong>, <strong className="text-[var(--foreground)]">Social Feed</strong>, and <strong className="text-[var(--foreground)]">Shop Customization</strong>.
                        </p>
                    </motion.div>

                    {/* Figma Embed */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-24 flex justify-center"
                    >
                        <iframe 
                            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} 
                            width="800" 
                            height="450" 
                            src="https://embed.figma.com/proto/gZGDMwAZt8D3Xlscso90Cg/Design-Part-2?node-id=152-165&p=f&scaling=contain&content-scaling=fixed&page-id=148%3A2&starting-point-node-id=152%3A165&show-proto-sidebar=1&embed-host=share" 
                            allowFullScreen
                            className="rounded-xl shadow-2xl bg-[var(--card)]"
                        ></iframe>
                    </motion.div>
                </Section>

                {/* Medium-Fidelity Evaluation */}
                <Section title="Medium-Fidelity Evaluation" eyebrow="Validation Round 2">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-24"
                    >
                         <div className="bg-[var(--card)]/50 backdrop-blur border border-[var(--border)] p-8 rounded-3xl mb-12">
                            <h4 className="text-xl font-bold mb-6">Methodology & Setup</h4>
                            <p className="text-[var(--muted-foreground)] mb-6">
                                Usability testing with <strong>5 students</strong> using clickable Figma prototypes via Zoom (think-aloud protocol).
                            </p>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h5 className="font-bold text-green-500 mb-4">Key Successes</h5>
                                    <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
                                        <li className="flex gap-2"><Check size={16} className="text-green-500" /> "Add Task" flow was described as "simple" and "straight to the point".</li>
                                        <li className="flex gap-2"><Check size={16} className="text-green-500" /> Verification photo feature was intuitive.</li>
                                        <li className="flex gap-2"><Check size={16} className="text-green-500" /> Shop/Inventory felt rewarding and engaging.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-bold text-orange-500 mb-4">Friction Points</h5>
                                    <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
                                        <li className="flex gap-2"><ArrowUpRight size={16} className="text-orange-500" /> <strong>Timer Status:</strong> Confusing when app closes or session ends.</li>
                                        <li className="flex gap-2"><ArrowUpRight size={16} className="text-orange-500" /> <strong>Photo Privacy:</strong> Ambiguity on Public vs Private visibility.</li>
                                        <li className="flex gap-2"><ArrowUpRight size={16} className="text-orange-500" /> <strong>Shop Labels:</strong> Users wanted clearer pricing/quantity UI.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl border border-[var(--primary)]/20 bg-[var(--primary)]/5 text-center">
                            <h4 className="font-bold text-[var(--foreground)] mb-2">Overall Outcome</h4>
                            <p className="text-[var(--muted-foreground)] max-w-3xl mx-auto">
                                The evaluation confirmed the core concept is motivating and engaging. The next steps are to strengthen session controls (clearer pause/end states), clarify privacy settings for photos, and improve shop labeling.
                            </p>
                        </div>
                    </motion.div>
                </Section>

                {/* 7. Reflection */}
                <Section id="reflection" className="mt-32">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="mb-16"
                        >
                            <Callout type="quote">
                                "Designing for motivation is delicate. It's not just about adding points; it's about creating a system that acknowledges effort without becoming a distraction itself."
                            </Callout>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-12 text-left">
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="p-8 bg-gradient-to-br from-[var(--primary)]/10 to-transparent rounded-3xl border border-[var(--primary)]/20"
                            >
                                <h4 className="font-bold text-xl mb-4 text-[var(--primary)]">Key Takeaway</h4>
                                <p className="text-[var(--muted-foreground)] leading-relaxed">
                                    I learned that "passive social" is a powerful middle ground between isolation and the pressure of live collaboration. Students want to feel seen, not watched.
                                </p>
                            </motion.div>
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="p-8 bg-[var(--card)]/50 backdrop-blur rounded-3xl border border-[var(--border)]"
                            >
                                <h4 className="font-bold text-xl mb-4">What's Next?</h4>
                                <p className="text-[var(--muted-foreground)] leading-relaxed">
                                    I would refine the specific interaction patterns for the "Friends List" to separate close friends from general classmates, and build out the specific accessibility states (high contrast) for the mascot.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </Section>
            </main>
        </div>
    );
}
