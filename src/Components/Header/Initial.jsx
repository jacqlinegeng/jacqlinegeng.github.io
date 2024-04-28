import React, { useState } from "react";
import "./Header.css";
import HomeImg from "../../assets/homeimg.png";

import React from 'react';

const Initial = () => {
  const handleClick = () => {
    console.log('Image clicked!');
  };

  return (
    <div onClick={handleClick}>
      <img src={HomeImg} alt="" className="nav__img"/>
    </div>
  );
};

export default Initial;