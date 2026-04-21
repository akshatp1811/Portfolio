import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const onMouseMove = useCallback((e) => {
    setPos({ x: e.clientX, y: e.clientY });
    if (!visible) setVisible(true);
  }, [visible]);

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);

    const onOver = () => setHovering(true);
    const onOut = () => setHovering(false);

    const hoverables = document.querySelectorAll('a, button, [data-hover]');
    hoverables.forEach((el) => {
      el.addEventListener('mouseenter', onOver);
      el.addEventListener('mouseleave', onOut);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      hoverables.forEach((el) => {
        el.removeEventListener('mouseenter', onOver);
        el.removeEventListener('mouseleave', onOut);
      });
    };
  }, [onMouseMove]);

  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999] rounded-full"
        style={{
          width: 8,
          height: 8,
          background: '#6c63ff',
          boxShadow: '0 0 12px #6c63ff, 0 0 30px rgba(108,99,255,0.4)',
        }}
        animate={{
          x: pos.x - 4,
          y: pos.y - 4,
          scale: hovering ? 1.8 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      />
      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99998] rounded-full border-[1.5px]"
        style={{
          width: 36,
          height: 36,
          borderColor: hovering ? '#00d4ff' : 'rgba(108,99,255,0.5)',
        }}
        animate={{
          x: pos.x - 18,
          y: pos.y - 18,
          scale: hovering ? 1.5 : 1,
          opacity: visible ? 0.7 : 0,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, mass: 0.8 }}
      />
    </>
  );
}
