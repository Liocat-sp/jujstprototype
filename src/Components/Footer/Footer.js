import React from 'react';

import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';

import Facebook from "../../assets/icons/facebook.svg";
import Google from "../../assets/icons/google.svg";
import LinkedIn from '../../assets/icons/linkedin.svg';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: "#e5e5e5",
        marginTop: "1.5rem"
    },
    SocialIcons: {
        width: "40px",
        height: "40px",
        marginRight: "10px",
    }
}))


const Footer = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="xl" className={classes.footer}>  
            <Grid container alignItems="center" justify="center" spacing={4}>
                <Grid item container alignItems="center" justify="center" >
                    <Grid container alignItems="center" justify="center" item xs={3} direction="row">
                        <img src={Facebook} alt="facebook"  className={classes.SocialIcons}/>
                        <Typography variant="subtitle2">Facebook@some.com</Typography> 
                    </Grid>
                    <Grid item xs={3} container justify="center" alignItems="center" direction="row">
                        <img src={Google} alt="Google"  className={classes.SocialIcons}/>
                        <Typography variant="subtitle2">Gmail@gmail.com</Typography>
                    </Grid>
                    <Grid item xs={3} container justify="center" alignItems="center" direction="row">
                        <img src={LinkedIn} alt="LinkedIn" className={classes.SocialIcons}/>
                        <Typography variant="subtitle2">LinkedIn</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
};

export default Footer;
