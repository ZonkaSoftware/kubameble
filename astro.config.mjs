import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import keystatic from '@keystatic/astro';
import markdoc from "@astrojs/markdoc";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), markdoc(), keystatic()],
  output: "hybrid",
  adapter: netlify()
});