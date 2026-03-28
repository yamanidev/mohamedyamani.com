import { execSync } from "child_process";
import { statSync } from "fs";

export function remarkReadingTime() {
  return function (_, file) {
    const content = String(file.value).replace(/^---[\s\S]*?---/, "");
    const wordCount = content.trim().split(/\s+/).filter(Boolean).length;

    file.data.astro.frontmatter.readingTime = Math.max(1, Math.ceil(wordCount / 200));
  };
}

export function remarkModifiedTime() {
  return function (_, file) {
    const filepath = file.history[0];
    const result = execSync(`git log -1 --pretty="format:%cI" "${filepath}"`);

    file.data.astro.frontmatter.lastModified = result.toString();
  };
}
