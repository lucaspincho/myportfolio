import { useState, useEffect } from 'react';

type Theme = 'dark' | 'light';

export default function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    // Verificar se existe tema salvo no localStorage
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    
    // Verificar preferência do sistema
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Retornar tema salvo ou preferência do sistema (default para dark)
    return savedTheme || (prefersDark ? 'dark' : 'dark');
  });

  useEffect(() => {
    // Aplicar classe ao documento
    const root = window.document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Salvar no localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return { theme, toggleTheme };
} 