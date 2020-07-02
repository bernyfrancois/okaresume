import React, {Component} from 'react';
import "./contact.css";
import linkedin from "../files/linkedin.png";
import github from "../files/github.png";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Votre parfum favori est : ' + this.state.value);
        event.preventDefault();
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
                        <h2 className={"title"}>Let's do something together</h2>
                    </div>
                    <div className="social-links">
                    <span className="subtitle">
                        Social networks
                    </span>
                        <ul className={"social-links"}>
                            <li><a href="https://www.linkedin.com/in/fran%C3%A7ois-itoutou-652a2917a/">François Itoutou <span className="social-icon"><img src={linkedin} alt="icon"/></span></a></li>
                            <li><a href="https://github.com/bernyfrancois">bernyfrancois <span className="social-icon"><img src={github} alt="icon"/></span></a></li>
                        </ul>
                    </div>
                </div>
                <div className="form">
                    <h3>Got a project ? Leave me a message if you want to work together on something exciting. Web or Mobile.</h3>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Choisissez votre parfum favori :
                            <select value={this.state.value} onChange={this.handleChange}>
                                <option value="grapefruit">Pamplemousse</option>
                                <option value="lime">Citron vert</option>
                                <option value="coconut">Noix de coco</option>
                                <option value="mango">Mangue</option>
                            </select>
                        </label>
                        <input type="submit" value="Envoyer" />
                    </form>
                </div>
            </section>
        );
    }
}

export default Contact;
