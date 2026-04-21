import { FaReact, FaNodeJs, FaRobot, FaCode, FaTerminal } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiPython,
  SiFastapi,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostgresql,
  SiJupyter,
  SiFigma,
  SiGithubactions,
  SiConfluence,
  SiTrello,
} from "react-icons/si";

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Tools" },
  { href: "#contact", label: "Contact" },
];

export const PROJECTS = [
  {
    title: "AI Clinical Assistant \"JarvisMD\"",
    description:
      "Enterprise AI clinical assistant platform that ingests clinician audio, automates transcription, and generates structured summaries with follow-up recommendations.",
    highlights: [
      "Built and maintained containerized backend services with Docker, Gunicorn/Uvicorn, and Nginx",
      "Implemented secure authentication and authorization with Keycloak and JWT-based role controls",
      "Supported infrastructure that scaled to 10,000 concurrent users in the initial MVP",
      "Maintained 99.9% uptime with Python health checks and Zulip bot alerts",
    ],
    links: [
      { label: "Live Site", href: "https://mvp.healthbridgeai.com" },
      { label: "Company", href: "https://healthbridgeai.com" },
    ],
    tech: ["Python", "FastAPI", "Docker", "Nginx", "Keycloak", "JWT"],
    featured: true,
  },
  {
    title: "LocalYoutubeRAG",
    description:
      "Local-first retrieval-augmented generation system that answers questions over YouTube tutorial transcripts with timestamped, source-grounded citations.",
    highlights: [
      "Designed a FastAPI backend and React/Vite frontend for transcript ingestion, chunking, retrieval, and conversational search",
      "Integrated Ollama for on-device inference to keep user data local and reduce query-time API calls",
      "Implemented overlap-aware transcript chunking to preserve context across long-form technical videos",
      "Supported a full workflow from URL input to interactive Q&A with citations",
    ],
    links: [{ label: "GitHub", href: "https://github.com/Pintopie/LocalYoutubeRAG" }],
    tech: ["Python", "FastAPI", "React", "Vite", "Ollama", "RAG"],
    featured: true,
  },
  {
    title: "Liver Tumor Analysis",
    description:
      "End-to-end machine learning workflow for liver tumor analysis using NIfTI medical imaging data, preprocessing, visualization, and model training.",
    highlights: [
      "Implemented feature extraction from segmentation masks and standardized MRI slices",
      "Trained a Random Forest model for tumor detection and analysis",
      "Packaged the workflow in Docker for reproducible local execution",
      "Built visualization utilities for slice-level inspection and faster debugging",
    ],
    links: [{ label: "GitHub", href: "https://github.com/Pintopie/Liver-Tumor-ML" }],
    tech: ["Python", "Machine Learning", "Docker", "Jupyter", "Medical Imaging"],
    featured: false,
  },
];

export const EXPERIENCE = [
  {
    company: "S. Sutton & Associates Inc.",
    role: "Junior Web Developer & IT System Administrator",
    startDate: "01/2026",
    endDate: "05/2026",
    location: "Toronto, ON, CA",
    logo: "/logos/s_sutton_logo.jpg",
    highlights: [
      "Led responsive website redesigns and content updates to improve mobile usability, site structure, and user experience across core web pages.",
      "Managed hosting operations including GoDaddy, DNS configuration, SSL certificates, and domain administration, helping maintain 99.99% uptime across production web properties.",
      "Performed SEO audits and maintained Google Analytics tracking to monitor traffic patterns, content performance, and conversion behavior.",
      "Translated business requirements into technical recommendations for website and infrastructure improvements aligned with security best practices and long-term maintainability.",
      "Implemented monitoring and maintenance workflows to reduce website issues and support stable production performance.",
    ],
    tech: ["Web Development", "SEO", "Analytics", "DNS", "Hosting", "SSL"],
  },
  {
    company: "HealthBridgeAI",
    role: "Backend Software Engineer",
    startDate: "01/2025",
    endDate: "07/2025",
    location: "Remote",
    logo: "/logos/healthbridgeai.jpg",
    highlights: [
      "Built FastAPI services with structured authentication and authorization using Keycloak, supporting 10,000+ active users and sessions.",
      "Integrated LLM-powered workflows with LangChain and OpenAI APIs to automate diagnosis and reduce processing time by 68% for doctors.",
      "Deployed containerized backend services with Docker and Uvicorn workers to support high-concurrency traffic and stable load performance.",
      "Automated CI/CD pipelines with GitHub Actions, shortening release cycles from 2 hours+ to under 15 minutes across staging and production.",
    ],
    tech: ["FastAPI", "Python", "Docker", "GitHub Actions", "Keycloak", "LangChain"],
  },
  {
    company: "Netpalm",
    role: "Software Developer Intern",
    startDate: "10/2024",
    endDate: "02/2025",
    location: "Remote",
    logo: "/logos/netpalm.jpg",
    highlights: [
      "Built React and Umi.js features that improved user flow and reduced UI bugs, contributing to a 50% decrease in frontend issue reports.",
      "Developed Python Scrapy crawlers to collect structured data for internal analysis and reduce manual collection effort.",
      "Contributed to Docker-based microservice development and deployment workflows across three environments.",
      "Supported testing and validation with Selenium automation to increase regression coverage and catch UI issues earlier.",
    ],
    tech: ["React", "Umi.js", "Python", "Scrapy", "Docker", "Selenium"],
  },
];

