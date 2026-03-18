import type { Root, Element, Text, ElementContent } from "hast";
import type { Plugin } from "unified";
import { visit } from "unist-util-visit";
import { fromHtml } from "hast-util-from-html";
import { picjs } from "@strike48/picjs";

const picjsStyles = `
.picjs-example {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: flex-start;
}
.picjs-example > * {
  flex: 1 1 0%;
  min-width: 18rem;
}
.picjs-example .picjs-source {
  margin: 0;
  overflow-x: auto;
}
.picjs-stacked {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.picjs-stacked .picjs-source {
  margin: 0;
  overflow-x: auto;
}
.picjs-source code {
  line-height: 1.3;
  font-size: calc(1em - 1pt);
}
.picjs-diagram svg {
  width: 100%;
  height: auto;
}
`;

const strike48Picjs: Plugin<[], Root> = () => {
  return async (tree) => {

    const replacements: { parent: Element; index: number; nodes: Element[] }[] =
      [];
    let hasExample = false;

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
            c === "language-picjs" ||
            c === "picjs" ||
            (typeof c === "string" && c.includes("language-picjs"))
        )
      )
        return;

      // Parse meta string for options (e.g. ```picjs example width=600px)
      const meta = (code.properties?.metastring ?? code.data?.meta ?? "") as string;
      const isStacked = /\bstacked\b/.test(meta);
      const isExample = !isStacked && /\bexample\b/.test(meta);
      const widthMatch = meta.match(/\bwidth=(\S+)/);
      const width = widthMatch ? widthMatch[1] : null;
      const svgWidthMatch = meta.match(/\bsvgwidth=["']?([^"'\s]+)/);
      const svgWidth = svgWidthMatch ? svgWidthMatch[1] : null;

      const source = extractText(code);
      if (!source.trim()) return;

      try {
        const result = picjs(source);
        if (result.isError) {
          reportError(result.svg, parent, index, replacements);
          return;
        }

        const svgNodes = fromHtml(result.svg, { fragment: true }).children as ElementContent[];

        const containerStyle = width ? `width: ${width}` : undefined;

        let diagramChildren: ElementContent[] = svgNodes;
        if (svgWidth) {
          diagramChildren = [{
            type: "element",
            tagName: "div",
            properties: { style: `width: ${svgWidth}; margin: 0 auto` },
            children: svgNodes,
          }];
        }

        const diagramNode: Element = {
          type: "element",
          tagName: "div",
          properties: { className: ["picjs-diagram"] },
          children: diagramChildren,
        };

        let wrapper: Element;

        if (isExample || isStacked) {
          hasExample = true;
          const sourceNode: Element = {
            type: "element",
            tagName: "pre",
            properties: { className: ["picjs-source"] },
            children: [{
              type: "element",
              tagName: "code",
              properties: {},
              children: [{ type: "text", value: source }],
            }],
          };

          wrapper = {
            type: "element",
            tagName: "div",
            properties: {
              className: [isStacked ? "picjs-stacked" : "picjs-example"],
              ...(containerStyle && { style: containerStyle }),
            },
            children: [sourceNode, diagramNode],
          };
        } else {
          wrapper = {
            type: "element",
            tagName: "div",
            properties: {
              className: ["picjs-diagram"],
              ...(containerStyle && { style: containerStyle }),
            },
            children: diagramChildren,
          };
        }

        replacements.push({
          parent: parent as Element,
          index,
          nodes: [wrapper],
        });
      } catch (err) {
        console.warn(
          `[@strike48/picjs] Failed to render diagram: ${(err as Error).message}`
        );
      }
    });

    // Apply replacements in reverse order to preserve indices
    for (const { parent, index, nodes } of replacements.reverse()) {
      parent.children.splice(index, 1, ...nodes);
    }

    if (hasExample) {
      tree.children.unshift({
        type: "element",
        tagName: "style",
        properties: {},
        children: [{ type: "text", value: picjsStyles }],
      } as Element);
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

function reportError(msg: string, parent: Element, index: number, replacements: { parent: Element; index: number; nodes: Element[] }[]) {
  const errorChildren = fromHtml(msg, { fragment: true }).children as ElementContent[];
  const errorNode: Element = {
    type: "element",
    tagName: "div",
    properties: { className: ["picjs-error"] },
    children: errorChildren,
  };

  replacements.push({
    parent,
    index,
    nodes: [errorNode],
  });
}
export default strike48Picjs;
