// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Mohamed Yamani | Front-End Software Engineer";
export const SITE_DESCRIPTION =
  "Hello there! I am Mohamed Yamani, I also go by yamanidev online. I am a software engineer that specializes in front end development. I document my journey by occasionally posting articles of my experiences, tips and thoughts to my blog. This is my personal space online.";
export const TWITTER_HANDLE = "@yamanidev";
export const MY_NAME = "Mohamed Yamani";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;

export const BLOG_CATEGORIES: Record<string, { label: string; slug: string }> = {
  networking: {
    slug: "networking",
    label: "Networking",
  },
  basics: {
    slug: "basics",
    label: "Basics",
  },
  css: {
    slug: "css",
    label: "CSS",
  },
  javascript: {
    slug: "javascript",
    label: "JavaScript",
  },
  personal: {
    slug: "personal",
    label: "Personal",
  },
  learning: {
    slug: "learning",
    label: "Learning",
  },
  html: {
    slug: "html",
    label: "HTML",
  },
  "browser-compatibility": {
    slug: "browser-compatibility",
    label: "Browser Compatibility",
  },
  llms: {
    slug: "llms",
    label: "LLMs",
  },
  ai: {
    slug: "ai",
    label: "AI",
  },
  nextjs: {
    slug: "nextjs",
    label: "Next.js",
  },
  devops: {
    slug: "devops",
    label: "DevOps",
  },
  linux: {
    slug: "linux",
    label: "Linux",
  },
  java: {
    slug: "java",
    label: "Java",
  },
  miscellaneous: {
    slug: "miscellaneous",
    label: "Miscellaneous",
  },
  python: {
    slug: "python",
    label: "Python",
  },
  algorithms: {
    slug: "algorithms",
    label: "Algorithms",
  },
  "data-structures": {
    slug: "data-structures",
    label: "Data Structures",
  },
  "tips-and-tricks": {
    slug: "tips-and-tricks",
    label: "Tips & Tricks",
  },
  "web-development": {
    slug: "web-development",
    label: "Web Development",
  },
};
