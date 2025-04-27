import { useState, useEffect } from 'react'
import useTheme from './hooks/useTheme'
import ThemeToggle from './components/ThemeToggle'
import ResumeButton from './components/ResumeButton'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import CursorGlow from './components/CursorGlow'

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
      <CursorGlow 
        size={500} 
        opacity={0.08} 
        lightColor="#38BDF8" 
        darkColor="#38BDF8" 
      />

      {/* Botões movidos para posição absoluta sem a barra superior */}
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <ResumeButton />
      
      <div className="flex-1 w-full px-6 md:px-10 lg:px-16 xl:px-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 max-w-6xl mx-auto">
          <aside className="hidden md:block md:col-span-4 lg:col-span-5 sticky top-14 self-start" style={{ height: 'calc(100vh - 4rem)' }}>
            <Sidebar 
              isMobile={isMobile} 
              mobileMenuOpen={mobileMenuOpen} 
              toggleMobileMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          </aside>
          
          {/* Versão mobile da sidebar */}
          {isMobile && (
            <Sidebar 
              isMobile={isMobile} 
              mobileMenuOpen={mobileMenuOpen} 
              toggleMobileMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          )}
          
          <main className="md:col-span-8 lg:col-span-7">
            <MainContent />
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
