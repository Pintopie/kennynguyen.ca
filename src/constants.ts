import { FaReact, FaNodeJs, FaCloud, FaRobot, FaCode } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiPython, SiFastapi, SiDocker, SiGit, SiGithub, SiPostgresql, SiAmazonwebservices, SiJupyter, SiFigma } from "react-icons/si";
// NOTE: no extraneous imports

// Navigation Links
export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Tools" },
];

// Projects Data
export const PROJECTS = [
  {
    title: "Local RAG System",
    description:
      "A production-ready retrieval-augmented generation system with document ingestion, semantic search, and generative responses powered by open-source LLMs.",
    highlights: [
      "Built with LangChain, Ollama, and PostgreSQL vector extensions",
      "Supports multiple document formats (PDF, DOCX, TXT)",
      "RESTful API with FastAPI backend",
      "Docker containerization for easy deployment"
    ],
    link: "https://github.com/Pintopie/local-rag-system",
    links: [
      { label: "GitHub", href: "https://github.com/Pintopie/local-rag-system" },
      { label: "README", href: "https://github.com/Pintopie/local-rag-system/blob/main/README.md" },
    ],
    tech: ["Python", "FastAPI", "LangChain", "Ollama", "PostgreSQL", "Docker"],
    featured: true,
  },
  {
    title: "Liver Tumor ML",
    description:
      "Computer vision model for detecting and classifying liver tumors in CT scans using deep learning. Includes data pipeline, model training, and inference API.",
    highlights: [
      "Trained on LITS dataset with PyTorch",
      "3D medical image processing & augmentation",
      "Model evaluation with Dice coefficient",
      "FastAPI inference server"
    ],
    link: "https://github.com/Pintopie/Liver-Tumor-ML",
    links: [
      { label: "GitHub", href: "https://github.com/Pintopie/Liver-Tumor-ML" },
      { label: "Model notebook", href: "https://github.com/Pintopie/Liver-Tumor-ML/blob/main/Model.ipynb" },
    ],
    tech: ["PyTorch", "Python", "Medical Imaging", "Deep Learning", "Jupyter"],
    featured: true,
  },

  {
    title: "Interactive Mall Kiosk",
    description:
      "Design and prototype of an interactive shopping mall kiosk focused on fast wayfinding, large touch targets, and task-oriented navigation informed by secondary research across large malls and public kiosks.",
    highlights: [
      "Secondary research across Eaton Centre, Sherway Gardens, airports, and museum kiosks",
      "Large touch targets and map-centric interface with a clear ‘You are here’ marker",
      "Search with auto-suggestions and category browsing for discovery",
      "Minimal text, strong icons, high contrast for public visibility",
      "Automatic reset and idle behavior; clear floor indicators and step-by-step directions",
      "Design prioritizes clarity and the happy path: Search/Browse → Store Details → Directions"
    ],
    link: "https://www.figma.com/proto/135DaakbAQaYCw99Xwsttw/Interactive-Shopping-Mall-Kiosk?node-id=148-6898&starting-point-node-id=148%3A6898&t=wm8LKGjyLEe9Tcxx-1",
    links: [
      { label: "Demo", href: "https://www.figma.com/proto/135DaakbAQaYCw99Xwsttw/Interactive-Shopping-Mall-Kiosk?node-id=148-6898&starting-point-node-id=148%3A6898&t=wm8LKGjyLEe9Tcxx-1" },
    ],
    tech: ["Figma", "Wayfinding", "Kiosk Design", "UX Research"],
    featured: false,
  },
];

