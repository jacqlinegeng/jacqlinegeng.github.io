import React from "react";
import "./App.css";
import Home from "./Components/home/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { Header } from "./Components/header/Header";
import Project from "./Components/projects/Project";

const App = () => {

  return (
    <Router>
      <Header />

      <main className="main">
        <Routes> 
        <Route path="/pondering" element={<Project />} />
        <Route path="/" element={<Home />} /> 
      </Routes>
        
      </main>
    </Router>
  );
};

export default App;
