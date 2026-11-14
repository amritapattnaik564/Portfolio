import { useState, type ChangeEvent, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import { SectionTitle } from '../components/SectionTitle';
import { ContactCard } from '../components/ContactCard';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact = () => {
  const { email, phone, location } = portfolioData.personalDetails;
  const { github, linkedin, whatsapp } = portfolioData.socialLinks;

  // Form states
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Form input changes handler
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  // Form validation checks
  const validateForm = (): boolean => {
    const tempErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(formData.email)) {
        tempErrors.email = "Please enter a valid email address";
        isValid = false;
      }
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = "Message must be at least 10 characters long";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  // Form submit handler
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Auto-hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  // Stagger configurations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="w-full"
    >
      {/* Title */}
      <SectionTitle
        title="Get In Touch"
        subtitle="Feel free to reach out for collaborations, project inquiries, or just to say hello!"
        align="center"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
        {/* Left Side: Contact Cards & Socials */}
        <div className="lg:col-span-5 flex flex-col gap-6 w-full">
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <ContactCard
              icon={<Mail className="w-5 h-5" />}
              title="Email Me"
              value={email}
              link={`mailto:${email}`}
            />
            <ContactCard
              icon={<Phone className="w-5 h-5" />}
              title="Call Me"
              value={phone}
              link={`tel:${phone}`}
            />
            <ContactCard
              icon={<MapPin className="w-5 h-5" />}
              title="My Location"
              value={location}
              link={`https://maps.google.com/?q=${encodeURIComponent(location)}`}
            />
          </motion.div>

          {/* Social Connect Panel */}
          <motion.div
            variants={itemVariants}
            className="glass-card p-6 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-secondary/5 rounded-full blur-xl pointer-events-none" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Connect on Socials</h3>

            <div className="flex items-center gap-4">
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 dark:border-white/5 flex items-center justify-center text-textSecondary hover:text-white hover:bg-primary transition-all duration-300 hover-lift"
                title="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              {github && (
                <a 
                  href={github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 dark:border-white/5 flex items-center justify-center text-textSecondary hover:text-white hover:bg-slate-800 transition-all duration-300 hover-lift"
                  title="GitHub"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
              )}
              {whatsapp && (
                <a 
                  href={whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 dark:border-white/5 flex items-center justify-center text-textSecondary hover:text-white hover:bg-emerald-600 transition-all duration-300 hover-lift"
                  title="WhatsApp"
                >
                  <FaWhatsapp className="w-5 h-5" />
                </a>
              )}
            </div>
          </motion.div>
        </div>

        {/* Right Side: Message Form */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-7 glass-card p-6 md:p-8 rounded-3xl relative overflow-hidden w-full"
        >
          {/* Subtle BG glow */}
          <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <span className="h-6 w-1 bg-primary rounded-full" />
            Send a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
            {/* Name input */}
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-textSecondary uppercase tracking-widest mb-2 px-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 ${errors.name ? 'border-red-500/70 focus:ring-red-500 focus:border-red-500' : 'border-white/10 dark:border-white/5'
                  }`}
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="text-xs text-red-500 flex items-center gap-1 mt-1.5 px-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email input */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-textSecondary uppercase tracking-widest mb-2 px-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 ${errors.email ? 'border-red-500/70 focus:ring-red-500 focus:border-red-500' : 'border-white/10 dark:border-white/5'
                  }`}
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="text-xs text-red-500 flex items-center gap-1 mt-1.5 px-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Subject input */}
            <div>
              <label htmlFor="subject" className="block text-xs font-semibold text-textSecondary uppercase tracking-widest mb-2 px-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 ${errors.subject ? 'border-red-500/70 focus:ring-red-500 focus:border-red-500' : 'border-white/10 dark:border-white/5'
                  }`}
                placeholder="Collaboration Proposal"
              />
              {errors.subject && (
                <p className="text-xs text-red-500 flex items-center gap-1 mt-1.5 px-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.subject}
                </p>
              )}
            </div>

            {/* Message text area */}
            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-textSecondary uppercase tracking-widest mb-2 px-1">
                Message Content
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 resize-none ${errors.message ? 'border-red-500/70 focus:ring-red-500 focus:border-red-500' : 'border-white/10 dark:border-white/5'
                  }`}
                placeholder="Tell me about your project..."
              />
              {errors.message && (
                <p className="text-xs text-red-500 flex items-center gap-1 mt-1.5 px-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.message}
                </p>
              )}
            </div>

            {/* Success message box */}
            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span>Thank you! Your message was sent successfully. I will get back to you soon.</span>
              </motion.div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-5 rounded-xl font-bold text-white bg-gradient-to-r from-primary to-accent hover:shadow-glow-primary transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-2 glow-button disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};
export default Contact;
