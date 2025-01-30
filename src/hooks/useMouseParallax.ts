import { useState, useEffect } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

export const useMouseParallax = (factor: number = 0.1): MousePosition => {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.clientX) * factor;
      const y = (window.innerHeight / 2 - e.clientY) * factor;
      setPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [factor]);

  return position;
};
