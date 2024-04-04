import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import DarkMode from "../darkmode/DarkMode";

export const Header = () => {
  /* Toggle Menu */
  const [Toggle, showMenu] = useState(false);
  return (
    <div>
      <header className="header">
        <nav className="nav container">
          <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="#projects" className="nav__link">
                  <i className="uil uil-folder-heart nav__icon"></i> PROJECTS
                </a>
              </li>

              <li className="nav__item">
                <Link to="/writing" className="nav__link">
                  <i className="uil uil-folder-heart nav__icon"></i> WRITING
                </Link>
              </li>

              <li className="nav__item">
                <Link to="/pondering" className="nav__link">
                  <i className="uil uil-folder-heart nav__icon"></i> PONDERING
                </Link>
              </li>

              <li className="nav__darkmode">
                <DarkMode />
              </li>
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
