import Link from "next/link";
import { PROJECTS } from "@/constants";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
    const isInternalHref = (href: string) => href.startsWith("/");

    return (
        <section className="portfolio-section" id="projects">
            <header className="section-heading">
                <h2>Selected work</h2>
                <p>
                    Production systems and applied AI projects, selected for the
                    problems they solve and the engineering decisions behind them.
                </p>
            </header>

            <div className="project-list">
                {PROJECTS.map((project, index) => (
                    <article className="project-row" key={project.title}>
                        <div className="project-index" aria-hidden="true">
                            {String(index + 1).padStart(2, "0")}
                        </div>
                        <div className="project-summary">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="link-row">
                                {project.links.map((link) =>
                                    isInternalHref(link.href) ? (
                                        <Link className="text-link" key={link.href} href={link.href}>
                                            {link.label}
                                            <ArrowUpRight aria-hidden="true" size={16} />
                                        </Link>
                                    ) : (
                                        <a
                                            className="text-link"
                                            key={link.href}
                                            href={link.href}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {link.label}
                                            <ArrowUpRight aria-hidden="true" size={16} />
                                        </a>
                                    ),
                                )}
                            </div>
                        </div>
                        <div className="project-details">
                            <ul className="evidence-list">
                                {project.highlights.slice(0, 3).map((highlight) => (
                                    <li key={highlight}>{highlight}</li>
                                ))}
                            </ul>
                            <ul className="tag-list" aria-label={`${project.title} technologies`}>
                                {project.tech.map((tech) => (
                                    <li key={tech}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
