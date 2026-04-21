import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 h-[2px] z-[9999]"
      style={{
        width: `${progress}%`,
        background: 'linear-gradient(90deg, #6c63ff, #00d4ff)',
        boxShadow: '0 0 10px #6c63ff, 0 0 20px rgba(108,99,255,0.4)',
      }}
    />
  );
}
