import { Mail, MapPin, Phone, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2 className="title">Me Contacter</h2>
      <p className="subtitle">N'hésitez pas à me contacter pour discuter de vos projets ou opportunités.</p>

      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-item">
            <Mail className="contact-icon" />
            <div>
              <h3>Email</h3>
              <a href="mailto:bousseauvictor49@gmail.com">bousseauvictor49@gmail.com</a>
            </div>
          </div>
          <div className="contact-item">
            <MapPin className="contact-icon" />
            <div>
              <h3>Localisation</h3>
              <p>Angers / Rennes, France</p>
            </div>
          </div>
          <div className="contact-item">
            <Phone className="contact-icon" />
            <div>
              <h3>Téléphone</h3>
              <a href="tel:+33783497224">07 83 49 72 24</a>
            </div>
          </div>
          <div className="contact-item">
            <Linkedin className="contact-icon" />
            <div>
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/victor-bousseau/" target="_blank" rel="noopener noreferrer">victor-bousseau</a>
            </div>
          </div>
          <div className="contact-item">
            <Github className="contact-icon" />
            <div>
              <h3>GitHub</h3>
              <a href="https://github.com/VictorBousseau" target="_blank" rel="noopener noreferrer">VictorBousseau</a>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" placeholder="Votre nom" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="votre@email.com" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Votre message..."></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Envoyer</button>
        </form>
      </div>

      <style>{`
        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
          margin-top: 3rem;
        }
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }
        .contact-icon {
          color: var(--accent);
          flex-shrink: 0;
        }
        .contact-item h3 {
          font-size: 1.1rem;
          margin-bottom: 0.25rem;
          color: var(--text-primary);
        }
        .contact-item p, .contact-item a {
          color: var(--text-secondary);
        }
        .contact-form {
          background: var(--bg-secondary);
          padding: 2rem;
          border-radius: 1rem;
          border: 1px solid var(--border);
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
          font-weight: 500;
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem;
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: 0.5rem;
          color: var(--text-primary);
          font-family: inherit;
        }
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--accent);
        }
        .btn-primary {
          background-color: var(--accent);
          color: var(--bg-primary);
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 600;
          width: 100%;
        }
        .btn-primary:hover {
          background-color: var(--accent-hover);
        }
        @media (max-width: 768px) {
          .contact-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
