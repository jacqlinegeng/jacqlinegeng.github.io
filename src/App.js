import React from "react";
import "./App.css";
import Home from "./Components/home/Home";
import { Header } from "./Components/header/Header";
import About from "./Components/about/About";

const App = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
      </main>
    </>
  );
};

export default App;
