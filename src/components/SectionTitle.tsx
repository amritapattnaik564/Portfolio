interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

  export const SectionTitle = ({
    title,
    subtitle,
    align = 'center'
  }: SectionTitleProps) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 flex flex-col ${isCenter ? 'items-center text-center' : 'items-start text-left'}`}>
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight relative mb-3">
        <span className="gradient-heading">{title}</span>
        {/* Underline decorative bar */}
        <div className={`h-1.5 w-16 bg-gradient-to-r from-primary to-accent rounded-full mt-2 ${isCenter ? 'mx-auto' : ''}`} />
      </h2>

      {subtitle && (
        <p className="text-sm sm:text-base text-textSecondary max-w-2xl font-light leading-relaxed mt-2">
          {subtitle}
        </p>
      )}
    </div>
  );
};
export default SectionTitle;
