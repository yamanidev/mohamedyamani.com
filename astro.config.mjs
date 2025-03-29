import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import { remarkModifiedTime } from "./remark-modified-time.mts";

// https://astro.build/config
export default defineConfig({
  site: "https://mohamedyamani.com/",
  markdown: {
    shikiConfig: {
      theme: "github-dark-dimmed"
    },
    remarkPlugins: [remarkModifiedTime]
  },
  integrations: [mdx(), sitemap(), tailwind()]
});
