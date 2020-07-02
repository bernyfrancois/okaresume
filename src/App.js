import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Header from "./component/Header";
import HomePage from "./component/HomePage";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
import Contact from "./component/Contact";

function App() {
  return (
    <div className="App">

        <Router>
            <Header/>
            <div>
                <Switch>
                    <Route path="/projects">
                        <Projects/>
                    </Route>
                    <Route path="/skills">
                        <Skills/>
                    </Route>
                    <Route path="/contact">
                        <Contact/>
                    </Route>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
