import eslintPluginAstro from "eslint-plugin-astro";
import * as mdx from "eslint-plugin-mdx";

export default [
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs["flat/jsx-a11y-strict"],
  {
    ...mdx.flat,
  },
  {
    ...mdx.flatCodeBlocks,
  },
];
