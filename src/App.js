import React from "react";
import "./App.css";
import Home from "./Components/home/Home";
import { Header } from "./Components/header/Header";
import About from "./Components/about/About";
import Project from "./Components/projects/Project";
import DarkMode from "./Components/darkmode/DarkMode";
import Writing from "./Components/writing/Writing";
import Pondering from "./Components/pondering/Pondering";

const App = () => {

  return (
    <>
      <Header />

      <main className="main">
        <Home />
        {/* <About /> */}
        <Project />
        <Writing />
        <Pondering />
      </main>
    </>
  );
};

export default App;
