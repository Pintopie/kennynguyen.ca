"use client";

import { useState } from "react";
import NavBar from "@/shared/layout/NavBar";
import AuroraBackground from "@/shared/layout/AuroraBackground";
import Footer from "@/shared/layout/Footer";
import Hero from "@/features/portfolio/components/Hero";
import About from "@/features/portfolio/components/About";
import Skills from "@/features/portfolio/components/Skills";
import Experience from "@/features/portfolio/components/Experience";
import Hackathons from "@/features/portfolio/components/Hackathons";
import Projects from "@/features/portfolio/components/Projects";
import Tooling from "@/features/portfolio/components/Tooling";
import ContactChart from "@/features/portfolio/components/ContactChart";
import ResumePreview from "@/features/portfolio/components/ResumePreview";
import CommandMenu from "@/features/portfolio/components/CommandMenu";
import { useThemePreference } from "@/shared/hooks/useTheme";

export default function Home() {
  const { dark, setDark } = useThemePreference();
  const [showResumePreview, setShowResumePreview] = useState(false);

  return (
    <>
      <NavBar dark={dark} setDark={setDark} />
      <AuroraBackground dark={dark} />
      <main className="relative z-10 min-h-screen w-full text-[var(--foreground)] flex flex-col items-center gap-16 px-4 sm:px-8 py-12 sm:py-24 font-[family-name:var(--font-geist-sans)]">
        <Hero onOpenResume={() => setShowResumePreview(true)} />
        <About />
        <Skills />
        <Experience />
        <Hackathons />
        <Projects />
        <Tooling />
        <ContactChart />
        <Footer />
      </main>

      <ResumePreview isOpen={showResumePreview} onClose={() => setShowResumePreview(false)} />
      <CommandMenu
        dark={dark}
        setDark={setDark}
        onOpenResume={() => setShowResumePreview(true)}
      />
    </>
  );
}
