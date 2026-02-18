import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const ProjectCard = ({ project }) => {
  const { language } = useLanguage();
  const description = language === 'es' ? project.description_es : project.description;

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      style={{
        backgroundColor: 'var(--card-bg)',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        border: '1px solid rgba(255,255,255,0.05)'
      }}
    >
      <div className="image-container" style={{ position: 'relative', overflow: 'hidden', height: '200px' }}>
        <img
          src={project.image}
          alt={project.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
          className="card-image"
        />
        <div className="overlay" style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: 0, transition: 'opacity 0.3s ease'
        }}>
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0 10px' }}>
            <Github size={32} />
          </a>
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0 10px' }}>
              <ExternalLink size={32} />
            </a>
          )}
        </div>
      </div>

      <div className="content" style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: 'var(--primary)' }}>{project.title}</h3>
        <p style={{ color: 'var(--text-sub)', fontSize: '0.95rem', marginBottom: '20px', flex: 1, lineHeight: 1.6 }}>{description}</p>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {project.tech.map((tech, index) => (
            <span key={index} style={{
              background: 'rgba(252, 127, 81, 0.15)', color: 'var(--primary)',
              padding: '6px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600
            }}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .project-card:hover { transform: translateY(-5px); border-color: var(--primary); }
        .project-card:hover .overlay { opacity: 1; }
        .project-card:hover .card-image { transform: scale(1.05); }
      `}</style>
    </motion.div>
  );
};

export default ProjectCard;
