import { useState, useEffect } from 'react'
import useTheme from './hooks/useTheme'
import ThemeToggle from './components/ThemeToggle'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'

function App() {
  const { theme, toggleTheme } = useTheme()
  const [isMobile, setIsMobile] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Verificar inicialmente
    checkMobile()

    // Adicionar listener para redimensionamento
    window.addEventListener('resize', checkMobile)

    // Limpar listener ao desmontar
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className="flex flex-col min-h-screen antialiased overflow-hidden">
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      
      <div className="max-w-screen-xl mx-auto w-full transition-all px-4 md:px-6 lg:px-6 xl:px-8 lg:pt-4">
        <div className="flex flex-col md:flex-row relative">
          <Sidebar 
            isMobile={isMobile} 
            mobileMenuOpen={mobileMenuOpen} 
            toggleMobileMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
          
          <MainContent />
        </div>
      </div>
    </div>
  )
}

export default App
