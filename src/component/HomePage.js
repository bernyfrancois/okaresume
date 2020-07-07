import React from 'react';
import "./home.css";
import profilPic from "../files/profile-img.png"
import {Link, NavLink} from "react-router-dom";

const HomePage = () => {
    return (
        <section className={"homepage page"}>
            <div className="back-deco">
                <span>Welcome</span>
            </div>
            <div className="content">
                <div className="text-zone animate-left">
                    <div className="my-name">
                        <span>Berny Itoutou</span>
                    </div>
                    <div className="title">
                        <h1>Website and Web <br/> Application developer</h1>
                        <p>
                            I dived into the world of development since 2018 <br/>and I still have the same passion.
                        </p>
                    </div>
                </div>
                <div className="illustration-zone">
                    <div className="illustration-img animate-right">
                        <div className="deco-circle"/>
                        <div className="deco-circle"/>
                        <div className="deco-circle"/>
                        <img src={profilPic} alt="icon"/>
                    </div>
                </div>
            </div>
            <div className="home-menu">
                <Link to={"/projects"}>View projects</Link>
                <span className="link-separator">or</span>
                <Link to={"/skills"}>View skills</Link>
            </div>
        </section>
    );
};

export default HomePage;
