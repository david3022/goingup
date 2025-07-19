// @ts-check
import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify";
import tailwindcss from '@tailwindcss/vite';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  adapter: netlify(),
  vite: {
    plugins: [tailwind()],
  }
});


  