// Work Experience Data
export const EXPERIENCE = [
  {
    company: "S. Sutton & Associates Inc.",
    role: "Junior Web Developer & System Administrator",
    startDate: "01/2026",
    endDate: "Present",
    location: "Toronto, Ontario",
    logo: "/logos/s_sutton_logo.jpg",
    highlights: [
      "Provide strategic direction around website architecture and functionality to support firm objectives, ensuring scalability and performance.",
      "Execute responsive website re-designs, build content, and optimize mobile-friendly versions for superior user experience.",
      "Manage end-to-end hosting infrastructure including GoDaddy, DNS flow, SSL certificates, and domain administration.",
      "Implement comprehensive SEO audits and manage Google Analytics/Webmaster Tools to drive measurable site traffic growth.",
      "Refine business requirements into technical specifications, advising on infrastructure solutions that adhere to security standards and industry best practices.",
      "Collaborate with cross-functional teams to bring new digital initiatives to life and provide technical advice on web properties.",
      "Maintain strict security protocols and monitor website performance to ensure 99.9% uptime and reliability."
    ],
    tech: ["Web Architecture", "SEO & Analytics", "System Administration", "DNS/Hosting", "Security Compliance"]
  },
  {
    company: "HealthBridgeAI",
    role: "Fulltime AI Backend Engineer",
    startDate: "01/2025",
    endDate: "07/2025",
    location: "Remote",
    logo: "/logos/healthbridgeai.jpg",
    highlights: [
      "Architected and engineered high-performance FastAPI microservices as the backbone of a healthcare AI platform.",
      "Designed and implemented RAG pipelines using vector databases for semantic search across millions of medical documents.",
      "Optimized ML inference pipelines, achieving a 40% reduction in latency and significantly improving real-time user experience.",
      "Automated CI/CD pipelines with GitHub Actions & Docker, reducing deployment time by 60% and ensuring reproducible builds."
    ],
    tech: ["FastAPI", "Python", "Docker", "PostgreSQL", "OpenAI API", "LangChain"]
  },
  {
    company: "Netpalm",
    role: "Backend Engineer",
    startDate: "09/2024",
    endDate: "12/2024",
    location: "Remote",
    logo: "/logos/netpalm.jpg",
    highlights: [
      "Built a distributed task orchestration system handling critical network device management at scale.",
      "Designed resilient async task queues using Redis & Celery to manage high-volume provisioning workflows.",
      "Created comprehensive REST APIs for device monitoring, enabling real-time status visibility for operations teams.",
      "Refactored legacy bottlenecks to achieve a 3x increase in system throughput via Redis caching and query optimization."
    ],
    tech: ["Python", "FastAPI", "Redis", "PostgreSQL", "Docker", "Kubernetes"]
  },
  {
    company: "Algorithmics Vietnam",
    role: "Full-Stack Developer",
    startDate: "11/2023",
    endDate: "08/2024",
    location: "Ho Chi Minh City, Vietnam",
    logo: "/logos/algorithmics_vietnam_logo.jpg",
    highlights: [
      "Lead end-to-end development of a student portal serving 500+ active users, utilizing React & TypeScript for a responsive UI.",
      "Engineered real-time engagement features using WebSockets, increasing student session retention and interaction.",
      "Designed robust database schemas & REST APIs with Express.js to support complex curriculum management.",
      "Deployed scalable infrastructure on AWS with automated backups & monitoring to ensure data integrity."
    ],
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker"]
  },
];
// Education Data
export const EDUCATION = [
  {
    school: "University of Toronto",
    degree: "Bachelor of Information",
    location: "Toronto, Ontario, Canada",
    startDate: "09/2025",
    endDate: "05/2027",
    gpa: "3.86/4.0",
    logo: "/logos/university_of_toronto_logo.jpg",
    highlights: [
      "Focused coursework in UX design, data structures & algorithms",
      "Built production-ready data pipelines with Python, Javascript",
      "Worked with faculty & industry partners on research and applied projects that improved interpretability and fairness",
      "Participated in campus hackathons and data-science clubs, gaining hands-on experience with model deployment and UX-driven design"
    ]
  },
  {
    school: "Broward College",
    degree: "Associate of Science in Computer Science",
    location: "Florida, USA",
    startDate: "09/2022",
    endDate: "05/2024",
    gpa: "3.94/4.0",
    logo: "/logos/broward_college_logo.jpg",
    highlights: [
      "Comprehensive software development curriculum",
      "Excellent academic standing with 3.94 GPA",
      "Foundation for full-stack web development",
      "Dean's List Honors with presidential scholarship recognition"
    ]
  }
];

