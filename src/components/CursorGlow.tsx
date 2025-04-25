import { motion, useMotionValue } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';
import { useState, useEffect, useRef } from 'react';
import useTheme from '../hooks/useTheme';

interface CursorGlowProps {
  size?: number;
  opacity?: number;
  lightColor?: string;
  darkColor?: string;
}

export default function CursorGlow({ 
  size = 400, 
  opacity = 0.3,
  lightColor = '#38BDF8',
  darkColor = '#38BDF8'
}: CursorGlowProps) {
  const mousePosition = useMousePosition();
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(false);
  const { theme } = useTheme();
  const firstMoveRef = useRef(true);
  
  // Usando motion values para atualizações mais performáticas
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Atualizar as motion values diretamente
  useEffect(() => {
    x.set(mousePosition.x - (size / 2));
    y.set(mousePosition.y - (size / 2));
    
    // Só tornar visível após o primeiro movimento real do mouse
    if ((mousePosition.x !== 0 || mousePosition.y !== 0) && firstMoveRef.current) {
      setVisible(true);
      firstMoveRef.current = false;
    }
  }, [mousePosition, size, x, y]);
  
  useEffect(() => {
    const handleMouseDown = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 300);
    };
    
    window.addEventListener('mousedown', handleMouseDown);
    
    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  const currentColor = theme === 'dark' ? darkColor : lightColor;
  
  if (!visible) return null;
  
  return (
    <motion.div 
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: opacity }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute"
        style={{
          width: size,
          height: size,
          x,
          y,
        }}
        animate={{
          scale: clicked ? 0.7 : 1,
        }}
        transition={{
          scale: {
            type: "spring",
            damping: 25,
            stiffness: 500,
            duration: 0.2
          }
        }}
      >
        <div className="relative w-full h-full">
          <div 
            className="absolute inset-0 rounded-full blur-[100px]" 
            style={{ backgroundColor: currentColor, opacity: 0.4 }}
          />
          <motion.div 
            className="absolute inset-0 rounded-full blur-[60px]"
            style={{ backgroundColor: currentColor, opacity: 0.15 }}
            animate={{
              scale: clicked ? 1.2 : 1,
            }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 500,
              duration: 0.2
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
} 