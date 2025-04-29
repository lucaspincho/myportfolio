import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="mb-16 md:mb-24 p-4 pb-4 pt-4 md:pt-6 lg:pt-8 rounded-lg">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {t('about.title')}
      </motion.h2>
      
      <motion.div
        className="space-y-6 mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="text-base md:text-base lg:leading-relaxed">
          <Trans 
            i18nKey="about.paragraph1"
            components={{
              bold: <span className="font-bold hover:text-link-hover dark:hover:text-dark-link-hover transition-colors duration-300" />
            }}
          />
        </p>
        
        <p className="text-base md:text-base lg:leading-relaxed">
          <Trans 
            i18nKey="about.paragraph2"
            components={{
              bold: <span className="font-bold hover:text-link-hover dark:hover:text-dark-link-hover transition-colors duration-300" />,
              futsallink: <a href="https://github.com/lucaspincho/Futsallink" target="_blank" rel="noopener noreferrer" className="font-bold text-[#38BDF8] dark:text-[#38BDF8] hover:underline">Futsallink</a>
            }}
          />
        </p>
        
        <p className="text-base md:text-base lg:leading-relaxed">
          <Trans 
            i18nKey="about.paragraph3"
            components={{
              bold: <span className="font-bold hover:text-link-hover dark:hover:text-dark-link-hover transition-colors duration-300" />
            }}
          />
        </p>
        
        <p className="text-base md:text-base lg:leading-relaxed">
          <Trans 
            i18nKey="about.paragraph4"
            components={{
              bold: <span className="font-bold hover:text-link-hover dark:hover:text-dark-link-hover transition-colors duration-300" />
            }}
          />
        </p>
      </motion.div>
    </section>
  );
} 