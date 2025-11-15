"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useHotkeys } from "react-hotkeys-hook";
import { FaReact, FaNodeJs, FaCloud, FaRobot, FaCode } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiPython, SiFastapi, SiDocker, SiGit, SiGithub, SiPostgresql, SiAmazonwebservices, SiJupyter } from "react-icons/si";
import { ArrowUpRight, CalendarDays, Command, ExternalLink, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

type CommandItem = {
  label: string;
  description: string;
  action: () => void;
  shortcut?: string;
  chips?: string[];
  feedback?: string;
};

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#ship-log", label: "Now Shipping" },
  { href: "#features", label: "Workflow" },
  { href: "#stack", label: "Tooling" },
  { href: "#contact", label: "Contact" },
];

const ABOUT_SNIPPETS = [
  {
    lang: "JavaScript",
    code: `const aboutMe = {
  name: "Kenny Nguyen",
  role: "Software Engineer",
  location: "Toronto, Canada",
  interests: ["Web", "AI", "Cloud"],
  funFact: "Always learning, always building!"
};`,
  },
  {
    lang: "TypeScript",
    code: `interface AboutMe {
  name: string;
  role: string;
  location: string;
  interests: string[];
  funFact: string;
}

const aboutMe: AboutMe = {
  name: "Kenny Nguyen",
  role: "Software Engineer",
  location: "Toronto, Canada",
  interests: ["Web", "AI", "Cloud", "Backend Development"],
  funFact: "Always learning, always building!"
};`,
  },
  {
    lang: "Python",
    code: `about_me = {
    "name": "Kenny Nguyen",
    "role": "Software Engineer",
    "location": "Toronto, Canada",
    "interests": ["Web", "AI", "Cloud"],
    "fun_fact": "Always learning, always building!"
}`,
  },
];

const PROJECTS = [
  {
    title: "Local RAG System",
    description: "Self-hosted retrieval augmented generation stack that keeps proprietary notes on-device while chatting through a React front-end.",
    impact: "FastAPI + Ollama + Docker Compose deliver an offline workflow with data-secured local embedding LLM",
    tech: ["FastAPI", "Ollama", "React", "Docker"],
    links: [
      { label: "GitHub", href: "https://github.com/Pintopie/local-rag-system" },
      { label: "README", href: "https://github.com/Pintopie/local-rag-system/blob/main/README.md" },
    ],
  },
  {
    title: "Liver Tumor segmentation and analysis",
    description: "Classical Machine Learning pipeline for analyzing NIfTI/NII scans, featuring feature extraction, segmentation, and CLI visualizations using Kaggle dataset of pregnancy & liver scans.",
    impact: "Provides reproducible experimentation for medical imaging by wrapping preprocessing, training.",
    tech: ["Python", "scikit-learn", "Docker", "NII analysis & segmentation"],
    links: [
      { label: "GitHub", href: "https://github.com/Pintopie/Liver-Tumor-ML" },
      { label: "Model notebook", href: "https://github.com/Pintopie/Liver-Tumor-ML/blob/main/Model.ipynb" },
    ],
  },
];

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
    //TODO: update link when website is ready
    title: "Bachelor of Information Student Association (BISA) Central Website",
    week: "Week 44",
    status: "In progress",
    summary: "Building BISA Central Website as a platform for students in the Bachelor of Information program to connect, share information, and learn about events and opportunities. The website is built with modern web technologies and is designed to be a central hub for the BISA community.",
  }
];

const QUICK_ACTIONS = [
  {
    label: "Drop a message",
    description: "hoangnhan20192@gmail.com",
    href: "mailto:hoangnhan20192@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    description: "github.com/Pintopie",
    href: "https://github.com/Pintopie",
    icon: Github,
  },
  {
    label: "LinkedIn",
    description: "Connect @ kennyngdev-ca",
    href: "https://www.linkedin.com/in/kennyngdev-ca/",
    icon: Linkedin,
  },
  {
    label: "Resume (.docx)",
    description: "Updated Nov 2025",
    href: "/resumes/resume.docx",
    icon: ExternalLink,
  },
];

