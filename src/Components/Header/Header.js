import React from 'react';

import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';

import Hero from "../../assets/images/hero.jpg";


const useStyles = makeStyles((theme) => ({
    setPosition: {
        position: "relative"
    },
    header: {
        position: "relative",
    },
    headerImgGrid: {
        height: "85vh",
        borderRadius: "30px",
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    heroImage: {
        display: "block",
        width: "100%",
        height: "100%",
        borderRadius: "30px",
        objectFit: "cover",
        filter: "brightness(0.7)"
    },
    marginRequire: {
        marginBottom: "1rem"
    },
    TitleSection: {
        height: "70%",
        width: '90%'
    },
    TitleHead: {
        // fontSize: "4rem",
        fontWeight: "600",
        color: "#fff",
        letterSpacing: "1px",
        // [theme.breakpoints.up("xl")]: {
        //     fontSize: "5.5rem"
        // },
        // [theme.breakpoints.down("lg")]: {
        //     fontSize: "3rem"
        // },
        // [theme.breakpoints.down("sm")]: {
        //     textAlign: "center"
        // }
    },
    TitleSubText: {
        maxWidth: "500px",
        color: "#fff",
        fontWeight: "400",
        letterSpacing: "0.5px",
        [theme.breakpoints.up("xl")]: {
            fontSize: "2rem"
        },
        [theme.breakpoints.down("lg")]: {
            fontSize: "1.5rem"
        },
        [theme.breakpoints.down("sm")]: {
            textAlign: "center"
        }
    },
    buttonStyle: {
        marginTop: "1rem",
        borderRadius: "10px",
        backgroundColor: "#80CC1B",
        color: "#fff",
        "&:hover": {
            backgroundColor: "#74BC15"
        },
        [theme.breakpoints.up("xl")]: {
            fontSize: "1.5rem"
        },
        [theme.breakpoints.down("sm")]: {
            display: "block",
            margin: "0 auto",
            fontSize: "0.8rem",
            textAlign: "center"
        }
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="xl" className={classes.setPosition}>
            <Grid container item alignItems="center" justify="center" className={classes.header} >
                <Grid container item alignItems="center" justify="center" style={{ backgroundImage: `linear-gradient(90deg, rgb(21 21 21 / 40%) 0%, rgb(81 81 81 / 34%) 35%, rgb(83 83 83 / 29%) 100%), url(${Hero})` }} className={classes.headerImgGrid} lg={12} xl={11}>
                    <Grid item xl={11} className={classes.TitleSection}>
                        <Typography variant="h2" component="h6" className={`${classes.TitleHead} ${classes.marginRequire}`}>
                            Revolutionary Magazine For <br />
                            The Millennials & Gen Z !
                    </Typography>
                        <Typography variant="h5" className={`${classes.TitleSubText} ${classes.marginRequire}`}>
                            India's First Youth Magazine delivered
                            to your whatsapp & messenger.
                    </Typography>
                        <Button variant="contained" size="large" className={classes.buttonStyle}>
                            Subscribe now
                    </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Header;
