import React, { useState } from "react";
import './DarkMode.css';

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // You can save the dark mode preference in local storage or a state management solution like Redux
  };

  if (!isDarkMode) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }

  return (
    <nav className={`navbar ${isDarkMode ? "dark-mode" : ""}`}>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? <i className="uil uil-toggle-off dark-moon"></i> :<i className="uil uil-toggle-on  dark-sun"></i>}
      </button>
    </nav>
  );
};

export default DarkMode;
