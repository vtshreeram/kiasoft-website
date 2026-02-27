import fs from 'fs';
import path from 'path';

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
      const ext = path.extname(fullPath);
      const isTextFile = ['.tsx', '.ts', '.css', '.html'].includes(ext);
      
      if (isTextFile) {
        let content = fs.readFileSync(fullPath, 'utf8');
        let originalContent = content;

        // Replace Tailwind blue classes with green
        content = content.replace(/blue-50/g, 'green-50');
        content = content.replace(/blue-100/g, 'green-100');
        content = content.replace(/blue-200/g, 'green-200');
        content = content.replace(/blue-300/g, 'green-300');
        content = content.replace(/blue-400/g, 'green-400');
        content = content.replace(/blue-500/g, 'green-500');
        content = content.replace(/blue-600/g, 'green-600');
        content = content.replace(/blue-700/g, 'green-700');
        content = content.replace(/blue-800/g, 'green-800');
        content = content.replace(/blue-900/g, 'green-900');
        content = content.replace(/blue-950/g, 'green-950');

        // Replace CSS variables in index.css
        if (entry.name === 'index.css') {
            content = content.replace(/215 100% 45%/g, '142 76% 36%'); // primary
            content = content.replace(/215 16% 47%/g, '142 16% 47%'); // muted
            content = content.replace(/214 32% 91%/g, '142 32% 91%'); // border
            content = content.replace(/--color-medical-blue: #0066FF;/g, '--color-medical-blue: #16a34a;');
            content = content.replace(/--color-medical-light: #EFF6FF;/g, '--color-medical-light: #f0fdf4;');
            content = content.replace(/--color-medical-dark: #0047B3;/g, '--color-medical-dark: #15803d;');
        }

        if (content !== originalContent) {
          fs.writeFileSync(fullPath, content, 'utf8');
          console.log(`Updated colors in: ${fullPath}`);
        }
      }
    }
  }
}

processDirectory('./src');
processDirectory('./public');
console.log('Color update Done!');