export const EDUCATION = [
  {
    school: "University of Toronto",
    degree: "Bachelor of Information",
    location: "Toronto, ON, CA",
    startDate: "09/2025",
    endDate: "05/2027",
    gpa: "3.86/4.0",
    logo: "/logos/university_of_toronto_logo.jpg",
    highlights: [
      "Major in Information Science",
      "Dean's List Fall Term 2025",
      "Relevant coursework: Javascript Computational Reasoning, Figma Design Studio, Arduino Computer System",
    ],
  },
  {
    school: "Broward College",
    degree: "Associate of Applied Science",
    location: "Florida, US",
    startDate: "09/2022",
    endDate: "05/2024",
    gpa: "3.94/4.0",
    logo: "/logos/broward_college_logo.jpg",
    highlights: [
      "Major in Software Development",
      "Dean's List Fall and Winter Term 2023",
      "Relevant coursework: Data Structure and Algorithms, Intermediate Java development, Python Machine Learning",
    ],
  },
];

export const HACKATHONS = [
  {
    name: "IMI Big Data & AI Hub Competition",
    status: "Participated",
    startDate: "11/2025",
    endDate: "02/2026",
    location: "University of Toronto Mississauga",
    logo: "/logos/imi_bigdata_hub.webp",
    summary:
      "Built an explainable AML pipeline for an extremely imbalanced dataset by merging 7 transaction channels with KYC data, engineering risk features, balancing the classes, and explaining predictions with SHAP.",
    highlights: [
      "Merged 7 transaction channels into one customer-level view to uncover cross-channel laundering patterns.",
      "Engineered AML risk signals such as structuring, velocity, channel diversity, and KYC mismatches.",
      "Used SMOTE, class weights, stratified K-fold validation, and SHAP to handle the 100:1 imbalance responsibly.",
      "2nd round qualifier out of 50+ teams",
    ],
    tech: ["Machine Learning", "Data Science", "Python", "Big Data"],
    link: "https://github.com/Pintopie/IMI-BigData-Hub",
  },
];

