import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ title, description, tags, image, demoLink, repoLink }) => {
    return (
        <div className="project-card">
            <div className="project-image">
                {image ? (
                    <img src={image} alt={title} />
                ) : (
                    <div className="placeholder-image"></div>
                )}
            </div>
            <div className="project-content">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
                <div className="project-tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>
                <div className="project-links">
                    {demoLink && (
                        <a href={demoLink} target="_blank" rel="noopener noreferrer" className="link">
                            <ExternalLink size={18} /> Demo
                        </a>
                    )}
                    {repoLink && (
                        <a href={repoLink} target="_blank" rel="noopener noreferrer" className="link">
                            <Github size={18} /> Code
                        </a>
                    )}
                </div>
            </div>
            <style>{`
        .project-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 1rem;
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
          border-color: var(--accent);
        }
        .project-image {
          height: 200px;
          background: #2d3748;
          overflow: hidden;
        }
        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }
        .project-card:hover .project-image img {
          transform: scale(1.05);
        }
        .placeholder-image {
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, var(--bg-secondary), var(--border));
        }
        .project-content {
          padding: 1.5rem;
        }
        .project-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }
        .project-description {
          color: var(--text-secondary);
          margin-bottom: 1rem;
          font-size: 0.95rem;
          line-height: 1.5;
        }
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        .tag {
          background: rgba(56, 189, 248, 0.1);
          color: var(--accent);
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.8rem;
          font-weight: 500;
        }
        .project-links {
          display: flex;
          gap: 1rem;
        }
        .link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-primary);
          font-size: 0.9rem;
          font-weight: 500;
        }
        .link:hover {
          color: var(--accent);
        }
      `}</style>
        </div>
    );
};

export default ProjectCard;
