import { Briefcase, GraduationCap, Code, Database, BarChart2, Monitor } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section">
      <h2 className="title">À Propos</h2>

      <div className="about-grid">
        {/* Colonne Gauche : Expériences et Formation */}
        <div className="timeline-column">
          <h3 className="column-title"><Briefcase className="icon" /> Expériences</h3>
          <div className="timeline">
            <div className="timeline-item">
              <span className="date">Sept 2023 - Aout 2024</span>
              <h4>Alternance - Service Pilotage de la Performance</h4>
              <p className="company">ESSCA, Angers</p>
              <p className="description">
                Création de tableaux de bord Power BI, analyse et restitution de données, analyses et tests statistiques.
              </p>
            </div>
            <div className="timeline-item">
              <span className="date">Avril 2023 - Juin 2023</span>
              <h4>Stage - Service Pilotage de la Performance</h4>
              <p className="company">ESSCA, Angers</p>
              <p className="description">
                Création de questionnaires, analyse de résultats, création d'un outil de veille concurrentielle (Open Data).
              </p>
            </div>
          </div>

          <h3 className="column-title" style={{ marginTop: '2rem' }}><GraduationCap className="icon" /> Formation</h3>
          <div className="timeline">
            <div className="timeline-item">
              <span className="date">2021 - Présent</span>
              <h4>BUT Science des Données (3ème année)</h4>
              <p className="company">Université de Vannes (56)</p>
            </div>
            <div className="timeline-item">
              <span className="date">2019 - 2021</span>
              <h4>Licence Mathématiques (Niveau L2)</h4>
              <p className="company">Université d'Angers (49)</p>
            </div>
          </div>
        </div>

        {/* Colonne Droite : Compétences */}
        <div className="skills-column">
          <h3 className="column-title"><Code className="icon" /> Compétences</h3>

          <div className="skill-category">
            <h4><Monitor size={18} /> Programmation & Logiciels</h4>
            <div className="tags">
              <span>Python</span><span>R</span><span>SQL</span><span>Power BI</span>
              <span>Talend</span><span>SAS</span><span>VBA</span><span>HTML</span>
              <span>Jupyter</span><span>RStudio</span>
            </div>
          </div>

          <div className="skill-category">
            <h4><Database size={18} /> Base de Données</h4>
            <div className="tags">
              <span>Oracle</span><span>MySQL</span><span>MongoDB</span><span>Neo4j</span><span>Access</span>
            </div>
          </div>

          <div className="skill-category">
            <h4><BarChart2 size={18} /> Statistiques</h4>
            <div className="tags">
              <span>Classification supervisée/non-supervisée</span>
              <span>Régression</span><span>ACP</span><span>Séries temporelles</span>
              <span>Statistiques inférentielles</span>
            </div>
          </div>

          <div className="skill-category">
            <h4>Langues & Intérêts</h4>
            <p><strong>Langues :</strong> Français (Natif), Anglais</p>
            <p><strong>Intérêts :</strong> Handball (10 ans, Arbitre), Judo (6 ans), Cinéma</p>
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          margin-top: 2rem;
        }
        .column-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }
        .icon {
          color: var(--accent);
        }
        
        /* Timeline Styles */
        .timeline {
          border-left: 2px solid var(--border);
          padding-left: 1.5rem;
        }
        .timeline-item {
          position: relative;
          margin-bottom: 2rem;
        }
        .timeline-item::before {
          content: '';
          position: absolute;
          left: -1.95rem;
          top: 0.25rem;
          width: 0.8rem;
          height: 0.8rem;
          background: var(--accent);
          border-radius: 50%;
          border: 2px solid var(--bg-primary);
        }
        .date {
          font-size: 0.9rem;
          color: var(--accent);
          font-weight: 600;
          display: block;
          margin-bottom: 0.25rem;
        }
        .timeline-item h4 {
          font-size: 1.1rem;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }
        .company {
          font-size: 0.95rem;
          color: var(--text-secondary);
          font-style: italic;
          margin-bottom: 0.5rem;
        }
        .description {
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        /* Skills Styles */
        .skill-category {
          background: var(--bg-secondary);
          padding: 1.5rem;
          border-radius: 1rem;
          margin-bottom: 1.5rem;
          border: 1px solid var(--border);
        }
        .skill-category h4 {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }
        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .tags span {
          background: rgba(56, 189, 248, 0.1);
          color: var(--accent);
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.85rem;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
