import Image from "next/image";
import { EXPERIENCE } from "@/constants";
import { ArrowUpRight } from "lucide-react";

const Experience = () => {
    return (
        <section className="portfolio-section" id="experience">
            <header className="section-heading">
                <h2>Experience</h2>
                <p>
                    Roles spanning product-facing web work, backend engineering,
                    infrastructure, and applied AI delivery.
                </p>
            </header>

            <div className="experience-list">
                {EXPERIENCE.map((job) => (
                    <article className="experience-row" key={`${job.company}-${job.role}`}>
                        <div className="experience-meta">
                            <div className="company-mark">
                                <Image
                                    src={job.logo}
                                    alt=""
                                    fill
                                    sizes="48px"
                                    className="object-cover"
                                />
                            </div>
                            <p>{job.startDate} to {job.endDate}</p>
                            <p>{job.location}</p>
                        </div>
                        <div className="experience-body">
                            <h3>{job.role}</h3>
                            <a
                                className="company-name"
                                href={job.website}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {job.company}
                                <ArrowUpRight aria-hidden="true" size={15} />
                            </a>
                            <ul className="evidence-list">
                                {job.highlights.slice(0, 3).map((highlight) => (
                                    <li key={highlight}>{highlight}</li>
                                ))}
                            </ul>
                            <ul className="tag-list" aria-label={`${job.company} technologies`}>
                                {job.tech.map((tech) => (
                                    <li key={tech}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Experience;
