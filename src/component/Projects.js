import React, {Component} from 'react';
import { Link } from "react-router-dom";
import "./projects.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cover from "../files/project-cover.jpeg"

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {
                    id: 0,
                    title: "My project 1",
                    roles: [
                        "UX-UI Designer",
                        "UX-UI Designer",
                        "UX-UI Designer",
                    ],
                    clients: [
                        "Ecole 241"
                    ],
                    technos: [
                        "Html",
                        "Css",
                        "Javascript"
                    ],
                    link: "https://www.google.com/",
                    banner: cover,
                },
                {
                    id: 1,
                    title: "My project 1",
                    roles: [
                        "UX-UI Designer",
                        "UX-UI Designer",
                        "UX-UI Designer",
                    ],
                    clients: [
                        "Ecole 241"
                    ],
                    technos: [
                        "Html",
                        "Css",
                        "Javascript"
                    ],
                    link: "https://www.google.com/",
                    banner: cover,
                },
            ]
        }
    }
    render() {
        let settings = {
            dots: true,
            infinite: false,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            easing: "ease-out",
            arrows: false,
        };
        return (
            <section className={"projects page"}>
                <div className="back-deco">
                    <span>All projects</span>
                </div>
                <h2>Selected projets</h2>
                <div className="projects-container animate-right">
                    <Slider className="projects-wrapper" {...settings}>
                        {
                            this.state.projects.map(project => (
                                <div key={project.id} className={"project-item"}>
                                    <div className="project-banner">
                                        <div className="banner-image">
                                            <img src={project.banner} alt="hello"/>
                                        </div>
                                        <div className="banner-infos">
                                            <h3 className="project-title">{project.title}</h3>
                                            <div className="project-details">
                                                <div className="project-roles">
                                                    <h4>My role</h4>
                                                    <ul>
                                                        {project.roles.map( (el, id) => (
                                                            <li key={"r"+id}>{el}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="project-client">
                                                    <h4>Client</h4>
                                                    <ul>
                                                        {project.clients.map( (el, id) => (
                                                            <li key={"c"+id}>{el}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="project-technos">
                                                    <h4>Technologies</h4>
                                                    <ul>
                                                        {project.technos.map( (el, id) => (
                                                            <li key={"t"+id}>{el}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="project-link">
                                                    <a href={project.link} target={"_blank"}>Voir le site</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </section>
        );
    }
}

export default Projects;
