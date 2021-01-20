import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
function NavItem(props) {
    return (
        <Link to={`/#${props.text}`}>
            <button className="navItem">
                <h3 className="navItem-text">{props.text}</h3>
            </button>
        </Link>
    )
}

export default NavItem
