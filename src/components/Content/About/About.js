import React from 'react'
import { FaReact, FaCss3Alt, FaHtml5, FaJsSquare, FaBootstrap, FaNodeJs } from 'react-icons/fa'
import { DiJqueryLogo } from 'react-icons/di'
import { SiMysql } from 'react-icons/si'

import './About.css'

import me from "../../../assets/image/me.jpg"

function About() {
    return (
        <div className="about">
            <h2>About me</h2>
            <h4>Coding lover</h4>
            <h3>
                Junior web developer in React <FaReact/> HTML5 <FaHtml5/> CSS3 <FaCss3Alt/> JS (JSX) <FaJsSquare/> 
            </h3>
            <div className="content">
                <div className="me">
                    <img src={me} alt="me"/>
                </div>
                <div className="description">
                    <p>
                        Sono uno studente di Informatica presso l'università di Catania in Sicilia ed ho da poco ultimato
                        un corso di formazione di sviluppo fornt-end in React offerto dalla 
                        <a href="https://tree.it/school/" target="_blank"> Tree School </a>.
                    </p>
                    <p>
                        Ho studiato diversi linguaggi dal C/C++ con le strutture dati LIFO/FIFO come Alberi, Pile, Code e Grafi
                        per passare poi a Java con i Servlet e web server e la programmazione distribuita ed nell'ultimo periodo
                        ho maturato interesse per le web app ed ho inziato a lavora con HTML5, CSS3 e JS(ES6).
                    </p>
                    <small>Vedi la sezione <a href="/projects"> Progetti </a> 
                        per vedere nel dettaglio i linguaggi trattati.</small>
                        
                    <div className="skills">
                        <h3>Developers Skills</h3>
                        <div className="container">
                            <div className="barcont"> 
                            <div className="bar" style={{width: "50%"}}>
                                    <div className="progress" ></div>
                                </div>
                                <span className="label" style={{color: "#61DBFB"}}><FaReact/>  React</span>
                            </div>
                            <div className="barcont" >
                                <div className="bar" style={{width: "60%"}}>
                                    <div className="progress" ></div>
                                </div>
                                <span className="label" style={{color: "#e34c26"}}><FaHtml5/>  HTML5  </span>
                            </div>
                            <div className="barcont" >
                                <div className="bar" style={{width: "50%"}}>
                                    <div className="progress" ></div>
                                </div>
                                <span className="label" style={{color: "#ebebeb"}}><FaCss3Alt/> CSS3 </span>
                            </div>
                            <div className="barcont" >
                                <div className="bar" style={{width: "70%"}}>
                                    <div className="progress" ></div>
                                </div>
                                <span className="label" style={{color: "#f0db4f"}}><FaJsSquare/>  JS (JSX) </span>
                            </div>
                            <div className="barcont" >
                                <div className="bar" style={{width: "45%"}}>
                                    <div className="progress" ></div>
                                </div>
                                <span className="label" style={{color: "#563d7c"}}><FaBootstrap/> Boostrap </span>
                            </div>                                                     
                        </div>
                        <div className="container">
                            <div className="barcont"> 
                            <div className="bar" style={{width: "30%"}}>
                                    <div className="progress" ></div>
                                </div>
                                <span className="label" style={{color: "#68A063"}}><FaNodeJs/>  NodeJs</span>
                            </div>
                            <div className="barcont" >
                                <div className="bar" style={{width: "20%"}}>
                                    <div className="progress" ></div>
                                </div>
                                <span className="label" style={{color: "#131B28"}}><DiJqueryLogo/>  jQuery  </span>
                            </div>
                            <div className="barcont" >
                                <div className="bar" style={{width: "35%"}}>
                                    <div className="progress" ></div>
                                </div>
                                <span className="label" style={{color: "#F29111"}}><SiMysql/> MySQL </span>
                            </div>
                            <div className="barcont" >
                                <div className="bar" style={{width: "85%"}}>
                                    <div className="progress" ></div>
                                </div>
                                <span className="label" style={{color: "#f0db4f"}}>  ???? </span>
                            </div>                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
