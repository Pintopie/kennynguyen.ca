import Image from "next/image";
import { ArrowDownRight, FileText, Github, Linkedin, Mail } from "lucide-react";
import { AVATAR_URL } from "@/constants";

const FOCUS_AREAS = [
    "Backend APIs",
    "Product UI",
    "AI workflows",
    "Deployments",
];

export default function Hero() {
    return (
        <section className="hero-section" id="home">
            <div className="memphis-shape memphis-shape--circle" aria-hidden="true" />
            <div className="memphis-shape memphis-shape--bar" aria-hidden="true" />
            <div className="memphis-shape memphis-shape--triangle" aria-hidden="true" />

            <div className="hero-grid">
                <div className="hero-copy">
                    <p className="eyebrow">ABOUT ME</p>
                    <h1>Software Engineer & Product Designer</h1>
                    <p className="hero-lede">
                        I study Information Science at the University of Toronto and build
                        across APIs, product UI, AI workflows, and deployment. I like work
                        where the interface and the system behind it both matter.
                    </p>

                    <div className="hero-actions">
                        <a className="primary-action" href="mailto:hoangnhan20192@gmail.com">
                            <Mail aria-hidden="true" size={18} />
                            Send me an Email
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
                </div>

                <aside className="hero-card" aria-label="Portfolio snapshot">
                    <div className="portrait-card">
                        <Image
                            src={AVATAR_URL}
                            alt="Kenny Nguyen"
                            fill
                            priority
                            sizes="(max-width: 760px) 68vw, 320px"
                            className="object-cover"
                        />
                    </div>

                    <div className="hero-note">
                        <strong>Toronto, ON</strong>
                        <span>University of Toronto, Bachelor of Information</span>
                    </div>
                </aside>
            </div>

            <div className="hero-board" aria-label="Portfolio focus areas">
                {FOCUS_AREAS.map((area, index) => (
                    <a
                        className={`focus-ticket focus-ticket--${index + 1}`}
                        href={index === 1 ? "#projects" : "#skills"}
                        key={area}
                    >
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        {area}
                        <ArrowDownRight aria-hidden="true" size={18} />
                    </a>
                ))}
            </div>

            <div className="profile-links" aria-label="Professional profiles">
                <a href="https://github.com/Pintopie" target="_blank" rel="noreferrer">
                    <Github aria-hidden="true" size={18} />
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/kennyngdev-ca/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Linkedin aria-hidden="true" size={18} />
                    LinkedIn
                </a>
            </div>
        </section>
    );
}
