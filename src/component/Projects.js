import React, {Component} from 'react';
import { Link } from "react-router-dom";
import "./projects.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {

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
                        <div className={"project-item"}>
                            <div className="project-banner">
                                <div className="banner-image">
                                    <img src="#" alt="hello"/>
                                </div>
                                <div className="banner-infos">
                                    <h3 className="project-title">Project 1</h3>
                                    <div className="project-details">
                                        <div className="project-roles">
                                            <h4>My role</h4>
                                            <ul>
                                                <li>UX-UI Designer</li>
                                                <li>UX-UI Designer</li>
                                                <li>UX-UI Designer</li>
                                            </ul>
                                        </div>
                                        <div className="project-client">
                                            <h4>Client</h4>
                                            <ul>
                                                <li>Ecole 241</li>
                                            </ul>
                                        </div>
                                        <div className="project-technos">
                                            <h4>Technologies</h4>
                                            <ul>
                                                <li>Html</li>
                                                <li>Javascript</li>
                                                <li>css</li>
                                            </ul>
                                        </div>
                                        <div className="project-link">
                                            <a href="#">Voir le site</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"project-item"}>
                            <div className="project-banner">
                                <div className="banner-image">
                                    <img src="#" alt="hello"/>
                                </div>
                                <div className="banner-infos">
                                    <h3 className="project-title">Project 1</h3>
                                    <div className="project-details">
                                        <div className="project-roles">
                                            <h4>My role</h4>
                                            <ul>
                                                <li>UX-UI Designer</li>
                                                <li>UX-UI Designer</li>
                                                <li>UX-UI Designer</li>
                                            </ul>
                                        </div>
                                        <div className="project-client">
                                            <h4>Client</h4>
                                            <ul>
                                                <li>Ecole 241</li>
                                            </ul>
                                        </div>
                                        <div className="project-technos">
                                            <h4>Technologies</h4>
                                            <ul>
                                                <li>Html</li>
                                                <li>Javascript</li>
                                                <li>css</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        );
    }
}

export default Projects;
