import React from "react";
import Rotate from "react-reveal/Rotate";
function ContactSection() {
  return (
    <div className="section">
      <Rotate bottom right>
        <div className="intro glass">
          <h2 className="about-introText">Contact Me</h2>
        </div>
      </Rotate>
    </div>
  );
}

export default ContactSection;
