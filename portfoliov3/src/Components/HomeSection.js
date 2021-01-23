import React from "react";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import TypeWriterEffect from "react-typewriter-effect";

import Pdf from "../Assets/CV.pdf";

import { FiBookOpen } from "react-icons/fi";


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
              startDelay={1400}
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
          <Zoom bottom>
            <a
              href={Pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="hvr-bounce-in homepage-iconItem"
            >
              <FiBookOpen className="homepage-icon2 glass" />
              <p>My CV</p>
            </a>
          </Zoom>

          
        </div>
      </Slide>
    </div>
  );
}

export default HomeSection;
