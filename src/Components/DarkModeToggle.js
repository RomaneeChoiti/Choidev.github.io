import React, { useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdNightlightRound } from "react-icons/md";

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
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
