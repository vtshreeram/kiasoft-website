import fs from 'fs';
import path from 'path';

const REPLACEMENTS = [
  { regex: /Kiasfot Technologies Private Limited/g, replacement: 'Kiasfot Technologies Private Limited' },
  { regex: /Kiasfot Technologies/g, replacement: 'Kiasfot Technologies' },
  { regex: /Kiasfot Technologies/g, replacement: 'Kiasfot Technologies' },
  { regex: /kiasfot\.com/g, replacement: 'kiasfot.com' },
  { regex: /kiasfot/g, replacement: 'kiasfot' },
  { regex: /Kiasfot/g, replacement: 'Kiasfot' },
];

function processDirectory(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === 'dist') {
      continue;
    }

    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      processDirectory(fullPath);
    } else {
      // Only process text files
      const ext = path.extname(fullPath);
      const isTextFile = ['.html', '.tsx', '.ts', '.js', '.json', '.md', '.txt', '.xml', '.css'].includes(ext) || entry.name === '.env.example';
      
      if (isTextFile) {
        let content = fs.readFileSync(fullPath, 'utf8');
        let modified = false;

        for (const { regex, replacement } of REPLACEMENTS) {
          if (regex.test(content)) {
            content = content.replace(regex, replacement);
            modified = true;
          }
        }

        if (modified) {
          fs.writeFileSync(fullPath, content, 'utf8');
          console.log(`Updated: ${fullPath}`);
        }
      }
    }
  }
}

processDirectory('.');
console.log('Done!');
