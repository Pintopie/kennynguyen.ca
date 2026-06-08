"use client";

import NavBar from "@/shared/layout/NavBar";
import Footer from "@/shared/layout/Footer";
import Hero from "@/features/portfolio/components/Hero";
import About, { Education } from "@/features/portfolio/components/About";
import Skills from "@/features/portfolio/components/Skills";
import Experience from "@/features/portfolio/components/Experience";
import Projects from "@/features/portfolio/components/Projects";
import ContactChart from "@/features/portfolio/components/ContactChart";
import { useThemePreference } from "@/shared/hooks/useTheme";

export default function Home() {
  const { dark, setDark } = useThemePreference();

  return (
    <>
      <NavBar dark={dark} setDark={setDark} />
      <main className="site-shell">
        <div className="hero-backdrop" aria-hidden="true" />
        <div className="page-container">
          <Hero />
        </div>
        <div className="portfolio-content">
          <About />
          <Education />
          <Projects />
          <Skills />
          <Experience />
          <ContactChart />
        </div>
      </main>
      <Footer />
    </>
  );
}
