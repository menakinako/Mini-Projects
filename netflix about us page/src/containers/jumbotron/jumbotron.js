import React from "react";
import {Typography, Container} from '@material-ui/core';
import jum1 from '../../images/home-imac.jpg';
import jum2 from '../../images/home-mobile.jpg';
import jum3 from '../../images/home-tv.jpg';
import useStyles from './styles';

const Jumbotron=()=>{
    const classes = useStyles();
    return(
        <Container>
               <div className={classes.inner}>
                   <div className={classes.pane}>
                      <Typography variant="h4" className={classes.head}>Enjoy on your TV.</Typography>
                      <Typography variant="body" className={classes.subhead}>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</Typography>
                   </div>
                   <div className={classes.pane}>
                    <img src={jum1} className={classes.image} alt="Tiger King on Netflix"/>
                  </div>
               </div>
               <hr className={classes.Hr}/>
               <div className={classes.inner1}>
                   <div className={classes.pane}>
                      <Typography variant="h4" className={classes.head}>Download your programmes to watch on the go.</Typography>
                      <Typography variant="body" className={classes.subhead}>Save your data and watch all your favourites offline.</Typography>
                   </div>
                   <div className={classes.pane}>
                    <img src={jum2} className={classes.image} alt="Watch on mobile"/>
                  </div>
               </div>
               <br/>
               <hr className={classes.Hr}/>
               <div className={classes.inner}>
                   <div className={classes.pane}>
                      <Typography variant="h4" className={classes.head}>Watch everywhere.</Typography>
                      <Typography variant="body" className={classes.subhead}>Stream unlimited films and TV programmes on your phone, tablet, laptop and TV without paying more.</Typography>
                   </div>
                   <div className={classes.pane}>
                    <img src={jum3} className={classes.image} alt="Money Heist on Netflix"/>
                  </div>
               </div>
               <br/><br/><br/>
               <hr className={classes.Hr}/>
        </Container>
    )
}

export default Jumbotron;