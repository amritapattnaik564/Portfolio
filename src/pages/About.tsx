import { motion } from 'framer-motion';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Building2, 
  Award,
  GraduationCap
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { SectionTitle } from '../components/SectionTitle';
import { Hero } from '../components/Hero';

export const About = () => {
  const { philosophy, skillTags } = portfolioData.about;
  const { fullName, email, phone, experience, location, company } = portfolioData.personalDetails;

  // Highlights to display as capsules above details
  const highlights = [
    "React & Angular",
    "RxJS & NgRx Expert",
    "Scalable UI Architectures",
    "Lazy Loading & Optimization",
    "State Management",
    "Responsive Web Design",
    "REST API Integration",
    "CI/CD & Git Version Control",
    "Agile / Scrum"
  ];

  // Framer Motion configuration
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  const detailsList = [
    { label: "Full Name", value: fullName, icon: <User className="w-5 h-5 text-primary" /> },
    { label: "Email Address", value: email, icon: <Mail className="w-5 h-5 text-primary" />, isLink: true, href: `mailto:${email}` },
    { label: "Contact Number", value: phone, icon: <Phone className="w-5 h-5 text-primary" />, isLink: true, href: `tel:${phone}` },
    { label: "Experience", value: experience, icon: <Award className="w-5 h-5 text-primary" /> },
    { label: "Location", value: location, icon: <MapPin className="w-5 h-5 text-primary" /> },
    { label: "Current Company", value: company, icon: <Building2 className="w-5 h-5 text-primary" /> }
  ];

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="w-full flex flex-col"
    >
      {/* Hero Intro Section */}
      <Hero />

      {/* Decorative separating line */}
      <div className="w-full border-t border-white/10 dark:border-white/5 my-12" />

      {/* Title */}
      <SectionTitle 
        title="About Me" 
        subtitle="Get to know my journey, professional experience, and frontend developer core philosophy."
        align="center"
      />

      {/* Highlights Capsule Row */}
      <motion.div 
        variants={itemVariants}
        className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto"
      >
        {highlights.map((tag, idx) => (
          <span 
            key={idx} 
            className="text-xs font-semibold px-4 py-2 rounded-full glass-card border border-white/10 dark:border-white/5 hover:border-primary/50 text-textSecondary hover:text-white transition-all duration-300 hover:scale-105"
          >
            {tag}
          </span>
        ))}
      </motion.div>

      {/* Main Philosophy & Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Philosophy */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-7 glass-card p-6 md:p-8 rounded-3xl relative overflow-hidden"
        >
          {/* Background subtle glowing ball */}
          <div className="absolute -top-20 -left-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 relative">
            <span className="h-6 w-1 bg-primary rounded-full inline-block" />
            My Professional Philosophy
          </h3>
          
          <div className="space-y-5 text-sm md:text-base text-textSecondary font-light leading-relaxed relative z-10">
            {philosophy.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Skill Tag list inside philosophy */}
          <div className="mt-8 pt-8 border-t border-white/5">
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Core Skill Tags</h4>
            <div className="flex flex-wrap gap-2">
              {skillTags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="text-xs bg-slate-900 border border-white/5 hover:border-accent/50 text-accent px-3 py-1.5 rounded-lg transition-colors duration-300 font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Personal Details & Education */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          {/* Personal Details Card */}
          <div className="glass-card p-6 md:p-8 rounded-3xl relative overflow-hidden">
            {/* Background subtle glowing ball */}
            <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 relative">
              <span className="h-6 w-1 bg-secondary rounded-full inline-block" />
              Personal Details
            </h3>

            <div className="space-y-4 relative z-10">
              {detailsList.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 dark:bg-slate-900/50 border border-white/5 hover:border-primary/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-textSecondary uppercase tracking-wider">{item.label}</p>
                    {item.isLink ? (
                      <a 
                        href={item.href} 
                        className="text-sm font-medium text-white hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-slate-900 dark:text-white">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Card */}
          {portfolioData.education && portfolioData.education.length > 0 && (
            <div className="glass-card p-6 md:p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-36 h-36 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 relative">
                <span className="h-6 w-1 bg-primary rounded-full inline-block" />
                Education
              </h3>
              <div className="space-y-4 relative z-10">
                {portfolioData.education.map((edu, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/20 transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">{edu.degree}</h4>
                        <p className="text-xs font-semibold text-primary mt-0.5">{edu.institution}</p>
                        <div className="flex items-center justify-between text-[11px] text-textSecondary mt-2">
                          <span>{edu.duration}</span>
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};
export default About;
