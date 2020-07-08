import React, {Component} from 'react';
import "./skills.css";
import pp from "../files/pp.png";
import figma from "../files/figma.png";
import "./shape.css";

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            profile: {
                competences: [
                    {
                        title: "UI-UX Design",
                        levels: [
                            "Prototypage d'interface",
                            "Maquettage d'interface graphique"
                        ],
                        tools: [
                            {
                                link: "figma.com",
                                icon: figma
                            }
                        ]
                    },
                    {
                        title: "UI-UX Design",
                        levels: [
                            "Prototypage d'interface",
                            "Maquettage d'interface graphique"
                        ],
                        tools: [
                            {
                                link: "figma.com",
                                icon: figma
                            },
                            {
                                link: "figma.com",
                                icon: figma
                            },
                            {
                                link: "figma.com",
                                icon: figma
                            },
                            {
                                link: "figma.com",
                                icon: figma
                            },
                            {
                                link: "figma.com",
                                icon: figma
                            }
                        ]
                    },
                    {
                        title: "UI-UX Design",
                        levels: [
                            "Prototypage d'interface",
                            "Maquettage d'interface graphique",
                            "Maquettage d'interface graphique",
                            "Maquettage d'interface graphique",
                            "Maquettage d'interface graphique",
                        ],
                        tools: [
                            {
                                link: "figma.com",
                                icon: figma
                            }
                        ]
                    },
                    {
                        title: "UI-UX Design",
                        levels: [
                            "Prototypage d'interface",
                            "Maquettage d'interface graphique"
                        ],
                        tools: [
                            {
                                link: "figma.com",
                                icon: figma
                            }
                        ]
                    },
                    {
                        title: "UI-UX Design",
                        levels: [
                            "Prototypage d'interface",
                            "Maquettage d'interface graphique"
                        ],
                        tools: [
                            {
                                link: "figma.com",
                                icon: figma
                            }
                        ]
                    },
                ]
            }
        }
    }

    render() {
        return (
            <section className={"skills page"}>
                <div className="back-deco">
                    <span>My skills</span>
                </div>
                <div className="description animate-left">
                    <h1>My Profile</h1>
                    <div className="pp">
                        <img src={pp} alt="icon"/>
                    </div>
                    <div className="text-content">
                        <p>
                            I believe that the only limit to what you can learn is in the time you can give to learning.
                        </p>
                        <p>
                            The world is constantly evolving and so am I too.
                        </p>
                    </div>
                </div>
                <div className="skills-shape animate-right">
                    <TShape skills={this.state.profile.competences}/>
                </div>
            </section>
        );
    }
}

const TShape = ({skills}) => (
    <div className={"shape-container"}>
        {
            skills.map(el => (
                <div className="skill-col">
                    <div className="skill-title">
                        <h3>{el.title}</h3>
                    </div>
                    <ul className="skill-levels">
                        {el.levels.map(level => (
                            <li className="level">
                                {level}
                            </li>
                        ))}
                    </ul>
                    <ul className="skill-tools">
                        {el.tools.map(tool => (
                            <li className="tool">
                                <a href={tool.link}>
                                    <img className={"tool-icon"} src={tool.icon} alt="icon"/>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))
        }
    </div>
)

export default Skills;
