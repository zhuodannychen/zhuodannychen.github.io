import React, { Component } from 'react'
import Particles from 'react-particles-js'
import { Link } from "react-scroll"
import ScrollAnimation from 'react-animate-on-scroll'
import Typist from 'react-typist'

class Homepage extends Component {
    render() {
        return (
            <div className="homepage-container" id={this.props.id}>
                <Particles className="particles"
                    params={{
                        "particles": {
                            "number": {
                                "value": 20,
                                "density": {
                                    "enable": false
                                }
                            },
                            "size": {
                                "value": 3,
                                "random": true,
                                "anim": {
                                    "speed": 4,
                                    "size_min": 0.3
                                }
                            },
                            "line_linked": {
                                "enable": true,
                                "opacity": 0.02
                            },
                            "move": {
                                "random": true,
                                "speed": 0.5,
                                "direction": "top",
                                "out_mode": "out"
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "bubble"
                                },
                                "onclick": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            },
                            "modes": {
                                "bubble": {
                                    "distance": 250,
                                    "duration": 2,
                                    "size": 0,
                                    "opacity": 0
                                },
                                "repulse": {
                                    "distance": 400,
                                    "duration": 4
                                }
                            }
                        }
                }} />
                <div className="text-content">
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={3}>
                    <h1>Hi, I am <span>Danny Chen</span>.</h1>
                    <Typist avgTypingDelay={50} stdTypingDelay={15}>
                        <Typist.Delay ms={500} />
                        <span style={{color: "white"}}>I am a web developer and competitive programmer.</span>
                    </Typist>
                    <Link to="about" spy={true} smooth={true} offset={-70} duration={500}><button type="button" className="more-button">View my works <i className="fa fa-arrow-down"></i></button></Link>
                    </ScrollAnimation>
                </div>
            </div>
        )
    }
}

export default Homepage