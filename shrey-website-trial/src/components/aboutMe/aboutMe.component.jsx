import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Fade from 'react-reveal/Fade';
const AboutMe = () => {
    return(

        <Fade delay={100} unmountOnExit={true} >
          <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%" ,width: "100%"}} >

          <h1>Shrey Dubey</h1>
          </div>
        </Fade>

    )
}

export default AboutMe