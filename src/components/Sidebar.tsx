import { motion } from 'framer-motion';
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';
import classNames from 'classnames';

type SidebarProps = {
  isMobile: boolean;
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
};

export default function Sidebar({ isMobile, mobileMenuOpen, toggleMobileMenu }: SidebarProps) {
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
    <>
      <div className="mb-8 lg:pt-10">
        <motion.h1 
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Lucas Pincho
        </motion.h1>
        <motion.p 
          className="text-muted dark:text-dark-muted mt-2 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Desenvolvedor Full Stack
        </motion.p>
      </div>

      <nav>
        <ul className={linksContainerClass}>
          {navItems.map((item, index) => (
            <motion.li 
              key={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * (index + 3) }}
            >
              <a 
                href={item.href}
                className="relative text-lg group flex items-center"
                onClick={() => isMobile && toggleMobileMenu()}
              >
                <span className="w-6 h-px bg-muted dark:bg-dark-muted mr-2 transform group-hover:w-8 transition-all" />
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>

      <motion.div 
        className="mt-auto pt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="flex gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FiGithub className="w-5 h-5" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
            <FiTwitter className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FiLinkedin className="w-5 h-5" />
          </a>
          <a href="mailto:exemplo@email.com" target="_blank" rel="noreferrer" aria-label="Email">
            <FiMail className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
    </>
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

  return (
    <div className="relative w-[40%]">
      <aside className="fixed h-screen md:p-6 lg:pt-10 flex flex-col transition-all">
        <div className="max-w-xs md:pl-2">
          {sidebarContent}
        </div>
      </aside>
    </div>
  );
} 