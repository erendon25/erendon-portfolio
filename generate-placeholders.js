import fs from 'fs';
import path from 'path';

const assetsDir = path.join(process.cwd(), 'src', 'assets');

if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
}

const projects = [
    { name: 'pos-preview', color: '#fc7f51', title: 'POS System' },
    { name: 'real-estate-preview', color: '#262626', title: 'Real Estate' },
    { name: 'schedule-preview', color: '#4a90e2', title: 'Schedule App' },
    { name: 'loans-preview', color: '#50e3c2', title: 'Loans Manager' },
    { name: 'supplements-preview', color: '#f5a623', title: 'Supplements Shop' },
    { name: 'expiration-preview', color: '#d0021b', title: 'Expiration Tracker' }
];

projects.forEach(p => {
    const svg = `
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#1a1a1a"/>
  <rect width="100%" height="100%" fill="url(#grad)"/>
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${p.color};stop-opacity:0.2" />
      <stop offset="100%" style="stop-color:${p.color};stop-opacity:0.05" />
    </linearGradient>
  </defs>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="40" fill="white" text-anchor="middle" dy=".3em">${p.title}</text>
  <text x="50%" y="60%" font-family="Arial, sans-serif" font-size="20" fill="#a0a0a0" text-anchor="middle" dy=".3em">Project Preview</text>
</svg>
  `.trim();

    fs.writeFileSync(path.join(assetsDir, `${p.name}.svg`), svg);
    console.log(`Generated ${p.name}.svg`);
});
