import { marked } from "marked";

/**
 * Converts Markdown content to HTML.
 * @param {string} markdown - The Markdown content to convert.
 * @returns {string} - The converted HTML content.
 */
export function markdownToHtml(markdown) {
  return marked(markdown);
}
