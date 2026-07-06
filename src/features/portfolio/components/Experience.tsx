"use client";

import Image from "next/image";
import { EXPERIENCE } from "@/constants";
import { ArrowUpRight } from "lucide-react";
import { useState, type KeyboardEvent } from "react";

const ROLE_SUMMARIES: Record<string, string> = {
    "S. Sutton & Associates Inc.":
        "Web and IT operations across redesigns, hosting, DNS, SSL, SEO, analytics, and production maintenance.",
    HealthBridgeAI:
        "Backend engineering for AI clinical assistant services, including auth, LLM workflows, Docker deployments, and release automation.",
    "Netpalm.AI":
        "Frontend product work, scraping pipelines, Docker microservices, and Selenium-based validation.",
};

const Experience = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeJob = EXPERIENCE[activeIndex];

    const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
        if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
            return;
        }

        event.preventDefault();

        const lastIndex = EXPERIENCE.length - 1;
        const nextIndex =
            event.key === "Home"
                ? 0
                : event.key === "End"
                    ? lastIndex
                    : event.key === "ArrowLeft"
                        ? Math.max(index - 1, 0)
                        : Math.min(index + 1, lastIndex);

        setActiveIndex(nextIndex);

        const nextButton = event.currentTarget.parentElement?.querySelector<HTMLButtonElement>(
            `#experience-tab-${nextIndex}`,
        );
        nextButton?.focus();
    };

    return (
        <section className="portfolio-section" id="experience">
            <header className="section-heading">
                <p className="eyebrow">Experience</p>
                <h2>Work timeline.</h2>
                <p>
                    Move left to right through the roles. Each stop shows the focus,
                    proof points, and stack without turning the section into a resume wall.
                </p>
            </header>

            <div className="experience-showcase">
                <div className="experience-rail" role="tablist" aria-label="Experience timeline">
                    {EXPERIENCE.map((job, index) => {
                        const selected = index === activeIndex;

                        return (
                            <button
                                className="experience-tab"
                                type="button"
                                role="tab"
                                id={`experience-tab-${index}`}
                                aria-selected={selected}
                                aria-controls={`experience-panel-${index}`}
                                data-active={selected ? "true" : "false"}
                                onClick={() => setActiveIndex(index)}
                                onKeyDown={(event) => handleTabKeyDown(event, index)}
                                key={`${job.company}-${job.role}`}
                            >
                                <span className="experience-tab__node" aria-hidden="true">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <span className="experience-tab__top">
                                    <span className="experience-tab__mark">
                                        <Image
                                            src={job.logo}
                                            alt=""
                                            fill
                                            sizes="48px"
                                            className="object-cover"
                                        />
                                    </span>
                                    <span className="experience-tab__dates">
                                        {job.startDate} to {job.endDate}
                                    </span>
                                </span>
                                <span className="experience-tab__status">
                                    {selected ? "Selected" : "Select role"}
                                </span>
                                <span className="experience-tab__company">{job.company}</span>
                                <span className="experience-tab__role">{job.role}</span>
                            </button>
                        );
                    })}
                </div>

                <article
                    className="experience-panel"
                    role="tabpanel"
                    id={`experience-panel-${activeIndex}`}
                    aria-labelledby={`experience-tab-${activeIndex}`}
                >
                    <div className="experience-panel__summary">
                        <div className="experience-panel__header">
                            <div className="experience-panel__identity">
                                <div className="company-mark">
                                    <Image
                                        src={activeJob.logo}
                                        alt=""
                                        fill
                                        sizes="56px"
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="eyebrow">{activeJob.startDate} to {activeJob.endDate}</p>
                                    <h3>{activeJob.role}</h3>
                                    <p>{activeJob.location}</p>
                                </div>
                            </div>

                            <div className="experience-panel__company">
                                <a
                                    className="company-name"
                                    href={activeJob.website}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {activeJob.company}
                                    <ArrowUpRight aria-hidden="true" size={15} />
                                </a>
                            </div>
                        </div>

                        <p className="experience-focus">
                            {ROLE_SUMMARIES[activeJob.company] ?? activeJob.highlights[0]}
                        </p>

                        <ul className="tag-list" aria-label={`${activeJob.company} technologies`}>
                            {activeJob.tech.map((tech) => (
                                <li key={tech}>{tech}</li>
                            ))}
                        </ul>
                    </div>

                    <ul className="experience-proof">
                        {activeJob.highlights.slice(0, 3).map((highlight) => (
                            <li key={highlight}>{highlight}</li>
                        ))}
                    </ul>
                </article>
            </div>
        </section>
    );
};

export default Experience;
