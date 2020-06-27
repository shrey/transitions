import React from 'react';
import Image from 'react-bootstrap/Image'
import './about.styles.scss'
import ShreyImage from '../../github_photo.jpg'

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
            <div style={{marginTop: "20px"}}>
                I've recently been working on :-
            </div>
            <div className="about-skills">
                <div className="about-skills-left">
                    <div className="about-skill">Javascript (ES6+)</div>
                    <div className="about-skill">ReactJS</div>
                    <div className="about-skill">NodeJS</div>
                    <div className="about-skill">C++</div>
                    <div className="about-skill">Python</div>
                    <div className="about-skill">NodeJS</div>
                </div>
                <div className="about-skills-right">
                    <div className="about-skill">Typescript</div>
                    <div className="about-skill">Express</div>
                    <div className="about-skill">HTML and (S)CSS</div>
                    <div className="about-skill">Git and Github</div>
                    <div className="about-skill">MongoDB</div>
                </div>
            </div>
            </div>
            <div className="about-image">
            <Image src={ShreyImage} rounded className="about-image-container"/>
            </div>

            </div>
        </div>
    )
}

export default About;