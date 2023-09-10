import React from "react";
import { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const WorkItems = ({item}) => {
  const [isDetailsVisible, setDetailsVisible] = useState(false);
  const handleViewMoreClick = () => {
    setDetailsVisible(true);
  };

  const handleCloseDetails = () => {
    setDetailsVisible(false);
  };

  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className='work__img' />
      <h3 className="work__title">{item.title}</h3>
      <button className="work__button" onClick={handleViewMoreClick}>
        View More <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </button>

      {/* Render the ProjectDetailsCard if it's visible */}
      {isDetailsVisible && (
        <ProjectDetails item={item} onClose={handleCloseDetails} />
      )}
    </div>
  )
}

export default WorkItems;