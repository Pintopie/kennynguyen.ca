"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useHotkeys } from "react-hotkeys-hook";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowUpRight, CalendarDays, Command } from "lucide-react";
import {
  NAV_LINKS,
  ABOUT_SNIPPETS,
  PROJECTS,
  EXPERIENCE,
  EDUCATION,
  HACKATHONS,
  TOOLING,
  SKILLS,
  METRICS,
  CURRENT_YEAR,
  AVATAR_URL,
  containerVariants,
  itemVariants,
  cardVariants,
} from "@/constants";
import ParallaxBackground from "@/components/ParallaxBackground";

type CommandItem = {
  label: string;
  description: string;
  action: () => void;
  shortcut?: string;
  chips?: string[];
  feedback?: string;
};

// ScrollReveal component for scroll-triggered animations
const ScrollReveal = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// AnimatedCard component for consistent card animations
const AnimatedCard = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        ...cardVariants,
        visible: {
          ...cardVariants.visible,
          transition: { ...cardVariants.visible.transition, delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Local constants not exported from constants.ts
const SHIP_LOG = [
  {
    title: "Local-first copilots",
    week: "Week 46",
    status: "In progress",
    summary: "Hardening the local-rag-system docker-compose stack with background embeddings jobs and tighter logging.",
    link: "https://github.com/Pintopie/local-rag-system",
  },
  {
    title: "Medical imaging research",
    week: "Week 45",
    status: "Stabilized",
    summary: "Packaging Liver-Tumor-ML into a CLI so researchers can queue feature extraction on shared clusters.",
    link: "https://github.com/Pintopie/Liver-Tumor-ML",
  },
  {
    title: "Bachelor of Information Student Association (BISA) Central Website",
    week: "Week 44",
    status: "In progress",
    summary: "Building BISA Central Website as a platform for students in the Bachelor of Information program to connect, share information, and learn about events and opportunities. The website is built with modern web technologies and is designed to be a central hub for the BISA community.",
  }
];

export default function Home() {
  const [dark, setDark] = useState(false);
  const [typingIndex, setTypingIndex] = useState(0);
  const [typingText, setTypingText] = useState("");
  const typingRoles = useMemo(() => [
    "Software Engineer",
    "Developer who is always curious",
    "AI enthusiast – loves solving real-world problems",
  ], []);
  const [roleIdx, setRoleIdx] = useState(0);
  const [showResumePreview, setShowResumePreview] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const typingTimeout = useRef<NodeJS.Timeout | null>(null);
  const [aboutLang, setAboutLang] = useState(0);
  const [commandQuery, setCommandQuery] = useState("");
  const [focusedCommandIndex, setFocusedCommandIndex] = useState(0);
  const [commandFeedback, setCommandFeedback] = useState("");
  const commandFeedbackTimeout = useRef<NodeJS.Timeout | null>(null);


  // Initialize theme preference on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDark(true);
    } else if (storedTheme === "light") {
      setDark(false);
    }
    // If no stored preference, respect system preference but don't override
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  useEffect(() => {
    if (typingIndex < typingRoles[roleIdx].length) {
      typingTimeout.current = setTimeout(() => {
        setTypingText((prev) => prev + typingRoles[roleIdx][typingIndex]);
        setTypingIndex((i) => i + 1);
      }, 60);
    } else {
      typingTimeout.current = setTimeout(() => {
        setTypingText("");
        setTypingIndex(0);
        setRoleIdx((idx) => (idx + 1) % typingRoles.length);
      }, 1200);
    }
    return () => {
      if (typingTimeout.current) {
        clearTimeout(typingTimeout.current);
      }
    };
  }, [typingIndex, roleIdx, typingRoles]);

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  useHotkeys("cmd+k,ctrl+k", (e) => {
    e.preventDefault();
    setCommandPaletteOpen((v) => !v);
    setCommandQuery("");
    setFocusedCommandIndex(0);
  });



  const commandItems = useMemo<CommandItem[]>(() => {
    const sectionCommands = NAV_LINKS.map((link) => ({
      label: `Jump to ${link.label}`,
      description: `Scroll to #${link.href.replace("#", "")}`,
      shortcut: link.label.charAt(0).toUpperCase(),
      action: () => {
        const el = document.querySelector(link.href);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      },
    }));

    return [
      ...sectionCommands,
      {
        label: "Open GitHub",
        description: "github.com/Pintopie",
        shortcut: "G",
        action: () => window.open("https://github.com/Pintopie", "_blank"),
      },
      {
        label: "Open LinkedIn",
        description: "linkedin.com/in/kennyngdev-ca",
        shortcut: "L",
        action: () => window.open("https://www.linkedin.com/in/kennyngdev-ca/", "_blank"),
      },
      {
        label: "Toggle theme",
        description: dark ? "Switch to light" : "Switch to dark",
        shortcut: "D",
        action: () => setDark((d) => !d),
      },
      {
        label: "Preview resume",
        description: "Open inline resume modal",
        shortcut: "R",
        action: () => setShowResumePreview(true),
      },
      {
        label: "Copy email",
        description: "Copy hoangnhan20192@gmail.com",
        shortcut: "C",
        feedback: "Email copied",
        action: () => {
          if (navigator.clipboard) {
            navigator.clipboard.writeText("hoangnhan20192@gmail.com");
          }
        },
      },
    ];
  }, [dark]);

  const filteredCommands = useMemo(() => {
    if (!commandQuery.trim()) return commandItems;
    return commandItems.filter((cmd) =>
      `${cmd.label} ${cmd.description}`.toLowerCase().includes(commandQuery.trim().toLowerCase()),
    );
  }, [commandItems, commandQuery]);

  const handleCommandRun = useCallback((cmd: CommandItem) => {
    cmd.action();
    if (commandFeedbackTimeout.current) {
      clearTimeout(commandFeedbackTimeout.current);
    }
    if (cmd.feedback) {
      setCommandFeedback(cmd.feedback);
      commandFeedbackTimeout.current = setTimeout(() => setCommandFeedback(""), 2000);
    }
    setCommandPaletteOpen(false);
    setCommandQuery("");
  }, []);

  useEffect(() => {
    setFocusedCommandIndex(0);
  }, [commandQuery, commandPaletteOpen]);

  useEffect(() => {
    return () => {
      if (commandFeedbackTimeout.current) {
        clearTimeout(commandFeedbackTimeout.current);
      }
    };
  }, []);

  const handleCommandKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!filteredCommands.length) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setFocusedCommandIndex((idx) => Math.min(idx + 1, filteredCommands.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setFocusedCommandIndex((idx) => Math.max(idx - 1, 0));
    } else if (event.key === "Enter") {
      event.preventDefault();
      handleCommandRun(filteredCommands[focusedCommandIndex]);
    } else if (event.key === "Escape") {
      setCommandPaletteOpen(false);
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-40 w-full bg-[var(--background)]/12 backdrop-blur border-b border-[var(--border)]/80 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <span className="font-bold text-lg text-[var(--primary)]">Kenny Nguyen</span>
          <ul className="flex gap-2 sm:gap-4">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-link px-3 py-1 rounded transition-colors duration-200 hover:bg-[var(--primary)]/10 focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus:outline-none"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
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
      <ParallaxBackground dark={dark} />
      <main className="relative z-10 min-h-screen w-full text-[var(--foreground)] flex flex-col items-center gap-16 px-4 sm:px-8 py-12 sm:py-24 font-[family-name:var(--font-geist-sans)]">


        <section className="w-full max-w-6xl grid gap-8 lg:grid-cols-[1.15fr,0.85fr] items-stretch mb-16 mt-6" data-aos="fade-up">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)]/70 backdrop-blur-md p-8 shadow-[0_25px_50px_rgba(15,23,42,0.18)]">
            <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden>
              <div className="absolute -top-32 -right-20 h-64 w-64 rounded-full bg-[var(--primary)]/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-xs uppercase tracking-[0.3em] text-[var(--muted-foreground)]">Portfolio · 2025</motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-4 mb-4">
              <motion.div
                whileHover={{ scale: 1.08, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex-shrink-0 w-20 h-20 rounded-2xl overflow-hidden border border-[var(--border)] shadow-lg bg-gradient-to-br from-[var(--background)] via-[var(--card)] to-[var(--primary)]/20">
                <Image src={AVATAR_URL} alt="Kenny Nguyen avatar" fill className="object-cover" priority sizes="80px" />
              </motion.div>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Kenny Nguyen</h1>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-xl sm:text-2xl font-medium text-[var(--primary)] mb-4 min-h-[2.5rem]">
              <span className="inline-flex items-center gap-2">
                <span className="inline-block w-1 h-6 rounded-full bg-[var(--primary)]" />
                <span className="font-mono">{typingText}</span>
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base sm:text-lg text-[var(--muted-foreground)] max-w-2xl">
              Building thoughtful products across web, AI, and backend systems. I obsess over clarity, accessibility, and resilient delivery pipelines.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-3 text-base text-[var(--foreground)]/80">
              Currently experimenting with local-first copilots and hardened cloud-native workflows.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="mt-6 flex flex-wrap gap-3">
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.50 }}
                href="mailto:hoangnhan20192@gmail.com"
                className="btn btn-primary">Contact Me</motion.a>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.50 }}
                type="button"
                onClick={() => setShowResumePreview(true)}
                className="btn btn-secondary">Preview Resume</motion.button>
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.50 }}
                href="/resumes/resume.pdf"
                download
                className="btn btn-secondary">Download Resume</motion.a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-8 grid grid-cols-2 gap-3">
              {METRICS.map((metric, idx) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.65 + idx * 0.05, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--background)]/70 p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-wide text-[var(--muted-foreground)]">{metric.label}</p>
                  <p className="text-lg font-semibold text-[var(--foreground)]">{metric.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="grid gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="rounded-3xl border border-[var(--border)] bg-[var(--card)]/70 backdrop-blur-md p-6 shadow-xl flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted-foreground)]">Ship log</p>
                <span className="inline-flex items-center gap-1 text-xs text-[var(--muted-foreground)]">
                  <CalendarDays size={14} /> Weekly pulse
                </span>
              </div>
              {SHIP_LOG.slice(0, 2).map((log, idx) => (
                <motion.article
                  key={log.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + idx * 0.1, duration: 0.5 }}
                  whileHover={{ y: -2, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                  className="rounded-2xl border border-[var(--border)]/60 bg-[var(--background)]/70 p-4">
                  <div className="flex items-center justify-between text-xs text-[var(--muted-foreground)]">
                    <span>{log.week}</span>
                    <span className="uppercase tracking-wide">{log.status}</span>
                  </div>
                  <h3 className="mt-2 text-base font-semibold">{log.title}</h3>
                  <p className="text-sm text-[var(--muted-foreground)] mt-1">{log.summary}</p>
                  {log.link && (
                    <motion.a
                      whileHover={{ x: 4 }}
                      href={log.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-sm text-[var(--primary)] hover:underline">
                      View work
                      <ArrowUpRight size={14} />
                    </motion.a>
                  )}
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </section>

        <section className="w-full max-w-5xl mb-16" id="about">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-[var(--border)] bg-[var(--card)]/70 backdrop-blur-md p-6 shadow-xl">
            <motion.div
              className="flex items-center justify-between"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold text-[var(--primary)]">About Me</h2>
              <p className="text-xs uppercase tracking-[0.4em] text-[var(--muted-foreground)]">My Story in code</p>
            </motion.div>
            <motion.div
              className="mt-4 mb-4 flex gap-2 overflow-x-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {ABOUT_SNIPPETS.map((snippet, idx) => (
                <motion.button
                  key={snippet.lang}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-4 py-1 rounded-full border text-xs font-mono transition-colors ${aboutLang === idx ? 'border-[var(--primary)] text-[var(--primary)] bg-[var(--background)]/60' : 'border-transparent text-[var(--muted-foreground)] hover:text-[var(--primary)]'}`}
                  onClick={() => setAboutLang(idx)}
                  aria-label={`Show About Me in ${snippet.lang}`}
                >
                  {snippet.lang}
                </motion.button>
              ))}
            </motion.div>
            <motion.div
              key={aboutLang}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl overflow-hidden shadow-inner"
            >
              <SyntaxHighlighter
                language={ABOUT_SNIPPETS[aboutLang].lang.toLowerCase()}
                style={atomOneDark}
                customStyle={{
                  margin: 0,
                  borderRadius: "0.5rem",
                  fontSize: "0.875rem",
                  lineHeight: "1.5",
                }}
              >
                {ABOUT_SNIPPETS[aboutLang].code}
              </SyntaxHighlighter>
            </motion.div>
          </motion.div>
        </section>
        <section className="w-full max-w-5xl mb-16" id="skills">
          <motion.div
            className="flex items-center justify-between mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-[var(--primary)]">Skills</h2>
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--muted-foreground)]">Stack favorites</p>
          </motion.div>
          <motion.div
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {SKILLS.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <AnimatedCard
                  key={skill.label}
                  delay={idx * 0.05}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--card)]/85 p-4 shadow-sm"
                >
                  <motion.div
                    className="flex items-center gap-3"
                    whileHover={{ x: 4 }}
                  >
                    <motion.span
                      className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--background)]/70"
                      style={{ color: skill.color }}
                      whileHover={{ scale: 1.15, rotate: 8 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Icon size={22} />
                    </motion.span>
                    <div>
                      <p className="font-semibold text-[var(--foreground)]">{skill.label}</p>
                      <p className="text-xs text-[var(--muted-foreground)]">{skill.tooltip}</p>
                    </div>
                  </motion.div>
                </AnimatedCard>
              );
            })}
          </motion.div>
        </section>
        <section className="w-full max-w-5xl mb-16" id="experience">
          <motion.div
            className="flex items-center justify-between mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-[var(--primary)]">Experience & Education</h2>
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--muted-foreground)]">Timeline</p>
          </motion.div>

          <div className="space-y-8">
            {/* Work Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-[var(--border)] bg-[var(--card)]/70 backdrop-blur-md p-6 shadow-xl"
            >
              <motion.h3
                className="text-xl font-bold mb-6 text-[var(--primary)]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                Work Experience
              </motion.h3>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--primary)] to-[var(--primary)]/30" />

                <motion.div className="space-y-6">
                  {EXPERIENCE.map((item, idx) => (
                    <motion.div
                      key={`${item.company}-${idx}`}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      className="relative pl-20"
                    >
                      {/* Timeline dot with logo */}
                      <motion.div
                        className="absolute left-0 w-10 h-10 rounded-full border-4 border-[var(--card)] bg-[var(--primary)] shadow-lg flex items-center justify-center text-white overflow-hidden"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                      >
                        {item.logo ? (
                          <Image src={item.logo} alt={item.company} fill className="object-cover" sizes="40px" />
                        ) : (
                          <span className="text-lg">→</span>
                        )}
                      </motion.div>

                      <motion.div
                        className="rounded-2xl border border-[var(--border)]/60 bg-[var(--background)]/70 p-4"
                        whileHover={{ y: -4, boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)" }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div>
                            <h4 className="text-lg font-bold text-[var(--foreground)]">{item.role}</h4>
                            <p className="text-sm text-[var(--primary)] font-semibold">{item.company}</p>
                          </div>
                          <span className="text-xs uppercase tracking-wide text-[var(--muted-foreground)] whitespace-nowrap">
                            {item.startDate} – {item.endDate}
                          </span>
                        </div>
                        <p className="text-xs text-[var(--muted-foreground)] mb-3">{item.location}</p>

                        <ul className="space-y-2 mb-4">
                          {item.highlights.map((highlight, hIdx) => (
                            <motion.li
                              key={hIdx}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1 + hIdx * 0.05 + 0.3 }}
                              className="text-sm text-[var(--muted-foreground)] flex gap-2">
                              <span className="text-[var(--primary)] mt-0.5">✓</span>
                              <span>{highlight}</span>
                            </motion.li>
                          ))}
                        </ul>

                        <motion.div
                          className="flex flex-wrap gap-2"
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={containerVariants}
                        >
                          {item.tech.map((tech) => (
                            <motion.span
                              key={tech}
                              variants={itemVariants}
                              className="inline-block px-2 py-1 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/30 text-xs text-[var(--primary)] font-mono"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-3xl border border-[var(--border)] bg-[var(--card)]/70 backdrop-blur-md p-6 shadow-xl"
            >
              <motion.h3
                className="text-xl font-bold mb-6 text-[var(--primary)]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                Education
              </motion.h3>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--primary)]/30 to-[var(--primary)]/10" />

                <motion.div className="space-y-6">
                  {EDUCATION.map((item, idx) => (
                    <motion.div
                      key={`${item.school}-${idx}`}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      className="relative pl-20"
                    >
                      {/* Timeline dot with logo */}
                      <motion.div
                        className="absolute left-0 w-10 h-10 rounded-full border-4 border-[var(--card)] bg-[var(--primary)]/60 shadow-lg flex items-center justify-center text-white overflow-hidden"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                      >
                        {item.logo ? (
                          <Image src={item.logo} alt={item.school} fill className="object-cover" sizes="40px" />
                        ) : (
                          <span className="text-lg">📚</span>
                        )}
                      </motion.div>

                      <motion.div
                        className="rounded-2xl border border-[var(--border)]/60 bg-[var(--background)]/70 p-4"
                        whileHover={{ y: -4, boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)" }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div>
                            <h4 className="text-lg font-bold text-[var(--foreground)]">{item.degree}</h4>
                            <p className="text-sm text-[var(--primary)] font-semibold">{item.school}</p>
                          </div>
                          <span className="text-xs uppercase tracking-wide text-[var(--muted-foreground)] whitespace-nowrap">
                            {item.startDate && `${item.startDate} – ${item.endDate}`}
                          </span>
                        </div>
                        <p className="text-xs text-[var(--muted-foreground)] mb-3">{item.location}</p>

                        {(item.gpa || item.grade) && (
                          <motion.p
                            className="text-sm font-semibold text-[var(--primary)] mb-3"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 + 0.3 }}
                          >
                            {item.gpa ? `GPA: ${item.gpa}` : `Grade: ${item.grade}`}
                          </motion.p>
                        )}

                        <ul className="space-y-2">
                          {item.highlights.map((highlight, hIdx) => (
                            <motion.li
                              key={hIdx}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1 + hIdx * 0.05 + 0.3 }}
                              className="text-sm text-[var(--muted-foreground)] flex gap-2">
                              <span className="text-[var(--primary)] mt-0.5">•</span>
                              <span>{highlight}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hackathons & Competitions Section */}
        <section className="w-full max-w-6xl mb-16" id="hackathons">
          <div className="mb-12">
            <motion.h3
              className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Hackathons & Competitions
            </motion.h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--primary)]/30 to-[var(--primary)]/10" />

              <motion.div className="space-y-6">
                {HACKATHONS.map((item, idx) => (
                  <motion.div
                    key={`${item.name}-${idx}`}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="relative pl-20"
                  >
                    {/* Timeline dot with logo */}
                    <motion.div
                      className="absolute left-0 w-10 h-10 rounded-full border-4 border-[var(--card)] bg-[var(--primary)]/60 shadow-lg flex items-center justify-center text-white overflow-hidden"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                    >
                      {item.logo ? (
                        <Image src={item.logo} alt={item.name} fill className="object-cover" sizes="40px" />
                      ) : (
                        <span className="text-lg">🏆</span>
                      )}
                    </motion.div>

                    <motion.div
                      className="rounded-2xl border border-[var(--border)]/60 bg-[var(--background)]/70 p-4"
                      whileHover={{ y: -4, boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)" }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <h4 className="text-lg font-bold text-[var(--foreground)]">{item.name}</h4>
                          <p className="text-sm text-[var(--primary)] font-semibold">{item.status}</p>
                        </div>
                        <span className="text-xs uppercase tracking-wide text-[var(--muted-foreground)] whitespace-nowrap">
                          {item.startDate && `${item.startDate} – ${item.endDate}`}
                        </span>
                      </div>
                      <p className="text-xs text-[var(--muted-foreground)] mb-3">{item.location}</p>

                      <ul className="space-y-2 mb-4">
                        {item.highlights.map((highlight, hIdx) => (
                          <motion.li
                            key={hIdx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 + hIdx * 0.05 + 0.3 }}
                            className="text-sm text-[var(--muted-foreground)] flex gap-2">
                            <span className="text-[var(--primary)] mt-0.5">•</span>
                            <span>{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* Tech Stack */}
                      {item.tech && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.tech.map((t, tIdx) => (
                            <span key={tIdx} className="px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-medium rounded-full">
                              {t}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Link */}
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[var(--primary)] hover:text-[var(--primary)]/80 text-sm font-semibold transition-colors"
                        >
                          Learn more <ArrowUpRight className="w-4 h-4" />
                        </a>
                      )}
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full max-w-6xl mb-16" id="projects">
          <motion.div
            className="flex items-center justify-between mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-[var(--primary)]">Projects</h2>
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--muted-foreground)]">Selected builds</p>
          </motion.div>
          <motion.div
            className="grid gap-6 md:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {PROJECTS.map((project, idx) => (
              <AnimatedCard
                key={project.title}
                delay={idx * 0.1}
                className="rounded-3xl border border-[var(--border)] bg-[var(--card)]/90 p-6 flex flex-col gap-4 shadow-[0_35px_55px_rgba(15,23,42,0.2)]"
              >
                <div>
                  <motion.h3
                    className="text-lg font-bold flex items-center gap-2"
                    whileHover={{ x: 4 }}
                  >
                    {project.title}
                    <motion.span whileHover={{ x: 2, y: -2 }}>
                      <ArrowUpRight size={18} className="text-[var(--muted-foreground)]" />
                    </motion.span>
                  </motion.h3>
                  <p className="text-sm text-[var(--muted-foreground)] mt-2">{project.description}</p>
                </div>
                <motion.ul
                  className="flex flex-wrap gap-2 text-xs text-[var(--muted-foreground)]"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {project.tech.map((tech) => (
                    <motion.li
                      key={tech}
                      variants={itemVariants}
                      className="px-3 py-1 rounded-full bg-[var(--background)] border border-[var(--border)]/40"
                    >
                      {tech}
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.div
                  className="flex flex-wrap gap-4 text-sm mt-auto"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {project.links.map((link) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      variants={itemVariants}
                      whileHover={{ x: 2, color: "var(--primary)" }}
                      className="inline-flex items-center gap-1 text-[var(--primary)] hover:underline">
                      {link.label}
                      <ArrowUpRight size={14} />
                    </motion.a>
                  ))}
                </motion.div>
              </AnimatedCard>
            ))}
          </motion.div>
        </section>
        <section className="w-full max-w-5xl mb-16" id="ship-log">
          <motion.div
            className="flex items-center justify-between mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-[var(--primary)]">Now Shipping</h2>
            <motion.div
              className="text-xs uppercase text-[var(--muted-foreground)] flex items-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <CalendarDays size={14} /> Weekly ship log
            </motion.div>
          </motion.div>
          <motion.div
            className="grid gap-4 md:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {SHIP_LOG.map((log, idx) => (
              <AnimatedCard
                key={log.title}
                delay={idx * 0.08}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)]/90 p-5 shadow"
              >
                <motion.div
                  className="flex items-center justify-between text-xs text-[var(--muted-foreground)]"
                  whileHover={{ scale: 1.02 }}
                >
                  <span>{log.week}</span>
                  <motion.span
                    className="uppercase tracking-wide"
                    whileHover={{ y: -2 }}
                  >
                    {log.status}
                  </motion.span>
                </motion.div>
                <h3 className="mt-3 text-lg font-semibold">{log.title}</h3>
                <p className="text-sm text-[var(--muted-foreground)] mt-2">{log.summary}</p>
                {log.link ? (
                  <motion.a
                    href={log.link}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ x: 4 }}
                    className="mt-4 inline-flex items-center text-sm text-[var(--primary)] hover:underline">
                    Open thread
                    <motion.span whileHover={{ rotate: 45 }} className="ml-1">
                      <ArrowUpRight size={14} />
                    </motion.span>
                  </motion.a>
                ) : (
                  <motion.p
                    className="mt-4 text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]"
                    initial={{ opacity: 0.5 }}
                    whileHover={{ opacity: 1 }}
                  >
                    Case study coming soon
                  </motion.p>
                )}
              </AnimatedCard>
            ))}
          </motion.div>
        </section>
        <section className="w-full max-w-6xl mb-16" id="stack">
          <motion.div
            className="flex items-center gap-2 mb-4 text-[var(--primary)]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <Command size={18} />
            <h2 className="text-2xl font-semibold">Tools</h2>
          </motion.div>
          <motion.div
            className="grid gap-4 md:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {TOOLING.map((tool, idx) => {
              const IconComp = tool.icon;
              return (
                <AnimatedCard
                  key={tool.name}
                  delay={idx * 0.05}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--card)]/90 p-5 shadow-[0_20px_40px_rgba(15,23,42,0.15)]"
                >
                  <a href={tool.href} target="_blank" rel="noreferrer" className="flex items-start justify-between">
                    <motion.div
                      className="flex items-center gap-2 text-lg font-semibold"
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.span whileHover={{ scale: 1.2, rotate: 8 }} transition={{ type: "spring", stiffness: 400 }}>
                        <IconComp size={20} />
                      </motion.span>
                      {tool.name}
                    </motion.div>
                    <motion.span
                      className="text-[var(--muted-foreground)]"
                      whileHover={{ x: 4, y: -2 }}
                    >
                      <ArrowUpRight size={16} />
                    </motion.span>
                  </a>
                  <p className="text-sm text-[var(--muted-foreground)] mt-2">{tool.detail}</p>
                </AnimatedCard>
              );
            })}
          </motion.div>
        </section>
        <section className="w-full max-w-2xl mb-8" id="contact">
          <ScrollReveal className="flex flex-col items-center justify-center gap-4">
            <motion.a
              href="https://github.com/Pintopie"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub activity graph"
              className="block w-full max-w-xl"
              variants={itemVariants}
            >
              <Image
                src="https://ghchart.rshah.org/Pintopie"
                alt="GitHub activity graph for Pintopie"
                width={900}
                height={200}
                className="rounded-lg border border-[var(--border)] bg-[var(--card)]"
                priority
              />
            </motion.a>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl">
              <motion.a
                href="https://github.com/Pintopie"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                variants={itemVariants}
                className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 text-center hover:shadow-lg transition-shadow"
              >
                <p className="text-lg font-semibold text-[var(--primary)]">GitHub Profile</p>
                <p className="text-sm text-[var(--muted-foreground)]">@Pintopie</p>
                <p className="text-xs text-[var(--muted)] mt-2">View repositories & contributions</p>
              </motion.a>
              <motion.a
                href="https://github.com/Pintopie?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub repositories"
                variants={itemVariants}
                className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 text-center hover:shadow-lg transition-shadow"
              >
                <p className="text-lg font-semibold text-[var(--primary)]">Repositories</p>
                <p className="text-sm text-[var(--muted-foreground)]">Projects & Code</p>
                <p className="text-xs text-[var(--muted)] mt-2">Explore my open source work</p>
              </motion.a>
            </div>
          </ScrollReveal>
        </section>
        <AnimatePresence>
          {showResumePreview && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="bg-[var(--card)]/90 border border-[var(--border)] rounded-2xl shadow-xl p-8 max-w-2xl w-full relative flex flex-col items-center mx-4"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
              >
                <motion.button
                  onClick={() => setShowResumePreview(false)}
                  className="absolute top-3 right-3 text-xl text-[var(--muted-foreground)] hover:text-[var(--primary)]"
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  whileTap={{ scale: 0.85 }}
                >
                  &times;
                </motion.button>
                <motion.h3
                  className="text-xl font-bold mb-4 text-[var(--primary)]"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  My Resume
                </motion.h3>
                <motion.iframe
                  src="/resumes/resume.pdf"
                  className="w-full h-96 rounded shadow"
                  title="Resume Preview"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.a
                  href="/resumes/resume.pdf"
                  download
                  className="btn btn-primary mt-4"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download PDF
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {commandPaletteOpen && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setCommandPaletteOpen(false)}
            >
              <motion.div
                className="bg-[var(--card)]/95 border border-[var(--border)] rounded-2xl shadow-xl p-6 max-w-lg w-full relative mx-4"
                initial={{ opacity: 0, scale: 0.9, y: -30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -30 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button
                  onClick={() => setCommandPaletteOpen(false)}
                  className="absolute top-3 right-3 text-xl text-[var(--muted-foreground)] hover:text-[var(--primary)]"
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  whileTap={{ scale: 0.85 }}
                >
                  &times;
                </motion.button>
                <motion.h3
                  className="text-lg font-bold mb-2 text-[var(--primary)] flex items-center gap-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 }}
                >
                  <Command size={16} /> Command Palette
                </motion.h3>
                <motion.input
                  className="w-full px-3 py-2 rounded bg-[var(--background)] border border-[var(--border)] mb-3"
                  placeholder="Type a command or page..."
                  autoFocus
                  value={commandQuery}
                  onChange={(event) => setCommandQuery(event.target.value)}
                  onKeyDown={handleCommandKeyDown}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                />
                <motion.div
                  className="space-y-2 max-h-64 overflow-y-auto"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {filteredCommands.length === 0 && (
                    <p className="text-sm text-[var(--muted-foreground)]">No commands found.</p>
                  )}
                  {filteredCommands.map((cmd, idx) => (
                    <motion.button
                      key={cmd.label}
                      className={`w-full text-left rounded-xl border border-[var(--border)] px-4 py-3 text-sm flex items-start justify-between gap-3 transition-colors ${idx === focusedCommandIndex ? "bg-[var(--primary)]/10" : "bg-[var(--card)]/80"
                        }`}
                      onClick={() => handleCommandRun(cmd)}
                      variants={itemVariants}
                      whileHover={{ backgroundColor: "rgba(2, 77, 190, 0.1)", x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div>
                        <p className="font-semibold">{cmd.label}</p>
                        <p className="text-xs text-[var(--muted-foreground)]">{cmd.description}</p>
                      </div>
                      {cmd.shortcut && (
                        <span className="text-xs uppercase tracking-wider text-[var(--muted-foreground)]">{cmd.shortcut}</span>
                      )}
                    </motion.button>
                  ))}
                </motion.div>
                <motion.div
                  className="text-xs text-[var(--muted-foreground)] mt-3 flex justify-between"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <span>Press Esc to close • Enter to run</span>
                  <motion.span
                    key={commandFeedback}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {commandFeedback}
                  </motion.span>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.footer
          className="w-full text-center text-xs text-[var(--muted-foreground)] mt-auto pt-8 border-t border-[var(--border)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          &copy; {CURRENT_YEAR} Kenny Nguyen. Built with React + Next.js, and a lot of Tim's coffee.
        </motion.footer>
      </main>
    </>
  );
}
