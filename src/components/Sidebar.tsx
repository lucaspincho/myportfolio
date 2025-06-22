import { motion } from 'framer-motion';
import { FiGithub, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi';
import classNames from 'classnames';
import { useActiveSection } from '../hooks/useActiveSection';
import { useTranslation } from 'react-i18next';

type SidebarProps = {
  isMobile: boolean;
  mobileMenuOpen?: boolean;
  toggleMobileMenu?: () => void;
};

export default function Sidebar({ isMobile }: SidebarProps) {
  const activeSection = useActiveSection();
  const { t } = useTranslation();

  const navItems = [
    { label: t('sidebar.navigation.about'), href: '#about' },
    { label: t('sidebar.navigation.experience'), href: '#experience' },
    { label: t('sidebar.navigation.projects'), href: '#projects' },
    { label: t('sidebar.navigation.education'), href: '#education' },
    { label: t('sidebar.navigation.contact'), href: '#contact' },
  ];

  const linksContainerClass = classNames({
    'flex gap-4': true,
    'flex-col mt-8': !isMobile,
    'flex-row flex-wrap justify-center mt-4': isMobile,
  });

  const sidebarContent = (
    <div className={`flex flex-col ${isMobile ? 'h-auto' : 'h-full'}`}>
      <div className={`${isMobile ? 'mb-4 text-center' : 'mb-6 lg:pt-10'}`}>
        <motion.h1 
          className={`${isMobile ? 'text-2xl' : 'text-3xl md:text-4xl lg:text-5xl'} font-bold tracking-tight`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {t('sidebar.title')}
        </motion.h1>
        <motion.p 
          className="text-muted dark:text-dark-muted mt-3 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {t('sidebar.subtitle')}
        </motion.p>
      </div>

      {/* Foto de perfil - apenas no desktop */}
      {!isMobile && (
        <motion.div
          className="flex justify-start mb-3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
        >
          <div className="w-32 h-32 lg:w-44 lg:h-44 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-4 border-heading dark:border-dark-heading hover:border-link-hover dark:hover:border-dark-link-hover">
            <img 
              src="/images/profile.JPEG" 
              alt="Lucas Pincho"
              className="w-full h-full object-cover scale-150"
            />
          </div>
        </motion.div>
      )}

      {!isMobile && (
        <nav className={`${isMobile ? 'flex justify-center' : ''}`}>
          <ul className={linksContainerClass}>
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1);
              
              return (
                <motion.li 
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * (index + 5) }}
                  className="w-fit"
                >
                  <a 
                    href={item.href}
                    className={classNames(
                      "relative text-lg group flex items-center",
                      isActive ? "font-medium" : ""
                    )}
                  >
                    <span 
                      className={classNames(
                        "h-px mr-2 transform transition-all",
                        isActive ? "w-8 bg-primary dark:bg-dark-primary" : "w-6 bg-muted dark:bg-dark-muted group-hover:w-8"
                      )}
                    />
                    <span className={isActive ? "text-primary dark:text-dark-primary" : "text-[#0a0e14] dark:text-dark-link group-hover:text-link-hover dark:group-hover:text-dark-link-hover"}>
                      {item.label}
                    </span>
                  </a>
                </motion.li>
              );
            })}
          </ul>
        </nav>
      )}

      <motion.div 
        className={`${isMobile ? 'mt-8 flex justify-center' : 'mt-9'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="flex gap-5">
          <a href="https://github.com/lucaspincho" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-[#0a0e14] dark:text-dark-link hover:text-link-hover dark:hover:text-dark-link-hover">
            <FiGithub className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/lucaspincho/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-[#0a0e14] dark:text-dark-link hover:text-link-hover dark:hover:text-dark-link-hover">
            <FiLinkedin className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/lucas_pincho/" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-[#0a0e14] dark:text-dark-link hover:text-link-hover dark:hover:text-dark-link-hover">
            <FiInstagram className="w-6 h-6" />
          </a>
          <a href="mailto:lucas@pincho.com.br" target="_blank" rel="noreferrer" aria-label="Email" className="text-[#0a0e14] dark:text-dark-link hover:text-link-hover dark:hover:text-dark-link-hover">
            <FiMail className="w-6 h-6" />
          </a>
        </div>
      </motion.div>
    </div>
  );

  return sidebarContent;
} 