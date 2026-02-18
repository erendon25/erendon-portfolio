import { motion } from 'framer-motion';

const TechStack = () => {
    const technologies = [
        "React", "JavaScript", "TypeScript", "Node.js", "Electron",
        "Firebase", "Tailwind CSS", "SQL", "Git", "Figma",
        "Next.js", "Vite", "Redux", "Docker"
    ];

    // Duplicate the array to create a seamless loop
    const tickerItems = [...technologies, ...technologies, ...technologies];

    return (
        <div style={{
            padding: '40px 0',
            background: 'var(--card-bg)',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            position: 'relative'
        }}>
            <div style={{
                position: 'absolute', left: 0, top: 0, bottom: 0, width: '150px',
                background: 'linear-gradient(to right, var(--card-bg), transparent)',
                zIndex: 2
            }}></div>
            <div style={{
                position: 'absolute', right: 0, top: 0, bottom: 0, width: '150px',
                background: 'linear-gradient(to left, var(--card-bg), transparent)',
                zIndex: 2
            }}></div>

            <motion.div
                style={{ display: 'flex', gap: '60px', whiteSpace: 'nowrap' }}
                animate={{ x: [0, -1000] }}
                transition={{
                    repeat: Infinity,
                    duration: 30,
                    ease: "linear"
                }}
            >
                {tickerItems.map((tech, index) => (
                    <span key={index} style={{
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: 'rgba(255,255,255,0.3)',
                        textTransform: 'uppercase'
                    }}>
                        {tech}
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

export default TechStack;
