import puppeteer from 'puppeteer';
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function prerender() {
  const app = express();
  const distPath = join(__dirname, '..', 'dist');
  
  if (!fs.existsSync(distPath)) {
    console.error('dist directory not found. Run build first.');
    process.exit(1);
  }

  app.use(express.static(distPath));
  
  const server = app.listen(0, async () => {
    const port = server.address().port;
    const url = `http://localhost:${port}/`;
    
    console.log(`Prerendering from ${url}...`);
    
    try {
      const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox']
      });
      const page = await browser.newPage();
      
      // Navigate and wait for network to be idle
      await page.goto(url, { waitUntil: 'networkidle0' });
      
      // Wait for React to finish rendering
      await page.waitForFunction(() => {
        return document.querySelector('#main-content') !== null;
      });

      // Give it a tiny bit more time for any lazy-loaded components if needed
      await new Promise(r => setTimeout(r, 1000));
      
      const html = await page.content();
      
      // Write the fully rendered HTML back to index.html
      fs.writeFileSync(join(distPath, 'index.html'), html);
      
      console.log('Successfully prerendered index.html');
      await browser.close();
    } catch (e) {
      console.error('Error during prerendering:', e);
    } finally {
      server.close();
    }
  });
}

prerender();
