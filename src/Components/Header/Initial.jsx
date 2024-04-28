import React from "react";
import { useNavigate } from 'react-router-dom';
import HomeImg from "../../assets/homeimg.png";

const Initial = () => {
  const navigate = useNavigate();
  navigate('/');

  return (
    <div onClick={navigate}>
      <img src={HomeImg} alt="Home" className="nav__img" />
    </div>
  );
};

export default Initial;