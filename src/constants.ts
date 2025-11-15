import { FaReact, FaNodeJs, FaCloud, FaRobot, FaCode } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiPython, SiFastapi, SiDocker, SiGit, SiGithub, SiPostgresql, SiAmazonwebservices, SiJupyter } from "react-icons/si";
// NOTE: no extraneous imports

// Navigation Links
export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#ship-log", label: "Now Shipping" },
  { href: "#stack", label: "Tools" },
  { href: "#contact", label: "Contact Me" },
];

// About Page Code Snippets
export const ABOUT_SNIPPETS = [
  {
    lang: "Java",
    code: `// Full-stack software engineer passionate about scalable systems
public class AboutMe {
  private String name = "Kenny Nguyen";
  private String role = "Full-Stack Software Engineer";
  private String location = "Toronto, Canada";
  private String[] frontend = {"React", "Next.js", "TypeScript", "Tailwind CSS"};
  private String[] backend = {"Node.js", "FastAPI", "PostgreSQL", "Docker"};
  private String[] cloud = {"AWS", "Vercel", "Docker Compose"};
  private String[] ml = {"LLMs", "RAG Systems", "ML Pipelines", "Computer Vision"};
  private String[] interests = {"Web Development", "AI Systems", "Cloud Architecture"};
  
  public static void main(String[] args) {
    AboutMe kenny = new AboutMe();
    System.out.println("Name: " + kenny.name);
    System.out.println("Role: " + kenny.role);
    System.out.println("Location: " + kenny.location);
    System.out.println("Philosophy: Build impactful solutions with clean code");
  }
  
  public String getProfile() {
    return "Full-Stack Engineer | AI Enthusiast | Cloud Architect";
  }
}`,
  },
  {
    lang: "TypeScript",
    code: `// Type-safe representation of my professional profile
interface Developer {
  name: string;
  role: string;
  location: string;
  yearsExperience: number;
  skills: SkillSet;
  projects: Project[];
  openToRoles: string[];
}

interface SkillSet {
  frontend: Technology[];
  backend: Technology[];
  cloud: Technology[];
  ml: string[];
}

interface Technology {
  name: string;
  level: "expert" | "intermediate" | "learning";
  yearsUsed: number;
}

const aboutMe: Developer = {
  name: "Kenny Nguyen",
  role: "Full-Stack Software Engineer",
  location: "Toronto, Canada",
  yearsExperience: 2,
  skills: {
    frontend: [
      { name: "React", level: "expert", yearsUsed: 2 },
      { name: "TypeScript", level: "expert", yearsUsed: 2 },
      { name: "Next.js", level: "intermediate", yearsUsed: 1 }
    ],
    backend: [
      { name: "FastAPI", level: "expert", yearsUsed: 1 },
      { name: "Node.js", level: "intermediate", yearsUsed: 2 }
    ]
  }
};`,
  },
  {
    lang: "Python",
    code: `# Building scalable systems with modern tech stack
class Developer:
    def __init__(self):
        self.name = "Kenny Nguyen"
        self.role = "Full-Stack Software Engineer"
        self.location = "Toronto, Canada"
        self.expertise = ["Backend", "Frontend", "Cloud", "AI/ML"]
        self.languages = ["Python", "TypeScript", "Java"]
        self.frameworks = ["FastAPI", "React", "Next.js", "Django"]
        
    def get_professional_summary(self):
        return """
        • 2+ years of full-stack development experience
        • Expert in Python backend & React frontend
        • Cloud infrastructure & containerization
        • AI/ML systems & LLM applications
        • Open source contributor
        """
        
    def current_focus(self):
        return "Building AI-powered systems and scalable backends"

kenny = Developer()
print(kenny.get_professional_summary())`,
  },
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
];

