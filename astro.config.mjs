import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import { remarkModifiedTime, remarkReadingTime } from "./remark-plugins.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://mohamedyamani.com/",
  markdown: {
    shikiConfig: {
      theme: "github-dark-dimmed",
    },
    remarkPlugins: [remarkModifiedTime, remarkReadingTime],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "append",
          properties: { class: "anchor-link unset", ariaHidden: "true", tabIndex: -1 },
          content: {
            type: "element",
            tagName: "svg",
            properties: {
              xmlns: "http://www.w3.org/2000/svg",
              width: "0.75em",
              height: "0.75em",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "1.5",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "aria-hidden": "true",
            },
            children: [
              {
                type: "element",
                tagName: "path",
                properties: {
                  d: "M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244",
                },
                children: [],
              },
            ],
          },
        },
      ],
    ],
  },
  integrations: [mdx(), sitemap(), tailwind()],
});
