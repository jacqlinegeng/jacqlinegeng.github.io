import React, { useState } from "react";
import "./Header.css";
import DarkMode from "../darkmode/DarkMode";

export const Header = () => {
  /* Toggle Menu */
  const [Toggle, showMenu] = useState(false);
  return (
    <div>
      <header className="header">
        <nav className="nav container">
          {/* <a href="index.html" className="nav__logo">
            My Portfolio
          </a> */}

          <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list grid">
              {/* <li className="nav__item">
                <a href="#home" className="nav__link active-link">
                  <i className="uil uil-estate nav__icon"></i> home
                </a>
              </li> */}

              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i className="uil uil-user nav__icon"></i> ABOUT
                </a>
              </li>

              <li className="nav__item">
                <a href="#projects" className="nav__link">
                  <i className="uil uil-folder-heart nav__icon"></i> PROJECTS
                </a>
              </li>

              <DarkMode />
            </ul>

            <i
              className="uil uil-times nav__close"
              onClick={() => showMenu(!Toggle)}
            ></i>
          </div>

          <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
            <i className="uil uil-apps"></i>
          </div>
        </nav>
      </header>
    </div>
  );
};
