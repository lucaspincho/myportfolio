# 🚀 Portfólio de Lucas Pincho

Um portfólio pessoal moderno e responsivo desenvolvido com as tecnologias mais recentes do ecossistema React.

*[English Version](README.md)*

![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.3.1-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.3-38B2AC?logo=tailwindcss)

## ✨ Funcionalidades

- **Design Responsivo**: Experiência otimizada para desktop e dispositivos móveis
- **Modo Claro/Escuro**: Alternância entre temas com persistência via localStorage
- **Efeito de Cursor Personalizado**: Efeito de brilho que segue o cursor
- **Animações Suaves**: Transições e animações de componentes com Framer Motion
- **Formulário de Contato**: Integração com EmailJS para envio de mensagens
- **Navegação Intuitiva**: Rolagem suave entre seções
- **Layout Dividido**: Sidebar fixa e conteúdo rolável para melhor experiência

## 💻 Tecnologias

- **Core**:
  - React 19
  - TypeScript
  - Vite 6

- **Estilização**:
  - Tailwind CSS
  - classnames (para composição condicional de classes)

- **Animações e UI**:
  - Framer Motion (animações e transições)
  - React Icons (biblioteca de ícones)

- **Funcionalidades**:
  - EmailJS (integração de formulário de contato)

## 🔧 Instalação e Uso

```bash
# Clonar o repositório
git clone https://github.com/lucaspincho/myportfolio.git

# Entrar no diretório
cd myportfolio

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

## 📦 Build e Deploy

```bash
# Gerar build de produção
npm run build

# Visualizar build localmente
npm run preview
```

## 🌐 Opções de Deploy

### Vercel (Recomendado)
1. Importe o projeto do GitHub para o Vercel
2. Configure o domínio personalizado em: Configurações > Domínios
3. Configure os registros DNS conforme instruções (geralmente um registro CNAME)

### Netlify
1. Importe seu repositório para o Netlify
2. Configure o domínio em: Configurações do Site > Domínio > Domínios Personalizados
3. Configure os registros DNS seguindo as instruções

### GitHub Pages com Domínio Personalizado
1. Configure a base URL no arquivo vite.config.ts:
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/', // Use '/myportfolio/' se não estiver usando domínio personalizado
})
```
2. Crie um arquivo CNAME na pasta public com seu domínio
3. Configure os registros DNS conforme instruções do GitHub

## 📁 Estrutura do Projeto

```
/
├── public/             # Arquivos estáticos
├── src/                # Código fonte
│   ├── assets/         # Imagens e recursos
│   ├── components/     # Componentes React
│   │   ├── About.tsx       # Seção Sobre
│   │   ├── Contact.tsx     # Formulário de contato
│   │   ├── CursorGlow.tsx  # Efeito de cursor personalizado
│   │   ├── Education.tsx   # Formação acadêmica
│   │   ├── Experience.tsx  # Experiência profissional
│   │   ├── MainContent.tsx # Conteúdo principal
│   │   ├── Projects.tsx    # Projetos destacados
│   │   ├── ResumeButton.tsx # Botão para currículo
│   │   ├── Sidebar.tsx     # Barra lateral
│   │   └── ThemeToggle.tsx # Alternador de tema
│   ├── hooks/          # Hooks personalizados
│   ├── App.tsx         # Componente raiz
│   ├── main.tsx        # Ponto de entrada
│   └── index.css       # Estilos globais e Tailwind
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## 📄 Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE). 