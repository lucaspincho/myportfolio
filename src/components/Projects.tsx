import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string | null;
  liveUrl?: string | null;
  index: number;
  projectUrl?: string; // URL para o projeto completo
};

function ProjectCard({ title, description, tags, liveUrl, index, projectUrl = "#" }: ProjectCardProps) {
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
  const { t, i18n } = useTranslation();
  
  const projectsData = useMemo(() => {
    const ptProjects = [
      {
        title: "Futsallink: Aplicativo de Conexão Esportiva",
        description: "App para facilitar a conexão entre clubes e jogadores de futsal, com seletivas virtuais, filtros por característica, algoritmo de matching e notificações em tempo real.",
        tags: ["Flutter", "Firebase", "APIs REST"],
        githubUrl: "https://github.com/lucaspincho/Futsallink",
        liveUrl: "https://github.com/lucaspincho/Futsallink",
        projectUrl: "https://github.com/lucaspincho/Futsallink"
      },
      {
        title: "YourDP: Sistema de Gestão de RH",
        description: "Sistema com um app multiplataforma para gestão de ponto, férias e folha de pagamento ligado em um Dashboard de analytics com integração em tempo real a APIs e cloud.",
        tags: ["React Native", "Node.js", "Cloudinary", "Vercel"],
        githubUrl: "https://github.com/Caliel-Albuquerque/ReactNative-YourDP",
        liveUrl: "https://github.com/Caliel-Albuquerque/ReactNative-YourDP",
        projectUrl: "https://github.com/Caliel-Albuquerque/ReactNative-YourDP"
      },
      {
        title: "Modelo Preditivo de Custos de Plano de Saúde",
        description: "Modelo de machine learning para previsão de custos de planos de saúde com 89% de acurácia. Análise de viés e documentação técnica para o uso ético da Inteligência Artificial.",
        tags: ["Python", "Scikit-Learn", "Pandas", "Colab"],
        githubUrl: "https://colab.research.google.com/drive/1qr0fzQpBSzOY9Ut6O5i2fUYFnVTXNHBM?usp=sharing",
        liveUrl: "https://colab.research.google.com/drive/1qr0fzQpBSzOY9Ut6O5i2fUYFnVTXNHBM?usp=sharing",
        projectUrl: "https://colab.research.google.com/drive/1qr0fzQpBSzOY9Ut6O5i2fUYFnVTXNHBM?usp=sharing"
      },
      {
        title: "DoubleScout: Plataforma de Busca Avançada de Jogadores",
        description: "Ferramenta web interativa para encontrar jogadores de futebol que atendem a combinações específicas de critérios. Implementação de sistema dinâmico de busca cruzada com filtros temporais e integração com múltiplas APIs esportivas.",
        tags: ["React", "Node.js", "PostgreSQL", "TailwindCSS", "APIs esportivas"],
        githubUrl: null,
        liveUrl: null,
        projectUrl: "#"
      }
    ];
    
    const enProjects = [
      {
        title: "Futsallink: Sports Connection App",
        description: "App to facilitate connection between futsal clubs and players, with virtual tryouts and recruitment, characteristic filters, matching algorithm, and real-time notifications.",
        tags: ["Flutter", "Firebase", "REST APIs"],
        githubUrl: "https://github.com/lucaspincho/Futsallink",
        liveUrl: "https://github.com/lucaspincho/Futsallink",
        projectUrl: "https://github.com/lucaspincho/Futsallink"
      },
      {
        title: "YourDP: HR Management System",
        description: "System with a multiplatform app for time attendance and tracking, vacation, and payroll management connected to an analytics dashboard with real-time API and cloud integration.",
        tags: ["React Native", "Node.js", "Cloudinary", "Vercel"],
        githubUrl: "https://github.com/Caliel-Albuquerque/ReactNative-YourDP",
        liveUrl: "https://github.com/Caliel-Albuquerque/ReactNative-YourDP",
        projectUrl: "https://github.com/Caliel-Albuquerque/ReactNative-YourDP"
      },
      {
        title: "Health Insurance Cost Predictive Model",
        description: "Machine learning model for predicting health insurance costs with 89% accuracy. Bias analysis and technical documentation for ethical use of Artificial Intelligence.",
        tags: ["Python", "Scikit-Learn", "Pandas", "Colab"],
        githubUrl: "https://colab.research.google.com/drive/1qr0fzQpBSzOY9Ut6O5i2fUYFnVTXNHBM?usp=sharing",
        liveUrl: "https://colab.research.google.com/drive/1qr0fzQpBSzOY9Ut6O5i2fUYFnVTXNHBM?usp=sharing",
        projectUrl: "https://colab.research.google.com/drive/1qr0fzQpBSzOY9Ut6O5i2fUYFnVTXNHBM?usp=sharing"
      },
      {
        title: "DoubleScout: Advanced Player Search Platform",
        description: "Interactive web tool for finding soccer players meeting specific criteria combinations. Implementation of dynamic cross-search system with temporal filters and integration with multiple sports APIs.",
        tags: ["React", "Node.js", "PostgreSQL", "TailwindCSS", "Sports APIs"],
        githubUrl: null,
        liveUrl: null,
        projectUrl: "#"
      }
    ];
    
    return i18n.language === 'pt' ? ptProjects : enProjects;
  }, [i18n.language]);

  return (
    <section id="projects" className="mb-24 md:mb-32 p-4 rounded-lg">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {t('projects.title')}
      </motion.h2>
      
      <div className="grid grid-cols-1 gap-8 mt-8 max-w-4xl mx-auto">
        {projectsData.map((project, index) => (
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