const CAPABILITIES = [
    {
        step: "01",
        label: "Frame the work",
        title: "Product planning",
        description:
            "Start with the user flow, constraints, edge cases, and the smallest version that can prove the idea.",
        skills: ["Scope", "User flows", "Figma", "Requirements", "Tradeoffs"],
    },
    {
        step: "02",
        label: "Map the system",
        title: "Technical design",
        description:
            "Plan the API shape, data flow, auth boundaries, deployment path, and failure cases before writing the main build.",
        skills: ["APIs", "Auth", "Data flow", "Docker", "CI/CD"],
    },
    {
        step: "03",
        label: "Build the path",
        title: "Product engineering",
        description:
            "Ship the interface and backend together, with readable components, typed services, and checks around risky paths.",
        skills: ["React", "Next.js", "TypeScript", "Python", "FastAPI"],
    },
    {
        step: "04",
        label: "Set up agents",
        title: "AI workflow setup",
        description:
            "Use agents for research, repo navigation, UI iteration, and review, while keeping human decisions in the planning loop.",
        skills: ["Agent docs", "RAG", "LangChain", "Ollama", "Review loops"],
    },
];

export default function Skills() {
    return (
        <section className="portfolio-section capabilities-section" id="skills">
            <header className="section-heading">
                <p className="eyebrow">Capabilities</p>
                <h2>How I plan and ship.</h2>
                <p>
                    I like building from product logic into system design, then using AI agents to speed up the parts that benefit from a second pair of hands.
                </p>
            </header>

            <div className="capability-workflow" aria-label="Capability workflow">
                {CAPABILITIES.map((capability) => (
                    <article className="capability-step" key={capability.title}>
                        <div className="capability-step__marker" aria-hidden="true">
                            <span>{capability.step}</span>
                        </div>
                        <p className="capability-step__label">{capability.label}</p>
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
