import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import GoogleAuth from '../../authentication/GoogleAuth';

const Navigation = () => {
    return (
        <div>
            <nav className="navbar navbar-light" id="blue" style={{ backgroundColor: "#161389" }}>
                <NavLink className="navItem" id="three" to="/">Home</NavLink>
                <NavLink className="navItem" id="one" to="/about">About </NavLink>
                <NavLink className="navItem" id="video" to="/jscript">Video Tutorials</NavLink>

                <NavLink className="navItem" id="resources" to="/resources">Additional Resources</NavLink>
                <NavLink className="navItem" id="two" to="/freecode">Free Code</NavLink>
                
                <GoogleAuth />


            </nav>


        </div>
    )
};

export default Navigation;