import ProjectCard from './ProjectCard';

const projectsData = [
    {
        title: "Datathon SNCF Gare & Connexion",
        description: "Développement d'une solution pour prédire les affluences atypiques liées aux événements sociaux. Création d'un rapport Power BI, arbre de décision et Analyse des Correspondances Multiples (ACM).",
        tags: ["Power BI", "Statistiques", "Arbre de décision", "ACM"],
        demoLink: "#",
        repoLink: "#"
    },
    {
        title: "Solution Décisionnelle Complète",
        description: "Développement d'un composant décisionnel de bout en bout : Extraction de données via API (Talend), implémentation dans une base Oracle et visualisation sous Power BI.",
        tags: ["Talend", "Oracle", "Power BI", "ETL", "API"],
        demoLink: "#",
        repoLink: "#"
    },
    {
        title: "Dashboard Rshiny - Maison du Monde",
        description: "Création d'un tableau de bord interactif pour l'analyse multivariée. Intégration de statistiques descriptives et de classification non supervisée des produits.",
        tags: ["R", "Rshiny", "Clustering", "Data Viz"],
        demoLink: "#",
        repoLink: "#"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section">
            <h2 className="title">Mes Projets Académiques</h2>
            <p className="subtitle">Une sélection de projets réalisés durant mon cursus (IUT Vannes).</p>

            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>

            <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
      `}</style>
        </section>
    );
};

export default Projects;
