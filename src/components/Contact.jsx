import { Mail, Github, Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Contact = () => {
    const { language } = useLanguage();
    const t = translations[language].contact;

    return (
        <section id="contact" style={{ padding: '100px 0', background: 'var(--card-bg)' }}>
            <div className="container">
                <h2 className="section-title">{t.title}</h2>
                <div style={{
                    maxWidth: '600px', margin: '0 auto', textAlign: 'center',
                    display: 'flex', flexDirection: 'column', gap: '40px'
                }}>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-sub)' }}>
                        {t.description}
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
                        <a href="mailto:contact@erendon.com" className="social-link">
                            <div className="icon-box"><Mail size={24} /></div>
                            <span>Email</span>
                        </a>
                        <a href="https://github.com/erendon25" target="_blank" rel="noopener noreferrer" className="social-link">
                            <div className="icon-box"><Github size={24} /></div>
                            <span>GitHub</span>
                        </a>
                    </div>

                    <form style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '30px' }}>
                        <input type="text" placeholder={t.namePlaceholder} style={inputStyle} />
                        <input type="email" placeholder={t.emailPlaceholder} style={inputStyle} />
                        <textarea placeholder={t.messagePlaceholder} rows="5" style={inputStyle}></textarea>
                        <button type="submit" style={{
                            background: 'var(--primary)', color: 'white', padding: '15px',
                            borderRadius: '8px', fontWeight: 600, fontSize: '1rem', marginTop: '10px'
                        }}>
                            {t.sendButton}
                        </button>
                    </form>
                </div>
            </div>
            <style>{`
        .social-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          color: var(--text-sub);
        }
        .social-link:hover { color: var(--primary); }
        .icon-box {
          background: rgba(255,255,255,0.05);
          width: 60px; height: 60px;
          border-radius: 50%;
          display: flex; alignItems: center; justifyContent: center;
          transition: background 0.3s;
        }
        .social-link:hover .icon-box { background: rgba(252, 127, 81, 0.2); }
      `}</style>
        </section>
    );
};

const inputStyle = {
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    padding: '15px',
    borderRadius: '8px',
    color: 'white',
    fontFamily: 'inherit',
    fontSize: '1rem'
};

export default Contact;
