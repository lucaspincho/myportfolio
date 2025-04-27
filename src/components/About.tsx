import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="mb-16 md:mb-24 p-4 pb-4 pt-4 md:pt-6 lg:pt-8 rounded-lg">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Sobre
      </motion.h2>
      
      <motion.div
        className="space-y-6 mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="text-base md:text-base lg:leading-relaxed">
        Sou um desenvolvedor dedicado a construir projetos que saem do papel e geram impacto real para pessoas e negócios. Me interesso especialmente pela aplicação inteligente de soluções técnicas, pela usabilidade e por como boas escolhas de interface contribuem para o produto final.
        </p>
        
        <p className="text-base md:text-base lg:leading-relaxed">
          Hoje, venho trilhando um caminho que mistura desenvolvimento de software e inteligência artificial. Já participei de iniciativas acadêmicas e freelancers envolvendo web, apps e soluções com IA aplicada, como o Futsallink — uma plataforma que conecta jogadores, clubes e empresários do futsal.
        </p>
        
        <p className="text-base md:text-base lg:leading-relaxed">
          Gosto de trabalhar com ferramentas modernas, pensar em boas experiências para o usuário e colaborar em equipes com objetivos claros. Valorizo projetos bem estruturados, que exigem organização, visão de produto e adaptação constante.
        </p>
        
        <p className="text-base md:text-base lg:leading-relaxed">
          Nos momentos livres, gosto de viajar, praticar esportes e aproveitar encontros com amigos e família. Estou sempre em busca de oportunidades que unam propósito, tecnologia e aprendizado contínuo.
        </p>
      </motion.div>
    </section>
  );
} 