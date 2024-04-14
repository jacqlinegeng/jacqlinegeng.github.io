import React from "react";
import "./App.css";
import Home from "./Components/home/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { Header } from "./Components/header/Header";
import About from "./Components/about/About";
import Project from "./Components/projects/Project";
import DarkMode from "./Components/darkmode/DarkMode";
import Writing from "./Components/writing/Writing";

const App = () => {

  return (
    <Router>
      <Header />

      <main className="main">
        <Routes> {/* Wrap your Routes */}
        <Route path="/pondering" element={<Project />} />
        {/* <Route path="/writing" element={<Writing />} /> */}
        <Route path="/" element={<Home />} /> 
      </Routes>
        
      </main>
    </Router>
  );
};

export default App;
