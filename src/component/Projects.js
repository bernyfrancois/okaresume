import React, {Component} from 'react';
import { Link } from "react-router-dom";
import 'swiper/css/swiper.css';
import "./projects.css";

class Projects extends Component {
    render() {
        return (
            <section className={"projects"}>
                <div className="back-deco">
                    <span>ALll projects</span>
                </div>
                <h2>Selected projets</h2>
                <div className="projects-container">
                    <div className="projects-wrapper">
                        <Link to={"/"} className={"project-item"}>
                            <div className="project-banner">
                                <img src={"#"} alt="illustration"/>
                            </div>
                            <div className="project-title">
                                <h3>Project Number 1</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="commands">
                        <span>Drag</span>
                        <span className={"drag-icon"}/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Projects;
