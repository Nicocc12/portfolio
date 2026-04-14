import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      // Con esta línea OBLIGAMOS a Astro a leer tu archivo
      configFile: './tailwind.config.mjs' 
    })
  ]
});