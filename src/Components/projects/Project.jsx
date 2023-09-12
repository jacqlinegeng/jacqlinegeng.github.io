import React from "react";
import "./Project.css";
import Projects from './Projects';

const Project = () => {
  return (
    <section className="work section" id='projects'>
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Check out what I have been pondering on recently</span>
      <Projects />
    </section>
  )
}

export default Project;