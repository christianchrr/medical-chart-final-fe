import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const NavBar = () => {

    return (
        <div className="navbar">
            <NavLink to="/patients">Patients</NavLink>
            <NavLink to="/medications">Medications</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/thunk">Thunk Patients Example</NavLink>
        </div>
    )

}

export default NavBar