import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://docs.strike48.com",
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
          items: [
            { label: "Welcome", slug: "overview" },
            { label: "Architecture", slug: "architecture" },
          ],
        },
        {
          label: "For End Users",
          collapsed: false,
          items: [
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
          ],
        },
        {
          label: "For Developers",
          collapsed: false,
          items: [
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
            {
              label: "Dioxus Connector",
              collapsed: true,
              items: [
                { label: "Overview", slug: "developers/dioxus-connector" },
                { label: "Architecture", slug: "developers/dioxus-connector/architecture" },
                { label: "Installation", slug: "developers/dioxus-connector/getting-started/installation" },
                { label: "Configuration", slug: "developers/dioxus-connector/getting-started/configuration" },
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
      ],
      expressiveCode: {
        themes: ["github-dark", "github-light"],
      },
    }),
  ],
});
