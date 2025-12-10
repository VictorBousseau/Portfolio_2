import { Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">Portfolio</div>
        <nav className="nav">
          <a href="#projects" className="nav-link">Projets</a>
          <a href="#about" className="nav-link">À propos</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        <div className="socials">
          <a href="https://github.com/VictorBousseau" target="_blank" rel="noopener noreferrer" aria-label="Github">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/victor-bousseau/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="mailto:bousseauvictor49@gmail.com" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>
      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border);
          z-index: 100;
          padding: 1rem 0;
        }
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-weight: 700;
          font-size: 1.5rem;
          color: var(--text-primary);
        }
        .nav {
          display: flex;
          gap: 2rem;
        }
        .nav-link {
          color: var(--text-secondary);
          font-weight: 500;
        }
        .nav-link:hover {
          color: var(--accent);
        }
        .socials {
          display: flex;
          gap: 1rem;
          color: var(--text-secondary);
        }
        .socials a:hover {
          color: var(--accent);
        }
        @media (max-width: 768px) {
          .nav { display: none; }
        }
      `}</style>
    </header>
  );
};

export default Header;
