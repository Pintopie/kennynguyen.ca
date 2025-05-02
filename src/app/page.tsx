"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { useHotkeys } from "react-hotkeys-hook";
import { FaReact, FaNodeJs, FaCloud } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#features", label: "Features" },
  { href: "#testimonials", label: "Testimonials" },
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
};` },
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
  interests: ["Web", "AI", "Cloud"],
  funFact: "Always learning, always building!"
};` },
  {
    lang: "Python",
    code: `about_me = {
    "name": "Kenny Nguyen",
    "role": "Software Engineer",
    "location": "Toronto, Canada",
    "interests": ["Web", "AI", "Cloud"],
    "fun_fact": "Always learning, always building!"
}` },
];

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [typingIndex, setTypingIndex] = useState(0);
  const [typingText, setTypingText] = useState("");
  const typingRoles = useMemo(() => [
    "Software Engineer",
    "Developer who is always curious",
    'AI enthusiast – loves solving real-world problems',
    ], []);
  const [roleIdx, setRoleIdx] = useState(0);
  const [showResumePreview, setShowResumePreview] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const typingTimeout = useRef<NodeJS.Timeout | null>(null);
  const [aboutLang, setAboutLang] = useState(0);

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
  });

  return (
    <>
      <nav className="sticky top-0 z-40 w-full bg-[var(--background)]/80 backdrop-blur border-b border-[var(--border)] shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
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
      <main className="min-h-screen bg-gradient-to-br from-[var(--background)]/80 to-[var(--primary)]/10 text-[var(--foreground)] flex flex-col items-center px-4 sm:px-8 py-8 sm:py-16 font-[family-name:var(--font-geist-sans)]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 -z-10 bg-gradient-to-tr from-[var(--primary)]/10 to-[var(--background)]/60 animate-pulse"
        />
        <section className="w-full max-w-4xl flex flex-col sm:flex-row items-center gap-8 mb-16 mt-4" data-aos="fade-up">
          <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-[var(--primary)]/30 to-[var(--muted)]/30 flex items-center justify-center shadow-lg border-4 border-[var(--border)] overflow-hidden">
            <span className="text-5xl text-[var(--muted-foreground)]">🧑‍💻</span>
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-2 tracking-tight">Kenny Nguyen</h1>
            <h2 className="text-xl sm:text-2xl font-medium text-[var(--primary)] mb-4 min-h-[2.5rem]">
              <span className="inline-block border-r-2 border-[var(--primary)] pr-1 animate-pulse">{typingText}</span>
            </h2>
            <p className="text-lg text-[var(--muted-foreground)] max-w-xl">Building modern, accessible, and delightful web experiences. Passionate about React, TypeScript, and cloud-native solutions.</p>
            <div className="mt-6 flex flex-wrap gap-4 justify-center sm:justify-start">
              <a href="#contact" className="btn btn-primary">Contact Me</a>
              <button onClick={() => setShowResumePreview(true)} className="btn btn-secondary">Preview Resume</button>
              <a href="/resumes/resume.docx" download className="btn btn-secondary">Download Resume</a>
            </div>
          </div>
        </section>
        <section className="w-full max-w-3xl mb-16" id="about">
          <h2 className="text-2xl font-semibold mb-4 text-[var(--primary)]">About Me</h2>
          <div className="mb-4 flex gap-2">
            {ABOUT_SNIPPETS.map((snippet, idx) => (
              <button
                key={snippet.lang}
                className={`px-3 py-1 rounded-t font-mono text-xs border-b-2 transition-colors ${aboutLang === idx ? 'bg-[var(--card)] border-[var(--primary)] text-[var(--primary)]' : 'bg-transparent border-transparent text-[var(--muted-foreground)] hover:text-[var(--primary)]'}`}
                onClick={() => setAboutLang(idx)}
                aria-label={`Show About Me in ${snippet.lang}`}
              >
                {snippet.lang}
              </button>
            ))}
          </div>
          <pre className="rounded-b-lg rounded-tr-lg bg-[var(--card)]/80 ] p-4 font-mono text-sm overflow-x-auto shadow-inner transition-colors duration-300">
            <code>{ABOUT_SNIPPETS[aboutLang].code}</code>
          </pre>
        </section>
        <section className="w-full max-w-3xl mb-16" id="skills" data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-4 text-[var(--primary)]">Skills</h2>
          <ul className="flex flex-wrap gap-3">
            <li title="React – UI library" className="group relative flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--card)] border border-[var(--border)] text-sm shadow hover:shadow-xl transition-transform duration-200 hover:-translate-y-1">
              <FaReact className="text-[#61DAFB]" />
              <span className="font-medium text-[var(--foreground)]">React</span>
              <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 rounded bg-black/80 text-white text-xs opacity-0 group-hover:opacity-100 transition pointer-events-none">React &ndash; UI library</span>
            </li>
            <li title="Next.js – React Framework" className="group relative flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--card)] border border-[var(--border)] text-sm shadow hover:shadow-xl transition-transform duration-200 hover:-translate-y-1">
              <SiNextdotjs className="text-black dark:text-white" />
              <span className="font-medium text-[var(--foreground)]">Next.js</span>
              <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 rounded bg-black/80 text-white text-xs opacity-0 group-hover:opacity-100 transition pointer-events-none">Next.js &ndash; React Framework</span>
            </li>
            <li title="TypeScript – Typed JS" className="group relative flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--card)] border border-[var(--border)] text-sm shadow hover:shadow-xl transition-transform duration-200 hover:-translate-y-1">
              <SiTypescript className="text-[#3178C6]" />
              <span className="font-medium text-[var(--foreground)]">TypeScript</span>
              <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 rounded bg-black/80 text-white text-xs opacity-0 group-hover:opacity-100 transition pointer-events-none">TypeScript &ndash; Typed JS</span>
            </li>
            <li title="Node.js – Backend" className="group relative flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--card)] border border-[var(--border)] text-sm shadow hover:shadow-xl transition-transform duration-200 hover:-translate-y-1">
              <FaNodeJs className="text-[#68A063]" />
              <span className="font-medium text-[var(--foreground)]">Node.js</span>
              <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 rounded bg-black/80 text-white text-xs opacity-0 group-hover:opacity-100 transition pointer-events-none">Node.js &ndash; Backend</span>
            </li>
            <li title="Tailwind CSS – Utility-first CSS" className="group relative flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--card)] border border-[var(--border)] text-sm shadow hover:shadow-xl transition-transform duration-200 hover:-translate-y-1">
              <SiTailwindcss className="text-[#38BDF8]" />
              <span className="font-medium text-[var(--foreground)]">Tailwind CSS</span>
              <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 rounded bg-black/80 text-white text-xs opacity-0 group-hover:opacity-100 transition pointer-events-none">Tailwind CSS &ndash; Utility-first CSS</span>
            </li>
            <li title="Cloud – Deployments" className="group relative flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--card)] border border-[var(--border)] text-sm shadow hover:shadow-xl transition-transform duration-200 hover:-translate-y-1">
              <FaCloud className="text-[#a3e635]" />
              <span className="font-medium text-[var(--foreground)]">Cloud</span>
              <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 rounded bg-black/80 text-white text-xs opacity-0 group-hover:opacity-100 transition pointer-events-none">Cloud &ndash; Deployments</span>
            </li>
          </ul>
        </section>
        <section className="w-full max-w-4xl mb-16" id="projects">
          <h2 className="text-2xl font-semibold mb-4 text-[var(--primary)]">Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <article className="rounded-2xl border border-[var(--border)] bg-[var(--card)]/80 backdrop-blur-md p-6 flex flex-col gap-3 shadow-lg card-hover">
              <div className="h-32 w-full bg-gradient-to-tr from-[var(--primary)]/20 to-[var(--muted)]/20 rounded-xl mb-2 flex items-center justify-center">
                <span className="text-4xl">🌐</span>
              </div>
              <h3 className="text-lg font-bold">Modern Portfolio</h3>
              <p className="text-sm text-[var(--muted-foreground)]">A beautiful, responsive portfolio template with Next.js and Tailwind CSS, featuring dark mode and glassmorphism.</p>
              <div className="flex gap-3 mt-auto">
                <a href="#" className="underline hover:text-[var(--primary)]">GitHub</a>
                <a href="#" className="underline hover:text-[var(--primary)]">Demo</a>
              </div>
            </article>
            <article className="rounded-2xl border border-[var(--border)] bg-[var(--card)]/80 backdrop-blur-md p-6 flex flex-col gap-3 shadow-lg card-hover">
              <div className="h-32 w-full bg-gradient-to-tr from-[var(--primary)]/20 to-[var(--muted)]/20 rounded-xl mb-2 flex items-center justify-center">
                <span className="text-4xl">📋</span>
              </div>
              <h3 className="text-lg font-bold">Task Manager</h3>
              <p className="text-sm text-[var(--muted-foreground)]">A full-stack productivity app with real-time sync, authentication, and a modern UI.</p>
              <div className="flex gap-3 mt-auto">
                <a href="#" className="underline hover:text-[var(--primary)]">GitHub</a>
                <a href="#" className="underline hover:text-[var(--primary)]">Demo</a>
              </div>
            </article>
          </div>
        </section>
        <section className="w-full max-w-4xl mb-16" id="features">
          <h2 className="text-2xl font-semibold mb-4 text-[var(--primary)]">Features</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)]/80 backdrop-blur-md p-6 shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2"><span>⚡</span> Fast & Responsive</h3>
              <p className="text-sm text-[var(--muted-foreground)]">Optimized for all devices, with smooth transitions and adaptive layouts.</p>
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)]/80 backdrop-blur-md p-6 shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2"><span>🌙</span> Dark Mode</h3>
              <p className="text-sm text-[var(--muted-foreground)]">Seamless dark/light theme support for comfortable viewing anytime.</p>
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)]/80 backdrop-blur-md p-6 shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2"><span>🛡️</span> Accessible</h3>
              <p className="text-sm text-[var(--muted-foreground)]">Built with accessibility in mind: keyboard navigation, color contrast, and ARIA labels.</p>
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)]/80 backdrop-blur-md p-6 shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2"><span>🧩</span> Modular & Extensible</h3>
              <p className="text-sm text-[var(--muted-foreground)]">Easily add new sections, features, or integrations as your portfolio grows.</p>
            </div>
          </div>
        </section>
        <section className="w-full max-w-3xl mb-16" id="testimonials">
          <h2 className="text-2xl font-semibold mb-4 text-[var(--primary)]">Testimonials</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <blockquote className="rounded-xl bg-[var(--card)]/70 border border-[var(--border)] p-5 shadow">
              <p className="text-base italic mb-2">“Kenny is a fantastic engineer who delivers high-quality work and is a joy to collaborate with.”</p>
              <footer className="text-sm text-[var(--muted-foreground)]">– Jane Doe, Product Manager</footer>
            </blockquote>
            <blockquote className="rounded-xl bg-[var(--card)]/70 border border-[var(--border)] p-5 shadow">
              <p className="text-base italic mb-2">“Creative, reliable, and always up-to-date with the latest tech. Highly recommended!”</p>
              <footer className="text-sm text-[var(--muted-foreground)]">– John Smith, Tech Lead</footer>
            </blockquote>
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
              <a href="https://github.com/kennynguyen" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline" aria-label="GitHub">
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
              <iframe src="/resumes/resume.docx" className="w-full h-96 rounded shadow" title="Resume Preview"></iframe>
              <a href="/resumes/resume.docx" download className="btn btn-primary mt-4">Download Resume</a>
            </div>
          </div>
        )}
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="bg-[var(--card)]/80 border border-[var(--border)] rounded-2xl shadow-xl p-8 max-w-md w-full relative">
              <button onClick={() => setModalOpen(false)} className="absolute top-3 right-3 text-xl text-[var(--muted-foreground)] hover:text-[var(--primary)]">&times;</button>
              <h3 className="text-xl font-bold mb-4 text-[var(--primary)]">Transparent Modal</h3>
              <p className="text-base text-[var(--muted-foreground)]">This is a modern, glassy modal. You can use it for project details, contact forms, or any other interactive content.</p>
            </div>
          </div>
        )}
        {commandPaletteOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="bg-[var(--card)]/95 border border-[var(--border)] rounded-2xl shadow-xl p-6 max-w-lg w-full relative">
              <button onClick={() => setCommandPaletteOpen(false)} className="absolute top-3 right-3 text-xl text-[var(--muted-foreground)] hover:text-[var(--primary)]">&times;</button>
              <h3 className="text-lg font-bold mb-2 text-[var(--primary)]">Command Palette</h3>
              <input className="w-full px-3 py-2 rounded bg-[var(--background)] border border-[var(--border)] mb-2" placeholder="Type a command or page..." autoFocus />
              <div className="text-xs text-[var(--muted-foreground)]">Try: &quot;about&quot;, &quot;projects&quot;, &quot;contact&quot;</div>
            </div>
          </div>
        )}
        <footer className="w-full text-center text-xs text-[var(--muted-foreground)] mt-auto pt-8 border-t border-[var(--border)]">
          &copy; {new Date().getFullYear()} Kenny Nguyen. All rights reserved.
        </footer>
      </main>
    </>
  );
}