// Hackathons & Competitions
export const HACKATHONS = [
  {
    name: "IMI Big Data & AI Hub Competition",
    status: "In Progress",
    startDate: "11/2025",
    endDate: "Ongoing",
    location: "University of Toronto Mississauga",
    logo: "/logos/imi_bigdata_hub.webp",
    highlights: [
      "Competing in the 2025-2026 IMI Big Data and Artificial Intelligence Competition",
      "Applying machine learning & data engineering skills to real-world problems",
      "Collaborating with peers on innovative AI solutions",
      "Gaining exposure to industry-leading data science practices"
    ],
    tech: ["Machine Learning", "Data Science", "Python", "Big Data",],
    link: "https://www.utm.utoronto.ca/bigdataaihub/events/2025-2026-imi-bigdataaihub-big-data-and-artificial-intelligence-competition"
  }
];

// Tech Stack & Tools
export const TOOLING = [
  {
    name: "Next.js + Vercel",
    detail: "Ships this site with edge rendering, image optimization, and one-click previews.",
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
    detail: "Local inference plus retrieval orchestration for custom AI copilots.",
    href: "https://www.langchain.com/",
    icon: FaRobot,
  },
  {
    name: "Docker & Compose",
    detail: "Reproducible dev containers—especially handy for ML notebooks and GPU labs.",
    href: "https://www.docker.com/",
    icon: SiDocker,
  },
  {
    name: "Node.js + npm",
    detail: "Backend services and CLI tools with async/await and npm ecosystem.",
    icon: FaNodeJs,
  },
  {
    name: "PostgreSQL + MongoDB",
    detail: "SQL and NoSQL databases for diverse data storage needs.",
    icon: SiPostgresql,
  },
  {
    name: "AWS + Cloud Services",
    detail: "Scalable deployments with EC2, S3, Lambda, and serverless architectures.",
    href: "https://aws.amazon.com/",
    icon: SiAmazonwebservices,
  },
  {
    name: "Git + GitHub",
    detail: "Version control and collaboration with CI/CD pipelines and issue tracking.",
    href: "https://github.com/",
    icon: SiGit,
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
];

// Skills
export const SKILLS = [
  { label: "React", tooltip: "React – UI library", icon: FaReact, color: "#61DAFB" },
  { label: "Next.js", tooltip: "Next.js – React Framework", icon: SiNextdotjs, color: "#000000" },
  { label: "TypeScript", tooltip: "TypeScript – Typed JS", icon: SiTypescript, color: "#3178C6" },
  { label: "Node.js", tooltip: "Node.js – Backend", icon: FaNodeJs, color: "#68A063" },
  { label: "Tailwind CSS", tooltip: "Tailwind – Utility-first CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { label: "Python", tooltip: "Python – Data & ML", icon: SiPython, color: "#3776AB" },
  { label: "FastAPI", tooltip: "FastAPI – Python Web", icon: SiFastapi, color: "#009688" },
  { label: "Docker", tooltip: "Docker – Containerization", icon: SiDocker, color: "#2496ED" },
  { label: "Git", tooltip: "Git – Version control", icon: SiGit, color: "#F05032" },
  { label: "GitHub", tooltip: "GitHub – Collaboration", icon: SiGithub, color: "#000000" },
  { label: "Figma", tooltip: "Figma – Design & UX", icon: SiFigma, color: "#7e36fa" },
  { label: "Cloud", tooltip: "Cloud – Deployments", icon: FaCloud, color: "#13a5b2ff" },
];

// Metrics
export const METRICS = [
  { label: "Timezone", value: "Toronto • EST" },
  { label: "Focus", value: "Full Stack Development" },
];

// Constants
export const CURRENT_YEAR = new Date().getFullYear();
export const CURRENT_MONTH = new Date().toLocaleString("default", { month: "long" });
export const CURRENT_DATE = new Date().getDate();
export const AVATAR_URL = "https://avatars.githubusercontent.com/u/134212302?v=4";

