import React from 'react'
import { Link } from "react-router-dom";
import './Header.css'

function NavBar() {
    return (
        <div className="navcomp">
            <nav>
                <Link to="/homepage"> Home </Link>
                <Link to="/about"> About </Link>
                <Link to="/cv"> CV </Link>
                <Link to="/projects"> Projects </Link>
                <Link to="/contact"> Contact </Link>
            </nav>
        </div>
    )
}

export default NavBar
