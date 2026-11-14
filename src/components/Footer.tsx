import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  const { name } = portfolioData.personalInfo;

  return (
    <footer className="mt-auto py-6 border-t border-white/10 dark:border-white/5 text-center text-xs text-textSecondary flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>
        &copy; {new Date().getFullYear()} <span className="text-white font-medium">{name}</span>. All rights reserved.
      </div>
      <div className="flex items-center gap-2">
        <span>Built with</span>
        <span className="px-2 py-0.5 rounded bg-white/5 text-white border border-white/10">React 19</span>
        <span className="px-2 py-0.5 rounded bg-white/5 text-white border border-white/10">TypeScript</span>
        <span className="px-2 py-0.5 rounded bg-white/5 text-white border border-white/10">Tailwind</span>
      </div>
    </footer>
  );
};
export default Footer;
