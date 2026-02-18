import { Code, Layout, Smartphone, Database, Globe, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Services = () => {
    const { language } = useLanguage();
    const t = translations[language].services;

    const icons = [
        <Layout size={32} />,
        <Database size={32} />,
        <Smartphone size={32} />,
        <Cpu size={32} />,
        <Globe size={32} />,
        <Code size={32} />
    ];

    const services = t.items.map((item, index) => ({
        ...item,
        icon: icons[index]
    }));

    return (
        <section id="services" style={{ padding: '120px 0', position: 'relative' }}>
            <div className="container">
                <h2 className="section-title">{t.title}</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="glass"
                            style={{
                                padding: '40px',
                                borderRadius: '16px',
                                transition: 'all 0.3s ease',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                            whileHover={{ y: -10, borderColor: 'var(--primary)' }}
                        >
                            <div style={{
                                background: 'rgba(252, 127, 81, 0.1)',
                                width: '60px',
                                height: '60px',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--primary)',
                                marginBottom: '24px'
                            }}>
                                {service.icon}
                            </div>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '16px', fontWeight: 700 }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-sub)', lineHeight: 1.7 }}>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
