import React from 'react'
import './Navbar.css';
import avatar from '../Assets/Images/face.png';

import NavItem from "./NavItem.js"

import { BiHomeAlt } from 'react-icons/bi';
import { BiHappyBeaming } from 'react-icons/bi';
import { BiCodeAlt } from 'react-icons/bi';
import { BiBarChartSquare } from 'react-icons/bi';
import { BiEnvelope } from 'react-icons/bi';
import { HashLink as Link } from 'react-router-hash-link';

function Navbar() {
    return (
        <div className="navbar glass">
            <div className="navbar-avatarContainer">
                <div className="navbar-avatarColour">
                    <img src={avatar} alt="Avatar" className="navbar-avatar"/>
                </div>
            </div>
            
            
            <div className="navbar-header">
                <h2 className="navbar-name">Franklin Ume Obiekwe</h2>
                <h3 className="navbar-desc">FullStack Developer</h3>
               </div>
            <div className="navbar-navContainer">
                <Link to={"/#Home"}>
                    <button className="navItem">
                        <BiHomeAlt className="navItem-icon"/>
                        <h3 className="navItem-text">Home</h3>
                    </button>
                </Link>

                <Link to={"/#About"}>
                    <button className="navItem">
                        <BiHappyBeaming className="navItem-icon"/>
                        <h3 className="navItem-text">About</h3>
                    </button>
                </Link>

                <Link to={"/#Portfolio"}>
                    <button className="navItem">
                        <BiCodeAlt className="navItem-icon"/>
                        <h3 className="navItem-text">Portfolio</h3>
                    </button>
                </Link>

                <Link to={"/#Stats"}>
                    <button className="navItem">
                        <BiBarChartSquare className="navItem-icon"/>
                        <h3 className="navItem-text">Stats</h3>
                    </button>
                </Link>

                <Link to={"/#Contact"}>
                    <button className="navItem">
                        <BiEnvelope className="navItem-icon"/>
                        <h3 className="navItem-text">Contact</h3>
                    </button>
                </Link>

            </div>
            
        </div>
    )
}

export default Navbar
