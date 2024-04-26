import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import DarkMode from "../darkmode/DarkMode";

export const Header = () => {
  const [Toggle, showMenu] = useState(false);
  return (
    <div>
      <header className="header">
        <nav className="nav container">
          <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="/pondering" className="nav__link">
                  <i className="uil uil-folder-heart nav__icon"></i> PONDERING
                </a>
              </li>
              <li className="nav__item">
                <a href="/writing" className="nav__link">
                  <i className="uil uil-folder-heart nav__icon"></i> WRITING
                </a>
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
