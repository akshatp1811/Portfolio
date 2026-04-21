import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { SOCIAL_LINKS } from '../constants';

export default function Footer() {
  const socials = [
    { icon: FaGithub, url: SOCIAL_LINKS.github },
    { icon: FaLinkedinIn, url: SOCIAL_LINKS.linkedin },
    { icon: FaInstagram, url: SOCIAL_LINKS.instagram },
  ];

  return (
    <footer className="border-t border-glass-border py-8 mt-12 bg-bg/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted text-sm shrink-0">
          Built by <span className="text-text font-medium">Akshat Pandey</span> &copy; 2025
        </p>

        <div className="flex items-center gap-4 relative z-50">
          {socials.map((s, i) => (
            <a 
              key={i} 
              href={s.url} 
              target="_blank" 
              rel="noopener noreferrer"
              data-hover
              className="w-10 h-10 rounded-full bg-surface border border-glass-border flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors relative z-50"
            >
              <s.icon className="text-sm" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
