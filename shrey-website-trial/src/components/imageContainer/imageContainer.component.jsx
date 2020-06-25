import React from 'react';
import {Avatar} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import { height } from '@material-ui/system';

const useStyles = makeStyles({
    root: {
        width: "100px",
        height: "100px"
    }
})

const ImageContainer = () => {
    const classes = useStyles();
    return(
    <Avatar alt="Shrey" className={classes.root}>S</Avatar>
    )
}
export default ImageContainer;