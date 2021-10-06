import React from "react";
import {Container, Typography} from '@material-ui/core';
import useStyles from './styles';


const Footer =()=>{
    const classes= useStyles();
    return(
        <div>
            <Container maxWidth="lg">
            <br/>
                <Typography variant="subtitle2" className={classes.text}>Any Question? Contact Us.</Typography>
                <br/>
                <div className={classes.break}></div>
                 <div className={classes.row}>
                 <div className={classes.column}>
                     <div className={classes.link} href="#">FAQ</div>
          <div className={classes.link} href="#">Investor Relations</div>
          <div className={classes.link} href="#">Ways to Watch</div>
          <div className={classes.link} href="#">Corporate Information</div>
          <div className={classes.link} href="#">Netflix Originals</div>
                     </div>
                     <div className={classes.column}>
                     <div className={classes.link} href="#">Help Centre</div>
          <div className={classes.link} href="#">Jobs</div>
          <div className={classes.link} href="#">Terms of Use</div>
          <div className={classes.link} href="#">Contact Us</div>

                     </div>
                     <div className={classes.column}>
                     <div className={classes.link}k href="#">Account</div>
          <div className={classes.link} href="#">Redeem gift cards</div>
          <div className={classes.link} href="#">Privacy</div>
          <div className={classes.link} href="#">Speed Test</div>
                     </div>
                     <div className={classes.column}>
                     <div className={classes.link} href="#">Media Centre</div>
          <div className={classes.link} href="#">Buy gift cards</div>
          <div className={classes.link} href="#">Cookie Preferences</div>
          <div className={classes.link} href="#">Legal Notices</div>
                     </div>
                 </div>
                 <div className={classes.break}></div>
                 <br/>
                 <Typography variant="subtitle2"  className={classes.text}>Netflix United Kingdom</Typography>
                 <br/><br/><br/>
            </Container>
        </div>
    );
}

export default Footer;