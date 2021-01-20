import React from 'react'
import './Navbar.css';
import avatar from '../Assets/Images/face.png';

import NavItem from "./NavItem.js"

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
                <NavItem text={"Home"}/>
            </div>
            
        </div>
    )
}

export default Navbar
