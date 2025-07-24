import React, { useEffect, useState } from "react";
import styles from "../../css/TableOfContents.module.css";

function TableOfContents({ headings }) {
  const [activeHeading, setActiveHeading] = useState(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        console.log("Observed element:", entry.target.id); // Log observed element
        console.log("Is intersecting:", entry.isIntersecting); // Log intersection status
        if (entry.isIntersecting) {
          setActiveHeading(entry.target.id);
          console.log("Active heading set to:", entry.target.id); // Log active heading
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px 0px -50% 0px", // Adjusted to detect elements earlier
      threshold: 0, // Element must just enter the viewport
    });

    const headingElements = document.querySelectorAll("[data-heading]");
    headingElements.forEach((element) => {
      console.log("Observing element:", element.id); // Log elements being observed
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