import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/jacqlinegeng/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>

      <a
        href="https://medium.com/@jacqlinegeng"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-notebooks"></i>
      </a>
      <a
        href="https://twitter.com/inthecosmicdust"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-twitter-alt"></i>
      </a>
      <a
        href="https://github.com/jacqlinegeng"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>
      <a
        href="https://linktr.ee/jacqlineee"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-link-alt"></i>
      </a>
    </div>
  );
};

export default Social;
