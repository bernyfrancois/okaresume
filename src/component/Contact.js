import React, {Component} from 'react';
import Select from 'react-select';
import emailjs from "emailjs-com";
import "./contact.css";
import linkedin from "../files/linkedin.png";
import github from "../files/github.png";
const emailId = "user_o4DXJP8WSMpuo7XuMHM5d";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "hello",
            name: "",
            email: "",
            currentObject: "",
            currentBudget: "",
            content: "",
            objectSelect: {
                options: [
                    { value: 'help', label: 'Need help with a project' },
                    { value: 'partnership', label: 'Looking for long term partnership' },
                    { value: 'job', label: 'Had a full-time job offer' },
                    { value: 'hello', label: 'Just want to say some words' }
                ]
            },
            budgetSelect: {
                options: [
                    { value: '1000-2500', label: '1000€-2500€' },
                    { value: '2500-5000', label: '2500€-5000€' },
                    { value: '5000+', label: '5000€ or more' },
                ]
            },
        };
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.name === 'isGoing' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleTxtChange = (event) => {
        this.handleChange(event)
        this.growHeight(event.target)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.sendMail()
    }

    growHeight = (target) => {
        target.style.height = target.scrollHeight + 'px';
    }

    objectHandler = (target) => {
        this.setState({currentObject: target.value})
    }

    budgetHandler = (target) => {
        this.setState({currentBudget: target.value})
    }

    sendMail = () => {
        const email = {
            "user_name": this.state.name,
            "user_email": this.state.email,
            "user_object": this.state.currentObject,
            "user_budget": this.state.currentBudget,
            "user_message":this.state.content
        }
        emailjs.send('gmail', 'resume', email, emailId)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    render() {
        return (
            <section className={"contact page"}>
                <div className="back-deco">
                    <span>Contact me</span>
                </div>
                <div className="links animate-left">
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
                            <li><a href="https://www.linkedin.com/in/fran%C3%A7ois-itoutou-652a2917a/" target="_blank" rel="noopener noreferrer">François Itoutou <img className="social-icon" src={linkedin} alt="icon"/></a></li>
                            <li><a href="https://github.com/bernyfrancois" target="_blank" rel="noopener noreferrer">bernyfrancois <img className="social-icon" src={github} alt="icon"/></a></li>
                        </ul>
                    </div>
                </div>
                <div className="form animate-right">
                    <h3>Got a project ? Leave me a message if you want to work together on something exciting. Web or Mobile.</h3>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <span className="label-title">Your name</span>
                            <input name={"name"} autoFocus required type="text" className={"single-bar"} value={this.state.name} onChange={this.handleChange} placeholder={"What's your name?"}/>
                        </label>
                        <label>
                            <span className="label-title">Your email</span>
                            <input name={"email"} required type="email" className={"single-bar"} value={this.state.email} onChange={this.handleChange} placeholder={"What's your email address?"}/>
                        </label>
                        <label>
                            <span className="label-title">The object</span>
                            <SelectInput changeHandler={this.objectHandler} options={this.state.objectSelect.options} placeholder={"What's can i do for you?"}/>
                        </label>
                        <label className={`${this.state.currentObject === "hello" ? "disabled" : ""} budget-label`}>
                            <span className="label-title">Your budget</span>
                            <SelectInput changeHandler={this.budgetHandler} options={this.state.budgetSelect.options} placeholder={"What's your budget?"}/>
                        </label>
                        <label className={"message"}>
                            <span className="label-title">Message</span>
                            <textarea rows={"1"} name={"content"} value={this.state.content} onChange={this.handleTxtChange} placeholder={"What's your message?"}/>
                        </label>
                        <div className="btn-container">
                            <button type={"sudmit"} className="btn">Send {`${this.state.message !== undefined ? "new" : ""}`} message</button>
                            {this.state.message !== undefined && <div className="message">
                                <span>{this.state.message}</span>
                            </div>}
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}

const SelectInput = ({options, placeholder, changeHandler}) => (
    <Select
        placeholder={placeholder}
        label="Single select"
        options={options}
        theme={theme => ({
            ...theme,
            borderRadius: 0,
            borderColor: "#0f141e",
            colors: {
                ...theme.colors,
                primary25: '#FBCB3B',
                primary: '#0f141e',
            },
        })}
        onChange={changeHandler}

    />
)

export default Contact;
