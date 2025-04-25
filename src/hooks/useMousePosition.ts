import { useState, useEffect, useRef } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

export function useMousePosition() {
  const positionRef = useRef<MousePosition>({ x: 0, y: 0 });
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY };
      
      requestAnimationFrame(() => {
        setPosition(positionRef.current);
      });
    };

    window.addEventListener('mousemove', updatePosition, { passive: true });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return position;
} 