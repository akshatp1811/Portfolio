import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaInstagram, FaDownload } from 'react-icons/fa';
import { SOCIAL_LINKS, ROLES, BIO } from '../constants';
import ParticleField from './ParticleField';

function TypewriterText({ words }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 80);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 40);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setWordIndex((w) => (w + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words]);

  const display = useMemo(() => words[wordIndex].slice(0, charIndex), [words, wordIndex, charIndex]);

  return (
    <span className="text-accent">
      {display}
      <span className="cursor-blink text-accent2">|</span>
    </span>
  );
}

export default function Hero() {
  const socials = [
    { icon: FaGithub, url: SOCIAL_LINKS.github, label: 'GitHub' },
    { icon: FaLinkedinIn, url: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
    { icon: FaInstagram, url: SOCIAL_LINKS.instagram, label: 'Instagram' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleField />

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-transparent to-bg" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,rgba(108,99,255,0.08)_0%,transparent_70%)]" />

      <div className="relative z-[2] text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-muted text-sm tracking-[0.3em] uppercase mb-6"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-[Syne] mb-4 text-glow"
        >
          Akshat Pandey
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xl md:text-2xl font-light mb-8 h-10"
        >
          <TypewriterText words={ROLES} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-muted text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {BIO}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            data-hover
            className="px-8 py-3 rounded-full bg-accent text-white font-medium text-sm tracking-wide
                       hover:shadow-[0_0_25px_rgba(108,99,255,0.5)] transition-all duration-300 hover:scale-105"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View My Work
          </a>
          <a
            href="/Akshat_Resume.pdf"
            download
            data-hover
            className="px-8 py-3 rounded-full border border-glass-border text-text font-medium text-sm tracking-wide
                       hover:border-accent hover:shadow-[0_0_25px_rgba(108,99,255,0.3)] transition-all duration-300
                       flex items-center gap-2 hover:scale-105"
          >
            <FaDownload className="text-xs" /> Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex items-center justify-center gap-5"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              data-hover
              className="w-11 h-11 rounded-full glass flex items-center justify-center text-muted
                         hover:text-accent hover:shadow-[0_0_20px_rgba(108,99,255,0.4)] transition-all duration-300 hover:scale-110"
            >
              <s.icon className="text-lg" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2"
      >
        <span className="text-muted text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-glass-border flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
