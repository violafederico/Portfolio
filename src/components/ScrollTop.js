import React, { useState, useEffect} from 'react'
import {FaArrowCircleUp} from 'react-icons/fa';
import './Footer/Footer.css'


function ScrollTop() {
    const [show, setshow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', checkPosition);
        return () => {
            window.removeEventListener('scroll', checkPosition);
        }
    })

    const checkPosition = () => {
        if(!show && window.pageYOffset > 365) setshow(true)
        else if(show && window.pageYOffset <= 365) setshow(false)
    }

    const scrollTop = () => {
        window.scrollTo({top:0, behavior:'smooth'});
    }

    return (
        <FaArrowCircleUp className="scrollTop" 
                        onClick={scrollTop} 
                        style={{height: 40, display: show ? 'flex' : 'none'}}/>
    )
}

export default ScrollTop
