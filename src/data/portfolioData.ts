// Strong data typing for portfolio settings
import profileImg from '../assets/images/profile.jpg';
import project1Img from '../assets/images/project1.png';
import project2Img from '../assets/images/project2.png';
import project3Img from '../assets/images/project3.png';
import project4Img from '../assets/images/project4.png';

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

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  location: string;
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
  education: EducationItem[];
  skillset: SkillCategory[];
  expertise: ExpertiseItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Amrita Pattnaik",
    role: "Frontend Developer | React & Angular",
    avatar: profileImg,
    resumeUrl: "/Amrita_Pattnaik_Resume.pdf",
  },
  socialLinks: {
    email: "amritapattnaik564@gmail.com",
    linkedin: "https://www.linkedin.com/in/amrita-pattnaik-0828bb204",
    github: "https://github.com/amritapattnaik564",
    phone: "+91 8114788416",
    whatsapp: "https://wa.me/918114788416"
  },
  personalDetails: {
    fullName: "Amrita Pattnaik",
    email: "amritapattnaik564@gmail.com",
    phone: "+91 8114788416",
    experience: "4+ Years",
    location: "Bhubaneswar, Odisha, India",
    company: "Nirmalya Labs Private Limited"
  },
  hero: {
    title: "Amrita Pattnaik",
    subtitles: [
      "Frontend Developer",
      "UI Developer",
      "React.js & Next.js Specialist",
      "Angular Developer"
    ],
    description: "Frontend & UI Developer with 4+ years of professional experience building scalable, responsive, and component-based web applications using React.js, Next.js, Angular, TypeScript, JavaScript, and Tailwind CSS. Specialized in designing modular architectures, optimizing performance, and crafting clean, accessible user experiences.",
    stats: [
      { value: "4+ Years", label: "Experience" },
      { value: "4", label: "Enterprise Projects" },
      { value: "100%", label: "Responsive UI" }
    ],
    floatingBadges: [
      "React", "Angular", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind", "RxJS", "NgRx"
    ]
  },
  about: {
    title: "About Me",
    philosophy: [
      "Frontend Developer with 4+ years of hands-on experience in building scalable, responsive, and component-based web applications for Learning Management Systems (LMS), E-Commerce, and Content Management platforms.",
      "Specialized in React.js, Next.js, Angular (12+), TypeScript, JavaScript (ES6+), and modern UI frameworks like Tailwind CSS and Bootstrap. Passionate about reusable component architectures, dynamic form validation, reactive state management (RxJS, Context API), and performance optimization.",
      "Experienced in collaborating closely with cross-functional Agile/Scrum teams including UI/UX designers, backend developers (Spring Boot REST APIs), and QA engineers to deliver robust, production-ready software solutions."
    ],
    skillTags: [
      "React.js", "Next.js", "Angular 12+", "TypeScript", "JavaScript (ES6+)", "RxJS", "Tailwind CSS",
      "Bootstrap", "HTML5", "CSS3", "REST APIs", "Git", "Bitbucket", "Postman", "Jira", "Agile Methodology"
    ]
  },
  education: [
    {
      degree: "Masters in Computer Applications (MCA)",
      institution: "Trident Academy of Technology",
      duration: "2020 – 2022",
      location: "Bhubaneswar, Odisha"
    },
    {
      degree: "B.Sc. in Computer Science",
      institution: "NIIS Information Of Administration",
      duration: "2017 – 2020",
      location: "Bhubaneswar, Odisha"
    }
  ],
  skillset: [
    {
      category: "Frontend & UI",
      iconName: "Layout",
      skills: [
        { name: "React.js", level: 92, type: "bar" },
        { name: "Next.js", level: 85, type: "bar" },
        { name: "Angular 12+", level: 88, type: "bar" },
        { name: "TypeScript", level: 90, type: "bar" },
        { name: "JavaScript (ES6+)", level: 92, type: "bar" },
        { name: "HTML5", level: 95, type: "bar" },
        { name: "CSS3", level: 92, type: "bar" },
        { name: "Tailwind CSS", level: 90, type: "bar" },
        { name: "Bootstrap", level: 88, type: "bar" }
      ]
    },
    {
      category: "State Management & Architecture",
      iconName: "Cpu",
      skills: [
        { name: "RxJS", level: 85, type: "circular" },
        { name: "Context API", level: 92, type: "circular" },
        { name: "React Hooks", level: 95, type: "circular" },
        { name: "Modular Architecture", level: 90, type: "circular" }
      ]
    },
    {
      category: "Developer Tools & Platforms",
      iconName: "Wrench",
      skills: [
        { name: "Git", level: 90, type: "bar" },
        { name: "Bitbucket", level: 88, type: "bar" },
        { name: "Visual Studio / VS Code", level: 95, type: "bar" },
        { name: "Postman", level: 90, type: "bar" },
        { name: "Jira", level: 85, type: "bar" },
        { name: "Git Bash", level: 85, type: "bar" },
        { name: "Eclipse", level: 75, type: "bar" }
      ]
    },
    {
      category: "Core Competencies",
      iconName: "Award",
      skills: [
        { name: "REST API Integration", level: 94, type: "circular" },
        { name: "Responsive UI Design", level: 95, type: "circular" },
        { name: "Performance Optimization", level: 88, type: "circular" },
        { name: "Agile / Scrum", level: 90, type: "circular" }
      ]
    }
  ],
  expertise: [
    {
      id: "react-next-dev",
      title: "React.js & Next.js Development",
      description: "Building scalable, component-based SPAs and SSR web applications using modern React Hooks, Context API, Next.js routing, and clean UI architecture.",
      iconName: "ReactIcon"
    },
    {
      id: "angular-dev",
      title: "Angular Development",
      description: "Developing robust Angular enterprise applications using modular architecture, custom components, directives, services, and RxJS reactive streams.",
      iconName: "AngularIcon"
    },
    {
      id: "state-mgmt",
      title: "Reactive State Management",
      description: "Architecting predictable client-side state handling with RxJS observables, React Context API, custom hooks, and optimized event workflows.",
      iconName: "Cpu"
    },
    {
      id: "rest-api",
      title: "REST API Integration",
      description: "Seamlessly connecting frontends with backend microservices (Spring Boot, Node) with robust error handling, caching, and data mapping.",
      iconName: "Link"
    },
    {
      id: "perf-opt",
      title: "Performance & Optimization",
      description: "Implementing lazy loading, route code splitting, asset compression, and bundle minimization for fast loading times and smooth rendering.",
      iconName: "Zap"
    },
    {
      id: "responsive-ui",
      title: "Responsive UI / UX Design",
      description: "Designing pixel-perfect, mobile-first responsive interfaces compatible across all modern desktop, tablet, and mobile browsers.",
      iconName: "Monitor"
    }
  ],
  experience: [
    {
      company: "Nirmalya Labs Private Limited",
      role: "Software Development Engineer II (SDE – II)",
      duration: "Jan 2022 - Present",
      location: "Bhubaneswar, Odisha",
      responsibilities: [
        "4+ years of frontend engineering experience delivering scalable, responsive, and component-based web applications using React.js, Next.js, Angular, TypeScript, JavaScript, HTML5, CSS3, and Tailwind CSS.",
        "Developed and maintained enterprise-grade web applications for Learning Management Systems (LMS), E-Commerce, and Content Management platforms.",
        "Built reusable UI component libraries, implemented routing, dynamic form validations, and state management (RxJS, Context API) to improve application maintainability and user experience.",
        "Optimized frontend performance through route-level code splitting, lazy loading, and image compression for sub-second page loads.",
        "Integrated RESTful APIs connecting to Spring Boot backends to power dynamic, data-driven business processes.",
        "Participated in end-to-end feature development, bug fixing, code reviews, and production support activities within Agile/Scrum sprints."
      ]
    }
  ],
  projects: [
    {
      title: "Ducis Group (LMS & E-Learning Platform)",
      tech: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "REST APIs"],
      description: "Enterprise Learning Management System enabling course discovery, online purchases, video streaming, interactive assessments, and certification workflows. Built with reusable modular components, dynamic client-side form validation, lazy loading, and code splitting.",
      image: project1Img,
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Game Centric",
      tech: ["Angular", "HTML5", "CSS3", "Bootstrap", "JavaScript", "RxJS", "REST APIs"],
      description: "Interactive gaming platform designed with high-performance responsive UI, modular component architecture, dynamic state management via RxJS, and optimized asset delivery.",
      image: project2Img,
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Prameya News",
      tech: ["Angular", "HTML5", "CSS3", "Bootstrap", "JavaScript", "RxJS", "REST APIs"],
      description: "High-traffic responsive news portal delivering real-time breaking news updates, political and weather feeds, with lazy loading, image compression, and cross-browser compatibility.",
      image: project3Img,
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Nirmalya Enterprise Resource Planning (NERP)",
      tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "REST APIs", "Spring Boot"],
      description: "Comprehensive enterprise resource planning (ERP) system handling critical business processes, interactive data tables, and dynamic front-end components integrated with Spring Boot RESTful APIs.",
      image: project4Img,
      liveLink: "#",
      githubLink: "#"
    }
  ]
};
