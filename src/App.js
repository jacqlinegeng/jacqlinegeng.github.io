import React from "react";
import "./App.css";
import Home from "./Components/home/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { Header } from "./Components/header/Header";
import About from "./Components/about/About";
import Project from "./Components/projects/Project";
import DarkMode from "./Components/darkmode/DarkMode";
import Writing from "./Components/writing/Writing";
import Pondering from "./Components/pondering/Pondering";

const App = () => {

  return (
    <Router>
      <Header />

      <main className="main">
        <Home />
        <Routes> {/* Wrap your Routes */}
        <Route path="/project" element={<Project />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/pondering" element={<Pondering />} /> {/* Define route with 'element' prop */}
        <Route path="/" element={<Home />} /> 
      </Routes>
        
        {/* <Pondering /> */}
      </main>
    </Router>
  );
};

export default App;
