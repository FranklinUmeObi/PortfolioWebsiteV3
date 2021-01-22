import React from "react";
import Rotate from "react-reveal/Rotate";
function StatsSection() {
  return (
    <div className="section">
      <Rotate bottom right>
        <div className="intro glass">
          <h2 className="about-introText">Stats</h2>
        </div>
      </Rotate>
    </div>
  );
}

export default StatsSection;
