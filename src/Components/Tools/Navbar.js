import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const NavBar = () => {

    return (
        <div className="navbar">
            <NavLink to="/patients">Patients</NavLink>
            <NavLink to="/medications">Medications</NavLink>
        </div>
    )

}

export default NavBar