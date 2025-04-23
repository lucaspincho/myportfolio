import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  index: number;
};

function ProjectCard({ title, description, tags, githubUrl, liveUrl, index }: ProjectCardProps) {
  return (
    <motion.div 
      className="card hover:-translate-y-2 cursor-pointer relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.1 * index }}
    >
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="mb-4 text-foreground/80 dark:text-dark-foreground/80">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span 
            key={tag} 
            className="text-xs font-medium px-2 py-1 rounded-full bg-link-hover/10 dark:bg-dark-link-hover/20 text-link-hover dark:text-dark-link-hover"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex gap-3 mt-auto">
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub repository" className="hover:text-link-hover dark:hover:text-dark-link-hover">
            <FiGithub className="w-5 h-5" />
          </a>
        )}
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noreferrer" aria-label="Live project" className="hover:text-link-hover dark:hover:text-dark-link-hover">
            <FiExternalLink className="w-5 h-5" />
          </a>
        )}
      </div>
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
    },
    {
      title: "Task Manager",
      description: "Aplicativo de gerenciamento de tarefas com recursos de arrastar e soltar, compartilhamento de equipes e notificações.",
      tags: ["TypeScript", "React", "Firebase", "Styled Components"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      title: "Portfolio Website",
      description: "Site de portfólio responsivo e animado para apresentar projetos e habilidades de desenvolvimento web.",
      tags: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      title: "Weather App",
      description: "Aplicativo de previsão do tempo que exibe informações detalhadas sobre condições climáticas atuais e futuras.",
      tags: ["React", "OpenWeather API", "CSS Modules"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
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