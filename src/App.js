import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import gsap from "gsap";

import logo from './logo.svg';
import './App.css';
import Header from "./component/Header";
import HomePage from "./component/HomePage";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
import Contact from "./component/Contact";

const routes = [
    { path: "/", name: "home", component: HomePage },
    { path: "/skills", name: "skills", component: Skills },
    { path: "/projects", name: "projects", component: Projects },
    { path: "/contact", name: "contact", component: Contact },
]

function App() {
    const onEnter = node => {
        const leftBlock = node.querySelector(".animate-left");
        const rightBlock = node.querySelector(".animate-right");
        console.log(leftBlock)
        gsap.from(
            leftBlock,
            0.8,
            {
                y: 100,
                delay: 0.6,
                ease: "power3.InOut",
                opacity: 0,
                stagger: {
                    amount: 0.8
                }
            }
        )
        gsap.from(
            rightBlock,
            0.8,
            {
                x: 100,
                delay: 0.6,
                ease: "power3.InOut",
                opacity: 0,
                stagger: {
                    amount: 0.8
                }
            }
        )
    }

const onExit = node => {
        const leftBlock = node.querySelector(".animate-left");
        const rightBlock = node.querySelector(".animate-right");
        console.log(leftBlock)
        gsap.to(
            leftBlock,
            0.8,
            {
                y: -100,
                delay: 0.6,
                ease: "power3.InOut",
                opacity: 1,
                stagger: {
                    amount: 0.8
                }
            }
        )

        gsap.to(
            rightBlock,
            0.8,
            {
                x: -100,
                delay: 0.6,
                ease: "power3.InOut",
                opacity: 1,
                stagger: {
                    amount: 0.8
                }
            }
        )
    }

  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <Route render={({location}) => (
                <TransitionGroup>
                    <CSSTransition key={location.key} timeout={1000} classNames={"page"} onEnter={onEnter} onExit={onExit}>
                        <Switch location={location}>
                            {
                                routes.map(({path, name, component}) => (
                                    <Route key={name} path={path} component={component} exact/>
                                ))
                            }
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            )}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
