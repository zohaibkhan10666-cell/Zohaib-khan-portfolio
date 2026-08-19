export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Full Stack MERN' | 'Frontend & UI' | 'Enterprise & Cloud' | 'Tools & Utilities';
  featured: boolean;
  image: string;
  tags: string[];
  stats: { label: string; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
  architectureHighlights: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location?: string;
  description: string;
  grade?: string;
}

export interface JourneyMilestone {
  title: string;
  tag: string;
  description: string;
  icon: string;
}

export interface CoreValue {
  title: string;
  description: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: {
    name: string;
    level: number;
    description?: string;
    icon?: string;
    bg?: string;
  }[];
}

export interface SpotifyTrack {
  id: string;
  title: string;
  artist: string;
  album: string;
  albumArt: string;
  duration: string;
  durationMs: number;
  progressMs: number;
  isPlaying: boolean;
  bpm: number;
  genre: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Zohaib Khan",
    handle: "@zohaibkhan",
    roles: [
      "Developer",
      "Designer",
      "Problem Solver",
      "MERN Stack Developer"
    ],
    status: "Available for opportunities",
    location: "Hafizabad, Pakistan",
    email: "zohaibkhan10666@gmail.com",
    phone: "+92 309 1603902",
    educationUniversity: "University of Punjab (2024–2028)",
    degreeMajor: "BS Computer Science",
    tagline: "Turning caffeine and code into functional software.",
    bio: "I'm passionate about building beautiful, functional and user-friendly applications. I enjoy turning ideas into real-world solutions through clean code and thoughtful design.",
    fullBio: "I'm Zohaib Khan, a Computer Science student at University of Punjab who lives at the intersection of clean code, thoughtful architecture, and creative visual design. I build high-performance full-stack MERN applications, resilient REST APIs, and engaging user interfaces that solve real-world problems.",
    heroImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    avatarImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    github: "https://github.com/zohaibkhan10666-cell",
    linkedin: "https://linkedin.com/in/zohaibkhan-dev",
    twitter: "https://x.com/zohaibkhan_dev",
    discord: "zohaib.dev#4040",
    whatsapp: "https://wa.me/923091603902",
    resumeUrl: "/Zohaib_Khan_Resume.pdf",
    currentlyExploring: "AI Web Agents, Three.js 3D Shaders & Scalable Microservices",
  },

  education: [
    {
      degree: "BS Computer Science",
      institution: "University of Punjab",
      period: "2024 — 2028",
      location: "Lahore / Hafizabad, Pakistan",
      description: "Focused on building strong foundations in software development, data structures, algorithms, object-oriented design, and real-world problem solving.",
      grade: "In Progress"
    },
    {
      degree: "Intermediate (FSc Pre-Medical)",
      institution: "Punjab Group of Colleges",
      period: "2022 — 2024",
      location: "Hafizabad, Pakistan",
      description: "Rigorous analytical and biological sciences coursework prior to pivoting passionately into computer science and software engineering.",
      grade: "Completed"
    }
  ] as EducationItem[],

  journey: [
    {
      title: "The Pivot",
      tag: "Origins",
      description: "Transitioned from a pre-medical background to follow a true passion for computing, algorithms, and stepping boldly into the world of computer science.",
      icon: "Compass"
    },
    {
      title: "Learned & Built",
      tag: "Foundations",
      description: "Built a strong foundation in core programming paradigms, structural logic, and memory-efficient architectures using languages like C++ and JavaScript.",
      icon: "Code"
    },
    {
      title: "Hands-on Projects",
      tag: "Real-World MERN",
      description: "Designed and executed functional web platforms, focusing on object-oriented structures, secure database schemas, and custom business logic constraints.",
      icon: "Layers"
    },
    {
      title: "Future Outlook",
      tag: "Frontier",
      description: "Actively expanding technical horizons through academic projects, cloud architectures, AI developer workflows, and open-source collaborations.",
      icon: "Rocket"
    }
  ] as JourneyMilestone[],

  values: [
    {
      title: "Clean Code",
      description: "Writing simple, readable, modular, and easily maintainable code.",
      icon: "Sparkles"
    },
    {
      title: "User First",
      description: "Building intuitive experiences that directly solve real user problems.",
      icon: "UserCheck"
    },
    {
      title: "Continuous Learning",
      description: "Always learning, experimenting, growing, and exploring modern paradigms.",
      icon: "GraduationCap"
    },
    {
      title: "Positive Impact",
      description: "Using software and technology to create measurable value and make a difference.",
      icon: "HeartHandshake"
    }
  ] as CoreValue[],

  projects: [
    {
      id: "proj-frostbite",
      title: "Frost-Bite",
      tagline: "Artisan ice creams & gourmet fast-food web experience",
      description: "Your favorite artisan ice creams & gourmet fast-food flavors, crafted with real California ingredients and delivered icy fresh. Features responsive interactive menu showcases and smooth cart flows.",
      category: "Frontend & UI",
      featured: true,
      image: "https://images.pexels.com/photos/17822812/pexels-photo-17822812.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      tags: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript"],
      stats: [
        { label: "Performance", value: "99/100" },
        { label: "Design", value: "Responsive" },
        { label: "Delivery", value: "Fast" }
      ],
      githubUrl: "https://github.com/zohaibkhan10666-cell/Frost-Bite",
      liveUrl: "https://frost-bite-ten.vercel.app/",
      architectureHighlights: [
        "Modern responsive layouts with custom Tailwind utilities",
        "Fluid CSS micro-interactions and smooth scroll sections",
        "Optimized asset loading and high-fidelity product cards",
        "Clean semantic HTML5 structure"
      ]
    },
    {
      id: "proj-ecommerce",
      title: "E-Commerce Full-Stack Platform",
      tagline: "Complete MERN online marketplace with product catalog & REST API",
      description: "Discover amazing products at great prices. Shop now and enjoy the best shopping experience with product search, category filtering, cart management, and backend order processing.",
      category: "Full Stack MERN",
      featured: true,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      tags: ["React", "Node.js", "Express", "MongoDB Atlas", "REST API", "Tailwind CSS", "Postman"],
      stats: [
        { label: "Stack", value: "MERN" },
        { label: "Database", value: "MongoDB" },
        { label: "APIs Tested", value: "Postman" }
      ],
      githubUrl: "https://github.com/zohaibkhan10666-cell/ecommerce-frontend",
      liveUrl: "https://ecommerce-frontend-beige-psi.vercel.app/",
      architectureHighlights: [
        "Modular React component tree with stateful cart management",
        "Express RESTful API endpoints for products, orders, and user queries",
        "MongoDB Atlas cloud cluster with indexed collections",
        "Comprehensive API validation with Postman test suites"
      ]
    },
    {
      id: "proj-otech",
      title: "O-Tech Solution",
      tagline: "Enterprise production-ready management systems & ERP suite",
      description: "O-Tech Solutions builds and delivers production-ready systems: web apps, Oracle PL/SQL finance/ERP, weaving/textile management, accounts controls, and vertical solutions for travel, school, and hospital operations.",
      category: "Enterprise & Cloud",
      featured: true,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
      tags: ["HTML5", "Tailwind CSS", "JavaScript", "Node.js", "Express", "REST API", "Supabase PostgreSQL"],
      stats: [
        { label: "Database", value: "Supabase" },
        { label: "Domain", value: "ERP / Web" },
        { label: "Security", value: "Role-Based" }
      ],
      githubUrl: "https://github.com/zohaibkhan10666-cell/o-techsolution",
      liveUrl: "https://o-techsolution.vercel.app/",
      architectureHighlights: [
        "Supabase PostgreSQL relational data modeling and live subscriptions",
        "Express.js backend services coordinating ERP transactions",
        "Tailwind CSS enterprise admin dashboards with charts",
        "Modular architecture adaptable to hospitality, textile, and finance"
      ]
    },
    {
      id: "proj-passop",
      title: "Pass/OP — Secure Password Vault",
      tagline: "Modern password manager with local storage & cloud synchronization",
      description: "Manage your passwords safely and conveniently. Built with React and Tailwind CSS, featuring instantaneous search, one-click copy, secure password generation, and MongoDB persistence.",
      category: "Tools & Utilities",
      featured: false,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80",
      tags: ["React", "Tailwind CSS", "JavaScript", "MongoDB", "LocalStorage"],
      stats: [
        { label: "Security", value: "Encrypted" },
        { label: "Sync", value: "Real-Time" },
        { label: "Storage", value: "Local + Cloud" }
      ],
      githubUrl: "https://github.com/zohaibkhan10666-cell/passOp",
      liveUrl: "https://pass-op-two-bay.vercel.app/",
      architectureHighlights: [
        "Hybrid storage paradigm combining LocalStorage with MongoDB Atlas sync",
        "Instant one-click clipboard copy with animated toasts",
        "Password strength visualizer and generator algorithm",
        "Fast reactive UI built with modern React hooks"
      ]
    },
    {
      id: "proj-saucysals",
      title: "Saucy Sal's — Culinary Experience",
      tagline: "Modern culinary storefront & digital menu with Astro.js",
      description: "Gourmet dining and fast casual food showcase with enticing visual culinary menus, online order navigation, and ultra-fast responsive styling.",
      category: "Frontend & UI",
      featured: false,
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
      tags: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "Astro.js"],
      stats: [
        { label: "Framework", value: "Astro.js" },
        { label: "Speed", value: "100/100" },
        { label: "UI", value: "Modern" }
      ],
      githubUrl: "https://github.com/zohaibkhan10666-cell/food-saucy-sal-s",
      liveUrl: "https://food-saucy-sal-s.vercel.app/",
      architectureHighlights: [
        "Astro.js component-island rendering for near-zero JS payload",
        "Custom Tailwind color palette with warm dining aesthetics",
        "Interactive dietary filter controls and animated product cards",
        "Mobile-first responsive UX"
      ]
    },
    {
      id: "proj-riwaayat",
      title: "Riwayaat Collections",
      tagline: "ELEVATE YOUR ELEGANCE — Minimal cultural premium clothing",
      description: "Minimal cultural premium clothing experience crafted in collaboration with Hamza. Elegantly showcases luxury ethnic fashion apparel with rich imagery, catalog filtering, and smooth navigation.",
      category: "Full Stack MERN",
      featured: false,
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=80",
      tags: ["React", "JavaScript", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      stats: [
        { label: "Collaboration", value: "Peer Project" },
        { label: "Design", value: "Minimal Luxury" },
        { label: "Stack", value: "MERN" }
      ],
      liveUrl: "https://zulfiqarteams.github.io/Portfolio_Website/Riwaayah/index.html",
      architectureHighlights: [
        "Clean minimal luxury e-commerce layout with cultural aesthetics",
        "Full-screen hero editorial lookbook with smooth transitions",
        "Catalog categorization and product detail views",
        "Express backend integration for inventory management"
      ]
    }
  ] as Project[],

  skillCategories: [
    {
      category: "Languages & Core",
      icon: "Code2",
      skills: [
        { name: "JavaScript (ES6+)", level: 94, description: "Async/Await, Closures, DOM, Fetch API, Event Loop", bg: "#a855f7" },
        { name: "C++", level: 88, description: "OOP, Data Structures, Pointers, Memory & Structural Logic", bg: "#f97316" },
        { name: "HTML5", level: 98, description: "Semantic tags, Responsive Structure, Accessibility", bg: "#ec4899" },
        { name: "CSS3 & Tailwind", level: 96, description: "Flexbox, CSS Grid, Custom Theme Configs, Glassmorphism", bg: "#06b6d4" },
        { name: "SQL", level: 86, description: "Queries, Joins, Indexing, Relational Data Modeling", bg: "#3b82f6" }
      ]
    },
    {
      category: "Frameworks & Frontend",
      icon: "Layout",
      skills: [
        { name: "React", level: 95, description: "Hooks, Context, Component LifeCycles, State Management", bg: "#06b6d4" },
        { name: "Tailwind CSS", level: 96, description: "Modern UI systems, Glassmorphism, Responsive Layouts", bg: "#38bdf8" },
        { name: "Three.js & 3D Web", level: 85, description: "R3F, Drei, Shaders, Spaceship 3D Geometries & Particles", bg: "#8b5cf6" },
        { name: "Astro.js", level: 84, description: "Island Architecture, Static Site Generation", bg: "#f43f5e" }
      ]
    },
    {
      category: "Backend & APIs",
      icon: "Server",
      skills: [
        { name: "Node.js", level: 92, description: "Event-driven runtime, NPM ecosystem, Server optimization", bg: "#22c55e" },
        { name: "Express.js", level: 92, description: "REST APIs, Middleware routing, Error handlers, Security", bg: "#64748b" },
        { name: "REST APIs", level: 94, description: "CRUD endpoints, Status codes, JSON structures", bg: "#eab308" },
        { name: "Postman API", level: 92, description: "API documentation, Automated test collections, Mocking", bg: "#f97316" }
      ]
    },
    {
      category: "Databases & Storage",
      icon: "Database",
      skills: [
        { name: "MongoDB Atlas", level: 94, description: "Document schemas, Mongoose ODM, Cloud clusters", bg: "#10b981" },
        { name: "Supabase PostgreSQL", level: 88, description: "Relational tables, Row-Level Security, Auth", bg: "#06b6d4" },
        { name: "MySQL & SQL", level: 86, description: "Relational schemas, Foreign keys, Aggregations", bg: "#3b82f6" },
        { name: "Firebase", level: 84, description: "Firestore, Realtime database, Cloud storage", bg: "#f59e0b" }
      ]
    },
    {
      category: "Tools & Technologies",
      icon: "Cpu",
      skills: [
        { name: "VS Code", level: 98, description: "Primary IDE, Extensions, Debugger", bg: "#0284c7" },
        { name: "Git & GitHub", level: 92, description: "Version control, Branching, Pull requests, Repositories", bg: "#8b5cf6" },
        { name: "Antigravity", level: 95, description: "Advanced agentic coding, Automations, Workflows", bg: "#00f0ff" },
        { name: "HuggingFace & Ollama", level: 85, description: "Local LLM integrations, Open-source AI models", bg: "#eab308" }
      ]
    },
    {
      category: "Soft Skills",
      icon: "Sparkles",
      skills: [
        { name: "Problem Solving", level: 96, description: "Algorithmic thinking & breaking down complex constraints", bg: "#ec4899" },
        { name: "Teamwork & Collaboration", level: 94, description: "Effective peer pairing, Code reviews, Cross-functional sync", bg: "#3b82f6" },
        { name: "Adaptability & Fast Learning", level: 95, description: "Rapid mastery of new frameworks and technologies", bg: "#10b981" },
        { name: "Communication & Time Mgmt", level: 92, description: "Clear technical documentation, Agile milestones", bg: "#8b5cf6" }
      ]
    }
  ] as SkillCategory[],

  spotify: {
    currentlyPlaying: {
      id: "track-1",
      title: "Resonance (Cyberpunk Edit)",
      artist: "HOME x Synthwave Collective",
      album: "Odyssey / Deep Focus",
      albumArt: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=300&q=80",
      duration: "3:32",
      durationMs: 212000,
      progressMs: 142000,
      isPlaying: true,
      bpm: 120,
      genre: "Synthwave / Cyber Electro"
    } as SpotifyTrack,
    topTracks: [
      {
        id: "track-1",
        title: "Resonance (Cyberpunk Edit)",
        artist: "HOME",
        album: "Odyssey",
        albumArt: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=300&q=80",
        duration: "3:32",
        durationMs: 212000,
        progressMs: 142000,
        isPlaying: true,
        bpm: 120,
        genre: "Synthwave"
      },
      {
        id: "track-2",
        title: "Nightcall & Cyber City",
        artist: "Kavinsky",
        album: "OutRun",
        albumArt: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=300&q=80",
        duration: "4:15",
        durationMs: 255000,
        progressMs: 0,
        isPlaying: false,
        bpm: 128,
        genre: "Darksynth"
      },
      {
        id: "track-3",
        title: "Interstellar Hyperloop",
        artist: "Hans Zimmer (Cosmic Ambient)",
        album: "Cosmic Odyssey",
        albumArt: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=300&q=80",
        duration: "5:20",
        durationMs: 320000,
        progressMs: 0,
        isPlaying: false,
        bpm: 95,
        genre: "Sci-Fi Ambient"
      },
      {
        id: "track-4",
        title: "Subsurface Node Pulse",
        artist: "Lorn & Disasterpeace",
        album: "Array 01",
        albumArt: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=300&q=80",
        duration: "3:48",
        durationMs: 228000,
        progressMs: 0,
        isPlaying: false,
        bpm: 110,
        genre: "Glitch / IDM"
      }
    ] as SpotifyTrack[],
    stats: {
      monthlyMinutes: "4,820",
      topGenre: "Synthwave / Cyber Electro",
      codingVibe: "Deep Focus (120 BPM)",
      audioQuality: "FLAC 24-bit 96kHz Lossless"
    }
  },

  terminalCommands: {
    help: "Available commands: bio, skills, projects, journey, education, contact, matrix, clear, sudo hire, resume, status",
    bio: "Zohaib Khan — Developer • Designer • Problem Solver. BS CS student @ University of Punjab crafting high-impact MERN applications, 3D interactive web experiences, and scalable APIs.",
    skills: "STACK: [HTML5, CSS3, JavaScript, C++, SQL, React, Tailwind CSS, Three.js, Node.js, Express, MongoDB Atlas, Supabase, Git, Postman, Ollama]",
    projects: "REAL PROJECTS: [Frost-Bite, E-Commerce Platform, O-Tech Solution, Pass/OP, Saucy Sal's, Riwayaat Collections]",
    journey: "JOURNEY: [The Pivot (Pre-Med to CS) -> Learned & Built (C++, OOP, Logic) -> Hands-on MERN Projects -> Future Outlook (AI & Cloud)]",
    education: "EDUCATION: [BS Computer Science @ University of Punjab (2024-2028) | Intermediate @ Punjab Group of Colleges (2022-2024)]",
    contact: "CONTACT: Email: zohaibkhan10666@gmail.com | Phone: +92 309 1603902 | Location: Hafizabad, Pakistan | GitHub: github.com/zohaibkhan10666-cell",
    status: "STATUS: Available for opportunities. Efficiency: 99.8%. Warp Core: Online.",
    resume: "DOWNLOADING: Initiating secure transmission of Zohaib_Khan_Resume.pdf...",
    matrix: "Entering the Matrix grid... 01011010 01101111 01101000 01100001 01101001 01100010 (Z O H A I B)",
    hire: "AUTHORIZATION GRANTED: Initiating direct uplink to Zohaib Khan...",
  }
};
