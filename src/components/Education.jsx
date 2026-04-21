import { motion } from 'framer-motion';
import { EDUCATION } from '../constants';
import { FaGraduationCap } from 'react-icons/fa';

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-3">Academic Background</p>
          <h2 className="section-heading gradient-text">Education</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          whileHover={{ rotateY: 3, rotateX: -2, scale: 1.02 }}
          style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
          className="relative glass rounded-2xl p-8 md:p-10 border-l-4 border-accent
                     hover:shadow-[0_0_40px_rgba(108,99,255,0.15)] transition-shadow duration-500"
        >
          {/* Glow accent dot */}
          <div className="absolute -left-[10px] top-10 w-4 h-4 rounded-full bg-accent shadow-[0_0_15px_rgba(108,99,255,0.6)]" />

          <div className="flex items-start gap-6">
            <div className="hidden sm:flex w-16 h-16 rounded-xl bg-surface items-center justify-center shrink-0
                            border border-glass-border">
              <FaGraduationCap className="text-2xl text-accent" />
            </div>

            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <h3 className="text-xl md:text-2xl font-bold font-[Syne] text-text">
                  {EDUCATION.institution}
                </h3>
                <span className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 whitespace-nowrap w-fit">
                  {EDUCATION.duration}
                </span>
              </div>
              <p className="text-muted text-sm md:text-base mb-4">{EDUCATION.degree}</p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted uppercase tracking-wider">CGPA</span>
                <span className="text-lg font-semibold text-accent2 text-glow-cyan">{EDUCATION.cgpa}</span>
              </div>
            </div>
          </div>

          {/* Decorative dots */}
          <div className="absolute top-4 right-4 grid grid-cols-3 gap-1 opacity-20">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-accent" />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
