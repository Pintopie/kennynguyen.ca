import Link from "next/link";
import { PROJECTS } from "@/constants";
import { ArrowUpRight } from "lucide-react";

const UX_CASE_STUDIES = [
    {
        title: "Figma case studies",
        status: "Returning soon",
        description:
            "Reserved for product design case studies covering research, flows, interface decisions, and prototype links.",
    },
    {
        title: "Design systems work",
        status: "In progress",
        description:
            "A place for component logic, responsive layouts, accessibility notes, and the tradeoffs behind UI decisions.",
    },
];

export default function Projects() {
    const isInternalHref = (href: string) => href.startsWith("/");

    return (
        <section className="portfolio-section" id="projects">
            <header className="section-heading">
                <p className="eyebrow">Selected work</p>
                <h2>Software & UX cases.</h2>
                <p>
                    A selection of software and product work across backend APIs, product UI, AI workflows, and deployments
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

            <div className="case-study-lane" aria-label="UX case study slots">
                <div>
                    <p className="eyebrow">UX / UI</p>
                    <h3>Case-study lane</h3>
                </div>
                {UX_CASE_STUDIES.map((study) => (
                    <article className="case-study-card" key={study.title}>
                        <span>{study.status}</span>
                        <h4>{study.title}</h4>
                        <p>{study.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
