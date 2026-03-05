import type { Root, Element, Text, ElementContent } from "hast";
import type { Plugin } from "unified";
import { visit } from "unist-util-visit";
import { fromHtml } from "hast-util-from-html";
import { renderMermaidSVG, parseMermaid } from "beautiful-mermaid";

// Use daisyUI CSS variable references so diagrams auto-adapt to the active theme.
// beautiful-mermaid embeds these as inline styles on the <svg> element;
// the browser's CSS cascade resolves them at runtime.
const themeColors = {
  bg:      "var(--color-base-100, #0f172a)",
  fg:      "var(--color-base-content, #f1f5f9)",
  accent:  "var(--color-primary, #2563eb)",
  muted:   "var(--color-neutral-content, #94a3b8)",
  surface: "var(--color-base-200, #1e293b)",
  border:  "var(--color-neutral, #334155)",
  line:    "var(--color-neutral, #334155)",
};

const rehypeMermaid: Plugin<[], Root> = () => {
  return async (tree) => {

    const replacements: { parent: Element; index: number; nodes: Element[] }[] =
      [];

    visit(tree, "element", (node: Element, index, parent) => {
      if (
        node.tagName !== "pre" ||
        index === undefined ||
        index === null ||
        !parent
      )
        return;

      const code = node.children.find(
        (c): c is Element => c.type === "element" && c.tagName === "code"
      );
      if (!code) return;

      const className = code.properties?.className;
      const classes = Array.isArray(className) ? className : [];
      if (
        !classes.some(
          (c) =>
            c === "language-mermaid" ||
            c === "mermaid" ||
            (typeof c === "string" && c.includes("language-mermaid"))
        )
      )
        return;

      const source = extractText(code);
      if (!source.trim()) return;

      try {
        const svg = renderMermaidSVG(source, {
          ...themeColors,
          transparent: true,
          font: "Inter, sans-serif",
          padding: 48,
          nodeSpacing: 32,
          layerSpacing: 48,
        });

        const svgNodes = fromHtml(svg, { fragment: true }).children as ElementContent[];

        let direction = "TD";
        try {
          direction = parseMermaid(source).direction;
        } catch { /* fall back to TD */ }

        const wrapper: Element = {
          type: "element",
          tagName: "div",
          properties: { className: ["mermaid-diagram"], dataDirection: direction },
          children: svgNodes,
        };

        replacements.push({
          parent: parent as Element,
          index,
          nodes: [wrapper],
        });
      } catch (err) {
        console.warn(
          `[rehype-mermaid] Failed to render diagram: ${(err as Error).message}`
        );
      }
    });

    // Apply replacements in reverse order to preserve indices
    for (const { parent, index, nodes } of replacements.reverse()) {
      parent.children.splice(index, 1, ...nodes);
    }
  };
};

function extractText(node: Element | Text): string {
  if (node.type === "text") return (node as Text).value;
  if ("children" in node) {
    return (node.children as (Element | Text)[]).map(extractText).join("");
  }
  return "";
}

export default rehypeMermaid;
