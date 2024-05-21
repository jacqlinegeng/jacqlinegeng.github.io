import React from "react";
import { useNavigate } from "react-router-dom";

const Data = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className="home__data">
      <h1 className="home__title">
        <span onClick={handleNavigate} style={{ cursor: "pointer" }}>
          Jacqline Geng
        </span>
        <div className="home__img"></div>
      </h1>
      <p className="home__description">
        I build and explore everything about the{" "}
        <mark>
          <a
            href="https://www.linkedin.com/posts/luzhangvc_artificialintelligence-humanconsciousness-activity-7133860301438951425-DLmz?utm_source=share&utm_medium=member_desktop
"
            className="animated__link"
          >
            human connection
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 60"
            preserveAspectRatio="none"
            stroke="#CCC9FF"
          >
            <path d="m 3.518915,27.827324 c 55.429038,4.081 111.581115,5.822 167.117815,2.867 22.70911,-1.208 45.39827,-0.601 68.126,-0.778 28.38172,-0.223 56.76078,-1.024 85.13721,-1.33 24.17378,-0.261 48.4273,0.571 72.58114,0.571" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 60"
            preserveAspectRatio="none"
            stroke="#CCC9FF"
          >
            <path d="m 3.518915,27.827324 c 55.429038,4.081 111.581115,5.822 167.117815,2.867 22.70911,-1.208 45.39827,-0.601 68.126,-0.778 28.38172,-0.223 56.76078,-1.024 85.13721,-1.33 24.17378,-0.261 48.4273,0.571 72.58114,0.571" />
          </svg>
        </mark>{" "}
        and{" "}
        <mark>
          <a
            href="https://www.oprah.com/own-podcasts/the-purpose-of-your-life-is-becoming-conscious
"
            className="animated__link"
          >
            human consciousness
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 60"
            preserveAspectRatio="none"
            stroke="#CCC9FF"
          >
            <path d="m 3.518915,27.827324 c 55.429038,4.081 111.581115,5.822 167.117815,2.867 22.70911,-1.208 45.39827,-0.601 68.126,-0.778 28.38172,-0.223 56.76078,-1.024 85.13721,-1.33 24.17378,-0.261 48.4273,0.571 72.58114,0.571" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 60"
            preserveAspectRatio="none"
            stroke="#CCC9FF"
          >
            <path d="m 3.518915,27.827324 c 55.429038,4.081 111.581115,5.822 167.117815,2.867 22.70911,-1.208 45.39827,-0.601 68.126,-0.778 28.38172,-0.223 56.76078,-1.024 85.13721,-1.33 24.17378,-0.261 48.4273,0.571 72.58114,0.571" />
          </svg>
        </mark>
        .
      </p>

      <p className="home__description">
        <p>My ethos:</p>
        <p>‣ learn at a high velocity; speed and direction both matter</p>
        <p>‣ fail fast, learn faster</p>
        <p>
          ‣ don't compare; everyone was dealt a different set of cards, so focus
          on your own hand
        </p>
        <p>‣ optimize for the experience, not the outcome</p>
        <p>‣ maintain a beginner's mindset and embrace humility</p>
        <p>‣ life is an adventure, and love is a conscious choice</p>
        <p>‣ be exotic, be iconic!</p>
      </p>

      <p className="home__description">
        During my 9-5, I am a senior consultant at{" "}
        <a href="https://www2.deloitte.com/ca" className="circle">Deloitte</a>. In my 5-9, I am
        usually found working on my{" "}
        <a href="https://open.spotify.com/show/7ADTUMcMgPYCsVizP1CfSx?si=91169abe7d9a40bd">
          podcast
        </a>{" "}
        about personal growth and my{" "}
        <a href="https://www.empoweredhealthcareconsumer.org/">
          healthcare project
        </a>{" "}
        in demystifying medical bills using LLM. Currently I'm interested in
        neuroscience, mental health, venture capital, and creative writing.
        Previously I crafted technical documentation and curated the developer
        community at <a href="https://thirdweb.com/">thirdweb</a>. I have a
        background in business and information technology. I self-taught coding,
        blockchain development, and psychology.
      </p>

      <p className="home__description">
        I dance, DJ ,{" "}
        <mark>
          <a
            href="https://www.youtube.com/@jacqline
"
            className="animated__link"
          >
            vlog
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 60"
            preserveAspectRatio="none"
            stroke="#CCC9FF"
          >
            <path d="m 3.518915,27.827324 c 55.429038,4.081 111.581115,5.822 167.117815,2.867 22.70911,-1.208 45.39827,-0.601 68.126,-0.778 28.38172,-0.223 56.76078,-1.024 85.13721,-1.33 24.17378,-0.261 48.4273,0.571 72.58114,0.571" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 60"
            preserveAspectRatio="none"
            stroke="#CCC9FF"
          >
            <path d="m 3.518915,27.827324 c 55.429038,4.081 111.581115,5.822 167.117815,2.867 22.70911,-1.208 45.39827,-0.601 68.126,-0.778 28.38172,-0.223 56.76078,-1.024 85.13721,-1.33 24.17378,-0.261 48.4273,0.571 72.58114,0.571" />
          </svg>
        </mark>
        , snowboard, and{" "}
        <mark>
          <a
            href="https://substack.com/@jacqline
"
            className="animated__link"
          >
            write
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 60"
            preserveAspectRatio="none"
            stroke="#CCC9FF"
          >
            <path d="m 3.518915,27.827324 c 55.429038,4.081 111.581115,5.822 167.117815,2.867 22.70911,-1.208 45.39827,-0.601 68.126,-0.778 28.38172,-0.223 56.76078,-1.024 85.13721,-1.33 24.17378,-0.261 48.4273,0.571 72.58114,0.571" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 60"
            preserveAspectRatio="none"
            stroke="#CCC9FF"
          >
            <path d="m 3.518915,27.827324 c 55.429038,4.081 111.581115,5.822 167.117815,2.867 22.70911,-1.208 45.39827,-0.601 68.126,-0.778 28.38172,-0.223 56.76078,-1.024 85.13721,-1.33 24.17378,-0.261 48.4273,0.571 72.58114,0.571" />
          </svg>
        </mark>{" "}
        for fun.
      </p>

      <p className="home__description">
        I am always looking for new adventures, let's be{" "}
        <mark>
          <a
            href="https://linktr.ee/jacqlineee
"
            className="animated__link"
          >
            friends!
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 60"
            preserveAspectRatio="none"
            stroke="#CCC9FF"
          >
            <path d="m 3.518915,27.827324 c 55.429038,4.081 111.581115,5.822 167.117815,2.867 22.70911,-1.208 45.39827,-0.601 68.126,-0.778 28.38172,-0.223 56.76078,-1.024 85.13721,-1.33 24.17378,-0.261 48.4273,0.571 72.58114,0.571" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 60"
            preserveAspectRatio="none"
            stroke="#CCC9FF"
          >
            <path d="m 3.518915,27.827324 c 55.429038,4.081 111.581115,5.822 167.117815,2.867 22.70911,-1.208 45.39827,-0.601 68.126,-0.778 28.38172,-0.223 56.76078,-1.024 85.13721,-1.33 24.17378,-0.261 48.4273,0.571 72.58114,0.571" />
          </svg>
        </mark>{" "}
      </p>
    </div>
  );
};

export default Data;
