import React from 'react';
import "./button.css"

const LinkButton = ({text, link}) => {
    return (
        <a className="button" href={link} target="_blank" rel="noopener noreferrer">
            <button className="btn-1">{text}</button>
        </a>
    );
};

export default LinkButton;
