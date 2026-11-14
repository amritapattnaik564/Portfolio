import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  value: string;
  link: string;
}

export const ContactCard = ({ icon, title, value, link }: ContactCardProps) => {
  return (
    <motion.a
      href={link}
      target={link.startsWith('http') ? '_blank' : '_self'}
      rel="noopener noreferrer"
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" as const } }
      }}
      className="group flex items-center gap-5 p-5 glass-card rounded-2xl hover:border-primary/40 hover:shadow-glow-primary transition-all duration-300 hover-lift"
    >
      {/* Icon Circle */}
      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
        {icon}
      </div>

      {/* Info */}
      <div className="overflow-hidden">
        <p className="text-xs font-semibold text-textSecondary uppercase tracking-widest mb-0.5">
          {title}
        </p>
        <p className="text-sm font-semibold text-slate-900 dark:text-white truncate group-hover:text-primary transition-colors">
          {value}
        </p>
      </div>
    </motion.a>
  );
};
export default ContactCard;
