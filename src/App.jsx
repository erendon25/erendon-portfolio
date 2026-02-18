import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import ProjectCard from './components/ProjectCard';
import Services from './components/Services';
import Contact from './components/Contact';
import { projects } from './data/projects';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { translations } from './data/translations';

/* Create a separate layout component since App is the provider */
const PortfolioLayout = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="App">
      <Background />
      <Navbar />
      <Hero />
      <TechStack />

      <section id="projects" style={{ padding: '120px 0' }}>
        <div className="container">
          <h2 className="section-title">{t.projects.title}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <Services />
      <Contact />

      <footer style={{ textAlign: 'center', padding: '40px 0', background: '#0a0a0c', color: '#666', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <p>&copy; {new Date().getFullYear()} Erick Rendon. {t.footer.rights}</p>
      </footer>
    </div>
  );
};

/* Main App Wraps w/ Provider */
function App() {
  return (
    <LanguageProvider>
      <PortfolioLayout />
    </LanguageProvider>
  );
}

export default App;
