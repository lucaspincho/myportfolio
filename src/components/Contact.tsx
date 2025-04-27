import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';

export default function Contact() {
  return (
    <section id="contact" className="mb-20 md:mb-28 p-4 rounded-lg">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Contato
      </motion.h2>
      
      <motion.div
        className="mt-8 space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="text-base">
          Estou sempre aberto para discutir novos projetos, oportunidades de trabalho ou parcerias.
          Seja para uma conversa rápida ou para discutir um projeto em detalhes, preencha o formulário
          abaixo ou entre em contato diretamente através do meu email: <a href="mailto:lucas@pincho.com.br" className="text-link-hover dark:text-dark-link-hover hover:underline">lucas@pincho.com.br</a>.
        </p>
        
        <form className="mt-8 space-y-5 max-w-xl">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Seu nome"
              className="w-full p-3 rounded-lg form-input border border-muted dark:border-dark-muted focus:ring-2 focus:ring-link-hover dark:focus:ring-dark-link-hover outline-none transition-colors duration-300"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="seu.email@exemplo.com"
              className="w-full p-3 rounded-lg form-input border border-muted dark:border-dark-muted focus:ring-2 focus:ring-link-hover dark:focus:ring-dark-link-hover outline-none transition-colors duration-300"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Mensagem</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Sua mensagem..."
              className="w-full p-3 rounded-lg form-input border border-muted dark:border-dark-muted focus:ring-2 focus:ring-link-hover dark:focus:ring-dark-link-hover outline-none transition-colors duration-300 resize-none"
              required
            ></textarea>
          </div>
          
          <motion.button
            type="submit"
            className="btn flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Enviar mensagem <FiSend className="w-4 h-4" />
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
} 