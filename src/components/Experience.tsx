import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

type ExperienceItemProps = {
  company: string;
  position: string;
  period: string;
  description: string;
  url?: string;
  detailUrl?: string;
  delay: number;
};

function ExperienceItem({ company, position, period, description, url, detailUrl = "#", delay }: ExperienceItemProps) {
  return (
    <motion.div 
      className="mb-10 relative border-l-2 border-muted dark:border-dark-muted pl-6 pb-2 subsection-item rounded-lg p-4 cursor-pointer group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
      onClick={() => { if (detailUrl) window.open(detailUrl, '_blank'); }}
    >
      <div className="absolute w-4 h-4 bg-link-hover dark:bg-dark-link-hover rounded-full -left-[9px] top-5"></div>
      <div className="relative z-10">
        <h3 className="text-xl font-medium flex items-center gap-2 group-hover:text-link-hover dark:group-hover:text-dark-link-hover">
          {position}
          {url && (
            <FiExternalLink className="w-4 h-4 group-hover:text-link-hover dark:group-hover:text-dark-link-hover" />
          )}
        </h3>
        <p className="text-muted dark:text-dark-muted mb-2">
          {company} | {period}
        </p>
        <p>{description}</p>
      </div>
      <span className="absolute inset-0 w-full h-full opacity-0"></span>
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
      detailUrl: "#"
    },
    {
      company: "Web Innovate",
      position: "Desenvolvedor Front-end",
      period: "2018 - 2021",
      description: "Criação de interfaces responsivas e interativas para aplicações web de grande escala. Implementação de testes automatizados e CI/CD.",
      url: "https://example.com",
      detailUrl: "#"
    },
    {
      company: "Digital Agency",
      position: "Desenvolvedor Web",
      period: "2016 - 2018",
      description: "Desenvolvimento de sites responsivos e otimizados para SEO. Trabalho em equipe multidisciplinar com designers e especialistas em marketing.",
      url: "https://example.com",
      detailUrl: "#"
    },
  ];

  return (
    <section id="experience" className="mb-16 md:mb-24 p-4 rounded-lg">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        Experiência
      </motion.h2>
      
      <div className="space-y-12 mt-8">
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            {...exp}
            delay={0.1 * index}
          />
        ))}
      </div>
    </section>
  );
} 