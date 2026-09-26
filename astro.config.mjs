// @ts-check
import { existsSync, readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';

// Si el repositorio tiene un CNAME (dominio propio), ese es el dominio del sitio;
// si no, el sitio de usuario de GitHub Pages. En ambos casos se sirve en la raíz, sin `base`.
const cname = existsSync('CNAME') ? readFileSync('CNAME', 'utf8').trim() : '';

export default defineConfig({
  site: cname ? `https://${cname}` : 'https://lukaswarce.github.io',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
