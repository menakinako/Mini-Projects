import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import {Container} from '@material-ui/core';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import useStyles from './styles';
import './style.css';

const Faqs =()=> {
  const classes = useStyles();
  return (
    <div>
        <Container maxWidth="sm">
        <br/><br/>
            <Typography variant="h3" className={classes.title}>Frequently Asked Questions</Typography>
            <div>
              <br/>
      <Accordion> 
        <AccordionSummary
          expandIcon={<AddIcon style={{color:"white"}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography  variant="substitle" className={classes.back}>What is Netflix?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Netflix is a streaming service that offers a wide variety of award-winning TV programmes, 
          films, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single advert – all for one low monthly price. There's always something new to discover, 
          and new TV programmes and films are added every week!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon style={{color:"white"}}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography  variant="substitle" className={classes.back}>How much does Netflix cost?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Watch Netflix on your smartphone, tablet, smart TV, laptop or streaming device, 
          all for one low fixed monthly fee. Plans start from £5.99 a month. No extra costs or contracts.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon style={{color:"white"}}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography  variant="substitle" className={classes.back}>Where can I watch?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to 
          watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.\n\nYou can also download your favourite programmes with the iOS, Android, or Windows 10 app. Use downloads to watch 
          while you're on the go and without an internet connection. Take Netflix with you anywhere.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon style={{color:"white"}}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography  variant="substitle" className={classes.back}>How do I cancel?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Netflix is flexible. There are no annoying contracts and no commitments. 
          You can easily cancel your account online in two clicks. 
          There are no cancellation fees – start or stop your account at any time.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon style={{color:"white"}}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="substitle" className={classes.back}>What can I watch on Netflix?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Netflix has an extensive library of feature films, documentaries, TV programmes,
           anime, award-winning Netflix originals, and more. Watch as much as you want, any time you want.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      </Container>
      <br/><br/><br/>
      <hr className={classes.Hr}/>
    </div>
  );
}
 export default Faqs;