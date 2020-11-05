import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';


class Experiences extends Component {
    render() {
        return (
            <div className="experiences-container" style={{paddingTop: "30px", background: "#EFEFEF", padding: "20px"}} id={this.props.id}>
                <h1 className="about-title">EXPERIENCES</h1>
                <hr style={{width: "90px", border: "1.5px solid black", marginBottom: "60px"}}/>

                <VerticalTimeline className="container">
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="August 2020 - Present"
                        contentStyle={{ borderTop: '3px solid #26acc9' }}
                        iconStyle={{ background: '#26acc9', color: '#FAFAFA' }}
                        icon=""
                    >
                        <h3 className="vertical-timeline-element-title" style={{margin: "15px 0"}}>B.S. Computer Science</h3>
                        <h6 className="vertical-timeline-element-subtitle" style={{color: "#999"}}>Texas A&M</h6>
                        <h6 className="vertical-timeline-element-subtitle" style={{color: "#999", marginBottom: "15px"}}>College Station, TX</h6>
                        <li style={{margin: "3px"}}>Organizations: Aggie Coding Club, Aggie Competitive Programming Club</li>
                        <li style={{margin: "3px"}}>
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
                        contentStyle={{ borderTop: '3px solid #26acc9' }}
                        iconStyle={{ background: '#26acc9', color: '#FAFAFA' }}
                        icon=""
                    >
                        <h3 className="vertical-timeline-element-title" style={{margin: "15px 0"}}>Project Manager, Full-Stack Developer</h3>
                        <h6 className="vertical-timeline-element-subtitle" style={{color: "#999"}}>Aggie Coding Club</h6>
                        <h6 className="vertical-timeline-element-subtitle" style={{color: "#999", marginBottom: "15px"}}>College Station, TX</h6>
                        <li style={{margin: "3px"}}>Created a web application that notifies students when filled courses are available during class registration,saving time and maximizing the chance for students to get a filled course</li>
                        <li style={{margin: "3px"}}>Delegated project tasks and roles to 17 members based on individual strength and interest</li>
                        <li style={{margin: "3px"}}>Tracked project performance to analyze the completion of short and long-term plans</li>
                        <li style={{margin: "3px"}}>Developed using MongoDB, ExpressJS, ReactJS, NodeJS, and Python</li>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="August 2018 - June 2020"
                        contentStyle={{ borderTop: '3px solid #26acc9' }}
                        iconStyle={{ background: '#26acc9', color: '#fff' }}
                        icon=""
                    >
                        <h3 className="vertical-timeline-element-title" style={{margin: "15px 0"}}>High School</h3>
                        <h6 className="vertical-timeline-element-subtitle" style={{color: "#999"}}>Plano West Senior High</h6>
                        <h6 className="vertical-timeline-element-subtitle" style={{color: "#999", marginBottom: "15px"}}>Plano, TX</h6>
                        <li style={{margin: "3px"}}>Summa Cum Laude</li>
                        <li style={{margin: "3px"}}>AP Scholar with Distinction.</li>
                        <li style={{margin: "3px"}}>Organizations: Computer Science Club, Artificial Intelligence Club, Robotics Club</li>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="May 2019 - June 2020"
                        contentStyle={{ borderTop: '3px solid #26acc9' }}
                        iconStyle={{ background: '#26acc9', color: '#FAFAFA' }}
                        icon=""
                    >
                        <h3 className="vertical-timeline-element-title" style={{margin: "15px 0"}}>Senior Executive Officer</h3>
                        <h6 className="vertical-timeline-element-subtitle" style={{color: "#999"}}>Computer Science Club</h6>
                        <h6 className="vertical-timeline-element-subtitle" style={{color: "#999", marginBottom: "15px"}}>Plano, TX</h6>
                        <li style={{margin: "3px"}}>Led teams to win at multiple programming competitions including Lockheed Martin CodeQuest</li>
                        <li style={{margin: "3px"}}>Lectured on advanced algorithms and data-structures that appear frequently in programming contests</li>
                        <li style={{margin: "3px"}}>Planned and judged a regional programming contest with 150+ participants to encourage involvement in computer science</li>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        iconStyle={{ background: '#1b1b1c', color: '#fff' }}
                        icon=""
                    />
                </VerticalTimeline>
            </div>
        )
    }
}

export default Experiences