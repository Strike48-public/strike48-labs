import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import rehypeMermaid from "./src/utils/rehype-mermaid";

export default defineConfig({
  site: "https://docs.strike48.com",
  markdown: {
    rehypePlugins: [rehypeMermaid],
  },
  integrations: [
    starlight({
      title: "Strike48 Labs",
      logo: {
        light: "./src/assets/strike48-logo.svg",
        dark: "./src/assets/strike48-logo-light.svg",
        replacesTitle: true,
      },
      components: {
        SiteTitle: "./src/components/SiteTitle.astro",
        Header: "./src/components/Header.astro",
        PageTitle: "./src/components/PageTitle.astro",
        ThemeSelect: "./src/components/ThemeSelect.astro",
        ThemeProvider: "./src/components/ThemeProvider.astro",
      },
      customCss: [
        "@fontsource/inter/400.css",
        "@fontsource/inter/600.css",
        "@fontsource/inter/700.css",
        "@fontsource/jetbrains-mono/400.css",
        "@fontsource/jetbrains-mono/600.css",
        "./src/styles/global.css",
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
          items: [
            { label: "Welcome", slug: "overview" },
            { label: "Architecture", slug: "architecture" },
          ],
        },
        {
          label: "For Users",
          collapsed: false,
          items: [
            {
              label: "Prospector Studio",
              collapsed: true,
              items: [
                { label: "Overview", slug: "prospector-studio" },
                { label: "Getting Started", slug: "prospector-studio/getting-started" },
                { label: "Agents", slug: "prospector-studio/guides/agents" },
                { label: "Knowledge Bases", slug: "prospector-studio/guides/knowledge-bases" },
                { label: "Workflows", slug: "prospector-studio/guides/workflows" },
                { label: "MCP Servers", slug: "prospector-studio/guides/mcp-servers" },
                { label: "Connectors", slug: "prospector-studio/guides/connectors" },
              ],
            },
            {
              label: "StrikeHub",
              collapsed: true,
              items: [
                { label: "Overview", slug: "strikehub" },
                { label: "Getting Started", slug: "strikehub/getting-started" },
                { label: "Installation", slug: "strikehub/guides/installation" },
                { label: "Configuration", slug: "strikehub/guides/configuration" },
                { label: "Connectors", slug: "strikehub/guides/connectors" },
                {
                  label: "Help",
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
              collapsed: true,
              items: [
                { label: "Overview", slug: "kubestudio" },
                { label: "Getting Started", slug: "kubestudio/getting-started" },
                { label: "Installation", slug: "kubestudio/guides/installation" },
                { label: "Cluster Management", slug: "kubestudio/guides/cluster-management" },
                { label: "Deployments", slug: "kubestudio/guides/deployments" },
                {
                  label: "Help",
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
              collapsed: true,
              items: [
                { label: "Overview", slug: "pick" },
                { label: "Getting Started", slug: "pick/getting-started" },
                { label: "Architecture", slug: "pick/architecture" },
                { label: "Installation", slug: "pick/getting-started/installation" },
                { label: "Configuration", slug: "pick/getting-started/configuration" },
                { label: "Tools", slug: "pick/guides/marketplace" },
                {
                  label: "Help",
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
              label: "StrikeKit",
              collapsed: true,
              items: [
                { label: "Overview", slug: "developers/strikekit" },
                { label: "Installation", slug: "developers/strikekit/installation" },
                { label: "Quick Start", slug: "developers/strikekit/quick-start" },
                { label: "Configuration", slug: "developers/strikekit/configuration" },
              ],
            },
          ],
        },
        {
          label: "For Developers",
          collapsed: false,
          items: [
            {
              label: "Prospector Studio",
              collapsed: true,
              items: [
                { label: "GraphQL API", slug: "developers/prospector-studio/graphql-api" },
              ],
            },
            {
              label: "SDK for Rust",
              collapsed: true,
              items: [
                { label: "Overview", slug: "developers/sdk-rs" },
                { label: "Installation", slug: "developers/sdk-rs/installation" },
                { label: "Quick Start", slug: "developers/sdk-rs/quick-start" },
                { label: "Configuration", slug: "developers/sdk-rs/configuration" },
                {
                  label: "Guides",
                  collapsed: true,
                  items: [
                    { label: "Building Your First Connector", slug: "developers/sdk-rs/guides/building-your-first-connector" },
                    { label: "Testing Connectors", slug: "developers/sdk-rs/guides/testing-connectors" },
                    { label: "Error Handling", slug: "developers/sdk-rs/guides/error-handling" },
                    { label: "Async Patterns with Tokio", slug: "developers/sdk-rs/guides/async-patterns" },
                    { label: "Deploying Connectors", slug: "developers/sdk-rs/guides/deployment" },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "Resources",
          items: [
            { label: "FAQ", slug: "shared/faq" },
            { label: "Troubleshooting", slug: "shared/troubleshooting" },
            { label: "Demos & Media", slug: "media" },
          ],
        },
        {
          label: "Contributing",
          collapsed: true,
          items: [
            { label: "GIF Guidelines", slug: "contributing/gif-guidelines" },
            { label: "GIF Workflow", slug: "contributing/gif-workflow" },
            { label: "VHS Examples", slug: "contributing/vhs-examples" },
          ],
        },
      ],
      expressiveCode: {
        themes: ["github-dark", "github-light"],
      },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
