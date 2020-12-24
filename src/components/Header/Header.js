import React from 'react'
import './Header.css'

import logo from '../../assets/image/logo_transparent.png'
import NavBar from './NavBar'

function Header() {
    return (
        <header className="background" >
            <NavBar/>
            <div className="logo" >
                <img src={logo} alt="logo"/>
            </div>
        </header>
    )
}

export default Header