export const TOOLING = [
  {
    name: "Next.js + React",
    detail: "Front-end framework and component model for the portfolio and production web apps.",
    href: "https://nextjs.org/",
    icon: SiNextdotjs,
  },
  {
    name: "React + TypeScript",
    detail: "Type-safe component libraries and hooks for scalable front-end development.",
    href: "https://react.dev/",
    icon: FaReact,
  },
  {
    name: "FastAPI + Python",
    detail: "Typed Python APIs for ML services, instrumented with OpenAPI and Pydantic.",
    href: "https://fastapi.tiangolo.com/",
    icon: SiFastapi,
  },
  {
    name: "LangChain + Ollama",
    detail: "Local inference plus retrieval orchestration for AI workflows and assistants.",
    href: "https://www.langchain.com/",
    icon: FaRobot,
  },
  {
    name: "Docker & Compose",
    detail: "Reproducible dev containers for backend services and AI projects.",
    href: "https://www.docker.com/",
    icon: SiDocker,
  },
  {
    name: "GitHub Actions",
    detail: "Automated builds and deploys for staging and production delivery.",
    href: "https://github.com/features/actions",
    icon: SiGithubactions,
  },
  {
    name: "Node.js + npm",
    detail: "Backend services and CLI tools with async/await and the npm ecosystem.",
    icon: FaNodeJs,
  },
  {
    name: "PostgreSQL + MongoDB",
    detail: "SQL and NoSQL databases for diverse data storage needs.",
    icon: SiPostgresql,
  },
  {
    name: "Git + GitHub",
    detail: "Version control and collaboration for shipped projects and team workflows.",
    href: "https://github.com/",
    icon: SiGit,
  },
  {
    name: "Confluence + Trello",
    detail: "Documentation and task tracking for collaborative delivery.",
    href: "https://www.atlassian.com/software/confluence",
    icon: SiConfluence,
  },
  {
    name: "VS Code + Extensions",
    detail: "Modern editor with Vim, Copilot, and language servers for productivity.",
    href: "https://code.visualstudio.com/",
    icon: FaCode,
  },
  {
    name: "Jupyter Notebooks",
    detail: "Interactive notebooks for data exploration, prototyping, and ML experiments.",
    href: "https://jupyter.org/",
    icon: SiJupyter,
  },
  {
    name: "Figma",
    detail: "Collaborative interface design tool for high-fidelity prototyping and user testing.",
    href: "https://www.figma.com/",
    icon: SiFigma,
  },
  {
    name: "Trello",
    detail: "Lightweight project tracking for sprint planning and team coordination.",
    href: "https://trello.com/",
    icon: SiTrello,
  },
    {
      name: "Claude Code CLI",
      detail: "AI CLI tool for fast codebase reasoning and generation.",
      icon: FaTerminal,
    },
    {
      name: "Copilot CLI",
      detail: "AI-assisted terminal intelligence and shell commands.",
      icon: FaTerminal,
    },
    {
      name: "OpenClaw AI",
      detail: "AI agent for environment tasks and automated development workflows.",
      icon: FaRobot,
    },
  ];

export const SKILLS = [
  { label: "React", tooltip: "React - UI library", icon: FaReact, color: "#61DAFB" },
  { label: "Next.js", tooltip: "Next.js - React framework", icon: SiNextdotjs, color: "#000000" },
  { label: "TypeScript", tooltip: "TypeScript - typed JavaScript", icon: SiTypescript, color: "#3178C6" },
  { label: "Python", tooltip: "Python - backend and ML", icon: SiPython, color: "#3776AB" },
  { label: "FastAPI", tooltip: "FastAPI - Python web APIs", icon: SiFastapi, color: "#009688" },
  { label: "Docker", tooltip: "Docker - containerization", icon: SiDocker, color: "#2496ED" },
  { label: "GitHub Actions", tooltip: "GitHub Actions - CI/CD", icon: SiGithubactions, color: "#2088FF" },
  { label: "Git", tooltip: "Git - version control", icon: SiGit, color: "#F05032" },
  { label: "GitHub", tooltip: "GitHub - collaboration", icon: SiGithub, color: "#000000" },
  { label: "Figma", tooltip: "Figma - design and UX", icon: SiFigma, color: "#7e36fa" },
  { label: "SQL", tooltip: "PostgreSQL and MongoDB", icon: SiPostgresql, color: "#336791" },
  { label: "AI/ML", tooltip: "LangChain, Ollama, and applied machine learning", icon: FaRobot, color: "#F97316" },
    { label: "Claude Code", tooltip: "Claude Code CLI - AI coding assistant", icon: FaTerminal, color: "#d97757" },
    { label: "Copilot CLI", tooltip: "Copilot CLI - Terminal intelligence", icon: FaTerminal, color: "#000000" },
    { label: "OpenClaw AI", tooltip: "OpenClaw AI - Environment agent", icon: FaRobot, color: "#61DAFB" },
];

export const METRICS = [
  { label: "Timezone", value: "Toronto - EST" },
  { label: "Focus", value: "Backend, AI, and Product Design" },
];

export const CURRENT_YEAR = new Date().getFullYear();
export const CURRENT_MONTH = new Date().toLocaleString("default", { month: "long" });
export const CURRENT_DATE = new Date().getDate();
export const AVATAR_URL = "https://avatars.githubusercontent.com/u/134212302?v=4";

