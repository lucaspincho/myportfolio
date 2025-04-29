import { motion } from 'framer-motion';
import { FiFileText } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

export default function ResumeButton() {
  const { t } = useTranslation();
  
  const openResume = () => {
    window.open('/CV.pdf', '_blank');
  };

  return (
    <motion.button
      onClick={openResume}
      className="fixed top-5 right-16 md:top-8 md:right-20 z-50 p-2 rounded-full bg-transparent hover:bg-section-hover dark:hover:bg-dark-section-hover shadow-md transition-colors duration-300"
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      aria-label={t('common.downloadResume')}
      title={t('common.downloadResume')}
    >
      <FiFileText className="text-link-hover dark:text-dark-link-hover w-5 h-5" />
    </motion.button>
  );
} 