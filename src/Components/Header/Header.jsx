import React, { useState } from "react";
import "./Header.css";

export const Header = () => {
  /* Toggle Menu */
  const [Toggle, showMenu] = useState(false);
  return (
    <div>
      <header className="header">
        <nav className="nav container">
          <a href="index.html" className="nav__logo">
            My Portfolio
          </a>

          <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="#home" className="nav__link active-link">
                  <i className="uil uil-estate nav__icon"></i> Home
                </a>
              </li>

              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i className="uil uil-user nav__icon"></i> About
                </a>
              </li>

              <li className="nav__item">
                <a href="#projects" className="nav__link">
                  <i className="uil uil-folder-heart nav__icon"></i> Projects
                </a>
              </li>

              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="uil uil-message nav__icon"></i> Contact
                </a>
              </li>
            </ul>

            <i
              class="uil uil-times nav__close"
              onClick={() => showMenu(!Toggle)}
            ></i>
          </div>

          <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
            <i class="uil uil-apps"></i>
          </div>
        </nav>
      </header>
    </div>
  );
};
