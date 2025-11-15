"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useHotkeys } from "react-hotkeys-hook";
import { FaReact, FaNodeJs, FaCloud, FaRobot, FaCode } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiPython, SiFastapi, SiDocker, SiGit, SiGithub, SiPostgresql, SiAmazonwebservices, SiJupyter } from "react-icons/si";
import { ArrowUpRight, CalendarDays, Command, ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
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
  { href: "#stack", label: "Tools" },
  { href: "#contact", label: "Contact Me" },
];

const ABOUT_SNIPPETS = [
  {
    lang: "Java",
    code: `// Full-stack software engineer passionate about scalable systems
public class AboutMe {
  private String name = "Kenny Nguyen";
  private String role = "Full-Stack Software Engineer";
  private String location = "Toronto, Canada";
  private String[] frontend = {"React", "Next.js", "TypeScript", "Tailwind CSS"};
  private String[] backend = {"Node.js", "FastAPI", "PostgreSQL", "Docker"};
  private String[] cloud = {"AWS", "Vercel", "Docker Compose"};
  private String[] ml = {"LLMs", "RAG Systems", "ML Pipelines", "Computer Vision"};
  private String[] interests = {"Web Development", "AI Systems", "Cloud Architecture"};
  
  public static void main(String[] args) {
    AboutMe kenny = new AboutMe();
    System.out.println("Name: " + kenny.name);
    System.out.println("Role: " + kenny.role);
    System.out.println("Location: " + kenny.location);
    System.out.println("Philosophy: Build impactful solutions with clean code");
  }
  
  public String getProfile() {
    return "Full-Stack Engineer | AI Enthusiast | Cloud Architect";
  }
}`,
  },
  {
    lang: "TypeScript",
    code: `// Type-safe representation of my professional profile
interface Developer {
  name: string;
  role: string;
  location: string;
  yearsExperience: number;
  skills: SkillSet;
  projects: Project[];
  openToRoles: string[];
}

interface SkillSet {
  frontend: Technology[];
  backend: Technology[];
  cloud: Technology[];
  ml: string[];
}

interface Technology {
  name: string;
  level: "expert" | "intermediate" | "learning";
  yearsUsed: number;
}

const aboutMe: Developer = {
  name: "Kenny Nguyen",
  role: "Full-Stack Software Engineer",
  location: "Toronto, Canada",
  yearsExperience: 2,
  skills: {
    frontend: [
      { name: "React", level: "expert", yearsUsed: 2 },
      { name: "TypeScript", level: "expert", yearsUsed: 2 },
      { name: "Next.js", level: "intermediate", yearsUsed: 1 }
    ],
    backend: [
      { name: "FastAPI", level: "expert", yearsUsed: 1 },
      { name: "Node.js", level: "intermediate", yearsUsed: 2 }
    ],
    cloud: ["AWS", "Docker", "Vercel", "Docker Compose"],
    ml: ["LLM Integration", "RAG Systems", "ML Pipelines"]
  },
  projects: [
    { title: "Local RAG System", impact: "Self-hosted LLM with offline embeddings" },
    { title: "Liver Tumor ML", impact: "Medical imaging analysis with CV" }
  ],
  openToRoles: ["Full-Stack Engineer", "ML Engineer", "Backend Engineer"]
};

export const isHiring = true;`,
  },
  {
    lang: "Python",
    code: `"""
Kenny Nguyen - Full-Stack Software Engineer
Building scalable systems with clean code and modern tech stack
"""
from dataclasses import dataclass
from typing import List, Dict

@dataclass
class Expertise:
    frontend: List[str]
    backend: List[str]
    cloud: List[str]
    ml_systems: List[str]

@dataclass
class Developer:
    name: str
    role: str
    location: str
    github: str
    linkedin: str
    expertise: Expertise
    interests: List[str]
    
    def describe_skills(self) -> Dict[str, List[str]]:
        return {
            "full_stack": self.expertise.frontend + self.expertise.backend,
            "cloud_devops": self.expertise.cloud,
            "ml_specialization": self.expertise.ml_systems
        }

# Initialize my profile
kenny = Developer(
    name="Kenny Nguyen",
    role="Full-Stack Software Engineer",
    location="Toronto, Canada",
    github="github.com/Pintopie",
    linkedin="linkedin.com/in/kennyngdev-ca",
    expertise=Expertise(
        frontend=["React", "Next.js", "TypeScript", "Tailwind CSS"],
        backend=["FastAPI", "Node.js", "PostgreSQL"],
        cloud=["AWS", "Docker", "Docker Compose", "Vercel"],
        ml_systems=["LLM Integration", "RAG", "Medical Imaging ML"]
    ),
    interests=["Scalable Systems", "AI/ML", "Web Development", "Open Source"]
`,
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

const CURRENT_YEAR = new Date().getFullYear();
const AVATAR_URL = "https://avatars.githubusercontent.com/u/134212302?v=4";

// Framer Motion animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: {
    y: -8,
    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.25)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
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

const METRICS = [
  { label: "Timezone", value: "Toronto • EST" },
  { label: "Focus", value: "Backend Development" },
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
        {/* Floating Creative Elements */}
        <motion.div
          className="fixed top-1/4 right-1/4 w-72 h-72 rounded-full opacity-30 pointer-events-none -z-5"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background: "radial-gradient(circle, rgba(2,77,190,0.4), transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <motion.div
          className="fixed bottom-1/3 left-1/3 w-96 h-96 rounded-full opacity-20 pointer-events-none -z-5"
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          style={{
            background: "radial-gradient(circle, rgba(220,239,255,0.3), transparent 70%)",
            filter: "blur(50px)",
          }}
        />
        <section className="w-full max-w-6xl grid gap-8 lg:grid-cols-[1.15fr,0.85fr] items-stretch mb-16 mt-6" data-aos="fade-up">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)]/90 p-8 shadow-[0_25px_50px_rgba(15,23,42,0.18)]">
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
                whileTap={{ scale: 0.98 }}
                href="mailto:hoangnhan20192@gmail.com" 
                className="btn btn-primary">Contact Me</motion.a>
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="button" 
                onClick={() => setShowResumePreview(true)} 
                className="btn btn-secondary">Preview Resume</motion.button>
              <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="/resumes/resume.docx" 
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
              className="rounded-3xl border border-[var(--border)] bg-[var(--card)]/90 p-6 shadow-xl flex flex-col gap-4">
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
        <ScrollReveal className="w-full max-w-6xl grid gap-4 sm:grid-cols-2 xl:grid-cols-4 mb-16">
          {QUICK_ACTIONS.map((action, idx) => {
            const Icon = action.icon;
            return (
              <AnimatedCard
                key={action.label}
                delay={idx * 0.08}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)]/90 p-5 shadow-[0_15px_35px_rgba(15,23,42,0.15)]"
              >
                <a
                  href={action.href}
                  className="group flex flex-col h-full"
                  target={action.href.startsWith("http") ? "_blank" : undefined}
                  rel={action.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <motion.div 
                    className="flex items-center gap-2 text-sm font-semibold"
                    whileHover={{ x: 2 }}
                  >
                    <Icon size={16} />
                    {action.label}
                    <motion.span 
                      initial={{ opacity: 0, x: -5 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="ml-auto">
                      <ArrowUpRight size={14} />
                    </motion.span>
                  </motion.div>
                  <p className="text-sm text-[var(--muted-foreground)] mt-2">{action.description}</p>
                </a>
              </AnimatedCard>
            );
          })}
        </ScrollReveal>
        <section className="w-full max-w-5xl mb-16" id="about">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-[var(--border)] bg-[var(--card)]/90 p-6 shadow-xl">
            <motion.div 
              className="flex items-center justify-between"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold text-[var(--primary)]">About Me</h2>
              <p className="text-xs uppercase tracking-[0.4em] text-[var(--muted-foreground)]">Story in code</p>
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
                <p className="text-sm text-[var(--foreground)]/90">{project.impact}</p>
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
        <section className="w-full max-w-6xl mb-16" id="features">
          <motion.h2 
            className="text-2xl font-semibold mb-4 text-[var(--primary)]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            Workflow Guardrails
          </motion.h2>
          <motion.div 
            className="grid gap-6 sm:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <AnimatedCard delay={0} className="rounded-2xl border border-[var(--border)] bg-[var(--card)]/85 p-6 shadow-lg">
              <motion.h3 
                className="text-lg font-bold mb-2 flex items-center gap-2"
                whileHover={{ x: 4 }}
              >
                <span>⚡</span> Observability first
              </motion.h3>
              <p className="text-sm text-[var(--muted-foreground)]">CI, logging, and tracing wired before feature flags ship so iteration never blocks quality.</p>
            </AnimatedCard>
            <AnimatedCard delay={0.1} className="rounded-2xl border border-[var(--border)] bg-[var(--card)]/85 p-6 shadow-lg">
              <motion.h3 
                className="text-lg font-bold mb-2 flex items-center gap-2"
                whileHover={{ x: 4 }}
              >
                <span>🌙</span> Inclusive interfaces
              </motion.h3>
              <p className="text-sm text-[var(--muted-foreground)]">Keyboard, reduced motion, and semantic HTML baked in from the prototypes you see here.</p>
            </AnimatedCard>
            <AnimatedCard delay={0.2} className="rounded-2xl border border-[var(--border)] bg-[var(--card)]/85 p-6 shadow-lg">
              <motion.h3 
                className="text-lg font-bold mb-2 flex items-center gap-2"
                whileHover={{ x: 4 }}
              >
                <span>🛡️</span> Privacy by default
              </motion.h3>
              <p className="text-sm text-[var(--muted-foreground)]">Local-first AI experiments keep sensitive docs on device; cloud deployments gate secrets via Doppler.</p>
            </AnimatedCard>
            <AnimatedCard delay={0.3} className="rounded-2xl border border-[var(--border)] bg-[var(--card)]/85 p-6 shadow-lg">
              <motion.h3 
                className="text-lg font-bold mb-2 flex items-center gap-2"
                whileHover={{ x: 4 }}
              >
                <span>🧩</span> Modular code
              </motion.h3>
              <p className="text-sm text-[var(--muted-foreground)]">Component kits, typed APIs, and storybook coverage keep handoffs predictable.</p>
            </AnimatedCard>
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
            <h2 className="text-2xl font-semibold">I Frequently Use </h2>
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
          <motion.h2 
            className="text-xl font-semibold mb-4 text-[var(--primary)]"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            Contact
          </motion.h2>
          <motion.ul 
            className="flex flex-wrap justify-center gap-6 text-base"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.li variants={itemVariants}>
              <motion.a 
                href="mailto:hoangnhan20192@gmail.com" 
                className="flex items-center gap-2 hover:underline" 
                aria-label="Email"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">✉️</span> hoangnhan20192@gmail.com
              </motion.a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <motion.a 
                href="https://www.linkedin.com/in/kennyngdev-ca/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:underline" 
                aria-label="LinkedIn"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">🔗</span> LinkedIn
              </motion.a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <motion.a 
                href="https://github.com/Pintopie" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:underline" 
                aria-label="GitHub"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">🐙</span> GitHub
              </motion.a>
            </motion.li>
            <motion.li 
              className="flex items-center gap-2"
              variants={itemVariants}
            >
              <span className="text-lg">📍</span> Toronto, ON Canada
            </motion.li>
          </motion.ul>
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
                  Resume Preview
                </motion.h3>
                <motion.iframe 
                  src="/resumes/resume.pdf" 
                  className="w-full h-96 rounded shadow" 
                  title="Resume Preview"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                />
                <motion.a 
                  href="/resumes/resume.pdf" 
                  download 
                  className="btn btn-primary mt-4"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Resume
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
                      className={`w-full text-left rounded-xl border border-[var(--border)] px-4 py-3 text-sm flex items-start justify-between gap-3 transition-colors ${
                        idx === focusedCommandIndex ? "bg-[var(--primary)]/10" : "bg-[var(--card)]/80"
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
          &copy; {CURRENT_YEAR} Kenny Nguyen. Built with Next.js, Tailwind CSS, and a lot of Tim's coffee.
        </motion.footer>
      </main>
    </>
  );
}
