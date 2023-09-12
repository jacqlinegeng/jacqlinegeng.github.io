import React from "react";
import "./App.css";
import Home from "./Components/home/Home";
import { Header } from "./Components/header/Header";
import About from "./Components/about/About";
import Project from "./Components/projects/Project";
import DarkMode from "./Components/darkmode/DarkMode";

const App = () => {
  return (
    <>
      <Header />

      <main className="main">
        <DarkMode />
        <Home />
        <About />
        <Project />
      </main>
    </>
  );
};

export default App;
