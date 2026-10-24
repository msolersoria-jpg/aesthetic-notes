import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// IMPORTANTE: cuando tengas la dirección definitiva (o tu dominio propio),
// cámbiala aquí. Se usa para el mapa del sitio y para Google.
export default defineConfig({
  site: 'https://aestheticnotesandco.com',
  integrations: [sitemap({ filter: (page) => !page.includes('/gracias') })],
  trailingSlash: 'ignore',
});
