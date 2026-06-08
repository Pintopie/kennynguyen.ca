const CAPABILITIES = [
    {
        title: "Product interfaces",
        description:
            "Responsive web experiences shaped around clear hierarchy, accessible interaction, and maintainable component systems.",
        skills: ["React", "Next.js", "TypeScript", "Figma", "Responsive UI", "Accessibility"],
    },
    {
        title: "Backend systems",
        description:
            "Typed APIs and deployment workflows built for reliable operation, secure access, and straightforward maintenance.",
        skills: ["Python", "FastAPI", "Node.js", "PostgreSQL", "Docker", "CI/CD"],
    },
    {
        title: "AI and data workflows",
        description:
            "Applied machine learning and retrieval systems that keep source quality, explainability, and user needs in view.",
        skills: ["LangChain", "Ollama", "RAG", "Jupyter", "Machine Learning", "SHAP"],
    },
];

export default function Skills() {
    return (
        <section className="portfolio-section capabilities-section" id="skills">
            <header className="section-heading">
                <h2>How I contribute</h2>
                <p>
                    I work across interface design and implementation, backend delivery,
                    and applied AI. The focus stays on usable outcomes rather than tools alone.
                </p>
            </header>

            <div className="capability-list">
                {CAPABILITIES.map((capability) => (
                    <article className="capability-row" key={capability.title}>
                        <h3>{capability.title}</h3>
                        <p>{capability.description}</p>
                        <ul className="tag-list" aria-label={`${capability.title} skills`}>
                            {capability.skills.map((skill) => (
                                <li key={skill}>{skill}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
}
