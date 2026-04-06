import { execSync } from "child_process";

const WORDS_PER_MINUTE = 200; // Average reading speed

export function remarkReadingTime() {
  return function (_, file) {
    const content = String(file.value).replace(/^---[\s\S]*?---/, ""); // strip frontmatter

    // Known limitations of this estimate:
    // - MDX import statements (e.g. `import X from "..."`) are counted as words
    // - JSX component tags and their props (e.g. `<TweetEmbed tweetId="123" />`) are counted as words
    // - Markdown syntax tokens (e.g. `##`, `**`, `---`) may be counted as words
    const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
    file.data.astro.frontmatter.readingTime = Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
  };
}

export function remarkModifiedTime() {
  return function (_, file) {
    const filepath = file.history[0];
    const result = execSync(`git log -1 --pretty="format:%cI" "${filepath}"`);
    file.data.astro.frontmatter.lastModified = result.toString();
  };
}
