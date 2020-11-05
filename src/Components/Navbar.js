import React, { Component } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import Resume from '../Assets/Zhuo_Chen_s_Resume.pdf'

class Navbar extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    
    render() {
        return (
            <nav className='nav' id='navbar'>
                <div className='nav-content'>
                    <ul className='nav-items'>
                        <li className='nav-item'><Link activeClass="active" to="home" spy={true} smooth={true} offset={-72} duration={500}>HOME</Link></li>
                        <li className='nav-item'><Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>ABOUT</Link></li>
                        <li className='nav-item'><Link activeClass="active" to="experiences" spy={true} smooth={true} offset={-70} duration={500}>EXPERIENCES</Link></li>
                        <li className='nav-item'><Link activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500}>PROJECTS</Link></li>
                        <li className='nav-item'><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>CONTACT</Link></li>
                        <a style={{textDecoration: "none"}} className='nav-item' href={Resume} rel="noopener noreferrer" target="_blank">RESUME</a>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar