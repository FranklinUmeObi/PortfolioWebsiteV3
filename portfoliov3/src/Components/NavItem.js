import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
function NavItem(props) {

const MyIcon = props.icon;
    return (
        <Link to={`/#${props.text}`}>
            <button className="navItem">
                <MyIcon className="navItem-icon"/>
                <h3 className="navItem-text">{props.text}</h3>
            </button>
        </Link>
    )
}

export default NavItem
