import React from "react";
import { useNavigate } from 'react-router-dom';
import HomeImg from "../../assets/homeimg.png";
import "./Header.css";

const Initial = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <div onClick={handleNavigate} style={{ cursor: 'pointer' }}>
      <img src={HomeImg} alt="Home" className="nav__img" />
    </div>
  );
};

export default Initial;