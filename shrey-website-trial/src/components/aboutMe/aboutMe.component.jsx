import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Fade from 'react-reveal/Fade';
const AboutMe = () => {
    return(
        <div>
        <Fade left delay={500} opposite={true}>
          <h1>React Reveal</h1>
        </Fade>
      </div>
    )
}

export default AboutMe