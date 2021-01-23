import React, { useState } from 'react';
import Slide from 'react-reveal/Slide';

import './Navbar.css';

import avatar from '../Assets/Images/face.png';
import NavItem from "./NavItem.js"



const nav = ['Home', 'About', 'Portfolio', 'Stats', 'Contact'];

function Navbar() {

    const [active, setActive] = useState(nav[0]);


    return (
        <Slide left>
          <div className="navbar glass">
            <div className="navbar-avatarContainer">
                <div className="navbar-avatarColour glass">
                    <img src={avatar} alt="Avatar" className="navbar-avatar"/>
                </div>
            </div>
            <div className="navbar-header">
                <h2 className="navbar-name">Franklin Ume Obiekwe</h2>
                <h3 className="navbar-desc">FullStack Developer</h3>
               </div>
            <div className="navbar-navContainer">

            {nav.map(type => (<NavItem 
                key={type} nav={nav} stateActive={active}
                click={() => setActive(type)} text={type}>
                {type}</NavItem>))}

                {/* <NavItem text="Home"/>
                <NavItem text="About"/>
                <NavItem text="Portfolio"/>
                <NavItem text="Stats"/>
                <NavItem text="Contact"/> */}


            </div>
            
        </div>
        </Slide>
        
    )
}

export default Navbar
