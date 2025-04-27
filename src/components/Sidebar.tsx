import { motion } from 'framer-motion';
import { FiGithub, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi';
import classNames from 'classnames';
import { useActiveSection } from '../hooks/useActiveSection';

type SidebarProps = {
  isMobile: boolean;
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
};

export default function Sidebar({ isMobile, mobileMenuOpen, toggleMobileMenu }: SidebarProps) {
  const activeSection = useActiveSection();

  const navItems = [
    { label: 'Sobre', href: '#about' },
    { label: 'Experiência', href: '#experience' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Educação', href: '#education' },
    { label: 'Contato', href: '#contact' },
  ];

  const sidebarVariants = {
    hidden: { x: '-100%' },
    visible: { x: 0 },
  };

  const linksContainerClass = classNames({
    'flex flex-col gap-6': true,
    'mt-8': !isMobile,
    'mt-16': isMobile,
  });

  const sidebarContent = (
    <div className="flex flex-col h-full">
      <div className="mb-10 lg:pt-10">
        <motion.h1 
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Lucas Pincho
        </motion.h1>
        <motion.p 
          className="text-muted dark:text-dark-muted mt-3 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Dev + IA + Ciência de Dados
        </motion.p>
      </div>

      <nav>
        <ul className={linksContainerClass}>
          {navItems.map((item, index) => {
            const isActive = activeSection === item.href.substring(1);
            
            return (
              <motion.li 
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * (index + 3) }}
                className="w-fit"
              >
                <a 
                  href={item.href}
                  className={classNames(
                    "relative text-lg group flex items-center",
                    isActive ? "font-medium" : ""
                  )}
                  onClick={() => isMobile && toggleMobileMenu()}
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

      <motion.div 
        className="mt-24"
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

  // Mobile hamburger menu
  const hamburgerButton = isMobile && (
    <button 
      className="fixed top-4 left-4 z-50 p-2" 
      onClick={toggleMobileMenu}
      aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
    >
      <div className="w-6 flex flex-col gap-1.5">
        <motion.span 
          className="w-full h-0.5 bg-foreground dark:bg-dark-foreground block"
          animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
        />
        <motion.span 
          className="w-full h-0.5 bg-foreground dark:bg-dark-foreground block"
          animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
        />
        <motion.span 
          className="w-full h-0.5 bg-foreground dark:bg-dark-foreground block"
          animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
        />
      </div>
    </button>
  );

  if (isMobile) {
    return (
      <>
        {hamburgerButton}
        <motion.aside
          className="fixed top-0 left-0 w-full h-screen bg-background dark:bg-dark-background z-40 p-10 flex flex-col"
          initial="hidden"
          animate={mobileMenuOpen ? "visible" : "hidden"}
          variants={sidebarVariants}
          transition={{ type: 'tween', duration: 0.3 }}
        >
          {sidebarContent}
        </motion.aside>
      </>
    );
  }

  return sidebarContent;
} 