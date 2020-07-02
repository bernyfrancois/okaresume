import React, {Component} from 'react';
import { Link } from "react-router-dom";
import "./projects.css";

class Projects extends Component {
    constructor(props) {
        super(props);
    }
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
                    <div className={"commands"}>
                        <span>Drag</span>
                        <span className={"drag-icon"}>
                            <div className="guide">
                                <svg className="mouse" width="40" height="58" viewBox="0 0 40 58">
                                    <g fill-rule="evenodd">
                                        <polygon fill-rule="nonzero" points="38.275 23 9.045 23 9.045 25 38.275 25"/>
                                        <polygon fill-rule="nonzero" points="22.667 10.139 22.667 23.5 24.667 23.5 24.667 10.139"/>
                                        <path fill-rule="nonzero" d="M23.66,55.3612689 C31.1635892,55.3612689 37.2751259,49.7250913 37.2751259,42.8664131 L37.2751259,23.5804576 C37.2751259,16.7673171 31.1551908,11.1387311 23.66,11.1387311 C16.1648092,11.1387311 10.0448741,16.7673171 10.0448741,23.5804576 L10.0448741,42.9195424 C10.0448741,49.7326829 16.1648092,55.3612689 23.66,55.3612689 Z M23.66,57.3612689 C15.0958825,57.3612689 8.04487413,50.8763623 8.04487413,42.9195424 L8.04487413,23.5804576 C8.04487413,15.6236377 15.0958825,9.13873106 23.66,9.13873106 C32.2241175,9.13873106 39.2751259,15.6236377 39.2751259,23.5804576 L39.2751259,42.8664131 C39.2751259,50.8674505 32.2336144,57.3612689 23.66,57.3612689 Z"/>
                                        <path className="mouse-small-click" fill-rule="nonzero" d="M6.57820747,20.1259121 C6.57820747,13.448275 14.2805453,6.82054924 21.9266667,6.82054924 L21.9266667,4.82054924 C13.2371205,4.82054924 4.57820747,12.2713911 4.57820747,20.1259121 L6.57820747,20.1259121 Z"/>
                                        <path className="mouse-large-click" fill-rule="nonzero" d="M2.37820747,21.1259121 C2.37820747,11.5705676 12.1430608,2.63873106 22.9266667,2.63873106 L22.9266667,0.638731061 C11.0763312,0.638731061 0.378207465,10.4242229 0.378207465,21.1259121 L2.37820747,21.1259121 Z"/>
                                        <path className="mouse-click" d="M9.64178282,24.1387311 C9.64178282,24.1387311 8.4864369,9.65181073 24.0836068,10.1513597 C24.0836068,14.1477515 24.0836068,23.6391821 24.0836068,23.6391821 L24.0836068,24.1387311 L9.64178282,24.1387311 Z"/>
                                    </g>
                                </svg>
                            </div>
                        </span>
                    </div>
                </div>
            </section>
        );
    }
}

export default Projects;
