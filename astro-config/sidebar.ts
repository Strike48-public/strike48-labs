import type { StarlightUserConfig } from "@astrojs/starlight/types";

type SidebarItem = NonNullable<StarlightUserConfig["sidebar"]>[number];

function prospectorStudioSidebar(): SidebarItem {
  return {
    label: "Prospector Studio",
    collapsed: true,
    items: [
      { label: "Overview", slug: "prospector-studio" },
      {
        label: "User Guide",
        collapsed: true,
        items: [
          { label: "Getting Started", slug: "prospector-studio/getting-started" },
        ],
      },
      {
        label: "Features",
        collapsed: true,
        items: [
          { label: "Chat Interface", slug: "prospector-studio/guides/chat-interface" },
          { label: "Agents", slug: "prospector-studio/guides/agents" },
          { label: "Knowledge Bases", slug: "prospector-studio/guides/knowledge-bases" },
          { label: "Workflows", slug: "prospector-studio/guides/workflows" },
          { label: "MCP Servers", slug: "prospector-studio/guides/mcp-servers" },
          { label: "Connectors", slug: "prospector-studio/guides/connectors" },
        ],
      },
    ],
  };
}

function strikehubSidebar(): SidebarItem {
  return {
    label: "StrikeHub",
    collapsed: true,
    items: [
      { label: "Overview", slug: "strikehub" },
      {
        label: "User Guide",
        collapsed: true,
        items: [
          { label: "Getting Started", slug: "strikehub/getting-started" },
          { label: "Installation", slug: "strikehub/guides/installation" },
          { label: "Configuration", slug: "strikehub/guides/configuration" },
          { label: "Custom Site URL", slug: "strikehub/guides/custom-site-url" },
        ],
      },
      {
        label: "Features",
        collapsed: true,
        items: [
          { label: "Connectors", slug: "strikehub/guides/connectors" },
        ],
      },
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
  };
}

function kubestudioSidebar(): SidebarItem {
  return {
    label: "KubeStudio",
    collapsed: true,
    items: [
      { label: "Overview", slug: "kubestudio" },
      {
        label: "User Guide",
        collapsed: true,
        items: [
          { label: "Getting Started", slug: "kubestudio/getting-started" },
          { label: "Installation", slug: "kubestudio/guides/installation" },
          { label: "Helm Chart", slug: "kubestudio/guides/helm" },
        ],
      },
      {
        label: "Features",
        collapsed: true,
        items: [
          { label: "Cluster Management", slug: "kubestudio/guides/cluster-management" },
          { label: "Deployments", slug: "kubestudio/guides/deployments" },
        ],
      },
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
  };
}

function pickSidebar(): SidebarItem {
  return {
    label: "Pick",
    collapsed: true,
    items: [
      { label: "Overview", slug: "pick" },
      {
        label: "User Guide",
        collapsed: true,
        items: [
          { label: "Getting Started", slug: "pick/getting-started" },
          { label: "Architecture", slug: "pick/architecture" },
          { label: "Installation", slug: "pick/getting-started/installation" },
          { label: "Helm Chart", slug: "pick/getting-started/helm" },
          { label: "Configuration", slug: "pick/getting-started/configuration" },
        ],
      },
      {
        label: "Features",
        collapsed: true,
        items: [
          { label: "Tools", slug: "pick/guides/marketplace" },
        ],
      },
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
  };
}

function strikekitSidebar(): SidebarItem {
  return {
    label: "StrikeKit",
    collapsed: true,
    items: [
      { label: "Overview", slug: "developers/strikekit" },
      {
        label: "User Guide",
        collapsed: true,
        items: [
          { label: "Getting Started", slug: "developers/strikekit/user-guide/getting-started" },
          { label: "Quick Start", slug: "developers/strikekit/user-guide/quick-start" },
          { label: "Interface Overview", slug: "developers/strikekit/user-guide/interface-overview" },
          { label: "Workflow", slug: "developers/strikekit/user-guide/workflow" },
        ],
      },
      {
        label: "Features",
        collapsed: true,
        items: [
          { label: "Engagements", slug: "developers/strikekit/features/engagements" },
          { label: "Planning", slug: "developers/strikekit/features/planning" },
          { label: "Execution", slug: "developers/strikekit/features/execution" },
          { label: "Objectives", slug: "developers/strikekit/features/objectives" },
          { label: "Targets", slug: "developers/strikekit/features/targets" },
          { label: "Credentials", slug: "developers/strikekit/features/credentials" },
          { label: "Evidence", slug: "developers/strikekit/features/evidence" },
          { label: "Findings", slug: "developers/strikekit/features/findings" },
          { label: "Kill Chain", slug: "developers/strikekit/features/kill-chain" },
          { label: "MITRE ATT&CK", slug: "developers/strikekit/features/mitre-attack" },
          { label: "Timeline", slug: "developers/strikekit/features/timeline" },
          { label: "Network Topology", slug: "developers/strikekit/features/network-topology" },
          { label: "C2", slug: "developers/strikekit/features/c2" },
          { label: "Reports", slug: "developers/strikekit/features/reports" },
          { label: "Notes", slug: "developers/strikekit/features/notes" },
          { label: "Checklists", slug: "developers/strikekit/features/checklists" },
          { label: "Assistant", slug: "developers/strikekit/features/assistant" },
        ],
      },
      {
        label: "Tutorials",
        collapsed: true,
        items: [
          { label: "Overview", slug: "developers/strikekit/tutorials" },
          { label: "Creating Your First Engagement", slug: "developers/strikekit/tutorials/creating-your-first-engagement" },
        ],
      },
    ],
  };
}

function developersSidebar(): SidebarItem {
  return {
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
  };
}

export function sidebar(): SidebarItem[] {
  return [
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
        prospectorStudioSidebar(),
        strikehubSidebar(),
        kubestudioSidebar(),
        pickSidebar(),
        strikekitSidebar(),
      ],
    },
    developersSidebar(),
    {
      label: "Contributing",
      collapsed: true,
      items: [
        { label: "GIF Guidelines", slug: "contributing/gif-guidelines" },
        { label: "GIF Workflow", slug: "contributing/gif-workflow" },
        { label: "VHS Examples", slug: "contributing/vhs-examples" },
      ],
    },
    {
      label: "Legal",
      collapsed: true,
      items: [
        { label: "Developing with Us", slug: "legal/developing-with-us" },
        { label: "Privacy Policy", slug: "legal/privacy-policy" },
        { label: "Terms of Use", slug: "legal/terms-of-use" },
      ],
    },
  ];
}
