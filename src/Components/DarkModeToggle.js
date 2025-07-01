import React, { useState, useEffect } from "react";
import { CiLight } from "react-icons/ci";
import { MdNightlightRound } from "react-icons/md";

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Load initial state from localStorage
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true";
  });

  useEffect(() => {
    // Apply the dark mode class to the body
    document.body.classList.toggle("dark-mode", isDarkMode);
    // Save the current mode to localStorage
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  // Immediately apply the dark mode class on initial load
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
  }

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <span
      onClick={toggleDarkMode}
      style={{ cursor: "pointer", fontSize: "1.5rem" }}
    >
      {isDarkMode ? <MdNightlightRound /> : <CiLight />}
    </span>
  );
}

export default DarkModeToggle;
