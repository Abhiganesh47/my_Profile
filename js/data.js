//  data.js  —  All portfolio content in one place

const portfolioData = {

  personal: {
    name: "ABHI GANESH R",
    title: "Full Stack Developer",
    tagline: "Building scalable systems & delightful interfaces",
    email: "abhiganesh47@gmail.com",
    location: "Bangalore , KA",
    available: true,
    github: "https://github.com/Abhiganesh47",
    linkedin: "https://www.linkedin.com/in/abhiganesh-r-626282259",
    twitter: "https://twitter.com/",
    resume: "#",
    stats: [
      { num: "0+", label: "Years Exp." },
      { num: "5+", label: "Projects" },
      { num: "0+", label: "Clients" }
    ],
    typingPhrases: [
      "Full Stack Developer",
      "Problem Solver",
      "Building scalable web apps with MERN & AI integration"
    ]
  },

  about: {
    paragraphs: [
      "Hey! I'm <strong>ABHI GANESH R</strong> — a full-stack developer who loves building fast, clean, and scalable software. I specialize in crafting thoughtful interfaces and robust backend systems that handle real-world load.",
      "My stack revolves around <strong>React</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>MongoDB</strong>, and cloud infrastructure. I care deeply about developer experience, performance optimization, and writing code that's easy to understand and maintain.",
      "When I'm not shipping code, I'm exploring new tech, contributing to OSS, or writing about systems design and software architecture on my mind."
    ]
  },

  education: [
    {
      degree: "B.Tech in Information Science",
      institution: "Vivekananda Institute of Technology, Bangalore",
      year: "2022 – 2026",
      grade: "CGPA 7.5 / 10.0",
      highlights: [],
      icon: "🎓"
    },
    {
      degree: "Pre-University (CBSE)",
      institution: "Sri Chaitanya, Bangalore",
      year: "2020 – 2022",
      grade: "67% (PCMC)",
      highlights: [],
      icon: "🛠️"
    },
    {
      degree: "Schooling (CBSE)",
      institution: "Kendriya Vidyalaya-Hebbal, Bangalore",
      year: "2011 – 2020",
      grade: "54% (10th)",
      highlights: [],
      icon: "⚡"
    }
  ],

  skills: [
    {
      category: "Frontend",
      icon: "⚡",
      tags: [
        { name: "React", active: true },
        { name: "TypeScript", active: true },
        { name: "Next.js", active: false },
        { name: "Vue.js", active: false },
        { name: "Tailwind CSS", active: true },
        { name: "Framer Motion", active: false }
      ]
    },
    {
      category: "Backend",
      icon: "🔧",
      tags: [
        { name: "Node.js", active: true },
        { name: "Python", active: true },
        { name: "Go", active: false },
        { name: "GraphQL", active: false },
        { name: "REST APIs", active: false },
        { name: "WebSockets", active: false }
      ]
    },
    {
      category: "Cloud & DevOps",
      icon: "☁️",
      tags: [
        { name: "AWS", active: false },
        { name: "Docker", active: true },
        { name: "Kubernetes", active: false },
        { name: "Terraform", active: false },
        { name: "CI/CD", active: false },
        { name: "Vercel", active: false }
      ]
    },
    {
      category: "Databases",
      icon: "🗄️",
      tags: [
        { name: "PostgreSQL", active: false },
        { name: "MongoDB", active: true },
        { name: "Redis", active: false },
        { name: "Elasticsearch", active: false },
        { name: "Prisma ORM", active: false }
      ]
    },
    {
      category: "AI / ML",
      icon: "🤖",
      tags: [
        { name: "LangChain", active: false },
        { name: "OpenAI API", active: true },
        { name: "PyTorch", active: false },
        { name: "RAG Pipelines", active: false },
        { name: "Vector DBs", active: false }
      ]
    },
    {
      category: "Tools",
      icon: "🛠️",
      tags: [
        { name: "Git", active: true },
        { name: "Linux", active: true },
        { name: "Vim", active: false },
        { name: "Figma", active: false },
        { name: "Postman", active: true }
      ]
    }
  ],

  skillBars: [
    { label: "HTML & CSS ", pct: 89 },
    { label: "JavaScript", pct: 75 },
    { label: "React", pct: 12 },
    { label: "Node.js", pct: 42 },
    { label: "Python", pct: 68 },
    { label: "C and C++", pct: 50 },
    { label: "AI / ML Integration", pct: 80 }
  ],

  projects: [
    // {
    //   featured: true,
    //   title: "NexusAI Platform",
    //   desc: "A production-grade AI orchestration platform enabling teams to build, deploy, and monitor LLM pipelines at scale. Handles 10M+ API calls/month with real-time observability and cost tracking.",
    //   stack: ["Next.js", "Python", "PostgreSQL", "Redis", "AWS", "LangChain"],
    //   live: "#",
    //   github: "#",
    //   metrics: [
    //     { key: "requests_today",  val: "42,891",  color: "green" },
    //     { key: "avg_latency",     val: "142ms",   color: "cyan"  },
    //     { key: "uptime",          val: "99.98%",  color: "green" },
    //     { key: "cost_saved",      val: "$12,430", color: "gold"  },
    //     { key: "models_active",   val: "7",       color: "purple"}
    //   ]
    // },
    {
      id: "001",
      title: "BookMyShow Clone CLI",
      desc: "Full stack movie ticket booking application with AI-powered smart movie suggestions.",
      stack: ["ExpressJS", "MongoDB", "NodeJS"],
      live: "#",
      github: "#"
    },
    {
      id: "002",
      title: "Medical AI Chatbot",
      desc: "AI-powered chatbot for providing medical information and assistance.",
      stack: ["HTML", "CSS", "JS"],
      live: "#",
      github: "#"
    },
    {
      id: "003",
      title: "Fetal Cerebellum in 2D Ultrasound (final year project)",
      desc: "AI-powered tool for analyzing fetal cerebellum in 2D ultrasound images to assist in prenatal diagnosis.",
      stack: ["Python", "OpenAI", "NumPy"],
      live: "#",
      github: "#"
    },
    {
      id: "004",
      title: "Portfolio Website",
      desc: "Responsive personal portfolio website showcasing projects, skills, and contact information.",
      stack: ["HTML", "Tailwind CSS", "JavaScript"],
      live: "#",
      github: "#"
    }
  ]
};