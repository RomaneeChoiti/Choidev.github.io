import React, { useEffect, useState } from "react";
import styles from "../../css/TableOfContents.module.css";

function TableOfContents({ headings }) {
  const [activeHeading, setActiveHeading] = useState(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveHeading(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px 0px -100% 0px", // Adjusted to focus on the top of the viewport
      threshold: 0, // Element must just enter the viewport
    });

    const headingElements = document.querySelectorAll("[data-heading]");
    headingElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      headingElements.forEach((element) => observer.unobserve(element));
      observer.disconnect(); // Ensure observer is fully disconnected
    };
  }, []);

  return (
    <nav className={styles.tocNav}>
      <h4>목차</h4>
      {headings.length > 0 ? (
        <ul>
          {headings.map((heading, index) => (
            <li
              key={index}
              className={
                activeHeading === `heading-${index}` ? styles.active : ""
              }
            >
              <a
                href={`#heading-${index}`}
                onClick={(e) => {
                  e.preventDefault();
                  const targetElement = document.getElementById(`heading-${index}`);
                  if (targetElement) {
                    targetElement.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  } else {
                    console.warn(`Element with id heading-${index} not found.`);
                  }
                }}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No headings available.</p>
      )}
    </nav>
  );
}

export default TableOfContents;