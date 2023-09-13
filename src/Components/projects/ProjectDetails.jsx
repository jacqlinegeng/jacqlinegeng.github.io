import React from "react";

const ProjectDetails = ({ item, onClose }) => {

  return (
    <div className="project__details">
      <div className="project__details-content">
        {/* Close button */}
        <i onClick={onClose} className="uil uil-times project__details-close"></i>
        {/* <button onClick={onClose}></button> */}
        {/* Project details content */}
        <h2 className="project__details-title">{item.title}</h2>
        <p className="project__details-description">{item.description}</p>

        <ul className="project__details-info">
          <i className="uil uil-corner-down-right-alt project__details-icon"></i>
          <p className="project__details-link">
            Check out this project {" "}
            <a href={item.link} className="project__details-hyperlink" target="_blank" rel="noopener noreferrer">
              here
            </a>
          </p>
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetails;
