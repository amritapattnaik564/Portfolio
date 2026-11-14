import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  isLoading: boolean;
}

export const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-100 bg-[#050816] flex flex-col items-center justify-center"
        >
          <div className="text-center relative">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/20 rounded-full blur-[50px]" />

            {/* Glowing Brand Name */}
            <motion.h1 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-3xl sm:text-4xl font-extrabold tracking-widest uppercase mb-6 relative z-10"
            >
              <span className="gradient-heading">Amrita Pattnaik</span>
            </motion.h1>

            {/* Spinner Progress bar indicator */}
            <div className="w-48 h-1 bg-slate-900 rounded-full overflow-hidden border border-white/5 relative z-10 mx-auto">
              <motion.div 
                initial={{ left: '-100%' }}
                animate={{ left: '100%' }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5, 
                  ease: "easeInOut" 
                }}
                className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-primary via-secondary to-accent"
              />
            </div>
            
            <p className="text-[10px] text-textSecondary uppercase tracking-widest font-semibold mt-3 font-mono">
              Loading Portfolio...
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
