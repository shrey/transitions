import React from 'react';
import './navbar.styles.scss'

import Scroll from 'react-scroll';

const Link = Scroll.Link

const NavBar = () => {
    return(
        <div className="navbar">
            <div className="navbar-left">
                Brand Logo


            </div>
            <div className="navbar-right">
            <div className="navbar-item">
                About Me.
            </div>
            <div className="navbar-item">
                About Me.
            </div>
            <div className="navbar-item">
                About Me.
            </div>

            </div>
        </div>
    )
}

export default NavBar;