import React from "react";
import "./MainPage.css";
import Rotate from "react-reveal/Rotate";

import HomeSection from "./HomeSection";

function MainPage() {
  return (
    <div className="mainpage" id="Home">
      <HomeSection/>

      <Rotate bottom right>
        <div className="homepage glass" id="About">
          <h2>Tewst2</h2>
          <h3>I am a frog</h3>
        </div>
      </Rotate>

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
