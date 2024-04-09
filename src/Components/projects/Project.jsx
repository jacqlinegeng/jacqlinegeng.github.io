import React from "react";
import "./Project.css";
import Projects from './Projects';

const Project = () => {
  return (
    <section className="work section" id='projects'>
      <h2 className="section__title">Currently Pondering</h2>
      <span className="section__subtitle">
        "What you do makes a difference, and you have to decide what kind of
        difference you want to make." ˜ Jane Goodall
      </span>
      <Projects />
    </section>
  )
}

export default Project;