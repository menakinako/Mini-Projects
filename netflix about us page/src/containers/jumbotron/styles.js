import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
inner :{
   display:"flex",
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    maxWidth: '1100px',
    margin: 'auto',
    width: '100%'
},
inner1 :{
    display:"flex",
     alignItems: 'center',
     justifyContent: 'space-between',
     flexDirection: 'row-reverse',
     maxWidth: '1100px',
     margin: 'auto', 
     width: '100%'
 },
pane:{
    width: '50%'
},
image: {
    maxWidth:'100%',
    height:'auto'
},
head:{
    color:'white',
    fontSize: '50px',
  lineHeight: '1.1',
  marginBottom: '8px',
  fontWeight: 'bold'
},
subhead:{
    color: 'white',
    fontSize: '26px',
  fontWeight: 'normal',
  lineHeight: 'normal'
},
Hr:{
    backgroundColor:'#757575',
    height:'4px',
    border:'none'
}
}));