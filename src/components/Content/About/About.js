import React from 'react'
import { Link } from "react-router-dom";

import { FaReact, FaCss3Alt, FaHtml5, FaJsSquare, FaBootstrap, FaNodeJs, FaJava } from 'react-icons/fa'
import { DiJqueryLogo } from 'react-icons/di'
import { SiMysql } from 'react-icons/si'

import skills from './skill.json'
import './About.css'
import me from "../../../assets/image/me.jpg"

function About() {
    const icons = [ <FaReact/>, <FaHtml5/>, <FaCss3Alt/>, <FaJsSquare/>, 
                    <FaBootstrap/>, <FaNodeJs/>, <DiJqueryLogo/>, <SiMysql/>,
                    <FaJava/> ];
    
    return (
        <div className="about">
            <h2>About me</h2>
            <h4>Coding lover</h4>
            <h3>
                Junior Web Developer in React <FaReact/> HTML5 <FaHtml5/> CSS3 <FaCss3Alt/> JS (JSX) <FaJsSquare/> 
            </h3>
            <div className="content">
                <div className="me">
                    <img src={me} alt="me"/>
                </div>
                <div className="description">
                    <p> Vivo in Sicilia e sono uno studente di Informatica presso l'università di Catania. </p>

                    <p> Ho da poco seguito un corso di formazione per lo sviluppo Fornt-End in React offerto dalla 
                        <a href="https://tree.it/school/" target="_blank" rel="noreferrer"> Tree School </a>.
                    </p>

                    <p>Durante il mio percorso universitario ho studiato il linguaggio C/C++, dalla semantica a come realizzare strutture dati di tipo
                        LIFO/FIFO come Alberi, Pile, Code, Grafi... 
                    </p>

                    <p> Ho appreso il linguaggio Java e le features più recenti come map, stream, reduce, filter..., le Servlet e web server.</p>
                    
                    <p>Ho imparato come realizzare un Database, dalla fase di acquisizione dei requisiti, analisi e redazione delle 
                        specifiche tecniche, per passare poi alla fase di Progettazione Logica e Concettuale, la realizzazione degli Schemi e 
                        la codifica in MySQL.
                    </p>
                    <p></p>

                        
                </div>
            </div>
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
                                    {icons[i]}<span></span>&nbsp;
                                    { skill.nome } </span>
                            </div>
                        )
                    })
                    }
                </div>
                <small>Vedi la sezione  <Link to="/projects"> Projects </Link>
                    per vedere nel dettaglio i linguaggi trattati.</small>
            </div>

        </div>
    )
}

export default About
