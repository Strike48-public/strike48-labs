import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "Strike48 Labs",
      logo: {
        light: "./src/assets/strike48-logo.svg",
        dark: "./src/assets/strike48-logo-light.svg",
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
          href: "https://github.com/strike48",
        },
      ],
      sidebar: [
        {
          label: "Overview",
          items: [{ label: "Welcome", slug: "overview" }],
        },
        {
          label: "StrikeHub",
          items: [
            { label: "Overview", slug: "strikehub" },
            { label: "Getting Started", slug: "strikehub/getting-started" },
            {
              label: "Guides",
              items: [
                { label: "Installation", slug: "strikehub/guides/installation" },
                { label: "Configuration", slug: "strikehub/guides/configuration" },
                { label: "Connectors", slug: "strikehub/guides/connectors" },
              ],
            },
          ],
        },
        {
          label: "KubeStudio",
          items: [
            { label: "Overview", slug: "kubestudio" },
            { label: "Getting Started", slug: "kubestudio/getting-started" },
            {
              label: "Guides",
              items: [
                { label: "Cluster Management", slug: "kubestudio/guides/cluster-management" },
                { label: "Deployments", slug: "kubestudio/guides/deployments" },
              ],
            },
          ],
        },
        {
          label: "Pick",
          items: [
            { label: "Overview", slug: "pick" },
            { label: "Getting Started", slug: "pick/getting-started" },
            {
              label: "Guides",
              items: [
                { label: "Marketplace", slug: "pick/guides/marketplace" },
              ],
            },
          ],
        },
        {
          label: "Resources",
          items: [
            { label: "FAQ", slug: "shared/faq" },
            { label: "Troubleshooting", slug: "shared/troubleshooting" },
          ],
        },
      ],
      expressiveCode: {
        themes: ["github-dark", "github-light"],
      },
    }),
  ],
});
