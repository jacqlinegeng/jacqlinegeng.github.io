import React from "react";
import "./Home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import Footer from "./Footer";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Data />
          <Social />
        </div>
        {/* <ScrollDown /> */}
      </div>
      <Footer />
    </section>
  );
};

export default Home;
