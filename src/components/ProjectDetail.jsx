import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { PROJECTS, ICON_MAP } from '../constants';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen pt-24 pb-12 px-6"
      >
        <div className="max-w-5xl mx-auto">
          <button 
            onClick={() => navigate('/')}
            data-hover
            className="flex items-center gap-2 text-muted hover:text-text hover:underline underline-offset-4 decoration-accent mb-12 transition-all w-fit"
          >
            <FaArrowLeft className="text-xs" /> Back to Projects
          </button>

          <header className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-3 mb-4"
            >
              <div 
                className="w-2 rounded-full h-8"
                style={{ background: project.color, boxShadow: `0 0 15px ${project.color}88` }}
              />
              <span className="text-accent text-sm tracking-widest uppercase font-medium">
                {project.category}
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold font-[Syne] mb-6 drop-shadow-lg"
            >
              {project.name}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-muted max-w-3xl leading-relaxed"
            >
              {project.teaser}
            </motion.p>
          </header>

          {/* Placeholder Slideshow using linear gradient patterns */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="w-full aspect-video rounded-3xl overflow-hidden glass border border-glass-border mb-16 relative flex items-center justify-center p-8 group"
            style={{
              background: `linear-gradient(135deg, rgba(255,255,255,0.02) 0%, ${project.color}15 100%)`
            }}
          >
            <div className="text-center">
              <h3 className="text-3xl font-[Syne] text-white/40 mb-4 opacity-50 select-none">
                 Project Preview
              </h3>
              <p className="text-muted text-sm opacity-50 select-none">Screenshots placeholder. Replace with actual imagery.</p>
            </div>
            
            {/* Mock slider dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-8 h-1.5 rounded-full bg-accent" />
              <div className="w-2 h-1.5 rounded-full bg-white/20" />
              <div className="w-2 h-1.5 rounded-full bg-white/20" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="glass p-8 md:p-10 rounded-2xl"
            >
              <h2 className="text-2xl font-[Syne] font-bold mb-6 flex items-center gap-3">
                <div className="w-6 h-[2px] bg-accent" />
                About the Project
              </h2>
              <p className="text-muted text-base md:text-lg leading-relaxed whitespace-pre-line">
                {project.description}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col gap-6"
            >
              <div className="glass p-8 rounded-2xl">
                <h3 className="text-sm tracking-uppercase uppercase text-muted mb-6 font-medium">Links</h3>
                <div className="flex flex-col gap-4">
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    data-hover
                    className="flex justify-between items-center px-5 py-4 rounded-xl bg-accent text-white font-medium hover:bg-accent/90 transition-colors shadow-[0_0_20px_rgba(108,99,255,0.3)] hover:shadow-[0_0_30px_rgba(108,99,255,0.5)] group"
                  >
                    View Live Demo
                    <FaExternalLinkAlt className="text-sm group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    data-hover
                    className="flex justify-between items-center px-5 py-4 rounded-xl bg-surface border border-glass-border text-text font-medium hover:border-text transition-colors group relative overflow-hidden"
                  >
                    GitHub Repository
                    <FaGithub className="text-lg group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Technologies carousel in sidebar */}
              <div className="glass p-6 md:p-8 rounded-2xl overflow-hidden">
                <h3 className="text-sm tracking-uppercase uppercase text-muted mb-6 font-medium">Tech Stack</h3>
                <Marquee speed={30} gradient={true} gradientColor={[17, 17, 24]} gradientWidth={30}>
                   {project.techBadges.map((tech, i) => {
                     const iconName = project.techIcons[i] || 'FaDatabase';
                     const Icon = ICON_MAP[iconName];
                     return (
                       <div key={tech} className="flex flex-col items-center gap-2 mx-4 group cursor-none">
                         {Icon ? <Icon className="text-2xl text-accent2 group-hover:text-glow-cyan" /> : null}
                         <span className="text-xs text-muted whitespace-nowrap">{tech}</span>
                       </div>
                     );
                   })}
                </Marquee>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
