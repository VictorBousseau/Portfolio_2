import ProjectCard from './ProjectCard';

const academicProjects = [
    {
        title: "Datathon SNCF Gare & Connexion",
        description: "Développement d'une solution pour prédire les affluences atypiques liées aux événements sociaux. Création d'un rapport Power BI, arbre de décision et Analyse des Correspondances Multiples (ACM).",
        tags: ["Power BI", "Statistiques", "Arbre de décision", "ACM"],
        image: "/Portfolio_2/projects/ImageDatathon.png",
        repoLink: "https://github.com/VictorBousseau/STID3_Datathon"
    },
    {
        title: "Solution Décisionnelle Complète",
        description: "Développement d'un composant décisionnel de bout en bout : Extraction de données via API (Talend), implémentation dans une base Oracle et visualisation sous Power BI.",
        tags: ["Talend", "Oracle", "Power BI", "ETL", "API"],
        image: "/Portfolio_2/projects/ProjetETL_API_PBI.png"
    },
    {
        title: "Dashboard Rshiny - Maison du Monde",
        description: "Création d'un tableau de bord interactif pour l'analyse multivariée. Intégration de statistiques descriptives et de classification non supervisée des produits.",
        tags: ["R", "Rshiny", "Clustering", "Data Viz"],
        image: "/Portfolio_2/projects/ImageMDM.webp",
        repoLink: "https://github.com/VictorBousseau/STID2_RShiny"
    }
];

const masterProjects = [
    {
        title: "Classification et Prévision - Intention d'Achat",
        description: "Prédiction de l'intention d'achat des acheteurs en ligne avec Machine Learning. Utilisation de MLP, Random Forest et Régression Logistique avec GridSearchCV pour optimiser la classification binaire sur 12 330 sessions utilisateurs.",
        tags: ["Python", "Machine Learning", "Classification", "Scikit-learn", "GridSearchCV"],
        image: "/Portfolio_2/projects/classification-ml.png",
        repoLink: "https://github.com/VictorBousseau/M1_Classification_pr-visions"
    },
    {
        title: "Optimisation - Google Hashcode 2017",
        description: "Optimisation de la mise en cache de vidéos (Google Hashcode 2017). Solution hybride combinant une heuristique gloutonne pour la solution initiale et un PLNE avec le solver Gurobi pour maximiser le gain de latence.",
        tags: ["Python", "Gurobi", "Optimisation", "PLNE", "Algorithmes"],
        image: "/Portfolio_2/projects/optimization-hashcode.png",
        repoLink: "https://github.com/VictorBousseau/M2_Optimisation_Algorithmes_et_Data"
    }
];

const personalProjects = [
    {
        title: "MemoCode",
        description: "Bibliothèque personnelle de snippets de code pour la Data Science. Application web interactive pour centraliser et organiser vos connaissances en Python, SQL, DAX avec recherche avancée, système de favoris, notes personnelles et diagrammes Mermaid/LaTeX.",
        tags: ["React", "Vite", "Tailwind CSS", "Mermaid", "KaTeX", "Data Science"],
        image: "/Portfolio_2/projects/LogoMemoCode.png",
        demoLink: "https://victorbousseau.github.io/MemoCode",
        repoLink: "https://github.com/VictorBousseau/MemoCode"
    },
    {
        title: "Exercices sur les Nombres Relatifs",
        description: "Application pédagogique interactive pour apprendre les opérations sur les nombres relatifs. 12 niveaux de difficulté progressifs avec feedback immédiat, explications détaillées et cours intégré. Développée pour faciliter l'apprentissage des mathématiques.",
        tags: ["React", "Vite", "Pédagogie", "Mathématiques"],
        image: "/Portfolio_2/projects/logoapplimaths.png",
        demoLink: "https://victorbousseau.github.io/ExercicesRelatifs/",
        repoLink: "https://github.com/VictorBousseau/ExercicesRelatifs"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section">
            <h2 className="title">Mes Projets</h2>
            <p className="subtitle">Une sélection de projets académiques, universitaires et personnels.</p>

            {/* Projets Académiques (BUT) */}
            <div className="project-category">
                <h3 className="category-title">Projets Académiques (BUT Science des Données)</h3>
                <div className="projects-grid">
                    {academicProjects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>

            {/* Projets Master */}
            {masterProjects.length > 0 && (
                <div className="project-category">
                    <h3 className="category-title">Projets Master MIASHS</h3>
                    <div className="projects-grid">
                        {masterProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </div>
            )}

            {/* Projets Personnels */}
            {personalProjects.length > 0 && (
                <div className="project-category">
                    <h3 className="category-title">Projets Personnels (Réalisés à l'aide de Google Antigravity)</h3>
                    <div className="projects-grid">
                        {personalProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </div>
            )}

            <style>{`
        .project-category {
          margin-top: 3rem;
        }
        .project-category:first-of-type {
          margin-top: 2rem;
        }
        .category-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          padding-bottom: 0.75rem;
          border-bottom: 2px solid var(--border);
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
      `}</style>
        </section>
    );
};

export default Projects;
