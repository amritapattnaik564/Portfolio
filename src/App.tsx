import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { ParticleBackground } from './components/ParticleBackground';
import { LoadingScreen } from './components/LoadingScreen';

// Direct page section imports
import About from './pages/About';
import Skillset from './pages/Skillset';
import Expertise from './pages/Expertise';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export const App: React.FC = () => {
  // Global UI States
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true; // Default dark
  });
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('about');

  // Sync Dark/Light Mode with CSS Classes and Storage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Initial load timer
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll event listeners: progress bar & scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      // Calculate Scroll Progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }

      // Show/Hide Scroll-to-Top Button
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll Spy: Intersection Observer for active section tracking
  useEffect(() => {
    if (isLoading) return;

    const sections = ['about', 'skillset', 'expertise', 'experience', 'projects', 'contact'];
    
    // Tiny delay to ensure DOM is fully rendered after loading screen hides
    const observerTimer = setTimeout(() => {
      const observers = sections.map(id => {
        const el = document.getElementById(id);
        if (!el) return null;

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          },
          {
            // Trigger active state when section takes up the middle of the viewport
            rootMargin: '-20% 0px -55% 0px'
          }
        );
        observer.observe(el);
        return { el, observer };
      });

      return () => {
        observers.forEach(obs => {
          if (obs) obs.observer.unobserve(obs.el);
        });
      };
    }, 100);

    return () => clearTimeout(observerTimer);
  }, [isLoading]);

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Brand Loading Overlay */}
      <LoadingScreen isLoading={isLoading} />

      {/* Main Core Shell */}
      <div className="min-h-screen text-slate-900 dark:text-white font-sans bg-[#f8fafc] dark:bg-[#050816] transition-colors duration-300 relative overflow-x-hidden">
        {/* Scroll Progress Bar at Viewport Top */}
        <div 
          className="fixed top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-primary via-secondary to-accent z-100 transition-all duration-100 origin-left"
          style={{ transform: `scaleX(${scrollProgress / 100})` }}
        />

        {/* Custom Particles Background */}
        <ParticleBackground darkMode={darkMode} />

        {/* Global Sidebar */}
        <Sidebar 
          darkMode={darkMode} 
          setDarkMode={setDarkMode}
          isOpen={sidebarOpen}
          setIsOpen={setSidebarOpen}
          activeSection={activeSection}
        />

        {/* Main Content Pane */}
        <div className="lg:pl-72 min-h-screen flex flex-col pt-16 lg:pt-0 relative z-10">
          <main className="flex-grow flex flex-col p-6 md:p-12 max-w-7xl mx-auto w-full space-y-28 md:space-y-36">
            {/* Sections */}
            <section id="about" className="scroll-mt-24 lg:scroll-mt-16 w-full">
              <About />
            </section>
            
            <section id="skillset" className="scroll-mt-24 lg:scroll-mt-16 w-full">
              <Skillset />
            </section>
            
            <section id="expertise" className="scroll-mt-24 lg:scroll-mt-16 w-full">
              <Expertise />
            </section>
            
            <section id="experience" className="scroll-mt-24 lg:scroll-mt-16 w-full">
              <Experience />
            </section>
            
            <section id="projects" className="scroll-mt-24 lg:scroll-mt-16 w-full">
              <Projects />
            </section>
            
            <section id="contact" className="scroll-mt-24 lg:scroll-mt-16 w-full">
              <Contact />
            </section>
          </main>

          {/* Global Footer */}
          <div className="px-6 md:px-12 max-w-7xl mx-auto w-full">
            <Footer />
          </div>
        </div>

        {/* Floating Scroll To Top Action Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={scrollToTop}
              className="fixed bottom-6 right-6 w-11 h-11 rounded-xl bg-gradient-to-r from-primary to-secondary text-white shadow-glow-primary border border-white/10 dark:border-white/5 flex items-center justify-center hover-lift hover:shadow-glow-secondary z-40"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default App;
