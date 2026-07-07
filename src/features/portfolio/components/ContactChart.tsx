import { ArrowUpRight, FileText, Github, Linkedin, Mail } from "lucide-react";

export default function ContactChart() {
    return (
        <section className="portfolio-section contact-section" id="contact">
            <div className="contact-section__inner">
                <div className="contact-copy">
                    <p className="eyebrow">Contact</p>
                    <h2>Reach out to me!</h2>
                    <p>
                        I am open to full-stack, product engineering, backend, and UI-focused roles where the planning and the build both matter.
                    </p>
                </div>

                <div className="contact-cta">
                    <p>Start with a short email. I will read the context first, then respond with where I can help.</p>
                    <div className="contact-actions">
                        <a className="primary-action" href="mailto:hoangnhan20192@gmail.com">
                            <Mail aria-hidden="true" size={18} />
                            Email Kenny
                        </a>
                        <a
                            className="secondary-action"
                            href="/resume/Resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FileText aria-hidden="true" size={18} />
                            View resume
                        </a>
                    </div>

                    <div className="social-links" aria-label="Professional profiles">
                        <a
                            href="https://www.linkedin.com/in/kennyngdev-ca/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Linkedin aria-hidden="true" size={18} />
                            LinkedIn
                            <ArrowUpRight aria-hidden="true" size={15} />
                        </a>
                        <a
                            href="https://github.com/Pintopie"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Github aria-hidden="true" size={18} />
                            GitHub
                            <ArrowUpRight aria-hidden="true" size={15} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
