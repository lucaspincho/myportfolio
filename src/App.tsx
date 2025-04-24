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
    <div className="flex flex-col min-h-screen antialiased">
      <div className="sticky top-0 z-10 w-full bg-bg-light dark:bg-bg-dark">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20 py-2">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
      
      <div className="flex-1 w-full px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 max-w-6xl mx-auto">
          <div className="md:col-span-4 lg:col-span-5 md:sticky md:top-14 md:self-start md:max-h-[calc(100vh-4rem)]">
            <Sidebar 
              isMobile={isMobile} 
              mobileMenuOpen={mobileMenuOpen} 
              toggleMobileMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          </div>
          
          <div className="md:col-span-8 lg:col-span-7 md:overflow-y-auto">
            <MainContent />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
