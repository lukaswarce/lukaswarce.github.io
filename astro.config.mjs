// @ts-check
import { existsSync, readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Si el repositorio tiene un CNAME (dominio propio), ese es el dominio del sitio;
// si no, el sitio de usuario de GitHub Pages. En ambos casos se sirve en la raíz, sin `base`.
const cname = existsSync('CNAME') ? readFileSync('CNAME', 'utf8').trim() : '';

const locales = { es: 'es', en: 'en', fr: 'fr', pt: 'pt' };

export default defineConfig({
  site: cname ? `https://${cname}` : 'https://lukaswarce.github.io',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'es',
    locales: Object.keys(locales),
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      i18n: { defaultLocale: 'es', locales },
    }),
  ],
});