const TOOLING = [
  {
    name: "Next.js + Vercel",
    detail: "Ships this site with edge rendering, image optimization, and one-click previews.",
    href: "https://nextjs.org/",
    icon: SiNextdotjs,
  },
  {
    name: "React + TypeScript",
    detail: "Type-safe component libraries and hooks for scalable front-end development.",
    href: "https://react.dev/",
    icon: FaReact,
  },
  {
    name: "FastAPI + Python",
    detail: "Typed Python APIs for ML services, instrumented with OpenAPI and Pydantic.",
    href: "https://fastapi.tiangolo.com/",
    icon: SiFastapi,
  },
  {
    name: "LangChain + Ollama",
    detail: "Local inference plus retrieval orchestration for custom AI copilots.",
    href: "https://www.langchain.com/",
    icon: FaRobot,
  },
  {
    name: "Docker & Compose",
    detail: "Reproducible dev containers—especially handy for ML notebooks and GPU labs.",
    href: "https://www.docker.com/",
    icon: SiDocker,
  },
  {
    name: "Tailwind CSS v4",
    detail: "Utility-first design tokens that keep experiments consistent in dark/light.",
    href: "https://tailwindcss.com/",
    icon: SiTailwindcss,
  },
  {
    name: "Node.js + Express",
    detail: "Backend services and CLI tools with async/await and npm ecosystem.",
    href: "https://nodejs.org/",
    icon: FaNodeJs,
  },
  {
    name: "PostgreSQL + Supabase",
    detail: "Postgres + auth + storage for prototypes that still need production discipline.",
    href: "https://supabase.com/",
    icon: SiPostgresql,
  },
  {
    name: "AWS + Cloud Services",
    detail: "Scalable deployments with EC2, S3, Lambda, and serverless architectures.",
    href: "https://aws.amazon.com/",
    icon: SiAmazonwebservices,
  },
  {
    name: "Git + GitHub",
    detail: "Version control and collaboration with CI/CD pipelines and issue tracking.",
    href: "https://github.com/",
    icon: SiGit,
  },
  {
    name: "VS Code + Extensions",
    detail: "Customizable IDE with Copilot, ESLint, and Prettier for efficient coding.",
    href: "https://code.visualstudio.com/",
    icon: FaCode,
  },
  {
    name: "Jupyter + scikit-learn",
    detail: "Data science workflows with notebooks, ML models, and visualization.",
    href: "https://jupyter.org/",
    icon: SiJupyter,
  },
];

