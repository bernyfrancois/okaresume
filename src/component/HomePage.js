import React from 'react';
import "./home.css";
import profilPic from "../files/profile-img.png"
import {NavLink} from "react-router-dom";

const HomePage = () => {
    return (
        <section className={"homepage"}>
            <div className="back-deco">
                <span>Welcome</span>
            </div>
            <div className="content">
                <div className="text-zone">
                    <div className="my-name">
                        <span>Berny I.</span>
                    </div>
                    <div className="title">
                        <h1>Website and Web <br/> Application developer</h1>
                        <p>
                            I dived into the world of development since 2018 <br/>and I still have the same passion.
                        </p>
                    </div>
                </div>
                <div className="illustration-zone">
                    <div className="illustration-img">
                        <div className="deco-circle"/>
                        <div className="deco-circle"/>
                        <div className="deco-circle"/>
                        <img src={profilPic} alt="icon"/>
                    </div>
                </div>
            </div>
            <div className="home-menu">
                <NavLink to={"/projects"}>View projects</NavLink>
                <span className="link-separator">or</span>
                <a href="#">View skills</a>
            </div>
        </section>
    );
};

export default HomePage;
