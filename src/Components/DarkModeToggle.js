import { useState, useEffect } from "react";

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const savedMode = localStorage.getItem("darkMode");
      return savedMode === "true";
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    try {
      // Apply the dark mode class to the body
      document.body.classList.toggle("dark-mode", isDarkMode);
      // Save the current mode to localStorage
      localStorage.setItem("darkMode", isDarkMode);
    } catch (e) {
      // ignore
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
      type="button"
      onClick={toggleDarkMode}
      aria-pressed={isDarkMode}
      aria-label={isDarkMode ? 'Disable dark mode' : 'Enable dark mode'}
      style={{ cursor: 'pointer', fontSize: '1rem', background: 'transparent', border: 'none' }}
    >
      {isDarkMode ? "dark" : "light"}
    </button>
  );
}

export default DarkModeToggle;
