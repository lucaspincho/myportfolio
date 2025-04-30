import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

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
  const { t, i18n } = useTranslation();
  
  const experiencesData = useMemo(() => {
    const ptExperiences = [
      {
        company: "Refinaria Abreu e Lima",
        position: "Desenvolvedor de Aplicação Corporativa Interna",
        period: "Fev. 2024 - Jul. 2024",
        description: "Desenvolvimento de um aplicativo low-code para compartilhamento de caronas entre os colaboradores da Refinaria Abreu e Lima, otimizando a mobilidade interna.",
        url: "https://www.petrobras.com.br/quem-somos/refinaria-abreu-lima",
        detailUrl: "https://www.petrobras.com.br/quem-somos/refinaria-abreu-lima"
      },
      {
        company: "Hospital das Clínicas - UFPE",
        position: "Analista de Dados",
        period: "Ago. 2023 - Dez. 2023",
        description: "Colaboração na análise dos dados e no desenvolvimento de um dashboard personalizado para agilizar solicitações de pesquisas médicas, em parceria entre Faculdade Senac PE e o Hospital das Clínicas da UFPE.",
        url: "https://www.gov.br/ebserh/pt-br/hospitais-universitarios/regiao-nordeste/hc-ufpe",
        detailUrl: "https://www.gov.br/ebserh/pt-br/hospitais-universitarios/regiao-nordeste/hc-ufpe"
      },
      {
        company: "Companhia do Jaleco",
        position: "Desenvolvedor de E-commerce",
        period: "Jan. 2020 - Fev. 2021",
        description: "Desenvolvimento completo de uma plataforma de e-commerce utilizando WordPress, resultando em aumento significativo de vendas durante a pandemia.",
        url: "https://linktr.ee/ciadojaleco",
        detailUrl: "https://linktr.ee/ciadojaleco"
      }
    ];
    
    const enExperiences = [
      {
        company: "Abreu e Lima Refinery",
        position: "Internal Corporate Application Developer",
        period: "Feb. 2024 - Jul. 2024",
        description: "Development of a low-code application for corporate ride-sharing among Abreu e Lima Refinery employees, optimizing internal mobility.",
        url: "https://www.petrobras.com.br/quem-somos/refinaria-abreu-lima",
        detailUrl: "https://www.petrobras.com.br/quem-somos/refinaria-abreu-lima"
      },
      {
        company: "Clinical Hospital - UFPE",
        position: "Data Analyst",
        period: "Aug. 2023 - Dec. 2023",
        description: "Collaboration on data analysis and development of a custom dashboard to expedite and streamline medical research requests, in partnership between Senac PE College and UFPE Clinical Hospital.",
        url: "https://www.gov.br/ebserh/pt-br/hospitais-universitarios/regiao-nordeste/hc-ufpe",
        detailUrl: "https://www.gov.br/ebserh/pt-br/hospitais-universitarios/regiao-nordeste/hc-ufpe"
      },
      {
        company: "Companhia do Jaleco",
        position: "E-commerce Developer",
        period: "Jan. 2020 - Feb. 2021",
        description: "Leadership in complete development of an e-commerce platform using WordPress, resulting in significant sales increase during the pandemic.",
        url: "https://linktr.ee/ciadojaleco",
        detailUrl: "https://linktr.ee/ciadojaleco"
      }
    ];
    
    return i18n.language === 'pt' ? ptExperiences : enExperiences;
  }, [i18n.language]);

  return (
    <section id="experience" className="mb-16 md:mb-24 p-4 rounded-lg">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        {t('experience.title')}
      </motion.h2>
      
      <div className="space-y-12 mt-8">
        {experiencesData.map((exp, index) => (
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