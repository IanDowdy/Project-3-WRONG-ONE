import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <div>
            <NavLink className="navItem" to="/">Home</NavLink>
            <NavLink className="navItem" to="/about">About</NavLink>
            <NavLink className="navItem" to="/freecode">Free Code</NavLink>
        </div>
    )
};

export default Navigation;