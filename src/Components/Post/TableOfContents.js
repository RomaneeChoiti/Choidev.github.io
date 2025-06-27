import React, { useEffect, useState } from "react";
import styles from "../../css/Post.module.css";

function TableOfContents({ headings }) {
  const [activeHeading, setActiveHeading] = useState(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Intersecting heading:", entry.target.id); // Debugging message
          setActiveHeading(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "-50% 0px -50% 0px", // Adjusted to focus on the center of the viewport
      threshold: 0.1,
    });

    const headingElements = document.querySelectorAll("[data-heading]");
    console.log("Heading elements:", headingElements); // Debugging message
    headingElements.forEach((element) => observer.observe(element));

    return () => {
      headingElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <nav
      className={styles.tocNav}
      style={{
        position: "fixed", // Persistent positioning
        bottom: "1rem", // Positioned at the bottom of the screen
        right: window.innerWidth > 1400 ? "1rem" : "auto", // Adjust position based on screen width
        left: window.innerWidth <= 1400 ? "1rem" : "auto", // Adjust position based on screen width
        width: "20%",
        backgroundColor:
          window.innerWidth <= 1020
            ? "rgba(249, 249, 249, 0)" // Fully transparent on mobile
            : "rgba(249, 249, 249, 0.4)", // Semi-transparent on larger screens
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
        overflowY: "auto",
        maxHeight: "calc(50vh - 2rem)", // Adjusted height for better visibility
        borderRadius: "8px", // Added rounded corners for better aesthetics
      }}
    >
      {headings.length > 0 ? (
        <ul>
          {headings.map((heading, index) => (
            <li
              key={index}
              className={
                activeHeading === `heading-${index}` ? styles.active : ""
              }
              style={{
                fontWeight:
                  activeHeading === `heading-${index}` ? "bold" : "normal",
              }}
            >
              <a
                href={`#heading-${index}`}
                onClick={(e) => {
                  e.preventDefault();
                  const targetElement = document.getElementById(`heading-${index}`);
                  if (targetElement) {
                    targetElement.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
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