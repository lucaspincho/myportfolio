import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  index: number;
  projectUrl?: string; // URL para o projeto completo
};

function ProjectCard({ title, description, tags, githubUrl, liveUrl, index, projectUrl = "#" }: ProjectCardProps) {
  return (
    <motion.div 
      className="subsection-item hover:-translate-y-2 cursor-pointer relative p-5 lg:p-6 shadow-md hover:shadow-lg bg-section-hover/30 dark:bg-dark-section-hover/40 rounded-lg border border-section-hover dark:border-dark-section-hover group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.1 * index }}
      onClick={() => { if (projectUrl) window.open(projectUrl, '_blank'); }}
    >
      <div className="relative z-10">
        <h3 className="text-xl font-medium mb-2 group-hover:text-link-hover dark:group-hover:text-dark-link-hover">{title}</h3>
        <p className="mb-4 text-foreground/80 dark:text-dark-foreground/90">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs font-medium px-2 py-1 rounded-full bg-link-hover/15 dark:bg-dark-link-hover/30 text-link-hover dark:text-dark-link-hover"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3 mt-auto">
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noreferrer" 
              aria-label="GitHub repository" 
              className="hover:text-link-hover dark:hover:text-dark-link-hover relative z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <FiGithub className="w-5 h-5" />
            </a>
          )}
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noreferrer" 
              aria-label="Live project" 
              className="hover:text-link-hover dark:hover:text-dark-link-hover relative z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <FiExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
      
      <span className="absolute inset-0 w-full h-full opacity-0"></span>
    </motion.div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Uma plataforma de comércio eletrônico completa com sistema de pagamento, autenticação e painel administrativo.",
      tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      projectUrl: "#"
    },
    {
      title: "Task Manager",
      description: "Aplicativo de gerenciamento de tarefas com recursos de arrastar e soltar, compartilhamento de equipes e notificações.",
      tags: ["TypeScript", "React", "Firebase", "Styled Components"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      projectUrl: "#"
    },
    {
      title: "Portfolio Website",
      description: "Site de portfólio responsivo e animado para apresentar projetos e habilidades de desenvolvimento web.",
      tags: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      projectUrl: "#"
    },
    {
      title: "Weather App",
      description: "Aplicativo de previsão do tempo que exibe informações detalhadas sobre condições climáticas atuais e futuras.",
      tags: ["React", "OpenWeather API", "CSS Modules"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      projectUrl: "#"
    },
  ];

  return (
    <section id="projects" className="mb-24 md:mb-32 p-4 rounded-lg">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Projetos
      </motion.h2>
      
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            {...project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
} 