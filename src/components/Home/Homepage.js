import React from 'react'
import { Routes, Route } from "react-router-dom";

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ScrollTop from '../ScrollTop';
import CV from '../Content/CV/CV';
import About from '../Content/About/About';
import Projects from '../Content/Projects/Projects';
import Contact from '../Content/Contact/Contact';

import '../../App.css';

function Homepage() {
    
    return (
        <section>
            <Header/>
            <Routes>
                <Route path="cv" element={<CV/>} />
                <Route path="about" element={<About/>} />
                <Route path="projects" element={<Projects/>} />
                <Route path="contact" element={<Contact/>} />
            </Routes>
            <ScrollTop/>
            <Footer/> 
        </section>
    )
}

export default Homepage
