import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { language, toggleLanguage } = useLanguage();
    const t = translations[language].navbar;

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { title: t.home, href: '#home' },
        { title: t.projects, href: '#projects' },
        { title: t.services, href: '#services' },
        { title: t.contact, href: '#contact' },
    ];

    return (
        <nav style={{
            position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
            background: 'rgba(10, 10, 12, 0.95)', backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255,255,255,0.05)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <img src="/favicon.svg" alt="ER" style={{ height: '32px', width: '32px' }} />
                    <span style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-1px' }}>
                        ERICK<span style={{ color: 'var(--primary)' }}>RENDON</span>
                    </span>
                </a>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'none', gap: '30px', alignItems: 'center' }}>
                    {navLinks.map((link) => (
                        <a key={link.title} href={link.href} style={{ fontWeight: 500, fontSize: '0.95rem' }} className="nav-link">
                            {link.title}
                        </a>
                    ))}

                    <button
                        onClick={toggleLanguage}
                        style={{
                            display: 'flex', alignItems: 'center', gap: '8px',
                            padding: '6px 12px', borderRadius: '20px',
                            background: 'rgba(255,255,255,0.1)', color: 'white',
                            fontSize: '0.9rem', fontWeight: 600, transition: 'all 0.3s'
                        }}
                        className="lang-btn"
                    >
                        <Globe size={16} />
                        {language === 'es' ? 'EN' : 'ES'}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }} className="mobile-controls">
                    <button
                        onClick={toggleLanguage}
                        className="mobile-lang-btn"
                        style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            width: '36px', height: '36px', borderRadius: '50%',
                            background: 'rgba(255,255,255,0.1)', color: 'white'
                        }}
                    >
                        {language === 'es' ? 'EN' : 'ES'}
                    </button>

                    <button className="mobile-toggle" onClick={toggleMenu} style={{ background: 'none', color: 'white', display: 'flex' }}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div style={{
                    position: 'absolute', top: '80px', left: 0, right: 0, background: 'var(--card-bg)',
                    padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px',
                    borderBottom: '1px solid rgba(255,255,255,0.1)'
                }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.title}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            style={{ fontSize: '1.2rem', textAlign: 'center' }}
                        >
                            {link.title}
                        </a>
                    ))}
                </div>
            )}

            <style>{`
        @media (min-width: 768px) {
          .desktop-menu { display: flex !important; }
          .mobile-controls { display: none !important; }
        }
        @media (max-width: 767px) {
          .mobile-controls { display: flex !important; }
        }
        .nav-link:hover { color: var(--primary); }
        .lang-btn:hover { background: var(--primary) !important; color: white; }
      `}</style>
        </nav>
    );
};

export default Navbar;
