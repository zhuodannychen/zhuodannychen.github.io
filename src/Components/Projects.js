import React, { Component } from 'react'
import ProjectContainer from './ProjectContainer'
// import ScrollAnimation from 'react-animate-on-scroll'
import PWSHInvitational from '../Assets/pwsh_invitational.png'
import StockImage from '../Assets/stock.png'
import ChineseWord from '../Assets/chinese_calligraphy.jpeg'

class Projects extends Component {
    render() {
        return (
            <div className="projects-container" id={this.props.id}>
                <h1 className="projects-title">PROJECTS</h1>
                <hr style={{width: "93px", border: "1.5px solid black"}}></hr>

                <div className="container">
                    <hr className="separator"/>
                    <ProjectContainer 
                        project_name="StockBot" 
                        project_date="September 2020" 
                        madeWith="Python, Tensorflow"
                        project_img={StockImage}
                        project_body="Financial illiteracy is an increasingly problem among college students. A discord bot
                        can allow easier communication and sharing of resources to learn more about the market."
                        github_link="https://github.com/zhuodannychen/StockBot"
                    />

                    <ProjectContainer 
                        project_name="CLearn" 
                        project_date="July 2020" 
                        madeWith="MongoDB, ExpressJS, ReactJS, NodeJS"
                        project_img={ChineseWord}
                        project_body="As I read more Chinese Novels, I realized I was only able to recognize 98% of the characters, so I decided
                        to learn more Chinese characters. CLearn allows the user to keep track of your progress on the most common 5000 Chinese characters."
                        github_link="https://github.com/zhuodannychen/Algorithms"
                        demo_link="http://chenlearn.herokuapp.com/"
                    />

                    <ProjectContainer 
                        project_name="Plano West Wolf Invitational" 
                        project_date="February 2020" 
                        madeWith="Java, Python, LaTeX"
                        project_img={PWSHInvitational}
                        project_body="A Valentine themed competitive programming
                        contest on Hackerrank. Along with the PWSH CS club, I assisted with creating problems, solutions, and managing the event."
                        github_link="https://github.com/zhuodannychen/Competitive-Programming/tree/master/Hackerrank/Plano-West-Wolf-Invitational-Contest/2020"
                        demo_link="https://www.hackerrank.com/plano-west-wolf-invitational-advanced-2020"
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