import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { EDUCATION, HACKATHONS } from "@/constants";

export default function About() {
    return (
        <section className="portfolio-section about-section" id="about">
            <div className="about-story">
                <div>
                    <p className="eyebrow">About</p>
                    <h2>Software engineer with a product eye.</h2>
                </div>
                <div className="about-copy">
                    <p>
                        I started in Software Development at Broward College and now study
                        Information Science at the University of Toronto.
                    </p>
                    <p>
                        Most of my work sits between product and infrastructure: responsive
                        pages, backend services, Docker deployments, analytics, and AI-assisted
                        workflows.
                    </p>
                </div>
            </div>
        </section>
    );
}

export function Education() {
    const competition = HACKATHONS[0];

    return (
        <section className="portfolio-section" id="education">
            <header className="section-heading">
                <p className="eyebrow">Education</p>
                <h2>Study and project work.</h2>
                <p>
                    Formal study in information systems, software development,
                    interface design, and applied machine learning.
                </p>
            </header>

            <div className="education-list">
                {EDUCATION.map((education) => (
                    <article className="education-row" key={education.school}>
                        <div className="education-identity">
                            <div className="education-mark">
                                <Image
                                    src={education.logo}
                                    alt=""
                                    fill
                                    sizes="48px"
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h3>{education.school}</h3>
                                <p>{education.degree}</p>
                            </div>
                        </div>

                        <div className="education-body">
                            <dl className="education-facts">
                                <div>
                                    <dt>Dates</dt>
                                    <dd>{education.startDate} to {education.endDate}</dd>
                                </div>
                                <div>
                                    <dt>Location</dt>
                                    <dd>{education.location}</dd>
                                </div>
                                {education.gpa && (
                                    <div>
                                        <dt>GPA</dt>
                                        <dd>{education.gpa}</dd>
                                    </div>
                                )}
                            </dl>

                            <ul className="evidence-list">
                                {education.highlights.map((highlight) => (
                                    <li key={highlight}>{highlight}</li>
                                ))}
                            </ul>

                            {education.school === "University of Toronto" && competition && (
                                <div className="education-project">
                                    <div>
                                        <h4>{competition.name}</h4>
                                        <p>{competition.startDate} to {competition.endDate}</p>
                                    </div>
                                    <p>{competition.summary}</p>
                                    <div className="education-project__footer">
                                        <span>{competition.highlights.at(-1)}</span>
                                        <a
                                            className="text-link"
                                            href={competition.link}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            View project
                                            <ArrowUpRight aria-hidden="true" size={15} />
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
