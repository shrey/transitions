import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Fade from 'react-reveal/Fade';
import ImageContainer from '../imageContainer/imageContainer.component'
import './aboutMe.styles.scss'
const AboutMe = () => {
    return(

        <div className="aboutMe-container" >
        <Fade delay={100} unmountOnExit={true} >
          <div className="first-line">Hi, My name is</div>
        </Fade>
        <Fade delay={200}>
            <div className="second-line">Shrey Dubey</div>
        </Fade>
        <Fade delay={300}>
            <div className="third-line">
            I'm a software Engineer based in New Delhi.
            </div>

        </Fade>
          </div>

    )
}

export default AboutMe