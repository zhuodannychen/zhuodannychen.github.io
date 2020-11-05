import React, { Component } from "react";
import { Link } from "react-scroll"
import ScrollAnimation from 'react-animate-on-scroll'

class Contact extends Component {
    render() {
        return (
            <div className="contact-container" id={this.props.id}>
                <h1 className="contact-title" style={{color: "white", fontSize: "55px", marginBottom: "0"}}>CONTACT</h1>
                <hr style={{width: "100px", border: "1.5px solid white", marginBottom: "100px"}}></hr>
                
                <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={1.5} offset={250}>
                    <h1 className="contact-text" style={{color: "white", fontFamily: 'Work Sans'}}>What's on your mind?</h1>
                    <h3 className="contact-text" style={{color: "#AAA", fontFamily: 'Work Sans'}}>zhuodannychen [at] gmail.com</h3>
                    <Link to="home" spy={true} smooth={true} offset={-70} duration={500}><button type="button" className="btn footerButton"><i className="fa fa-angle-double-up"></i></button></Link>
                </ScrollAnimation>
                <footer>
                    <div className="social-links">
                        <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={1.5} delay={0} offset={100}>
                            {/*Facebook*/}
                            <div className="c--anim-btn facebook">
                                <a href="https://www.facebook.com/profile.php?id=100011202737974" rel="noopener noreferrer" target="_blank">
                                <span className="c-anim-btn">
                                    <i className="fa fa-facebook" aria-hidden="true"/>
                                </span>
                                <span>
                                    <i className="fa fa-facebook" aria-hidden="true"/>
                                </span>
                                </a>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={1.5} delay={200} offset={100}>
                            {/*Linkedin*/}
                            <div className="c--anim-btn linkedin">
                                <a href="https://www.linkedin.com/in/zhuodannychen/" rel="noopener noreferrer" target="_blank">
                                <span className="c-anim-btn">
                                    <i className="fa fa-linkedin" aria-hidden="true"/>
                                </span>
                                <span>
                                    <i className="fa fa-linkedin" aria-hidden="true"/>
                                </span>
                                </a>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={1.5} delay={400} offset={100}>
                            {/*Youtube*/}
                            <div className="c--anim-btn youtube">
                                <a href="https://www.youtube.com/channel/UC1C-oovRv0v4a48QlIr6hWg?view_as=subscriber" rel="noopener noreferrer" target="_blank">
                                <span className="c-anim-btn">
                                    <i className="fa fa-youtube" aria-hidden="true"/>
                                </span>
                                <span>
                                    <i className="fa fa-youtube" aria-hidden="true"/>
                                </span>
                                </a>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={1.5} delay={600} offset={100}>
                            {/*Github*/}
                            <div className="c--anim-btn github">
                                <a href="https://github.com/zhuodannychen" rel="noopener noreferrer" target="_blank">
                                <span className="c-anim-btn">
                                    <i className="fa fa-github" aria-hidden="true"/>
                                </span>
                                <span>
                                    <i className="fa fa-github" aria-hidden="true"/>
                                </span>
                                </a>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={1.5} delay={1000} offset={100}>
                            {/*Email*/}
                            <div className="c--anim-btn envelope">
                                <a href="mailto:zhuodannychen@gmail.com" rel="noopener noreferrer" target="_blank">
                                <span className="c-anim-btn">
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                </span>
                                <span>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                </span>
                                </a>
                            </div>
                        </ScrollAnimation>
                    </div>
                    <p style={{color: "white", padding: "20px"}}>Zhuo Chen <span style={{color: "#00acee"}}><i className="fa fa-copyright"></i>2020</span></p>
                </footer>
            </div>
        )
    }
}
 
export default Contact 
