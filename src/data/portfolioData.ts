// Strong data typing for portfolio settings

export interface StatItem {
  value: string;
  label: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0 - 100
  type: 'circular' | 'bar';
}

export interface SkillCategory {
  category: string;
  iconName: string; // Dynamic mapping in Skillset component
  skills: SkillItem[];
}

export interface ExpertiseItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Dynamic mapping in Expertise component
}

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  responsibilities: string[];
}

export interface ProjectItem {
  title: string;
  tech: string[];
  description: string;
  image: string;
  liveLink?: string;
  githubLink?: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  phone: string;
  whatsapp: string;
}

export interface PersonalDetails {
  fullName: string;
  email: string;
  phone: string;
  experience: string;
  location: string;
  company: string;
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    role: string;
    avatar: string;
    resumeUrl: string;
  };
  socialLinks: SocialLinks;
  personalDetails: PersonalDetails;
  hero: {
    title: string;
    subtitles: string[]; // For typing animation
    description: string;
    stats: StatItem[];
    floatingBadges: string[];
  };
  about: {
    title: string;
    philosophy: string[];
    skillTags: string[];
  };
  skillset: SkillCategory[];
  expertise: ExpertiseItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Amrita Pattnaik",
    role: "Frontend Developer | React & Angular",
    avatar: "/src/assets/images/profile.jpg",
    resumeUrl: "/Amrita_Pattnaik_ResumeII.pdf",
  },
  socialLinks: {
    email: "amritapattnaik564@gmail.com",
    linkedin: "https://www.linkedin.com/in/amrita-pattnaik-0828bb204",
    github: "https://github.com/amritapattnaik",
    phone: "+91 8114788416",
    whatsapp: "https://wa.me/918114788416"
  },
  personalDetails: {
    fullName: "Amrita Pattnaik",
    email: "amritapattnaik564@gmail.com",
    phone: "+91 8114788416",
    experience: "4+ Years",
    location: "Bhubaneswar, Odisha, India",
    company: "Nirmalya Labs Pvt Ltd"
  },
  hero: {
    title: "Amrita Pattnaik",
    subtitles: [
      "Frontend Developer",
      "React & Angular Developer",
      "UI/UX Implementation Specialist"
    ],
    description: "Frontend Developer with 4+ years of experience building scalable, responsive, and high-performance web applications using React, Angular, TypeScript, JavaScript, and modern frontend technologies. Passionate about creating reusable UI architectures, performance optimization, and delivering exceptional user experiences.",
    stats: [
      { value: "4+ Years", label: "Experience" },
      { value: "3+", label: "Enterprise Projects" },
      { value: "100%", label: "Responsive UI" }
    ],
    floatingBadges: [
      "React", "Angular", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind", "RxJS", "NgRx"
    ]
  },
  about: {
    title: "About Me",
    philosophy: [
      "Frontend Developer with 4+ years of experience in building scalable, responsive, and high-performance web applications.",
      "Specialized in React, Angular, TypeScript, JavaScript, and modern frontend architectures. Passionate about reusable components, clean code practices, performance optimization, and seamless user experiences.",
      "Experienced in collaborating with cross-functional teams including UI/UX designers, backend developers, and QA engineers within Agile environments. Continuously focused on learning modern technologies and delivering production-ready applications."
    ],
    skillTags: [
      "React.js", "Angular 12+", "TypeScript", "JavaScript ES6+", "RxJS", "NgRx", "REST APIs",
      "Responsive Design", "Tailwind CSS", "Bootstrap", "Git", "Jira", "Bitbucket", "Agile"
    ]
  },
  skillset: [
    {
      category: "Frontend",
      iconName: "Layout",
      skills: [
        { name: "React.js", level: 90, type: "bar" },
        { name: "Angular", level: 85, type: "bar" },
        { name: "JavaScript", level: 92, type: "bar" },
        { name: "TypeScript", level: 88, type: "bar" },
        { name: "HTML5", level: 95, type: "bar" },
        { name: "CSS3", level: 90, type: "bar" },
        { name: "Tailwind CSS", level: 90, type: "bar" },
        { name: "Bootstrap", level: 85, type: "bar" }
      ]
    },
    {
      category: "State Management",
      iconName: "Cpu",
      skills: [
        { name: "RxJS", level: 80, type: "circular" },
        { name: "NgRx", level: 75, type: "circular" },
        { name: "Context API", level: 90, type: "circular" },
        { name: "React Hooks", level: 95, type: "circular" }
      ]
    },
    {
      category: "Tools",
      iconName: "Wrench",
      skills: [
        { name: "VS Code", level: 95, type: "bar" },
        { name: "Eclipse", level: 75, type: "bar" },
        { name: "Git", level: 90, type: "bar" },
        { name: "Git Bash", level: 85, type: "bar" },
        { name: "Bitbucket", level: 88, type: "bar" },
        { name: "Postman", level: 90, type: "bar" },
        { name: "Jira", level: 85, type: "bar" }
      ]
    },
    {
      category: "Other Capabilities",
      iconName: "Award",
      skills: [
        { name: "REST APIs", level: 92, type: "circular" },
        { name: "Agile Methodologies", level: 85, type: "circular" },
        { name: "Leadership", level: 80, type: "circular" },
        { name: "Team Collaboration", level: 90, type: "circular" },
        { name: "Mentoring", level: 80, type: "circular" }
      ]
    }
  ],
  expertise: [
    {
      id: "react-dev",
      title: "React Development",
      description: "Building modern React applications using Hooks, Context API, reusable architecture, and responsive UI.",
      iconName: "ReactIcon"
    },
    {
      id: "angular-dev",
      title: "Angular Development",
      description: "Developing scalable Angular applications using components, services, RxJS, and modular architecture.",
      iconName: "AngularIcon"
    },
    {
      id: "state-mgmt",
      title: "State Management",
      description: "Implementing RxJS, NgRx, and Context API for predictable application state handling.",
      iconName: "Cpu"
    },
    {
      id: "rest-api",
      title: "REST API Integration",
      description: "Creating dynamic applications with secure and scalable API integrations.",
      iconName: "Link"
    },
    {
      id: "perf-opt",
      title: "Performance Optimization",
      description: "Lazy loading, code splitting, image optimization, and frontend performance improvements.",
      iconName: "Zap"
    },
    {
      id: "responsive-ui",
      title: "Responsive UI Design",
      description: "Pixel-perfect interfaces optimized across desktop, tablet, and mobile devices.",
      iconName: "Monitor"
    }
  ],
  experience: [
    {
      company: "Nirmalya Labs Private Limited",
      role: "Software Development Engineer II",
      duration: "Jan 2022 - Present",
      location: "Bhubaneswar, Odisha, India",
      responsibilities: [
        "Developed scalable React and Angular applications.",
        "Built reusable component architectures.",
        "Implemented lazy loading and performance optimizations.",
        "Integrated REST APIs for dynamic user experiences.",
        "Collaborated with designers, backend developers, and QA teams.",
        "Worked in Agile/Scrum environment."
      ]
    }
  ],
  projects: [
    {
      title: "Ducis Group",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      description: "Modern e-learning platform featuring authentication, course management, and mock test modules with responsive design and optimized performance.",
      image: "/src/assets/images/project1.png",
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Game Centric",
      tech: ["Angular", "RxJS", "Bootstrap", "REST APIs"],
      description: "Interactive gaming platform with reusable components, responsive design, and optimized performance.",
      image: "/src/assets/images/project2.png",
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Prameya News",
      tech: ["Angular", "Bootstrap", "JavaScript", "REST APIs"],
      description: "Responsive news portal providing real-time updates, breaking news integration, and dynamic content rendering.",
      image: "/src/assets/images/project3.png",
      liveLink: "#",
      githubLink: "#"
    }
  ]
};
