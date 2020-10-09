import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';


class Experiences extends Component {
    render() {
        return (
            <div className="experiences-container" style={{paddingTop: "30px", background: "#EFEFEF", padding: "20px"}} id={this.props.id}>
                <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} duration={1.5}>
                    <h1 className="about-title">EXPERIENCES</h1>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} duration={1.5}>
                    <hr style={{width: "90px", border: "1.5px solid black", marginBottom: "60px"}}/>
                </ScrollAnimation>

                <VerticalTimeline className="container">
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="August 2020 - Present"
                        contentStyle={{ borderTop: '3px solid rgb(233, 30, 99)' }}
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#FAFAFA' }}
                        icon=""
                    >
                        <h3 className="vertical-timeline-element-title">B.S. Computer Science</h3>
                        <br />
                        <h4 className="vertical-timeline-element-subtitle" style={{color: "#999"}}>Texas A&M</h4>
                        <h4 className="vertical-timeline-element-subtitle" style={{color: "#999"}}>College Station, TX</h4>
                        <br />
                        <li style={{margin: "10px"}}>Organizations: Aggie Coding Club, Aggie Competitive Programming Club.</li>
                        <li style={{margin: "10px"}}>
                            Relevant Course Work
                            <ul>
                                <li>Linear Algebra</li>
                                <li>Multivariable Calculus</li>
                                <li>Discrete Structures for Computing</li>
                            </ul>
                        </li>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="September 2020 - Present"
                        contentStyle={{ borderTop: '3px solid #00acee' }}
                        iconStyle={{ background: '#00acee', color: '#FAFAFA' }}
                        icon=""
                    >
                        <h3 className="vertical-timeline-element-title">Project Manager</h3>
                        <br />
                        <h4 className="vertical-timeline-element-subtitle" style={{color: "#999"}}>Aggie Coding Club</h4>
                        <h4 className="vertical-timeline-element-subtitle" style={{color: "#999"}}>College Station, TX</h4>
                        <br />
                        <li style={{margin: "10px"}}>Implemented a web application that will automatically register courses for students during class registration.</li>
                        <li style={{margin: "10px"}}>Directed roles and programming tasks to members.</li>
                        <li style={{margin: "10px"}}>Developed using MongoDB, ExpressJS, ReactJS, NodeJS, Python, and Selenium.</li>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="August 2018 - June 2020"
                        contentStyle={{ borderTop: '3px solid rgb(233, 30, 99)' }}
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon=""
                    >
                        <h3 className="vertical-timeline-element-title">High School</h3>
                        <br />
                        <h4 className="vertical-timeline-element-subtitle" style={{color: "#999"}}>Plano West Senior High</h4>
                        <h4 className="vertical-timeline-element-subtitle" style={{color: "#999"}}>Plano, TX</h4>
                        <br />
                        <li style={{margin: "10px"}}>Summa Cum Laude</li>
                        <li style={{margin: "10px"}}>AP Scholar with Distinction.</li>
                        <li style={{margin: "10px"}}>Organizations: Computer Science Club, Artificial Intelligence Club, Robotics Club.</li>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="May 2019 - June 2020"
                        contentStyle={{ borderTop: '3px solid #00acee' }}
                        iconStyle={{ background: '#00acee', color: '#FAFAFA' }}
                        icon=""
                    >
                        <h3 className="vertical-timeline-element-title">Senior Executive Officer</h3>
                        <br />
                        <h4 className="vertical-timeline-element-subtitle" style={{color: "#999"}}>Computer Science Club</h4>
                        <h4 className="vertical-timeline-element-subtitle" style={{color: "#999"}}>Plano, TX</h4>
                        <br />
                        <li style={{margin: "10px"}}>Lectured on advanced algorithms and data-structures that appear frequently in programming contests.</li>
                        <li style={{margin: "10px"}}>Led teams to win at multiple programming competitions including Lockheed Martin CodeQuest.</li>
                        <li style={{margin: "10px"}}>Directed planning and judged a regional programming contest with 150+ participants to encourage involvement in computer science.</li>
                        <li style={{margin: "10px"}}>Interviewed candidates for new officer positions.</li>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        icon=""
                    />
                </VerticalTimeline>
            </div>
        )
    }
}

export default Experiences