import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

type ExperienceItemProps = {
  company: string;
  position: string;
  period: string;
  description: string;
  url?: string;
  delay: number;
};

function ExperienceItem({ company, position, period, description, url, delay }: ExperienceItemProps) {
  return (
    <motion.div 
      className="mb-10 relative border-l-2 border-light-detail dark:border-dark-detail pl-6 pb-2"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="absolute w-4 h-4 bg-light-highlight dark:bg-dark-highlight rounded-full -left-[9px] top-1"></div>
      <h3 className="text-xl font-medium flex items-center gap-2">
        {position}
        {url && (
          <a href={url} target="_blank" rel="noreferrer" className="inline-flex items-center">
            <FiExternalLink className="w-4 h-4" />
          </a>
        )}
      </h3>
      <p className="text-light-detail dark:text-dark-detail mb-2">
        {company} | {period}
      </p>
      <p>{description}</p>
    </motion.div>
  );
}

export default function Experience() {
  const experiences = [
    {
      company: "Tech Solutions",
      position: "Desenvolvedor Full Stack Senior",
      period: "2021 - Presente",
      description: "Desenvolvimento de aplicações web usando React, TypeScript e Node.js. Liderança técnica de projetos e mentoria para desenvolvedores júnior.",
      url: "https://example.com",
    },
    {
      company: "Web Innovate",
      position: "Desenvolvedor Front-end",
      period: "2018 - 2021",
      description: "Criação de interfaces responsivas e interativas para aplicações web de grande escala. Implementação de testes automatizados e CI/CD.",
      url: "https://example.com",
    },
    {
      company: "Digital Agency",
      position: "Desenvolvedor Web",
      period: "2016 - 2018",
      description: "Desenvolvimento de sites responsivos e otimizados para SEO. Trabalho em equipe multidisciplinar com designers e especialistas em marketing.",
      url: "https://example.com",
    },
  ];

  return (
    <section id="experience" className="mb-24 md:mb-32 p-4 rounded-lg">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Experiência
      </motion.h2>
      
      <motion.div
        className="space-y-12 mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            {...exp}
            delay={0.2 * (index + 1)}
          />
        ))}
      </motion.div>
    </section>
  );
} 