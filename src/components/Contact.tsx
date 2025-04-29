import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation, Trans } from 'react-i18next';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const { t } = useTranslation();

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
        message: t('contact.success')
      });
      
      // Limpar o formulário
      formRef.current.reset();
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      setSubmitStatus({
        success: false,
        message: t('contact.error')
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
        {t('contact.title')}
      </motion.h2>
      
      <motion.div
        className="mt-8 space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="text-base">
          <Trans 
            i18nKey="contact.description"
            components={{
              email: <a href="mailto:lucas@pincho.com.br" className="text-link-hover dark:text-dark-link-hover hover:underline" />
            }}
          />
        </p>
        
        {submitStatus && (
          <div className={`p-4 rounded-lg text-sm ${submitStatus.success ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'}`}>
            {submitStatus.message}
          </div>
        )}
        
        <form ref={formRef} onSubmit={handleSubmit} className="mt-8 space-y-5 max-w-xl">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">{t('contact.form.name')}</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={t('contact.form.namePlaceholder')}
              className="w-full p-3 rounded-lg form-input border border-muted dark:border-dark-muted focus:ring-2 focus:ring-link-hover dark:focus:ring-dark-link-hover outline-none transition-colors duration-300"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">{t('contact.form.email')}</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={t('contact.form.emailPlaceholder')}
              className="w-full p-3 rounded-lg form-input border border-muted dark:border-dark-muted focus:ring-2 focus:ring-link-hover dark:focus:ring-dark-link-hover outline-none transition-colors duration-300"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">{t('contact.form.message')}</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder={t('contact.form.messagePlaceholder')}
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
            {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')} <FiSend className="w-4 h-4" />
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
} 