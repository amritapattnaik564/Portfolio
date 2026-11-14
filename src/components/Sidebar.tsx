import React from 'react';
import { 
  User, 
  Cpu, 
  Briefcase, 
  FolderGit2, 
  Mail, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Download,
  Flame
} from 'lucide-react';
import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

interface SidebarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  activeSection: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  darkMode, 
  setDarkMode, 
  isOpen, 
  setIsOpen,
  activeSection
}) => {
  const { name, role, avatar, resumeUrl } = portfolioData.personalInfo;
  const { github, linkedin, email, whatsapp } = portfolioData.socialLinks;

  const menuItems = [
    { name: 'About', id: 'about', icon: <User className="w-5 h-5" /> },
    { name: 'My Skillset', id: 'skillset', icon: <Cpu className="w-5 h-5" /> },
    { name: 'Expertise', id: 'expertise', icon: <Flame className="w-5 h-5" /> },
    { name: 'Experience', id: 'experience', icon: <Briefcase className="w-5 h-5" /> },
    { name: 'Featured Projects', id: 'projects', icon: <FolderGit2 className="w-5 h-5" /> },
    { name: 'Contact', id: 'contact', icon: <Mail className="w-5 h-5" /> },
  ];

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Offset by top bar height on mobile if necessary (mobile header height is 16 = 4rem = 64px)
      const isMobile = window.innerWidth < 1024;
      const offset = isMobile ? 80 : 0;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Mobile Header Menu Toggle Bar */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 glass-card z-40 px-6 flex items-center justify-between border-b border-white/10 dark:border-white/5">
        <span className="font-bold text-xl tracking-wider gradient-heading">{name}</span>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-white/10 dark:hover:bg-slate-800 text-textSecondary hover:text-white transition-all duration-200"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-indigo-400" />}
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-textSecondary hover:text-white hover:bg-white/10 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Drawer Overlay for Mobile */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Main Sidebar Container */}
      <aside 
        className={`fixed top-0 bottom-0 left-0 w-72 z-50 lg:z-30 glass-card border-r border-white/10 dark:border-white/5 flex flex-col justify-between py-8 px-6 transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Top Content: Profile Info */}
        <div className="flex flex-col items-center text-center">
          {/* Close button for Mobile Menu inside Drawer */}
          <button 
            onClick={() => setIsOpen(false)}
            className="lg:hidden absolute top-4 right-4 p-1.5 rounded-full hover:bg-white/10 dark:hover:bg-slate-800 text-textSecondary hover:text-white"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Profile Photo */}
          <div className="relative group mb-4">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse-slow"></div>
            <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-primary/50 bg-slate-900">
              <img 
                src={avatar} 
                alt={name} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>

          <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white mb-1 drop-shadow-sm">
            {name}
          </h2>
          <p className="text-xs font-medium text-textSecondary uppercase tracking-widest px-2 py-0.5 rounded-full bg-white/5 border border-white/5 mb-5">
            {role.split('|')[0].trim()}
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-2.5 mb-6">
            <a 
              href={`mailto:${email}`} 
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 dark:border-white/5 flex items-center justify-center text-textSecondary hover:text-primary hover:border-primary hover:shadow-glow-primary transition-all duration-300"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 dark:border-white/5 flex items-center justify-center text-textSecondary hover:text-primary hover:border-primary hover:shadow-glow-primary transition-all duration-300"
              title="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            {github && (
              <a 
                href={github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 dark:border-white/5 flex items-center justify-center text-textSecondary hover:text-primary hover:border-primary hover:shadow-glow-primary transition-all duration-300"
                title="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
            )}
            {whatsapp && (
              <a 
                href={whatsapp} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 dark:border-white/5 flex items-center justify-center text-textSecondary hover:text-accent hover:border-accent hover:shadow-glow-accent transition-all duration-300"
                title="WhatsApp"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
            )}
          </div>

          {/* Download Resume Button */}
          <a 
            href={resumeUrl}
            download="Amrita_Pattnaik_Resume.pdf"
            className="w-full py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-glow-secondary flex items-center justify-center gap-2 glow-button transition-all duration-300 hover:scale-[1.02]"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </div>

        {/* Middle Content: Navigation Menu */}
        <nav className="my-8 flex-grow flex flex-col gap-1.5 overflow-y-auto custom-scrollbar">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleScrollTo(item.id)}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover-lift w-full text-left ${
                activeSection === item.id 
                  ? 'bg-gradient-to-r from-primary/25 to-secondary/25 border border-primary/40 text-white shadow-glow-primary' 
                  : 'text-textSecondary hover:text-white hover:bg-white/5 border border-transparent'
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </button>
          ))}
        </nav>

        {/* Bottom Content: Theme Toggle & Info */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10 dark:border-white/5">
          <span className="text-xs text-textSecondary">
            © {new Date().getFullYear()} {name.split(' ')[0]}
          </span>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="hidden lg:flex p-2 rounded-xl bg-white/5 border border-white/10 dark:border-white/5 text-textSecondary hover:text-white hover:border-primary transition-all duration-300"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400 animate-pulse" /> : <Moon className="w-4 h-4 text-indigo-400" />}
          </button>
        </div>
      </aside>
    </>
  );
};
