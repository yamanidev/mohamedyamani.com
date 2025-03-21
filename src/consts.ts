// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Mohamed Yamani (yamanidev)";
export const SITE_DESCRIPTION =
  "Hello there! I am Mohamed Yamani, I also go by yamanidev online. I am a software engineer that specializes in front end development. I document my journey by occasionally posting articles of my experiences, tips and thoughts to my blog. This is my personal space online.";
export const TWITTER_HANDLE = "@yamanidev";
export const MY_NAME = "Mohamed Yamani";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;

export const TAGS_MAPPING: Record<string, string> = {
  networking: "Networking",
  basics: "Basics",
  css: "CSS",
  javascript: "JavaScript",
  personal: "Personal",
  learning: "Learning",
  html: "HTML",
  "browser-compatibility": "Browser Compatibility",
  llms: "LLMs",
  ai: "AI",
  nextjs: "Next.js",
  devops: "DevOps",
  linux: "Linux",
  java: "Java",
  miscellaneous: "Miscellaneous",
  python: "Python",
  algorithms: "Algorithms",
  "data-structures": "Data Structures",
  "tips-and-tricks": "Tips & Tricks"
};
