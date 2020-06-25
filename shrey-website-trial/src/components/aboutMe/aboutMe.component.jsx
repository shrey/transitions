import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Fade from 'react-reveal/Fade';
import ImageContainer from '../imageContainer/imageContainer.component'
import './aboutMe.styles.scss'
const AboutMe = () => {
    return(

        <div className="aboutMe-container" >
        <Fade delay={100} unmountOnExit={true} >
          <h1>Shrey Dubey</h1>
        </Fade>
        <Fade delay={200}>
            <div>Software Engineer</div>
        </Fade>
        <Fade delay={300}>
            Based in New Delhi
        </Fade>
          </div>

    )
}

export default AboutMe