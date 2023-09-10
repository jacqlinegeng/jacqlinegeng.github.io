import React from "react";

const ProjectDetails = ({ item, onClose }) => {
  return (
    <div className="project__details">
      <div className="project__details-content">
      {/* Close button */}
      <i class="uil uil-times project__details-close"></i>
      {/* <button onClick={onClose}></button> */}
      {/* Project details content */}
      <h2 className="project__details-title">{item.title}</h2>
      <p className="project__details-description">{item.description}</p>
      </div>
     
      
    </div>
  );
};

export default ProjectDetails;
