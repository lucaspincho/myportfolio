import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Para configurar o EmailJS:
      // 1. Crie uma conta em https://www.emailjs.com/
      // 2. Adicione um serviço de email (Gmail, Outlook, etc)
      // 3. Crie um template com variáveis: {{name}}, {{email}}, {{message}}, {{to_email}}
      // 4. Substitua os valores abaixo com suas credenciais do EmailJS
      await emailjs.sendForm(
        'service_ooozess', // Ex: 'service_abc123'
        'template_o8gkhv3', // Ex: 'template_xyz789'
        formRef.current,
        'Qq59J4Iv9jyQ-1jeB' // Ex: 'FjDhG7s-JhGsA8bCW'
      );
      
      setSubmitStatus({
        success: true,
        message: 'Mensagem enviada com sucesso! Entrarei em contato em breve.'
      });
      
      // Limpar o formulário
      formRef.current.reset();
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      setSubmitStatus({
        success: false,
        message: 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente ou entre em contato diretamente por e-mail.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
        
        {submitStatus && (
          <div className={`p-4 rounded-lg text-sm ${submitStatus.success ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'}`}>
            {submitStatus.message}
          </div>
        )}
        
        <form ref={formRef} onSubmit={handleSubmit} className="mt-8 space-y-5 max-w-xl">
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
          
          {/* Campo oculto para o e-mail do destinatário */}
          <input type="hidden" name="to_email" value="lucas@pincho.com.br" />
          
          <motion.button
            type="submit"
            className="btn flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar mensagem'} <FiSend className="w-4 h-4" />
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
} 