// Work Experience Data
export const EXPERIENCE = [
  {
    company: "HealthBridgeAI",
    role: "Fulltime AI Backend Engineer",
    startDate: "01/2025",
    endDate: "07/2025",
    location: "Remote",
    logo: "/logos/healthbridgeai.jpg",
    highlights: [
      "Engineered FastAPI microservices for healthcare AI platform",
      "Implemented vector databases & semantic search for medical documents",
      "Optimized inference pipelines for 40% faster response times",
      "Automated CI/CD pipeline with GitHub Actions & Docker"
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
      "Built distributed task orchestration system for network device management",
      "Designed async task queues with Redis & Celery",
      "Created REST API for device provisioning & monitoring",
      "Improved system throughput by 3x through caching & optimization"
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
      "Built student portal with React & TypeScript for 500+ users",
      "Implemented real-time progress tracking with WebSockets",
      "Designed database schema & REST APIs with Express.js",
      "Deployed on AWS with automated backups & monitoring"
    ],
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker"]
  },
  {
    company: "ERA GROUP",
    role: "Junior Developer",
    startDate: "06/2023",
    endDate: "10/2023",
    location: "Ho Chi Minh City, Vietnam",
    logo: "/logos/eragroup.png",
    highlights: [
      "Developed web applications using React & Java Spring Boot",
      "Fixed 50+ production bugs & performance issues",
      "Collaborated with UX team to refine user interfaces",
      "Participated in code reviews & agile ceremonies"
    ],
    tech: ["React", "Java", "Spring Boot", "MySQL", "Git", "Jira"]
  }
];

// Education Data
export const EDUCATION = [
  {
    school: "University of Toronto",
    degree: "Bachelor of Information - Information Science Major",
    location: "Ontario, Canada",
    startDate: "09/2025",
    endDate: "07/2027",
    gpa: "3.52/4.0",
    logo: "/logos/university_of_toronto_logo.jpg",
    highlights: [
      "Focused coursework in databases, machine learning, human-computer interaction, and scalable system architecture",
      "Designed and delivered team-based capstone projects applying ML & data engineering to real-world problems",
      "Built production-ready data pipelines with Python, SQL, and cloud tools, emphasizing reproducibility and testing",
      "Worked with faculty & industry partners on research and applied projects that improved interpretability and fairness",
      "Participated in campus hackathons and data-science clubs, gaining hands-on experience with model deployment and UX-driven design"
    ]
  },
  {
    school: "Athabasca University",
    degree: "Computing Science Coursework",
    location: "Alberta, Canada",
    logo: "/logos/athabascau_logo.jpg",
    startDate: "06/2025",
    endDate: "09/2025",
    grade: "A+",
    highlights: [
      "Completed comprehensive CS coursework",
      "Achieved A+ in all courses",
      "Focused on data structures & algorithms"
    ]
  },
  {
    school: "Broward College",
    degree: "Associate of Science in Computer Science",
    location: "Florida, USA",
    endDate: "2023",
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
    tech: ["Machine Learning", "Data Science", "Python", "Big Data"],
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
    name: "Tailwind CSS v4",
    detail: "Utility-first design tokens that keep experiments consistent in dark/light.",
    href: "https://tailwindcss.com/",
    icon: SiTailwindcss,
  },
  {
    name: "Node.js + Express",
    detail: "Backend services and CLI tools with async/await and npm ecosystem.",
    href: "https://nodejs.org/",
    icon: FaNodeJs,
  },
  {
    name: "PostgreSQL + Supabase",
    detail: "Postgres + auth + storage for prototypes that still need production discipline.",
    href: "https://supabase.com/",
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
  { label: "Cloud", tooltip: "Cloud – Deployments", icon: FaCloud, color: "#13a5b2ff" },
];

// Metrics
export const METRICS = [
  { label: "Timezone", value: "Toronto • EST" },
  { label: "Focus", value: "Backend Development" },
];

// Constants
export const CURRENT_YEAR = new Date().getFullYear();
export const AVATAR_URL = "https://avatars.githubusercontent.com/u/134212302?v=4";

// Framer Motion animation variants
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: {
    y: -8,
    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.25)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};
