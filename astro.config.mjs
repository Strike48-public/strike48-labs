// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';
import strike48Picjs from "./src/utils/strike48-picjs";

// https://astro.build/config
export default defineConfig({

  site: "https://docs.strike48.com",

  markdown: {
    rehypePlugins: [strike48Picjs],
  },


	integrations: [
		starlight({
			title: 'Strike48 Labs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
      plugins: [
        starlightBlog({
          title: "Lab Notes",
          authors: {
            strike48: {
              name: "Strike48",
              url: "https://strike48.com",
            },
            pragdave: {
              name: "pragdave",
              url: "https://strike48.com",
              title: "Dave Thomas",
              picture: "https://avatars.githubusercontent.com/u/243179820?v=4",
            },
          },
        }),
      ],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
