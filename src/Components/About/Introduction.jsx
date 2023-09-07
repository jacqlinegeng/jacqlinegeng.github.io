import React from "react";
import "./Introduction.css";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/profile-pic.png";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction" + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hey there, My name is{" "}
                <span className="different">Jacqline Geng</span> and I am from{" "}
                <span className="different">
                  {" "}
                  Vancouver, Canada
                </span>
                  .
                  {" "}
                  I studied Business at{" "}
                <span className="different">
                  University of British Columbia
                </span>
                . Then I taught myself how to code.
              </h4> 
              <h4>Terms that describe me apart from coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                YouTuber{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Consultant{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Writer{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};