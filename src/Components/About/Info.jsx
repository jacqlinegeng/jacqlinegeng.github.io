import React from 'react';

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
      <i class="uil uil-award about__icon"></i>
        <h3 className="about__title">Background</h3>
        <span className="about__subtitle">Currently @ Deloitte OMNIA AI, previously thirdweb (blockchain startup). Exploring everything in healthtech + AI</span>
      </div>

      <div className="about__box">
      <i class="uil uil-briefcase-alt about__icon"></i>
        <h3 className="about__title">Expertise</h3>
        <span className="about__subtitle">Built 5+ projects in blockchain, healthcare, and AI</span>
      </div>
    </div>
  )
}

export default Info;