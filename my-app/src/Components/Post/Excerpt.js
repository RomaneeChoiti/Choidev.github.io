import React from "react";

function Excerpt({ content, length }) {
  const getExcerpt = (content, length = 100) => {
    const parser = new DOMParser();
    const parsedDocument = parser.parseFromString(content, "text/html");
    const textContent = parsedDocument.body.textContent || "";

    if (textContent.length > length) {
      return textContent.substring(0, length) + "...";
    }
    return textContent;
  };

  return (
    <p
      dangerouslySetInnerHTML={{
        __html: getExcerpt(content, length),
      }}
    />
  );
}

export default Excerpt;