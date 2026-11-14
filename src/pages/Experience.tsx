import { motion } from 'framer-motion';
import { 
  Building2, 
  Calendar, 
  MapPin, 
  Briefcase, 
  CheckCircle2, 
  Award, 
  TrendingUp, 
  Layers, 
  Zap, 
  Workflow, 
  Users,
  Code2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { SectionTitle } from '../components/SectionTitle';

export const Experience = () => {
  const exp = portfolioData.experience[0];

  const milestones = [
    {
      period: "2023 – Present",
      role: "Software Development Engineer II (SDE – II)",
      focus: "Next.js & React Architecture, Performance Optimization, Spring Boot REST APIs, LMS Platform Delivery"
    },
    {
      period: "2022 – 2023",
      role: "Frontend Developer",
      focus: "Angular 12+ Component Engineering, RxJS State Management, Modular UI Architecture & Form Validation"
    }
  ];

  const impactPillars = [
    {
      icon: <Layers className="w-5 h-5 text-sky-400" />,
      title: "Component Architecture",
      desc: "Designed and built modular, reusable UI component libraries across LMS, E-Commerce, and ERP suites to maximize maintainability."
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      title: "Performance Optimization",
      desc: "Implemented route-level lazy loading, code splitting, and image compression for sub-second page loads and optimal Core Web Vitals."
    },
    {
      icon: <Workflow className="w-5 h-5 text-accent" />,
      title: "API & State Management",
      desc: "Integrated RESTful APIs with Spring Boot backends, managing complex client-side validations and reactive state using RxJS and React Hooks."
    },
    {
      icon: <Users className="w-5 h-5 text-emerald-400" />,
      title: "Agile & Team Collaboration",
      desc: "Actively collaborated with UI/UX designers, backend teams, and QA in Agile/Scrum sprints; participated in code reviews and production support."
    }
  ];

  const techStack = [
    "React.js", "Next.js", "Angular 12+", "TypeScript", "JavaScript (ES6+)",
    "Tailwind CSS", "Bootstrap", "RxJS", "RESTful APIs", "Spring Boot", "Git", "Jira"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="w-full max-w-5xl mx-auto"
    >
      <SectionTitle
        title="Professional Experience"
        subtitle="4+ years of dedicated engineering tenure, modular architecture, and enterprise frontend delivery."
        align="center"
      />

      {/* Main Enterprise Showcase Hub Card */}
      <motion.div
        variants={itemVariants}
        className="glass-card rounded-3xl p-6 md:p-10 relative overflow-hidden border border-white/10 shadow-2xl hover:border-primary/30 transition-all duration-300"
      >
        {/* Ambient background glows */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header Section */}
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-white shadow-glow-primary flex-shrink-0">
              <Building2 className="w-8 h-8" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {exp.role}
                </h3>
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Full-Time • 4+ Years
                </span>
              </div>
              <p className="text-base sm:text-lg font-semibold text-primary flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                {exp.company}
              </p>
            </div>
          </div>

          {/* Metadata Badges */}
          <div className="flex flex-wrap sm:flex-nowrap lg:flex-col items-start lg:items-end gap-2 text-xs text-textSecondary">
            <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-white font-medium">
              <Calendar className="w-4 h-4 text-secondary" />
              {exp.duration}
            </span>
            <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-textSecondary font-medium">
              <MapPin className="w-4 h-4 text-accent" />
              {exp.location}
            </span>
          </div>
        </div>

        {/* Career Progression & Tenure Timeline */}
        <div className="relative z-10 py-8 border-b border-white/10">
          <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-5 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-primary" />
            Career Progression & Tenure Track
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-accent font-mono px-2.5 py-0.5 rounded-md bg-accent/10 border border-accent/20">
                    {m.period}
                  </span>
                  <span className="text-[11px] font-semibold text-textSecondary">
                    Nirmalya Labs
                  </span>
                </div>
                <h5 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                  {m.role}
                </h5>
                <p className="text-xs text-textSecondary leading-relaxed">
                  {m.focus}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Impact Pillars Grid */}
        <div className="relative z-10 py-8 border-b border-white/10">
          <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-5 flex items-center gap-2">
            <Award className="w-4 h-4 text-secondary" />
            Core Engineering Pillars & Impact
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {impactPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-white/[0.07] transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                  {pillar.icon}
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                    {pillar.title}
                  </h5>
                  <p className="text-xs text-textSecondary font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Responsibilities Detail List */}
        <div className="relative z-10 py-8 border-b border-white/10">
          <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Key Deliverables & Responsibilities
          </h4>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {exp.responsibilities.map((resp, idx) => (
              <li
                key={idx}
                className="text-xs sm:text-sm text-textSecondary font-light leading-relaxed flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5"
              >
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technology Stack Tags */}
        <div className="relative z-10 pt-6">
          <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-4 flex items-center gap-2">
            <Code2 className="w-4 h-4 text-accent" />
            Technologies & Tools Mastered on the Job
          </h4>

          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-white hover:border-primary/40 hover:text-primary transition-all duration-200 font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
