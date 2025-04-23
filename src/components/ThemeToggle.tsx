import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

type ThemeToggleProps = {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
};

export default function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-5 right-5 md:top-8 md:right-8 z-50 p-2 rounded-full bg-transparent hover:bg-section-hover dark:hover:bg-dark-section-hover shadow-md transition-colors duration-300"
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      aria-label={theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
    >
      {theme === 'dark' ? (
        <FiSun className="text-dark-link-hover w-5 h-5" />
      ) : (
        <FiMoon className="text-link-hover w-5 h-5" />
      )}
    </motion.button>
  );
} 