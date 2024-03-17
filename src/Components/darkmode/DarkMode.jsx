import React, { useState } from "react";
import { Header } from "../header/Header";
import "./DarkMode.css";

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <nav className={`navbar ${isDarkMode ? "light-mode" : "dark-mode"}`}>
      <button className="dark-button" onClick={toggleDarkMode}>
        {isDarkMode ? (
          <i className="uil uil-moon dark-moon"></i>
        ) : (
          <i className="uil uil-sun dark-sun"></i>
        )}
      </button>
    </nav>
  );
};

export default DarkMode;
