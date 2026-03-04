import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "Strike48 Labs",
      logo: {
        light: "./src/assets/strike48-logo.svg",
        dark: "./src/assets/strike48-logo-light.svg",
        replacesTitle: true,
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
            {
              label: "Help & Debugging",
              collapsed: true,
              items: [
                { label: "Debug Logging", slug: "strikehub/help/debugging" },
                { label: "Connectivity", slug: "strikehub/help/connectivity" },
                { label: "Authentication", slug: "strikehub/help/authentication" },
                { label: "UI & Rendering", slug: "strikehub/help/ui-rendering" },
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
            {
              label: "Help & Debugging",
              collapsed: true,
              items: [
                { label: "Debug Logging", slug: "kubestudio/help/debugging" },
                { label: "Cluster Connectivity", slug: "kubestudio/help/cluster-connectivity" },
                { label: "Permissions & RBAC", slug: "kubestudio/help/permissions" },
                { label: "Workload Issues", slug: "kubestudio/help/workload-issues" },
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
                { label: "Tools", slug: "pick/guides/marketplace" },
              ],
            },
            {
              label: "Help & Debugging",
              collapsed: true,
              items: [
                { label: "Debug Logging", slug: "pick/help/debugging" },
                { label: "Privileges", slug: "pick/help/privileges" },
                { label: "Network Tools", slug: "pick/help/network-tools" },
                { label: "Remote Execution", slug: "pick/help/remote-execution" },
              ],
            },
          ],
        },
        {
          label: "Media",
          items: [
            { label: "Overview", slug: "media" },
            { label: "StrikeHub Demos", slug: "media/strikehub" },
            { label: "KubeStudio Demos", slug: "media/kubestudio" },
            { label: "Pick Demos", slug: "media/pick" },
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
