import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

class ProjectContainer extends Component {
    render() {
        return (
            <div>
                <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={1.5}>
                    <div className="row">
                        <div className="col-4 d-flex align-items-center">
                            <img alt="project-img" className="project-comp-img" style={{float: "left"}} src={this.props.project_img} />
                        </div>

                        <div className="col-8">
                            <p className="project-comp-title">{this.props.project_name} <span>{this.props.project_date}</span></p>
                            <p className="project-comp-madeWith">{this.props.madeWith}</p>
                            <p className="project-comp-madeWith">Links: &nbsp;
                            <span style={{display: this.props.demo_link ? "inline-block" : "none"}}><a style={{color: "#00acee", textDecoration: "none"}} href={this.props.demo_link} rel="noopener noreferrer" target="_blank">Demo&nbsp;</a></span>
                            <span style={{display: this.props.github_link ? "inline-block" : "none"}}><a style={{color: "#00acee", textDecoration: "none"}} href={this.props.github_link} rel="noopener noreferrer" target="_blank">Github</a></span>
                            </p>
                            <p className="project-comp-text">{this.props.project_body}</p>
                        </div>
                    </div>
                </ScrollAnimation>
                <hr className="separator"/>
            </div>
        )
    }
}

export default ProjectContainer