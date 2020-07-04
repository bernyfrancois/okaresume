import React, {Component} from 'react';
import Select from 'react-select';
import "./contact.css";
import linkedin from "../files/linkedin.png";
import github from "../files/github.png";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: undefined,
            email: undefined,
            currentService: undefined,
            currentBudget: undefined,
            content: undefined,
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
        this.setState({value: event.target.value});
    }
    handleTxtChange = (event) => {
        this.setState({value: event.target.value});
        this.growHeight(event.target)
    }


    handleSubmit = (event) => {
        console.log(this.state.name)
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
                            <input required type="text" className={"single-bar"} value={this.state.name} onChange={this.handleChange} placeholder={"What's your name?"}/>
                        </label>
                        <label>
                            <span className="label-title">Your email</span>
                            <input required type="email" className={"single-bar"} value={this.state.email} onChange={this.handleChange} placeholder={"What's your email address?"}/>
                        </label>
                        <label>
                            <span className="label-title">The object</span>
                            <SelectInput options={this.state.objectSelect.options} placeholder={"What's can i do for you?"}/>
                        </label>
                        <label>
                            <span className="label-title">Your budget</span>
                            <SelectInput options={this.state.budgetSelect.options} placeholder={"What's your budget?"}/>
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


const SelectInput = ({options, placeholder}) => (
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
    />
)

export default Contact;
