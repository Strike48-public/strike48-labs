import starlight from "@astrojs/starlight";
import starlightBlog from "starlight-blog";
import { sidebar } from "./sidebar";

export function starlightConfig() {
  return starlight({
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
    title: "Strike48 Labs",
    logo: {
      light: "./src/assets/strike48-logo.svg",
      dark: "./src/assets/strike48-logo-light.svg",
      replacesTitle: true,
    },
    components: {
      SiteTitle: "./src/components/SiteTitle.astro",
      Header: "./src/components/Header.astro",
      Head: "./src/components/Head.astro",
      PageTitle: "./src/components/PageTitle.astro",
      PageFrame: "./src/components/PageFrame.astro",
      ThemeProvider: "./src/components/ThemeProvider.astro",
    },
    customCss: [
      "@fontsource/inter/400.css",
      "@fontsource/inter/600.css",
      "@fontsource/inter/700.css",
      "@fontsource/jetbrains-mono/400.css",
      "@fontsource/jetbrains-mono/600.css",
      "@astrojs/starlight-tailwind",
      "./src/styles/custom.css",
    ],
    social: [
      {
        icon: "github",
        label: "GitHub",
        href: "https://github.com/strike48-public",
      },
      {
        icon: "discord",
        label: "Discord",
        href: "https://discord.gg/J3mukDFzfq",
      },
    ],
    sidebar: sidebar(),
    expressiveCode: {
      themes: ["github-dark", "github-light"],
    },
  });
}
