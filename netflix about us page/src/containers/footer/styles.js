import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    row:{
        display:'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
        gridGap: '15px'
    },
    column:{
        display:'flex',
        flexDirection: 'column',
        textAlign:'left'
    },
    link:{
        color: '#757575',
        marginBottom: '20p',
        fontSize: '13px',
        textDecoration: 'none'
    },
    break:{
        flexBasis: '100%',
        height: '0'
    },
    text:{
        color:'#757575'
    }
}));