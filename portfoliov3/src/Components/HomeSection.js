import React from "react";
import Slide from "react-reveal/Slide";
import Zoom from 'react-reveal/Zoom';
import TypeWriterEffect from "react-typewriter-effect";

import { FiGithub } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";

function HomeSection() {
  return (
    <div>
      <Slide left>
        <div className="homepage glass">
          <div className="hompage-textContainer">
            <h1 className="hompage-title">Franklin Ume Obiekwe</h1>
            <TypeWriterEffect
              textStyle={{
                fontFamily: "Red Hat Display",
                color: "#fff",
                fontWeight: 500,
                fontSize: "2em",
              }}
              startDelay={2000}
              cursorColor="#3F3D56"
              multiText={[
                "Fullstack Developer",
                "Graphic Designer",
                "Great Guy Overall Really",
                "Fullstack Developer",
                "Graphic Designer",
                "Great Guy Overall Really",
              ]}
              loop={true}
              nextTextDelay={1200}
              typeSpeed={80}
            />
          </div>


          <Zoom bottom cascade>
          <div className="homepage-iconContainer glass">
          <a href="https://github.com/FranklinUmeObi" className="hvr-bounce-in"><FiGithub className="homepage-icon" /></a>
          <a href="https://www.linkedin.com/in/franklinumeobi/" className="hvr-bounce-in"><FiLinkedin className="homepage-icon" /></a>
          <a href="https://www.facebook.com/franklinumeobi99/" className="hvr-bounce-in"><FiFacebook className="homepage-icon" /></a>
          <a href="https://www.instagram.com/franklinumeobi/" className="hvr-bounce-in"><FiInstagram className="homepage-icon" /></a>

          </div>
        </Zoom>

        </div>
      </Slide>
    </div>
  );
}

export default HomeSection;
