import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';
import { FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading gradient-text">Let's Build Something Together</h2>
          <p className="text-muted mt-4 text-sm md:text-base">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-6 md:p-10 mb-12"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs text-muted font-medium uppercase tracking-wider">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-surface border border-glass-border rounded-lg px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs text-muted font-medium uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-surface border border-glass-border rounded-lg px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs text-muted font-medium uppercase tracking-wider">Message</label>
              <textarea 
                rows="4"
                placeholder="Hello Akshat..."
                className="w-full bg-surface border border-glass-border rounded-lg px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors resize-none"
              ></textarea>
            </div>
            <button 
              data-hover
              className="w-full py-4 rounded-lg bg-accent text-white font-medium flex items-center justify-center gap-2 hover:bg-accent/90 transition-colors"
            >
              Send Message <FaPaperPlane className="text-sm" />
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 text-muted text-sm"
        >
          <a href={`mailto:${SOCIAL_LINKS.email}`} data-hover className="hover:text-accent transition-colors">
            {SOCIAL_LINKS.email}
          </a>
          <span className="hidden md:block w-1.5 h-1.5 rounded-full border border-muted" />
          <a href={`tel:+91${SOCIAL_LINKS.phone}`} data-hover className="hover:text-accent transition-colors">
            +91 {SOCIAL_LINKS.phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
