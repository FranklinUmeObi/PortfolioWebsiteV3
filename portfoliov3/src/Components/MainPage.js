import React from "react";
import "./MainPage.css";

import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import PortfolioSection from "./PortfolioSection";
import StatsSection from "./StatsSection";
import ContactSection from "./ContactSection";

function MainPage() {
  return (
    <div className="mainpage" id="Home">
      <HomeSection />

      <div className="sectionBreak" />
      <div className="sectionBreakAnchor" id="About" />

      <AboutSection />

      <div className="sectionBreak" />
      <div className="sectionBreakAnchor" id="Portfolio" />

      <PortfolioSection />

      <div className="sectionBreak" />
      <div className="sectionBreakAnchor" id="Stats" />

      <StatsSection />

      <div className="sectionBreak" />
      <div className="sectionBreakAnchor" id="Stats" />

      <ContactSection />

      <div className="sectionBreak" />
      <div className="sectionBreakAnchor" id="Stats" />

    </div>
  );
}

export default MainPage;
