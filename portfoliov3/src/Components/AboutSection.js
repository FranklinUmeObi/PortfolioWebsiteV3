import React from "react";
import Rotate from "react-reveal/Rotate";
import Roll from "react-reveal/Roll";
import Bounce from "react-reveal/Bounce";
import "./MainPage.css";

function AboutSection() {
  return (
    <div className="section">
      <Rotate bottom right>
        <div className="intro glass">
          <h2 className="about-introText">About Me</h2>
        </div>
      </Rotate>
      <div className="aboutContainer">
        <Rotate bottom left>
          <div className="about-boxwide glass">
            <div className="about-subTitleContainer">
              <p className="about-subTitle">Introduction</p>
            </div>
            <Bounce bottom cascade>
            <div className="about-text">
            
              <p className="white">
                I am a Computer Science & Business student at Trinity College
                Dublin.
              </p>
              
              <br />
              <p className="white">
                Having experience in multiple programming languages, databases,
                software tools and frameworks, I am always looking for a fun and
                challenging project to work on.
              </p>
            </div>
            </Bounce>
          </div>
        </Rotate>

        <Rotate bottom left>
          <div className="about-box glass ">
            <div className="about-subTitleContainer">
              <p className="about-subTitle">Education</p>
            </div>
            <div className="about-textL">
              <Roll left>
                <div>
                  <h2 className="about-course">Computer Science & Business</h2>
                  <p className="about-trinity">Trinity college Dublin</p>
                  <p className="about-year"> August 2018 - August 2022</p>
                </div>
              </Roll>
            </div>
          </div>
          <div className="about-box glass">
            <div className="about-subTitleContainer">
              <p className="about-subTitle">Skills</p>
            </div>
            <div className="about-text">
              <Roll right cascade>
                <div className="about-skillsContainer">
                  <div className="about-skill glass">
                    <h3>Web Dev</h3>
                  </div>
                  <div className="about-skill glass">
                    <h3>React</h3>
                  </div>
                  <div className="about-skill glass">
                    <h3>Node.js</h3>
                  </div>
                  <div className="about-skill glass">
                    <h3>Java</h3>
                  </div>
                  <div className="about-skill glass">
                    <h3>MySQL</h3>
                  </div>
                  <div className="about-skill glass">
                    <h3>MongoDB</h3>
                  </div>
                  <div className="about-skill glass">
                    <h3>Photoshop</h3>
                  </div>
                  <div className="about-skill glass">
                    <h3>Illustrator</h3>
                  </div>
                </div>
              </Roll>
            </div>
          </div>
        </Rotate>

        <Rotate bottom left>
          <div className="about-boxwide glass">
            <div className="about-subTitleContainer">
              <p className="about-subTitle">Accomplishments</p>
            </div>
            <div className="about-textL">
              <Bounce bottom cascade>
                <ul className="about-textUl">
                  <li className="about-textLi white">
                    <b>2018</b> Institute of Physics, Physics Student Of The
                    Year (at WHS)
                  </li>
                  <li className="about-textLi white">
                    <b>2019</b> Nominated Class Representative class of 2022
                  </li>
                  <li className="about-textLi white">
                    <b>2020</b> Tangent’s LaunchBox Finalist with “ScanE”
                  </li>
                </ul>
              </Bounce>
            </div>
          </div>
        </Rotate>
      </div>
    </div>
  );
}

export default AboutSection;
