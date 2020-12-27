import React from 'react'
import './Footer.css'

import linkedin from '../../assets/image/svg-icon/linkedin.svg'
import github from '../../assets/image/svg-icon/github.svg'
import twitter from '../../assets/image/svg-icon/twitter.svg'
import facebook from '../../assets/image/svg-icon/facebook.svg'

import { FaReact } from 'react-icons/fa'

function Footer() {


    return (
        <div className="footer">
            <div>
                <small>Contact me</small>
                <section className="socialtag">
                    <div>
                        <a href="https://www.linkedin.com/in/violafedericodev/" rel="noopener noreferrer" target="_blank" >
                            <img src={linkedin} alt="linkedin"/>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/violafederico" rel="noopener noreferrer" target="_blank" >
                            <img src={github} alt="github"/>
                        </a>
                    </div>
                    <div>
                        <a href="https://twitter.com/f_ede_f" rel="noopener noreferrer" target="_blank" >
                            <img src={twitter} alt="twitter"/>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.facebook.com/fe.viola1993" rel="noopener noreferrer" target="_blank">
                            <img src={facebook} alt="facebook"/>
                        </a>
                    </div>
                </section>
                <h4>Made using React <FaReact/> <small>by <a href="/homepage" >Federico Viola</a></small></h4>
            </div>
        </div>
    )
}

export default Footer
