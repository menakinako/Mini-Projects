import React from "react";
import Jumbotron from '../containers/jumbotron/jumbotron';
import Faqs from '../containers/faqs/faqs';
import Footer from '../containers/footer/footer'
import { Container, Typography } from "@material-ui/core";
import useStyles from './styles';
import logo from '../images/netflix-removebg-preview.png'

const About = ()=>{
    const classes = useStyles();
    return(
        <div style={{background:"black"}}>
            <Container maxWidth="lg">
                <div style={{textAlign:'center'}}>
                <img src={logo}  maxWidth="200px" height="100px" alt="netflix-logo"/>
                <Typography variant="h3" className={classes.text}>About Us</Typography>
                <Typography variant="subtitle2" className={classes.text}>Home | About</Typography>
                </div>
                <br />

            <Jumbotron />
            <br/>
            <Faqs />
            <br/>
            <Footer />
            </Container>
        </div>
    );
}

export default About;