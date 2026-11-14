import { useState, useEffect, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import {
  FaReact,
  FaAngular,
  FaJs,
  FaHtml5,
  FaCss3Alt
} from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss,
  SiReactivex
} from 'react-icons/si';

// Map icon names to dynamic brand badges
  const floatBadgeIcons: Record<string, ReactNode> = {
    React: <FaReact className="w-5 h-5 text-sky-400" />,
      Angular: <FaAngular className="w-5 h-5 text-red-500" />,
        JavaScript: <FaJs className="w-5 h-5 text-yellow-400" />,
          TypeScript: <SiTypescript className="w-5 h-5 text-blue-500" />,
            HTML: <FaHtml5 className="w-5 h-5 text-orange-500" />,
              CSS: <FaCss3Alt className="w-5 h-5 text-blue-400" />,
                Tailwind: <SiTailwindcss className="w-5 h-5 text-teal-400" />,
                  RxJS: <SiReactivex className="w-5 h-5 text-pink-500" />,
                    NgRx: <div className="text-[10px] font-extrabold text-purple-400 font-mono">N</div>
};

  export const Hero = () => {
    const { resumeUrl } = portfolioData.personalInfo;
    const { title, subtitles, description, stats } = portfolioData.hero;

    // Typing animation hooks
    const [currentSubtitle, setCurrentSubtitle] = useState('');
    const [subtitleIndex, setSubtitleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
      const activeText = subtitles[subtitleIndex];

      if (!isDeleting && charIndex === activeText.length) {
        const timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
        return () => clearTimeout(timer);
      }

      if (isDeleting && charIndex === 0) {
        const timer = setTimeout(() => {
          setIsDeleting(false);
          setSubtitleIndex((prev) => (prev + 1) % subtitles.length);
        }, 300);
        return () => clearTimeout(timer);
      }

      const typingSpeed = isDeleting ? 40 : 80;
      const timer = setTimeout(() => {
        setCurrentSubtitle(
          isDeleting
            ? activeText.substring(0, charIndex - 1)
            : activeText.substring(0, charIndex + 1)
        );
        setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      }, typingSpeed);

      return () => clearTimeout(timer);
    }, [charIndex, isDeleting, subtitleIndex, subtitles]);

    // Framer Motion layout config
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
      }
    };

    const itemVariants = {
      hidden: { y: 30, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" as const }
      }
    };

    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[calc(100vh-8rem)] w-full py-6"
      >
        {/* Left side: Intro content */}
        <div className="lg:col-span-7 flex flex-col items-start justify-center">
          {/* Status capsule indicator */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-6 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-shadow duration-300"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for Projects & Hiring</span>
          </motion.div>

          {/* Name Head */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-2"
          >
            Hi, I'm <span className="gradient-heading block sm:inline">{title}</span>
          </motion.h1>

          {/* Subtitle with typing animation cursor */}
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl font-bold text-primary mb-6 h-8 flex items-center"
          >
            <span>{currentSubtitle}</span>
            <span className="w-[3px] h-6 bg-accent ml-1.5 animate-[ping_0.8s_infinite] inline-block" />
          </motion.h2>

          {/* Description body */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-textSecondary font-light leading-relaxed max-w-2xl mb-8"
          >
            {description}
          </motion.p>

          {/* Stats card grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 w-full max-w-xl mb-10"
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-card p-4 rounded-2xl border border-white/5 text-center hover:border-primary/30 transition-all duration-300 hover:shadow-glow-primary"
              >
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">{stat.value}</h3>
                <p className="text-[10px] sm:text-xs text-textSecondary uppercase tracking-widest font-medium mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Call-to-action buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <a
              href={resumeUrl}
              download="Amrita_Pattnaik_Resume.pdf"
              className="py-3 px-6 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-glow-secondary flex items-center gap-2 glow-button transition-all duration-300 hover:scale-[1.02]"
            >
              <Download className="w-4.5 h-4.5" />
              Download Resume
            </a>
            <button
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="py-3 px-6 rounded-xl text-sm font-semibold text-white bg-slate-900 hover:bg-slate-850 hover:text-white border border-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] flex items-center gap-2 cursor-pointer"
            >
              <Mail className="w-4.5 h-4.5 text-primary" />
              Get In Touch
            </button>
          </motion.div>
        </div>

        {/* Right side: Modern illustration with floating badges */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 flex items-center justify-center relative select-none w-full"
        >
          <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
            {/* Decorative glowing background gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-primary/15 blur-[80px]" />
            <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-accent/10 blur-[60px]" />

            {/* Central illustration image wrapper */}
            <div className="relative w-72 h-72 rounded-3xl overflow-hidden glass-card border border-white/10 dark:border-white/5 flex items-center justify-center shadow-2xl p-4">
              <img
                src="/images/hero-illustration.png"
                alt="Developer Illustration"
                className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(99,102,241,0.3)] animate-float"
              />
            </div>

            {/* Floating Badges */}
            {/* Badge 1: React (Top Left) */}
            <FloatingBadge
              icon={floatBadgeIcons.React}
              label="React"
              className="absolute top-4 left-6"
              delay={0}
            />
            {/* Badge 2: Angular (Top Right) */}
            <FloatingBadge
              icon={floatBadgeIcons.Angular}
              label="Angular"
              className="absolute top-8 right-6"
              delay={1}
            />
            {/* Badge 3: TypeScript (Mid Left) */}
            <FloatingBadge
              icon={floatBadgeIcons.TypeScript}
              label="TS"
              className="absolute top-1/3 -left-6"
              delay={1.5}
            />
            {/* Badge 4: JavaScript (Mid Right) */}
            <FloatingBadge
              icon={floatBadgeIcons.JavaScript}
              label="JS"
              className="absolute top-1/2 -right-8"
              delay={0.5}
            />
            {/* Badge 5: Tailwind (Bottom Left) */}
            <FloatingBadge
              icon={floatBadgeIcons.Tailwind}
              label="Tailwind"
              className="absolute bottom-12 left-0"
              delay={2}
            />
            {/* Badge 6: RxJS (Bottom Right) */}
            <FloatingBadge
              icon={floatBadgeIcons.RxJS}
              label="RxJS"
              className="absolute bottom-16 right-0"
              delay={2.5}
            />
            {/* Badge 7: NgRx (Bottom Center) */}
            <FloatingBadge
              icon={floatBadgeIcons.NgRx}
              label="NgRx"
              className="absolute bottom-0 left-1/3 -translate-x-1/2"
              delay={1.2}
            />
          </div>
        </motion.div>
      </motion.div>
    );
  };

  /* Sub-component: Floating Tech Badge */
  interface FloatingBadgeProps {
    icon: ReactNode;
    label: string;
    className: string;
    delay?: number;
  }

    const FloatingBadge = ({ icon, label, className, delay = 0 }: FloatingBadgeProps) => {
      return (
        <motion.div
          initial={{ y: 0 }}
          animate={{
            y: [-8, 8, -8],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay
          }}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-card border border-white/10 dark:border-white/5 shadow-md ${className} hover:scale-110 hover:border-primary/40 hover:shadow-glow-primary transition-transform duration-200 z-30 cursor-pointer`}
        >
          {icon}
          <span className="text-[10px] font-bold text-white tracking-wider font-mono">{label}</span>
        </motion.div>
      );
    };
    export default Hero;
