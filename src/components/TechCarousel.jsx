import { motion } from 'framer-motion';
import { TECH_STACK_ROW1, TECH_STACK_ROW2, ICON_MAP } from '../constants';

function TechTile({ item }) {
  const IconComp = ICON_MAP[item.icon];
  return (
    <div className="marquee-item mx-3" data-hover>
      {IconComp ? (
        <IconComp className="text-3xl text-accent2" />
      ) : (
        <div className="w-10 h-10 rounded bg-surface flex items-center justify-center text-xs text-muted">
          {item.name[0]}
        </div>
      )}
      <span className="text-xs text-muted whitespace-nowrap">{item.name}</span>
    </div>
  );
}

export default function TechCarousel() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-3">What I use</p>
          <h2 className="section-heading gradient-text">Technologies I Work With</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 overflow-hidden"
        >
          <div className="flex overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
            <div className="marquee-track">
              {[...TECH_STACK_ROW1, ...TECH_STACK_ROW1].map((item, i) => (
                <TechTile key={`${item.name}-${i}`} item={item} />
              ))}
            </div>
          </div>

          <div className="flex overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
            <div className="marquee-track reverse">
              {[...TECH_STACK_ROW2, ...TECH_STACK_ROW2].map((item, i) => (
                <TechTile key={`${item.name}-${i}`} item={item} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
