export const extractHeadings = (content) => {
    const headingRegex = /<h[1-6][^>]*>(.*?)<\/h[1-6]>/g;
    const headings = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      headings.push({ id: `heading-${headings.length}`, text: match[1].trim() });
    }

    return headings;
  };
