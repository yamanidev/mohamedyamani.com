// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Mohamed Yamani';
export const SITE_DESCRIPTION =
  'Hello there! I am Mohamed Yamani, I also go by yamanidev online. I am a software engineer that specializes in front end development. I document my journey by occasionally posting articles of my experiences, tips and thoughts to my blog. This is my personal space online.';
export const TWITTER_HANDLE = '@yamanidev';
export const MY_NAME = 'Mohamed Yamani';

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
