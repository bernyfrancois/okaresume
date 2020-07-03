import React, {Component} from 'react';
import "./contact.css";
import linkedin from "../files/linkedin.png";
import github from "../files/github.png";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: undefined,
            email: undefined,
            service: undefined,
            budget: undefined,
            content: undefined,
        };
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }
    handleTxtChange = (event) => {
        this.setState({value: event.target.value});
        this.growHeight(event.target)
    }


    handleSubmit = (event) => {
        alert(this.setState(
            {
                name: undefined,
                email: undefined,
                service: undefined,
                budget: undefined,
                content: undefined,
            }
        ));
        event.preventDefault();
    }

    growHeight = (target) => {
        target.style.height = target.scrollHeight + 'px';
    }

    render() {
        return (
            <section className={"contact"}>
                <div className="back-deco">
                    <span>Contact me</span>
                </div>
                <div className="links">
                    <div className="page-title">
                    <span className="subtitle">
                        Contact
                    </span>
                        <h2 className={"title"}>Get in touch — let’s work together.</h2>
                    </div>
                    <div className="social-links">
                    <span className="subtitle">
                        Social networks
                    </span>
                        <ul>
                            <li><a href="https://www.linkedin.com/in/fran%C3%A7ois-itoutou-652a2917a/">François Itoutou <img className="social-icon" src={linkedin} alt="icon"/></a></li>
                            <li><a href="https://github.com/bernyfrancois">bernyfrancois <img className="social-icon" src={github} alt="icon"/></a></li>
                        </ul>
                    </div>
                </div>
                <div className="form">
                    <h3>Got a project ? Leave me a message if you want to work together on something exciting. Web or Mobile.</h3>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <span className="label-title">Your name</span>
                            <input type="text" className={"single-bar"} value={this.state.name} onChange={this.handleChange} placeholder={"What's your name?"}/>
                        </label>
                        <label>
                            <span className="label-title">Your email</span>
                            <input type="email" className={"single-bar"} value={this.state.email} onChange={this.handleChange} placeholder={"What's your email address?"}/>
                        </label>
                        <label>
                            <span className="label-title">Object</span>
                            <input type="text" className={"single-bar"} value={this.state.service} onChange={this.handleChange} placeholder={"What's can i do for you?"}/>
                        </label>
                        <label>
                            <span className="label-title">Budget</span>
                            <input type="text" className={"single-bar"} value={this.state.budget} onChange={this.handleChange} placeholder={"What's your budget?"}/>
                        </label>
                        <label className={"message"}>
                            <span className="label-title">Message</span>
                            <textarea value={this.state.content} onChange={this.handleTxtChange} placeholder={"What's your message?"}/>
                        </label>
                        <div className="btn-container">
                            <button type={"sudmit"} className="btn">Send message</button>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}

export default Contact;
