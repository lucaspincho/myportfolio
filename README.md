# 🚀 Lucas Pincho's Portfolio

A modern and responsive personal portfolio developed with the latest React ecosystem technologies.

*[Versão em Português](README.pt.md)*

![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.3.1-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.3-38B2AC?logo=tailwindcss)

## ✨ Features

- **Responsive Design**: Optimized experience for desktop and mobile devices
- **Light/Dark Mode**: Theme toggle with localStorage persistence
- **Custom Cursor Effect**: Glow effect that follows the cursor
- **Smooth Animations**: Component transitions and animations with Framer Motion
- **Contact Form**: EmailJS integration for sending messages
- **Intuitive Navigation**: Smooth scrolling between sections
- **Split Layout**: Fixed sidebar and scrollable content for better experience

## 💻 Technologies

- **Core**:
  - React 19
  - TypeScript
  - Vite 6

- **Styling**:
  - Tailwind CSS
  - classnames (for conditional class composition)

- **Animations and UI**:
  - Framer Motion (animations and transitions)
  - React Icons (icon library)

- **Functionality**:
  - EmailJS (contact form integration)

## 🔧 Installation and Usage

```bash
# Clone the repository
git clone https://github.com/lucaspincho/myportfolio.git

# Navigate to the directory
cd myportfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📦 Build and Deploy

```bash
# Generate production build
npm run build

# Preview build locally
npm run preview
```

## 🌐 Deployment Options

### Vercel (Recommended)
1. Import your GitHub project to Vercel
2. Configure custom domain in: Settings > Domains
3. Configure DNS records as instructed (usually a CNAME record)

### Netlify
1. Import your repository to Netlify
2. Configure domain in: Site Settings > Domain > Custom Domains
3. Configure DNS records following the instructions

### GitHub Pages with Custom Domain
1. Configure base URL in vite.config.ts file:
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/', // Use '/myportfolio/' if not using a custom domain
})
```
2. Create a CNAME file in the public folder with your domain
3. Configure DNS records as instructed by GitHub

## 📁 Project Structure

```
/
├── public/             # Static files
├── src/                # Source code
│   ├── assets/         # Images and resources
│   ├── components/     # React components
│   │   ├── About.tsx       # About section
│   │   ├── Contact.tsx     # Contact form
│   │   ├── CursorGlow.tsx  # Custom cursor effect
│   │   ├── Education.tsx   # Education background
│   │   ├── Experience.tsx  # Professional experience
│   │   ├── MainContent.tsx # Main content
│   │   ├── Projects.tsx    # Featured projects
│   │   ├── ResumeButton.tsx # Resume button
│   │   ├── Sidebar.tsx     # Sidebar
│   │   └── ThemeToggle.tsx # Theme switcher
│   ├── hooks/          # Custom hooks
│   ├── App.tsx         # Root component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles and Tailwind
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🤝 Contributions

Contributions are welcome! Feel free to open an issue or submit a pull request.

## 📄 License

This project is licensed under the [MIT License](LICENSE).
