import type { Root, Element, Text, ElementContent } from "hast";
import type { Plugin } from "unified";
import { visit } from "unist-util-visit";
import { fromHtml } from "hast-util-from-html";
import { renderMermaidSVG, parseMermaid, THEMES } from "beautiful-mermaid";

const colors = {
  light: THEMES["nord-light"],
  dark: THEMES["nord"],
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
        const shared = {
          transparent: true,
          font: "Inter, sans-serif",
          padding: 48,
          nodeSpacing: 32,
          layerSpacing: 48,
        };
        const lightSvg = renderMermaidSVG(source, {
          ...colors.light,
          ...shared,
        });
        const darkSvg = renderMermaidSVG(source, {
          ...colors.dark,
          ...shared,
        });

        const lightNodes = fromHtml(lightSvg, { fragment: true }).children as ElementContent[];
        const darkNodes = fromHtml(darkSvg, { fragment: true }).children as ElementContent[];

        let direction = "TD";
        try {
          direction = parseMermaid(source).direction;
        } catch { /* fall back to TD */ }

        const wrapper: Element = {
          type: "element",
          tagName: "div",
          properties: { className: ["mermaid-diagram"], dataDirection: direction },
          children: [
            {
              type: "element",
              tagName: "div",
              properties: { className: ["mermaid-light"] },
              children: lightNodes,
            },
            {
              type: "element",
              tagName: "div",
              properties: { className: ["mermaid-dark"] },
              children: darkNodes,
            },
          ],
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
