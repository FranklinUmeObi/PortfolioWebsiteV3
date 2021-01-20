import React from "react";
import "./MainPage.css";
import Rotate from "react-reveal/Rotate";

import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";

function MainPage() {
  return (
    <div className="mainpage" id="Home">
      <HomeSection/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <AboutSection/>

      

      <Rotate bottom left>
        <div className="homepage glass" id="About">
          <h2>Spider</h2>
          <h3>Bread</h3>
        </div>
      </Rotate>
    </div>
  );
}

export default MainPage;
