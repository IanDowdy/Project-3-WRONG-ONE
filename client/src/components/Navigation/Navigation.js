import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <div>
            <nav className="navbar navbar-light" id="blue" style={{ backgroundColor: "#161389" }}>
                <NavLink className="navItem" to="/">Home</NavLink>
                <NavLink className="navItem" id="one" to="/about">About</NavLink>
                <NavLink className="navItem" id="two" to="/freecode">Free Code</NavLink>

            </nav>


        </div>
    )
};

export default Navigation;