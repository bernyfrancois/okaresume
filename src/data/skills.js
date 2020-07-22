import figma from "./skills/figma.png";
import dart from "./skills/dart.png";
import flutter from "./skills/flutter.png";
import html from "./skills/html.png";
import css from "./skills/css.png";
import js from "./skills/js.png";
import react from "./skills/react.png";
import bootstrap from "./skills/bootstrap.png";
import nodejs from "./skills/nodejs.png";
import nginx from "./skills/nginx.png";
import mongo from "./skills/mongodb.png";
import trello from "./skills/trello.png";

export const SKILLS = [
    {
        title: "UI-UX Design",
        levels: [
            "Interface prototyping",
            "Graphical interface mock-up"
        ],
        tools: [
            {
                link: "https://www.figma.com/",
                icon: figma
            }
        ]
    },
    {
        title: "Mobile development",
        levels: [
            "Interface integration",
            "Interaction with REST API"
        ],
        tools: [
            {
                link: "https://dart.dev/",
                icon: dart
            },
            {
                link: "https://flutter.dev/",
                icon: flutter
            },
        ]
    },
    {
        title: "Front-end development",
        levels: [
            "Web interface integration",
            "Web animations",
            "Responsive website development",
            "Web API integration",
        ],
        tools: [
            {
                link: "#",
                icon: html
            },
            {
                link: "#",
                icon: css
            },
            {
                link: "https://www.ecma-international.org/",
                icon: js
            },
            {
                link: "https://getbootstrap.com/",
                icon: bootstrap
            },
            {
                link: "https://react.org/",
                icon: react
            },
        ]
    },
    {
        title: "Back-end development",
        levels: [
            "Database request",
            "Rest API development",
            "Web server configuration",
        ],
        tools: [
            {
                link: "https://nodejs.org/",
                icon: nodejs
            },
            {
                link: "https://www.mongodb.com/",
                icon: mongo
            },
            {
                link: "https://nginx.org/",
                icon: nginx
            },
        ]
    },
    {
        title: "Project Management",
        levels: [
            "Time Organization",
            "Task organization"
        ],
        tools: [
            {
                link: "https://trello.com/",
                icon: trello
            }
        ]
    },
]
