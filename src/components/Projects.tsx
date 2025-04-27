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
      className="subsection-item cursor-pointer relative p-5 lg:p-6 shadow-md border border-section-hover dark:border-dark-section-hover rounded-lg group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.1 * index }}
      onClick={() => { if (projectUrl) window.open(projectUrl, '_blank'); }}
    >
      <div className="relative z-10">
        <h3 className="text-xl font-medium mb-2 group-hover:text-link-hover dark:group-hover:text-dark-link-hover flex items-center gap-2">
          {title}
          {liveUrl && (
            <FiExternalLink className="w-4 h-4 group-hover:text-link-hover dark:group-hover:text-dark-link-hover" />
          )}
        </h3>
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
      </div>
      
      <span className="absolute inset-0 w-full h-full opacity-0"></span>
    </motion.div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "Futsallink: Aplicativo de Conexão Esportiva",
      description: "Desenvolvimento front-end de um app para conectar clubes e jogadores de futsal, com algoritmo de matching e notificações em tempo real.",
      tags: ["Flutter", "Firebase", "APIs REST"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      projectUrl: "#"
    },
    {
      title: "YourDP: Sistema de Gestão de RH",
      description: "Criação de um app multiplataforma para gestão de ponto, férias e folha de pagamento. Dashboard de analytics com integração em tempo real a APIs e cloud.",
      tags: ["React Native", "Node.js", "Cloudinary", "Vercel"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      projectUrl: "#"
    },
    {
      title: "Modelo Preditivo de Custos de Plano de Saúde",
      description: "Modelo de machine learning para previsão de custos de planos de saúde com 89% de acurácia. Análise de viés e documentação técnica para uso ético de IA.",
      tags: ["Python", "Scikit-Learn", "Pandas", "Colab"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      projectUrl: "#"
    },
    {
      title: "DoubleScout: Plataforma de Busca Avançada de Jogadores",
      description: "Desenvolvimento de uma ferramenta web interativa para encontrar jogadores que atendem a combinações específicas de critérios. Implementação de sistema dinâmico de busca cruzada com filtros temporais e integração com múltiplas APIs esportivas.",
      tags: ["React", "Node.js", "PostgreSQL", "TailwindCSS", "APIs esportivas"],
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