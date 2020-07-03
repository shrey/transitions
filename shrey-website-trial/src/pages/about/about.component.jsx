import React from 'react';
import Image from 'react-bootstrap/Image'
import './about.styles.scss'
import ShreyImage from '../../github_photo.jpg'
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <div className="about-container">
            <Fade delay={100}>
            <div className="about-title">
                About Me
            </div>
            </Fade>
            <div className="about-content">
            <Fade delay={200}>
            <div className="about-description">
                Hey, I'm Shrey, a Computer Engineering student at Delhi Technological University, I like to build things for the web.
                I build high quality web applications having clear and precise design with quick and modern backends.
            <div style={{marginTop: "20px"}}>
                I've recently been working with :
            </div>
            <div className="about-skills">
                <div className="about-skills-left">
                    <div className="about-skill">Javascript</div>
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
            </Fade>
            <Fade delay={300}>
            <div className="about-image">
            <Image src={ShreyImage} className="about-image-container"/>
            </div>

            </Fade>

            </div>
        </div>
    )
}

export default About;