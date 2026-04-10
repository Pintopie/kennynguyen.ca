"use client";

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
import { useThemePreference } from "@/shared/hooks/useTheme";
import SmoothScroll from "@/shared/ui/SmoothScroll";
import ScrollProgress from "@/shared/ui/ScrollProgress";
import WaveDivider from "@/shared/ui/WaveDivider";

export default function Home() {
  const { dark, setDark } = useThemePreference();

  return (
    <SmoothScroll>
      <NavBar dark={dark} setDark={setDark} />
      <AuroraBackground dark={dark} />
      <ScrollProgress />
      <main className="relative z-10 min-h-screen w-full text-[var(--foreground)] flex flex-col items-center gap-16 px-4 sm:px-8 py-12 sm:py-24 font-[family-name:var(--font-geist-sans)]">
        <Hero />
        <About />
        <WaveDivider />
        <Skills />
        <Experience />
        <WaveDivider flip />
        <Hackathons />
        <Projects />
        <WaveDivider />
        <Tooling />
        <ContactChart />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
