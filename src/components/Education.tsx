import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

type EducationItemProps = {
  institution: string;
  degree: string;
  period: string;
  description?: string;
  detailUrl?: string; // URL para a página de detalhes da educação
  delay: number;
};

function EducationItem({ institution, degree, period, description, detailUrl = "#", delay }: EducationItemProps) {
  return (
    <motion.div 
      className="mb-8 relative border-l-2 border-muted dark:border-dark-muted pl-6 pb-2 subsection-item rounded-lg p-4 cursor-pointer group"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onClick={() => { if (detailUrl) window.open(detailUrl, '_blank'); }}
    >
      <div className="absolute w-4 h-4 bg-link-hover dark:bg-dark-link-hover rounded-full -left-[9px] top-5"></div>
      <div className="relative z-10">
        <h3 className="text-xl font-medium flex items-center gap-2 group-hover:text-link-hover dark:group-hover:text-dark-link-hover">
          {institution}
          <FiExternalLink className="w-4 h-4 group-hover:text-link-hover dark:group-hover:text-dark-link-hover" />
        </h3>
        <p className="text-muted dark:text-dark-muted mb-2">
          {degree} | {period}
        </p>
        {description && <p>{description}</p>}
      </div>
      <span className="absolute inset-0 w-full h-full opacity-0"></span>
    </motion.div>
  );
}

export default function Education() {
  const educationItems = [
    {
      institution: "FIAP",
      degree: "Pós-Graduação em Inteligência Artificial",
      period: "Out. 2024 - Atual",
      description: "Implementação prática de IA/ML em projetos de software, integrando ferramentas como OpenAI API, TensorFlow e PyTorch. Desenvolvimento de chatbots com LLMs, sistemas de recomendação e pipelines de dados escaláveis. Integração de IA generativa em aplicações reais.",
      detailUrl: "https://postech.fiap.com.br/curso/ia-para-devs"
    },
    {
      institution: "Faculdade Senac",
      degree: "Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas",
      period: "Fev. 2022 - Ago. 2024",
      description: "Formação prática e imersiva, com foco em resolver problemas reais através da tecnologia. Durante o curso, participei de projetos que simulavam demandas do mercado, como desenvolvimento de sistemas completos, integração de APIs e colaboração em equipes multidisciplinares. Projeto Integrador: Desenvolvimento de um sistema completo em React Native e Node.JS para gestão de atividades relacionadas a recursos humanos.",
      detailUrl: "https://faculdadesenacpe.edu.br/graduacao/analise-e-desenvolvimento-de-sistemas"
    }
  ];

  return (
    <section id="education" className="mb-16 md:mb-24 p-4 rounded-lg">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Educação
      </motion.h2>
      
      <div className="mt-8">
        {educationItems.map((item, index) => (
          <EducationItem
            key={index}
            {...item}
            delay={0.2 * (index + 1)}
          />
        ))}
      </div>
    </section>
  );
} 