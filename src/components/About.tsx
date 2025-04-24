import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="mb-24 md:mb-32 p-4 pb-4 pt-0 rounded-lg">
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
          Olá! Sou Lucas Pincho, um desenvolvedor Full Stack apaixonado por criar aplicações web modernas e acessíveis. 
          Minha jornada na programação começou há mais de 5 anos, e desde então venho me especializando em tecnologias 
          front-end e back-end que permitem criar experiências digitais de qualidade.
        </p>
        
        <p className="text-base md:text-base lg:leading-relaxed">
          Atualmente, foco em React, TypeScript e Node.js como minha stack principal, mas estou sempre aberto a explorar 
          novas tecnologias que possam melhorar a experiência do usuário e otimizar o processo de desenvolvimento.
        </p>
        
        <p className="text-base md:text-base lg:leading-relaxed">
          Além da programação, tenho interesse em design de UI/UX, acessibilidade web e arquitetura de software. 
          Acredito que um bom produto digital não é apenas aquele que funciona bem, mas também aquele que é inclusivo, 
          bonito e fácil de usar.
        </p>
      </motion.div>
    </section>
  );
} 