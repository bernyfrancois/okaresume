import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Header from "./component/Header";
import HomePage from "./component/HomePage";
import Projects from "./component/Projects";

function App() {
  return (
    <div className="App">

        <Router>
            <Header/>
            <div>
                <Switch>
                    <Route exact={true} path="/">
                        <HomePage/>
                    </Route>
                    <Route exact={true} path="/projects">
                        <Projects/>
                    </Route>
                </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
