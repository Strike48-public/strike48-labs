// @ts-check
import { defineConfig } from 'astro/config';
import strike48Picjs from "./src/utils/strike48-picjs";
import rehypeMermaid from "./src/utils/rehype-mermaid";
import cloudflare from "@astrojs/cloudflare";
import { starlightConfig } from "./astro-config/starlight";
import { viteConfig } from "./astro-config/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.strike48.com",

  markdown: {
    rehypePlugins: [rehypeMermaid, strike48Picjs],
  },

  integrations: [starlightConfig()],

  adapter: cloudflare({
    prerenderEnvironment: "node",
  }),

  vite: viteConfig(),
});
