import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Victor Bousseau <br />
          <span className="highlight">Data Science & Analytics</span>
        </h1>
        <p className="hero-description">
          Étudiant de 23 ans, dynamique et curieux. Je recherche actuellement un <strong>Master dans le domaine de la Science des Données</strong>.
          <br />
          Fort d'une expérience en alternance et de projets concrets en Business Intelligence et Analyse Statistique.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            Voir mes projets <ArrowRight size={20} />
          </a>
          <a href="#contact" className="btn btn-secondary">
            Me contacter
          </a>
        </div>
      </div>
      <style>{`
        .hero {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 4rem 0;
        }
        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }
        .highlight {
          color: var(--accent);
        }
        .hero-description {
          font-size: 1.25rem;
          color: var(--text-secondary);
          max-width: 700px;
          margin: 0 auto 2.5rem;
        }
        .hero-description strong {
          color: var(--text-primary);
        }
        .hero-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 600;
          transition: all 0.2s;
        }
        .btn-primary {
          background-color: var(--accent);
          color: var(--bg-primary);
        }
        .btn-primary:hover {
          background-color: var(--accent-hover);
          transform: translateY(-2px);
        }
        .btn-secondary {
          border: 1px solid var(--border);
          color: var(--text-primary);
        }
        .btn-secondary:hover {
          border-color: var(--accent);
          color: var(--accent);
        }
        @media (max-width: 768px) {
          .hero-title { font-size: 2.5rem; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
