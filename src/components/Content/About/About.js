import React from 'react'
import { Link } from "react-router-dom";

import { FaReact, FaCss3Alt, FaHtml5, FaJsSquare, FaBootstrap, FaNodeJs } from 'react-icons/fa'
import { DiJqueryLogo } from 'react-icons/di'
import { SiMysql } from 'react-icons/si'

import skills from './skill.json'
import './About.css'
import me from "../../../assets/image/me.jpg"

function About() {
    const icons = [ <FaReact/>, <FaHtml5/>, <FaCss3Alt/>, <FaJsSquare/>, <FaBootstrap/>, <FaNodeJs/>, <DiJqueryLogo/>, <SiMysql/> ];
    
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
                        Vivo in Sicilia e sono uno studente di Informatica presso l'università di Catania.
                    </p>
                    <p> Ho da poco seguito un corso di formazione in sviluppo fornt-end in React offerto dalla 
                        <a href="https://tree.it/school/" target="_blank" rel="noreferrer"> Tree School </a>.</p>
                    <p>
                        Ho studiato diversi linguaggi dal C/C++ con le strutture dati LIFO/FIFO come Alberi, Pile, Code e Grafi
                        per passare poi a Java con i Servlet e web server e la programmazione distribuita ed nell'ultimo periodo
                        ho maturato interesse per le web app ed ho inziato a lavora con HTML5, CSS3 e JS(ES6).
                    </p>
                    <small>Vedi la sezione  <Link to="/projects"> Projects </Link>
                        per vedere nel dettaglio i linguaggi trattati.</small>
                        
                    <div className="skills">
                        <h3>Developers Skills</h3>
                        <div className="container">
                            {   skills.map( (skill, i) => {
                                return (
                                    <div key={i} className="barcont" >
                                        <div className="bar" style={{width: skill.livello}}>
                                            <div className="progress" ></div>
                                        </div>
                                       <span className="label" style={{color: skill.colore}}>
                                            {icons[i]}<span> &nbsp; </span>
                                           { skill.nome } </span>
                                    </div>
                                )
                            })
                                
                            }
                            {/* <div className="barcont"> 
                            <div className="bar" style={{width: "50%"}}>
                                    <div className="progress" ></div>
                                </div>
                                <span className="label" style={{color: "#61DBFB"}}><FaReact/>  React</span>
                            </div>
                            <div className="barcont" >
                                <div className="bar" style={{width: ""}}>
                                    <div className="progress" ></div>
                                </div>
                                <span className="label" style={{color: ""}}>    </span>
                            </div>
                            <div className="barcont" >
                                <div className="bar" style={{width: ""}}>
                                    <div className="progress" ></div>
                                </div>
                                <span className="label" style={{color: ""}}> </span>
                            </div>
                            <div className="barcont" >
                                <div className="bar" style={{width: ""}}>
                                    <div className="progress" ></div>
                                </div>
                                <span className="label" style={{color: ""}}>   </span>
                            </div>
                            <div className="barcont" >
                                <div className="bar" style={{width: ""}}>
                                    <div className="progress" ></div>
                                </div>
                                <span className="label" style={{color: ""}}></span>
                            </div>                                                     
                        </div>
                        <div className="container">
                            <div className="barcont"> 
                            <div className="bar" style={{width: ""}}>
                                    <div className="progress" ></div>
                                </div>
                                <span className="label" style={{color: ""}}>  </span>
                            </div>
                            <div className="barcont" >
                                <div className="bar" style={{width: ""}}>
                                    <div className="progress" ></div>
                                </div>
                                <span className="label" style={{color: ""}}>    </span>
                            </div>
                            <div className="barcont" >
                                <div className="bar" style={{width: ""}}>
                                    <div className="progress" ></div>
                                </div>
                                <span className="label" style={{color: ""}}> </span>
                            </div>
                            <div className="barcont" >
                                <div className="bar" style={{width: "85%"}}>
                                    <div className="progress" ></div>
                                </div>
                                <span className="label" style={{color: "#f0db4f"}}>  ???? </span>
                            </div>                            */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
