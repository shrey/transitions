import React from 'react';
import './contact-tags.styles.scss';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Fade from 'react-reveal/Fade';
import { makeStyles } from '@material-ui/core/styles';





const useStyles = makeStyles({
    root: {
        fontSize: "20px",
        transition: "0.3s",
        margin: "10px",
    }
})

const ContactTags = () => {
    const classes = useStyles();
    return (
        <div className="contact-tags-container">
            <Fade delay={100}>
            <a href="https://github.com/shrey">
            <GitHubIcon className={classes.root}/>
            </a>
            </Fade>
            <Fade delay={200}>
            <a href="https://www.instagram.com/shreydubey__/?hl=en">
            <InstagramIcon className={classes.root} />
            </a>
            </Fade>
            <Fade delay={300}>
            <a href="mailto:wshrey09@gmail.com">
            <AlternateEmailIcon className={classes.root} />
            </a>
            </Fade>
            <Fade delay={400}>
            <a href="https://www.linkedin.com/in/shrey-dubey-330861107/">
            <LinkedInIcon className={classes.root} />
            </a>
            </Fade>
        </div>
    )
}

export default ContactTags;