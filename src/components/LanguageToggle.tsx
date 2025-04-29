import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function LanguageToggle() {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="fixed z-20 top-4 left-4 md:left-6 p-2 rounded-full bg-white/10 backdrop-blur-md border border-[#e5e7eb] dark:border-[#2e2e2e] flex items-center justify-center shadow-sm"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={t('common.language')}
    >
      <span className="font-medium text-sm">
        {i18n.language === 'pt' ? 'EN' : 'PT'}
      </span>
    </motion.button>
  );
} 