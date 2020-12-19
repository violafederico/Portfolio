import React from 'react'
import logo from '../assets/image/logo_transparent.png'
function Header() {
    return (
        <header>
            <div className="background" >
                <nav>
                    <a>Home</a>
                    <a>CV</a>
                    <a>About</a>
                    <a>Projects</a>
                    <a>Contact</a>
                </nav>
                <div className="logo" >
                    <img src={logo} alt="logo"/>
                </div>
            </div>
        </header>
    )
}

export default Header
