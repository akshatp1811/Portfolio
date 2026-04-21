import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

function ProjectCard({ project, index }) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -10 }}
      onClick={() => navigate(`/project/${project.id}`)}
      className="group cursor-none relative glass rounded-2xl overflow-hidden border-t border-glass-border flex flex-col h-full bg-surface/50"
    >
      {/* Hover glow */}
      <div 
        className="absolute top-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
      />
      
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-6">
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold bg-white/5"
            style={{ color: project.color, border: `1px solid ${project.color}33` }}
          >
            {project.name.charAt(0)}
          </div>
          <div className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
            <FaArrowRight className="text-muted group-hover:text-text transition-colors -rotate-45 group-hover:rotate-0 duration-300" />
          </div>
        </div>

        <h3 className="text-2xl font-bold font-[Syne] mb-2 group-hover:text-glow transition-all" style={{ textShadowColor: project.color }}>
          {project.name}
        </h3>
        
        <p className="text-muted text-sm mb-6 flex-grow">
          {project.teaser}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.techBadges.slice(0, 4).map((tech) => (
            <span key={tech} className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-muted">
              {tech}
            </span>
          ))}
          {project.techBadges.length > 4 && (
            <span className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-muted">
              +{project.techBadges.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-3">Selected Works</p>
          <h2 className="section-heading gradient-text">Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
