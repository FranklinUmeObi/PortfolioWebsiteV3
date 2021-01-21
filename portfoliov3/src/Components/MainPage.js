import React from "react";
import "./MainPage.css";
import Rotate from "react-reveal/Rotate";

import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";

function MainPage() {
  return (
    <div className="mainpage" id="Home">
      <HomeSection />

      <div className="sectionBreak" />
      <div className="sectionBreakAnchor" id="About" />

      <AboutSection />

      <div className="sectionBreak" />
      <div className="sectionBreakAnchor" id="Portfolio" />

      <Rotate bottom left>
        <div className="homepage glass">
          <h2>Portfolio</h2>
          <h3>PlaceHolder</h3>
        </div>
      </Rotate>
    </div>
  );
}

export default MainPage;
