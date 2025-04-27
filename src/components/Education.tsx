import { motion } from 'framer-motion';

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
      className="mb-8 relative border-l-2 border-muted dark:border-dark-muted pl-6 pb-2 subsection-item rounded-lg p-4 cursor-pointer hover:bg-section-hover/30 dark:hover:bg-dark-section-hover/40 group"
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
      institution: "Universidade Federal de Tecnologia",
      degree: "Bacharelado em Ciência da Computação",
      period: "2014 - 2018",
      description: "Formação completa em ciência da computação com foco em desenvolvimento de software e inteligência artificial.",
      detailUrl: "#"
    },
    {
      institution: "Instituto de Tecnologia Avançada",
      degree: "Mestrado em Engenharia de Software",
      period: "2019 - 2021",
      description: "Pesquisa em arquiteturas de software escaláveis e metodologias ágeis de desenvolvimento.",
      detailUrl: "#"
    },
    {
      institution: "Bootcamp de Desenvolvimento Web",
      degree: "Certificação Full Stack",
      period: "2018",
      description: "Programa intensivo focado em tecnologias web modernas e boas práticas de desenvolvimento.",
      detailUrl: "#"
    }
  ];

  return (
    <section id="education" className="mb-24 md:mb-32 p-4 rounded-lg">
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