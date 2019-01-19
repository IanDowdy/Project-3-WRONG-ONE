import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <div>
            <nav className="navbar navbar-light" id="blue" style={{ backgroundColor: "#161389" }}>
                <NavLink className="navItem" id="three" to="/">Home</NavLink>
                <NavLink className="navItem" id="one" to="/about">About <i className="fas fa-code-branch"></i></NavLink>
                <NavLink className="navItem" id="video" to="/jscript">Video Tutorials</NavLink>
                <NavLink className="navItem" id="two" to="/freecode">Free Code</NavLink>

            </nav>


        </div>
    )
};

export default Navigation;