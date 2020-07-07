import React, {Component} from 'react';
import { NavLink, Link } from "react-router-dom";
import "./header.css";

const logo = <svg id="logo" width="612" height="612" viewBox="0 0 612 612" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle className="color-primary" cx="306" cy="306" r="296" stroke="#0A111E" strokeWidth="20"/>
    <rect className="color-secondary" x="272.054" y="92" width="70.8137" height="466" fill="#FBCB3B"/>
    <rect className="color-primary" x="266.343" y="92.0002" width="62.8186" height="466" fill="#0A111E"/>
    <path className="color-secondary"
        d="M256.063 323.858C225.166 323.858 195.534 336.192 173.686 358.147C151.838 380.102 139.563 409.88 139.563 440.929C139.563 471.978 151.838 501.756 173.686 523.711C195.534 545.666 225.166 558 256.063 558L256.063 498.206C240.947 498.206 226.449 492.171 215.76 481.43C205.071 470.688 199.066 456.12 199.066 440.929C199.066 425.738 205.071 411.17 215.76 400.428C226.449 389.687 240.947 383.652 256.063 383.652L256.063 323.858Z"
        fill="#FBCB3B"/>
    <path className="color-secondary"
        d="M256.063 91.9999C225.166 92 195.534 104.334 173.686 126.289C151.838 148.244 139.563 178.022 139.563 209.071C139.563 240.12 151.838 269.898 173.686 291.853C195.534 313.808 225.166 326.142 256.063 326.142L256.063 266.348C240.947 266.348 226.449 260.313 215.76 249.572C205.071 238.83 199.066 224.262 199.066 209.071C199.066 193.88 205.071 179.312 215.76 168.57C226.449 157.829 240.947 151.794 256.063 151.794L256.063 91.9999Z"
        fill="#FBCB3B"/>
    <path className="color-primary"
        d="M244.071 322.716C213.022 322.716 183.244 335.05 161.289 357.005C139.334 378.96 127 408.738 127 439.787C127 470.836 139.334 500.613 161.289 522.569C183.244 544.524 213.022 556.858 244.071 556.858L244.071 497.064C228.88 497.064 214.312 491.029 203.57 480.288C192.829 469.546 186.794 454.978 186.794 439.787C186.794 424.596 192.829 410.027 203.57 399.286C214.312 388.544 228.88 382.51 244.071 382.51L244.071 322.716Z"
        fill="#0A111E"/>
    <path className="color-primary"
        d="M244.071 93.1423C213.022 93.1423 183.244 105.477 161.289 127.432C139.334 149.387 127 179.164 127 210.213C127 241.263 139.334 271.04 161.289 292.995C183.244 314.95 213.022 327.284 244.071 327.284L244.071 267.49C228.88 267.49 214.312 261.456 203.57 250.714C192.829 239.973 186.794 225.404 186.794 210.213C186.794 195.023 192.829 180.454 203.57 169.712C214.312 158.971 228.88 152.936 244.071 152.936L244.071 93.1423Z"
        fill="#0A111E"/>
    <rect className="color-secondary" x="354.332" y="295.502" width="82.8032" height="59.0307" fill="#FBCB3B"/>
    <rect className="color-secondary" x="354.289" y="92" width="102.794" height="59.3922" fill="#FBCB3B"/>
    <rect className="color-primary" x="366.891" y="295.502" width="90.1048" height="59.0307" fill="#0A111E"/>
    <rect className="color-primary" x="366.853" y="92" width="117.642" height="59.3922" fill="#0A111E"/>
</svg>

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuState: false
        }
    }

    toggleMenu = () => {
        this.setState({menuState: !this.state.menuState})
    }

    render() {
        return (
            <header className={`${this.state.menuState ? "active-menu" : ""}`}>
                <Link to={"/"} id="logo-brand">
                    {logo}
                    <div className="logo-text">
                        <span className="logo-name">Berny François</span>
                        <span className="logo-title">Web developer</span>
                    </div>
                </Link>
                <nav>
                    <h2>Menu</h2>
                    <ul>
                        <li><NavLink to={"/"} onClick={this.toggleMenu}>Home</NavLink></li>
                        <li><NavLink to={"/projects"} onClick={this.toggleMenu}>Projects</NavLink></li>
                        <li><NavLink to={"/skills"} onClick={this.toggleMenu}>Skills</NavLink></li>
                        <li><NavLink to={"/contact"} onClick={this.toggleMenu}>Contact</NavLink></li>
                    </ul>
                    <small className={"copy-text"}>Copyright 2020 Berny Itoutou</small>
                </nav>
                <button className="menu-toggler" onClick={this.toggleMenu}>
                    <span>Menu</span>
                    <span className="toggler-btn">
                        <span className="hamburger hamburger-1"/>
                        <span className="hamburger hamburger-2"/>
                        <span className="hamburger hamburger-3"/>
                    </span>
                </button>
            </header>
        );
    }
}

export default Header;
