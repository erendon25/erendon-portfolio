import fs from 'fs';
import path from 'path';

const publicDir = path.join(process.cwd(), 'public');

// Colors
const primary = '#fc7f51';
const secondary = '#262626';
const white = '#ffffff';

// New Logo: Modern Minimalist ER Monogram
const iconSvg = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradLogo" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${primary};stop-opacity:1" />
      <stop offset="100%" style="stop-color:#ff9f7d;stop-opacity:1" />
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="rgba(0,0,0,0.3)"/>
    </filter>
  </defs>
  
  <!-- Background Shape: Rounded Square (Squircle) -->
  <rect x="56" y="56" width="400" height="400" rx="100" fill="url(#gradLogo)" filter="url(#shadow)" />
  
  <!-- Typography-based Monogram -->
  <g transform="translate(136, 156) scale(0.6)">
    <!-- E -->
    <path d="M0 0 L0 350 L220 350 L220 280 L80 280 L80 210 L200 210 L200 140 L80 140 L80 70 L220 70 L220 0 L0 0 Z" fill="${white}" />
    
    <!-- R -->
    <path d="M260 0 L260 350 L340 350 L340 220 L390 350 L480 350 L420 200 C470 180 490 130 490 90 C490 30 440 0 360 0 L260 0 Z M340 70 L360 70 C390 70 410 80 410 110 C410 140 390 150 360 150 L340 150 L340 70 Z" fill="${white}" />
  </g>
</svg>
`.trim();

fs.writeFileSync(path.join(publicDir, 'favicon.svg'), iconSvg);
console.log('New Logo generated.');
