import React from 'react'
import './Footer.css'

import linkedin from '../../assets/image/svg-icon/linkedin.svg'
import github from '../../assets/image/svg-icon/github.svg'
import twitter from '../../assets/image/svg-icon/twitter.svg'
import facebook from '../../assets/image/svg-icon/facebook.svg'

function Footer() {


    return (
        <div className="footer">
            <div>
                <section className="socialtag">
                    <div>
                        <a href="https://www.linkedin.com/in/violafedericodev/" target="_blank" >
                            <img src={linkedin} alt="linkedin"/>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/violafederico" target="_blank" >
                            <img src={github} alt="github"/>
                        </a>
                    </div>
                    <div>
                        <a href="https://twitter.com/f_ede_f" target="_blank" >
                            <img src={twitter} alt="twitter"/>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.facebook.com/fe.viola1993" target="_blank">
                            <img src={facebook} alt="facebook"/>
                        </a>
                    </div>
                </section>
                <small>Developed by <a href="#" >Federico Viola</a></small>
            </div>
        </div>
    )
}

export default Footer
