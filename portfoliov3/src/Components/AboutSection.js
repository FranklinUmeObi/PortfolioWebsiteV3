import React from "react";
import Rotate from "react-reveal/Rotate";
import "./MainPage.css";


function AboutSection() {
  return (
    <div className="about" id="about">
      <Rotate bottom right>
        <div className="about-intro glass">
          <h2 className="about-introText">About Me</h2>
        </div>
      </Rotate>
    </div>
  );
}

export default AboutSection;
