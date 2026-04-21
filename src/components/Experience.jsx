import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import { FaLaptopCode } from 'react-icons/fa';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-3">Professional Journey</p>
          <h2 className="section-heading gradient-text">Experience</h2>
        </motion.div>

        <div className="relative border-l border-glass-border ml-4 md:ml-8 pl-8 md:pl-12 py-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="relative glass rounded-2xl p-6 md:p-8 hover:shadow-[0_0_30px_rgba(0,212,255,0.1)] transition-shadow duration-300"
          >
            {/* Timeline node */}
            <div className="absolute -left-[45px] md:-left-[61px] top-8 w-12 h-12 rounded-full glass border border-glass-border flex items-center justify-center bg-surface z-10">
              <FaLaptopCode className="text-accent2" />
            </div>

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold font-[Syne] text-text mb-1 flex items-center gap-3">
                  {EXPERIENCE.role}
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-glass-border text-muted">
                    {EXPERIENCE.type}
                  </span>
                </h3>
                <p className="text-accent font-medium text-lg">{EXPERIENCE.company}</p>
              </div>
              <div className="text-sm text-muted bg-surface px-4 py-2 rounded-lg border border-glass-border whitespace-nowrap">
                {EXPERIENCE.duration}
              </div>
            </div>

            <ul className="space-y-3">
              {EXPERIENCE.bullets.map((bullet, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="text-muted text-sm md:text-base flex items-start gap-3"
                >
                  <span className="text-accent2 mt-1.5 text-[10px]">▹</span>
                  <span className="leading-relaxed">{bullet}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