const SKILLS = [
  { label: "React", tooltip: "React – UI library", icon: FaReact, color: "#61DAFB" },
  { label: "Next.js", tooltip: "Next.js – React Framework", icon: SiNextdotjs, color: "#000000" },
  { label: "TypeScript", tooltip: "TypeScript – Typed JS", icon: SiTypescript, color: "#3178C6" },
  { label: "Node.js", tooltip: "Node.js – Backend", icon: FaNodeJs, color: "#68A063" },
  { label: "Tailwind CSS", tooltip: "Tailwind – Utility-first CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { label: "Python", tooltip: "Python – Data & ML", icon: SiPython, color: "#3776AB" },
  { label: "FastAPI", tooltip: "FastAPI – Python Web", icon: SiFastapi, color: "#009688" },
  { label: "Docker", tooltip: "Docker – Containerization", icon: SiDocker, color: "#2496ED" },
  { label: "Git", tooltip: "Git – Version control", icon: SiGit, color: "#F05032" },
  { label: "GitHub", tooltip: "GitHub – Collaboration", icon: SiGithub, color: "#000000" },
  { label: "Cloud", tooltip: "Cloud – Deployments", icon: FaCloud, color: "#a3e635" },
];

const METRICS = [
  { label: "Timezone", value: "Toronto • EST" },
  { label: "Focus", value: "Backend Development" },
];

const CURRENT_YEAR = new Date().getFullYear();
const AVATAR_URL = "https://avatars.githubusercontent.com/u/134212302?v=4";

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
  const backgroundRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
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

  useEffect(() => {
    if (typeof window === "undefined") return;
  const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
  if (mq?.matches) return;

    let raf = 0;
    const updateBackground = () => {
      const y = window.scrollY;
      const scale = 1 + Math.min(y / 1600, 0.25);
      const translateY = -y * 0.06;
      const translateX = Math.sin(y / 180) * 35;
      if (backgroundRef.current) {
        backgroundRef.current.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`;
      }
    };

    const handleScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updateBackground);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

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
      <nav className="sticky top-0 z-40 w-full bg-[var(--background)]/80 backdrop-blur border-b border-[var(--border)] shadow-sm">
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
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" fill="currentColor"/></svg>
            ) : (
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/><path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41" stroke="currentColor" strokeWidth="2"/></svg>
            )}
          </button>
        </div>
      </nav>
  <main className="min-h-screen w-full bg-gradient-to-br from-[var(--background)]/85 to-[var(--primary)]/15 text-[var(--foreground)] flex flex-col items-center gap-12 px-4 sm:px-8 py-12 sm:py-20 font-[family-name:var(--font-geist-sans)]">
        <motion.div
          ref={backgroundRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 -z-10 blur-3xl opacity-90 will-change-transform"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(2,77,190,0.25), transparent 55%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.12), transparent 50%), linear-gradient(130deg, rgba(2,8,23,0.9), rgba(2,77,190,0.25))",
          }}
        />
        <section className="w-full max-w-6xl grid gap-8 lg:grid-cols-[1.15fr,0.85fr] items-stretch mb-16 mt-6" data-aos="fade-up">
          <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)]/90 p-8 shadow-[0_25px_50px_rgba(15,23,42,0.18)]">
            <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden>
              <div className="absolute -top-32 -right-20 h-64 w-64 rounded-full bg-[var(--primary)]/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted-foreground)]">Portfolio · 2025</p>
            <div className="flex items-center gap-4 mb-4">
              <motion.div whileHover={{ scale: 1.05 }} className="relative flex-shrink-0 w-20 h-20 rounded-2xl overflow-hidden border border-[var(--border)] shadow-lg bg-gradient-to-br from-[var(--background)] via-[var(--card)] to-[var(--primary)]/20">
                <Image src={AVATAR_URL} alt="Kenny Nguyen avatar" fill className="object-cover" priority sizes="80px" />
              </motion.div>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Kenny Nguyen</h1>
            </div>
            <h2 className="text-xl sm:text-2xl font-medium text-[var(--primary)] mb-4 min-h-[2.5rem]">
              <span className="inline-flex items-center gap-2">
                <span className="inline-block w-1 h-6 rounded-full bg-[var(--primary)]" />
                <span className="font-mono">{typingText}</span>
              </span>
            </h2>
            <p className="text-base sm:text-lg text-[var(--muted-foreground)] max-w-2xl">
              Building thoughtful products across web, AI, and backend systems. I obsess over clarity, accessibility, and resilient delivery pipelines.
            </p>
            <p className="mt-3 text-base text-[var(--foreground)]/80">
              Currently experimenting with local-first copilots and hardened cloud-native workflows.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:hoangnhan20192@gmail.com" className="btn btn-primary">Contact Me</a>
              <button type="button" onClick={() => setShowResumePreview(true)} className="btn btn-secondary">Preview Resume</button>
              <a href="/resumes/resume.docx" download className="btn btn-secondary">Download Resume</a>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {METRICS.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-[var(--border)] bg-[var(--background)]/70 p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-wide text-[var(--muted-foreground)]">{metric.label}</p>
                  <p className="text-lg font-semibold text-[var(--foreground)]">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-5">
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)]/90 p-6 shadow-xl flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted-foreground)]">Ship log</p>
                <span className="inline-flex items-center gap-1 text-xs text-[var(--muted-foreground)]">
                  <CalendarDays size={14} /> Weekly pulse
                </span>
              </div>
              {SHIP_LOG.slice(0, 2).map((log) => (
                <article key={log.title} className="rounded-2xl border border-[var(--border)]/60 bg-[var(--background)]/70 p-4">
                  <div className="flex items-center justify-between text-xs text-[var(--muted-foreground)]">
                    <span>{log.week}</span>
                    <span className="uppercase tracking-wide">{log.status}</span>
                  </div>
                  <h3 className="mt-2 text-base font-semibold">{log.title}</h3>
                  <p className="text-sm text-[var(--muted-foreground)] mt-1">{log.summary}</p>
                  {log.link && (
                    <a href={log.link} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-1 text-sm text-[var(--primary)] hover:underline">
                      View work
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full max-w-6xl grid gap-4 sm:grid-cols-2 xl:grid-cols-4 mb-16" data-aos="fade-up">
          {QUICK_ACTIONS.map((action) => {
            const Icon = action.icon;
            return (
              <a
                key={action.label}
                href={action.href}
                className="group rounded-2xl border border-[var(--border)] bg-[var(--card)]/90 p-5 shadow-[0_15px_35px_rgba(15,23,42,0.15)] transition hover:-translate-y-1 hover:border-[var(--primary)]/50"
                target={action.href.startsWith("http") ? "_blank" : undefined}
                rel={action.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Icon size={16} />
                  {action.label}
                  <ArrowUpRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition" />
                </div>
                <p className="text-sm text-[var(--muted-foreground)] mt-2">{action.description}</p>
              </a>
            );
          })}
        </section>
        <section className="w-full max-w-5xl mb-16" id="about">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)]/90 p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-[var(--primary)]">About Me</h2>
              <p className="text-xs uppercase tracking-[0.4em] text-[var(--muted-foreground)]">Story in code</p>
            </div>
            <div className="mt-4 mb-4 flex gap-2 overflow-x-auto">
            {ABOUT_SNIPPETS.map((snippet, idx) => (
              <button
                key={snippet.lang}
                className={`px-4 py-1 rounded-full border text-xs font-mono transition-colors ${aboutLang === idx ? 'border-[var(--primary)] text-[var(--primary)] bg-[var(--background)]/60' : 'border-transparent text-[var(--muted-foreground)] hover:text-[var(--primary)]'}`}
                onClick={() => setAboutLang(idx)}
                aria-label={`Show About Me in ${snippet.lang}`}
              >
                {snippet.lang}
              </button>
            ))}
          </div>
          <pre className="rounded-2xl bg-black/80 text-white p-5 font-mono text-sm overflow-x-auto shadow-inner transition-colors duration-300">
            <code>{ABOUT_SNIPPETS[aboutLang].code}</code>
          </pre>
          </div>
        </section>
        <section className="w-full max-w-5xl mb-16" id="skills" data-aos="fade-up">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-[var(--primary)]">Skills</h2>
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--muted-foreground)]">Stack favorites</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map((skill) => {
              const Icon = skill.icon;
              return (
                <div key={skill.label} className="group rounded-2xl border border-[var(--border)] bg-[var(--card)]/85 p-4 shadow-sm transition hover:-translate-y-1 hover:border-[var(--primary)]/40">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--background)]/70" style={{ color: skill.color }}>
                      <Icon size={22} />
                    </span>
                    <div>
                      <p className="font-semibold text-[var(--foreground)]">{skill.label}</p>
                      <p className="text-xs text-[var(--muted-foreground)]">{skill.tooltip}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section className="w-full max-w-6xl mb-16" id="projects">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-[var(--primary)]">Projects</h2>
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--muted-foreground)]">Selected builds</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {PROJECTS.map((project) => (
              <article key={project.title} className="rounded-3xl border border-[var(--border)] bg-[var(--card)]/90 p-6 flex flex-col gap-4 shadow-[0_35px_55px_rgba(15,23,42,0.2)]">
                <div>
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight size={18} className="text-[var(--muted-foreground)]" />
                  </h3>
                  <p className="text-sm text-[var(--muted-foreground)] mt-2">{project.description}</p>
                </div>
                <p className="text-sm text-[var(--foreground)]/90">{project.impact}</p>
                <ul className="flex flex-wrap gap-2 text-xs text-[var(--muted-foreground)]">
                  {project.tech.map((tech) => (
                    <li key={tech} className="px-3 py-1 rounded-full bg-[var(--background)] border border-[var(--border)]/40">{tech}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4 text-sm mt-auto">
                  {project.links.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[var(--primary)] hover:underline">
                      {link.label}
                      <ExternalLink size={14} />
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="w-full max-w-5xl mb-16" id="ship-log">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-[var(--primary)]">Now Shipping</h2>
            <div className="text-xs uppercase text-[var(--muted-foreground)] flex items-center gap-2">
              <CalendarDays size={14} /> Weekly ship log
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {SHIP_LOG.map((log) => (
              <article key={log.title} className="rounded-2xl border border-[var(--border)] bg-[var(--card)]/90 p-5 shadow card-hover">
                <div className="flex items-center justify-between text-xs text-[var(--muted-foreground)]">
                  <span>{log.week}</span>
                  <span className="uppercase tracking-wide">{log.status}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold">{log.title}</h3>
                <p className="text-sm text-[var(--muted-foreground)] mt-2">{log.summary}</p>
                {log.link ? (
                  <a href={log.link} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center text-sm text-[var(--primary)] hover:underline">
                    Open thread <ArrowUpRight size={14} className="ml-1" />
                  </a>
                ) : (
                  <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">Case study coming soon</p>
                )}
              </article>
            ))}
          </div>
        </section>
        <section className="w-full max-w-6xl mb-16" id="features">
          <h2 className="text-2xl font-semibold mb-4 text-[var(--primary)]">Workflow Guardrails</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)]/85 p-6 shadow-lg transition">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2"><span>⚡</span> Observability first</h3>
              <p className="text-sm text-[var(--muted-foreground)]">CI, logging, and tracing wired before feature flags ship so iteration never blocks quality.</p>
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)]/85 p-6 shadow-lg transition">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2"><span>🌙</span> Inclusive interfaces</h3>
              <p className="text-sm text-[var(--muted-foreground)]">Keyboard, reduced motion, and semantic HTML baked in from the prototypes you see here.</p>
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)]/85 p-6 shadow-lg transition">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2"><span>🛡️</span> Privacy by default</h3>
              <p className="text-sm text-[var(--muted-foreground)]">Local-first AI experiments keep sensitive docs on device; cloud deployments gate secrets via Doppler.</p>
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)]/85 p-6 shadow-lg transition">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2"><span>🧩</span> Modular code</h3>
              <p className="text-sm text-[var(--muted-foreground)]">Component kits, typed APIs, and storybook coverage keep handoffs predictable.</p>
            </div>
          </div>
        </section>
        <section className="w-full max-w-6xl mb-16" id="stack">
          <div className="flex items-center gap-2 mb-4 text-[var(--primary)]">
            <Command size={18} />
            <h2 className="text-2xl font-semibold">Tooling I reach for</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {TOOLING.map((tool) => (
              <a key={tool.name} href={tool.href} target="_blank" rel="noreferrer" className="rounded-2xl border border-[var(--border)] bg-[var(--card)]/90 p-5 shadow-[0_20px_40px_rgba(15,23,42,0.15)] transition hover:-translate-y-1">
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <tool.icon size={20} />
                  {tool.name}
                  <ArrowUpRight size={16} className="text-[var(--muted-foreground)]" />
                </div>
                <p className="text-sm text-[var(--muted-foreground)] mt-2">{tool.detail}</p>
              </a>
            ))}
          </div>
        </section>
        <section className="w-full max-w-2xl mb-8" id="contact">
          <h2 className="text-xl font-semibold mb-4 text-[var(--primary)]">Contact</h2>
          <ul className="flex flex-wrap justify-center gap-6 text-base">
            <li>
              <a href="mailto:hoangnhan20192@gmail.com" className="flex items-center gap-2 hover:underline" aria-label="Email">
                <span className="text-lg">✉️</span> hoangnhan20192@gmail.com
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/kennyngdev-ca/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline" aria-label="LinkedIn">
                <span className="text-lg">🔗</span> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/Pintopie" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline" aria-label="GitHub">
                <span className="text-lg">🐙</span> GitHub
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-lg">📍</span> Toronto, ON Canada
            </li>
          </ul>
        </section>
        {showResumePreview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="bg-[var(--card)]/90 border border-[var(--border)] rounded-2xl shadow-xl p-8 max-w-2xl w-full relative flex flex-col items-center">
              <button onClick={() => setShowResumePreview(false)} className="absolute top-3 right-3 text-xl text-[var(--muted-foreground)] hover:text-[var(--primary)]">&times;</button>
              <h3 className="text-xl font-bold mb-4 text-[var(--primary)]">Resume Preview</h3>
              <iframe src="/resumes/resume.pdf" className="w-full h-96 rounded shadow" title="Resume Preview"></iframe>
              <a href="/resumes/resume.pdf" download className="btn btn-primary mt-4">Download Resume</a>
            </div>
          </div>
        )}
        {commandPaletteOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="bg-[var(--card)]/95 border border-[var(--border)] rounded-2xl shadow-xl p-6 max-w-lg w-full relative">
              <button onClick={() => setCommandPaletteOpen(false)} className="absolute top-3 right-3 text-xl text-[var(--muted-foreground)] hover:text-[var(--primary)]">&times;</button>
              <h3 className="text-lg font-bold mb-2 text-[var(--primary)] flex items-center gap-2">
                <Command size={16} /> Command Palette
              </h3>
              <input
                className="w-full px-3 py-2 rounded bg-[var(--background)] border border-[var(--border)] mb-3"
                placeholder="Type a command or page..."
                autoFocus
                value={commandQuery}
                onChange={(event) => setCommandQuery(event.target.value)}
                onKeyDown={handleCommandKeyDown}
              />
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {filteredCommands.length === 0 && (
                  <p className="text-sm text-[var(--muted-foreground)]">No commands found.</p>
                )}
                {filteredCommands.map((cmd, idx) => (
                  <button
                    key={cmd.label}
                    className={`w-full text-left rounded-xl border border-[var(--border)] px-4 py-3 text-sm flex items-start justify-between gap-3 ${
                      idx === focusedCommandIndex ? "bg-[var(--primary)]/10" : "bg-[var(--card)]/80"
                    }`}
                    onClick={() => handleCommandRun(cmd)}
                  >
                    <div>
                      <p className="font-semibold">{cmd.label}</p>
                      <p className="text-xs text-[var(--muted-foreground)]">{cmd.description}</p>
                    </div>
                    {cmd.shortcut && (
                      <span className="text-xs uppercase tracking-wider text-[var(--muted-foreground)]">{cmd.shortcut}</span>
                    )}
                  </button>
                ))}
              </div>
              <div className="text-xs text-[var(--muted-foreground)] mt-3 flex justify-between">
                <span>Press Esc to close • Enter to run</span>
                <span>{commandFeedback}</span>
              </div>
            </div>
          </div>
        )}
        <footer className="w-full text-center text-xs text-[var(--muted-foreground)] mt-auto pt-8 border-t border-[var(--border)]">
          &copy; {CURRENT_YEAR} Kenny Nguyen. Built with Next.js, Tailwind CSS, and a lot of Tim's coffee.
        </footer>
      </main>
    </>
  );
}
