import React from 'react';

import './about.styles.scss'

const About = () => {
    return (
        <div className="about-container">
            <div className="about-title">
                About Me
            </div>
            <div className="about-content">
            <div className="about-description">
                Hey, I'm Shrey, a Computer Engineering student at Delhi Technological University, I like to build things for the web.
                I build high quality web applications having clear and precise design with quick and modern backends.
                <br />
                I've recently been working on :-
            </div>
            <div className="about-image">Image comes here</div>

            </div>
        </div>
    )
}

export default About;