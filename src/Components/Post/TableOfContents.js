import React, { useEffect, useState } from "react";
import styles from "../../css/Post.module.css";

function TableOfContents({ headings }) {
  const [activeHeading, setActiveHeading] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
    headingElements.forEach((element) => observer.observe(element));

    return () => {
      headingElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={styles.tocNav}
      style={{
        position: "fixed", // Persistent positioning
        bottom: "1rem", // Positioned at the bottom of the screen
        right: windowWidth > 1400 ? "1rem" : "auto", // Adjust position based on screen width
        left: windowWidth <= 1400 ? "1rem" : "auto", // Adjust position based on screen width
        width: "20%",
        backgroundColor:
          windowWidth <= 1020
            ? "rgba(249, 249, 249, 0)" // Fully transparent on mobile
            : "rgba(249, 249, 249, 0.07)", // Semi-transparent on larger screens
        zIndex: 1000,
        overflowY: "auto",
        maxHeight: "calc(50vh - 2rem)", // Adjusted height for better visibility
        borderRadius: "8px", // Added rounded corners for better aesthetics
        padding: "1rem", // Added padding for better spacing
        visibility: windowWidth <= 1020 ? "hidden" : "visible", // 목차 숨기기 조건 추가
        opacity: windowWidth <= 1020 ? 0 : 1, // 투명도 조정
        transition: "opacity 0.3s ease", // 부드러운 전환 효과 추가
        display: windowWidth <= 1020 ? "none" : "block", // 상태 기반으로 display 설정
      }}
    >
      <h4>목차</h4>
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