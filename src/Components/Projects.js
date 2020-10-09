import React, { Component } from 'react'
import ProjectContainer from './ProjectContainer'
import ScrollAnimation from 'react-animate-on-scroll'
import PWSHInvitational from '../Assets/pwsh_invitational.png'

class Projects extends Component {
    render() {
        return (
            <div className="projects-container" id={this.props.id}>
                <ScrollAnimation animateIn="fadeInRight" animateOnce={true} duration={1.5}>
                    <h1 className="projects-title">PROJECTS</h1>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInRight" animateOnce={true} duration={1.5}>
                    <hr style={{width: "93px", border: "1.5px solid black"}}></hr>
                </ScrollAnimation>
                <div className="project-list">
                    <ProjectContainer 
                        project_name="CLearn" 
                        project_date="July 2020" 
                        madeWith="MongoDB, ExpressJS, ReactJS, NodeJS"
                        project_img="https://forum.gulugule.com/bbs/attachments/month_0905/20090516_4527893091b1a5acbfdeZWiljMLRml0m.jpg"
                        project_body="As I read more Chinese Novels, I realized I was only able to recognize 98% of the characters, so I decided
                        to learn more Chinese characters. There were not a lot of good online resources for learning chinese at the time I built this,
                        so I decided to build a simple web app that keeps track of your progress on the most common 5000 Chinese characters. Each character
                        also includes a link to the definition and examples, so you don't have to google for a character you don't know."
                        github_link="https://github.com/zhuodannychen/Algorithms"
                        demo_link="http://chenlearn.herokuapp.com/"
                    />

                    <ProjectContainer 
                        project_name="Algorithms Library" 
                        project_date="June 2020" 
                        madeWith="C++"
                        project_img="https://cdn.hipwallpaper.com/i/88/23/04bPIt.jpg"
                        project_body="When I started competitive programming, there were a lot of algorithms and data structures that
                        I needed to learn. As I practiced more, I decided to save my implementation somewhere, and that's why I created
                        the algorithms library. 
                        The algorithms library includes some popular algorithms and data structures implemented in C++ that can directly be copied during
                        contests, saving time for implementation."
                        github_link="https://github.com/zhuodannychen/Algorithms"
                    />

                    <ProjectContainer 
                        project_name="Plano West Wolf Invitational" 
                        project_date="February 2020" 
                        madeWith="Java, Python, LaTex"
                        project_img={PWSHInvitational}
                        project_body="Together with Computer Science club at PWSH, I created Valentine themed competitive programming
                        questions on Hackerrank and wrote solutions for them. In addition, I assisted with event management and judging.
                        With 150+ participants, the event encouraged involvement in computer science for high schoolers across all levels."
                        github_link="https://github.com/zhuodannychen/Competitive-Programming/tree/master/Hackerrank/Plano-West-Wolf-Invitational-Contest/2020"
                        demo_link="https://www.hackerrank.com/plano-west-wolf-invitational-advanced-2020"
                    />

                    <ProjectContainer 
                        project_name="Timeline" 
                        project_date="January 2020" 
                        madeWith="HTML, CSS, JavaScript"
                        project_img="https://images.alphacoders.com/210/thumb-350-210593.jpg"
                        project_body="This is my first project! My journey in computer science can be founded here."
                        github_link="https://github.com/zhuodannychen/Timeline/"
                        demo_link="https://zhuodannychen.github.io/Timeline/"
                    />
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <polygon points="100,0 100,10 50,10"
                    style={{fill: "#1b1b1c"}} />
                    <polygon points="0,0 0,10 50,10"
                    style={{fill: "#1b1b1c"}} />
                </svg>
            </div>
        )
    }
}

export default Projects