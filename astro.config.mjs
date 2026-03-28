import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import { remarkModifiedTime, remarkReadingTime } from "./remark-modified-time.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://mohamedyamani.com/",
  markdown: {
    shikiConfig: {
      theme: "github-dark-dimmed",
    },
    remarkPlugins: [remarkModifiedTime, remarkReadingTime],
  },
  integrations: [mdx(), sitemap(), tailwind()],
});
