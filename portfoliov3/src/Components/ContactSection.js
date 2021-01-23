import React from "react";
import Rotate from "react-reveal/Rotate";
import Zoom from "react-reveal/Zoom";

import { FiGithub } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";

function ContactSection() {
  return (
    <div className="section">
      <Rotate bottom right>
        <div className="intro glass">
          <h2 className="about-introText">Contact Me</h2>
        </div>
      </Rotate>

      <Zoom top cascade>
          <div className="homepage-iconContainer glass">
            
          <a href="https://github.com/FranklinUmeObi" className="hvr-bounce-in homepage-iconItem">
              <FiGithub className="homepage-icon" />
              <p>Github</p>
              </a>
          <a href="https://www.linkedin.com/in/franklinumeobi/" className="hvr-bounce-in homepage-iconItem">
              <FiLinkedin className="homepage-icon" />
              <p>LinkedIn</p>
              </a>
          <a href="https://www.facebook.com/franklinumeobi99/" className="hvr-bounce-in homepage-iconItem">
              <FiFacebook className="homepage-icon" />
              <p>Facebook</p>
              </a>
          <a href="https://www.instagram.com/franklinumeobi/" className="hvr-bounce-in homepage-iconItem">
              <FiInstagram className="homepage-icon" />
              <p>Instagram</p>
              </a>

          </div>
        </Zoom>

        <div className="glass contactContainer">
        <h2>Or email me</h2>
        <hr/>
        <br/>
        <p>franklinumeobi@gmail.com</p>
        </div>
    </div>
  );
}

export default ContactSection;
