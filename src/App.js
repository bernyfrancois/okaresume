import React, {Component} from 'react';
import { Route, Switch} from "react-router-dom";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import gsap from "gsap";
import './App.css';
import Header from "./component/Header";
import HomePage from "./component/HomePage";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
import Contact from "./component/Contact";
import ReactGA from "react-ga";
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';

const routes = [
    { path: "/", name: "home", component: HomePage },
    { path: "/skills", name: "skills", component: Skills },
    { path: "/projects", name: "projects", component: Projects },
    { path: "/contact", name: "contact", component: Contact },
];

const trackingId = "G-XPM47SX8KW"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);
const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen(location => {
    ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

class App extends Component {
    onEnter = node => {
        const leftBlock = node.querySelector(".animate-left");
        const rightBlock = node.querySelector(".animate-right");
        gsap.from(
            leftBlock,
            0.7,
            {
                y: 100,
                delay: 0.3,
                ease: "power3.InOut",
                opacity: 0,
                stagger: {
                    amount: 0.8
                }
            }
        )
        gsap.from(
            rightBlock,
            0.7,
            {
                x: 100,
                delay: 0.3,
                ease: "power3.InOut",
                opacity: 0,
                stagger: {
                    amount: 0.8
                }
            }
        )
    }
    onExit = node => {
        const leftBlock = node.querySelector(".animate-left");
        const rightBlock = node.querySelector(".animate-right");
        gsap.to(
            leftBlock,
            0.7,
            {
                y: -100,
                delay: 0.3,
                ease: "power3.InOut",
                opacity: 1,
                stagger: {
                    amount: 0.8
                }
            }
        )

        gsap.to(
            rightBlock,
            0.7,
            {
                x: -100,
                delay: 0.3,
                ease: "power3.InOut",
                opacity: 1,
                stagger: {
                    amount: 0.8
                }
            }
        )
    }

    render() {
        return (
            <div className="App">
                <Router history={history}>
                    <Header/>
                    <Route render={({location}) => (
                        <TransitionGroup>
                            <CSSTransition key={location.key} timeout={300} classNames={"page"} onEnter={this.onEnter} onExit={this.onExit}>
                                <Switch location={location}>
                                    {
                                        routes.map(({path, name, component}) => (
                                            <Route key={name} exact={true} path={path} component={component} />
                                        ))
                                    }

                                    <Route component={HomePage} />
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    )}/>
                </Router>
            </div>
        );
    }
}

export default App;
