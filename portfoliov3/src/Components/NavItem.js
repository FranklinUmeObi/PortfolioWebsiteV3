import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import { BiHomeAlt } from "react-icons/bi";
import { BiHappyBeaming } from "react-icons/bi";
import { BiCodeAlt } from "react-icons/bi";
import { BiBarChartSquare } from "react-icons/bi";
import { BiEnvelope } from "react-icons/bi";
import styled from "styled-components";

const ButtonToggle = styled.button`
  opacity: 1;
  ${({ active }) =>
  active && `
  background-image: rgb(255, 255, 255);
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.7) 0%,
    rgba(255, 255, 255, 0.3) 21%,
    rgba(255, 255, 255, 0.18857965549501055) 100%
  );
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.18);  `}`;

function NavItem(props) {
  let icon;
  if (props.text === "Home") 
    icon = <BiHomeAlt className="navItem-icon" />;
  else if (props.text === "About")
    icon = <BiHappyBeaming className="navItem-icon" />;
  else if (props.text === "Portfolio")
    icon = <BiCodeAlt className="navItem-icon" />;
  else if (props.text === "Stats")
    icon = <BiBarChartSquare className="navItem-icon" />;
  else if (props.text === "Contact")
    icon = <BiEnvelope className="navItem-icon" />;
  else icon = null;

  return (
    <Link to={`/#${props.text}`} style={{ textDecoration: "none" }}>
      <div className="navItem-content">
        <ButtonToggle
          className="navItem "
          active={props.stateActive === props.text}
          onClick={props.click}>
          {icon}
          <p className="navItem-text">{props.text}</p>
        </ButtonToggle>
      </div>
      
    </Link>
  );
}

export default NavItem;
