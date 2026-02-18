import { motion } from 'framer-motion';
import { ArrowRight, MousePointer2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Hero = () => {
    const { language } = useLanguage();
    const t = translations[language].hero;

    return (
        <section id="home" style={{
            padding: '180px 0 100px',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background decoration */}
            <div style={{
                position: 'absolute',
                top: '20%',
                right: '-10%',
                width: '500px',
                height: '500px',
                background: 'var(--primary)',
                filter: 'blur(150px)',
                opacity: 0.15,
                borderRadius: '50%',
                zIndex: -1
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ maxWidth: '800px' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '8px 16px',
                            background: 'rgba(252, 127, 81, 0.1)',
                            borderRadius: '30px',
                            color: 'var(--primary)',
                            fontWeight: 600,
                            marginBottom: '24px',
                            border: '1px solid rgba(252, 127, 81, 0.2)'
                        }}>
                            <span style={{ position: 'relative', display: 'flex', height: '10px', width: '10px' }}>
                                <span style={{
                                    animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
                                    position: 'absolute', height: '100%', width: '100%', borderRadius: '50%', background: 'var(--primary)', opacity: 0.75
                                }}></span>
                                <span style={{ position: 'relative', display: 'inline-flex', borderRadius: '50%', height: '10px', width: '10px', background: 'var(--primary)' }}></span>
                            </span>
                            {t.status}
                        </div>

                        <h1 style={{
                            fontSize: 'clamp(3.5rem, 8vw, 5.5rem)',
                            fontWeight: 800,
                            lineHeight: 1.1,
                            marginBottom: '24px',
                            letterSpacing: '-2px'
                        }}>
                            {t.tagline_1} <span style={{
                                background: 'linear-gradient(to right, #fff, #a0a0a0)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>{t.tagline_2}</span> <br />
                            <span style={{ color: 'var(--primary)', textShadow: '0 0 40px rgba(252, 127, 81, 0.3)' }}>{t.tagline_3}</span>
                        </h1>

                        <p style={{
                            fontSize: '1.25rem',
                            color: 'var(--text-sub)',
                            marginBottom: '40px',
                            lineHeight: 1.8,
                            maxWidth: '600px'
                        }}>
                            {t.description}
                        </p>

                        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    background: 'var(--primary)',
                                    color: 'white',
                                    padding: '16px 32px',
                                    borderRadius: '12px',
                                    fontWeight: 700,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    boxShadow: '0 10px 30px rgba(252, 127, 81, 0.3)'
                                }}
                            >
                                {t.viewWorks} <ArrowRight size={20} />
                            </motion.a>

                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    color: 'white',
                                    padding: '16px 32px',
                                    borderRadius: '12px',
                                    fontWeight: 600,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    backdropFilter: 'blur(10px)'
                                }}
                            >
                                {t.contactMe} <MousePointer2 size={20} />
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
        </section>
    );
};

export default Hero;
