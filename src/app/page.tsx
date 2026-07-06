import NavBar from "@/shared/layout/NavBar";
import Footer from "@/shared/layout/Footer";
import Hero from "@/features/portfolio/components/Hero";
import About, { Education } from "@/features/portfolio/components/About";
import Skills from "@/features/portfolio/components/Skills";
import Experience from "@/features/portfolio/components/Experience";
import Projects from "@/features/portfolio/components/Projects";
import ContactChart from "@/features/portfolio/components/ContactChart";
import Backdrop from "@/shared/layout/Backdrop";

export default function Home() {
  return (
    <div className="site-canvas">
      <Backdrop />
      <NavBar />
      <main>
        <Hero />
        <div className="portfolio-content">
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <ContactChart />
        </div>
      </main>
      <Footer />
    </div>
  );
}
