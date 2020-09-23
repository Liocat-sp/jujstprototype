import React from 'react';

import "./Navbar.css";

import Container from "@material-ui/core/Container";
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
    Navbar: {
        boxShadow: "none",
    },
    toolbar: {
        [theme.breakpoints.up("xl")]: {
            height: "100px"
        }
    },
    navLinks: {
        cursor: "pointer"
    },
    navDesktop: {
        [theme.breakpoints.down("sm")]: {
            display: "none"
        }
    },
    menue: {
        display: "none",
        [theme.breakpoints.down("sm")]: {
            display: "flex",
            alignItems: "center",
        }
    },
    menueItems: {
        zIndex: "400",
        width: "100%",
        height: "100%",
        display: "none",
        position: "absolute",
        backgroundColor: "#fff",
        [theme.breakpoints.down("sm")]: {
            transform: "translateY(-60px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            
        }
    },
    navLinksMobile: {
        cursor: "pointer",
        marginTop: "2rem",
        fontWeight: "500"

    }
}));


const Navbar = () => {
    const classes = useStyles();
    const [menueButton, setMButton] = React.useState(false);
    return (
        <div>
            <AppBar color="transparent" position="relative" className={classes.Navbar}>
                <Toolbar className={classes.toolbar}>
                    <Container maxWidth="xl">
                        <Grid container justify="center" maxwidth="xl">
                            <Grid container item justify="space-between" lg={12} xl={11}>
                                <Typography varient="h6">Unstoppable</Typography>
                                <Grid container item direction="row" justify="space-between" sm={4} xl={4} className={classes.navDesktop}>
                                    <Typography varient="h5" className={classes.navLinks}>About</Typography>
                                    <Typography varient="h5" className={classes.navLinks}>Content</Typography>
                                    <Typography varient="h5" className={classes.navLinks}>Subscribe</Typography>
                                    <Typography varient="h5" className={classes.navLinks}>Be Unstoppable</Typography>
                                </Grid>
                                <Grid className={classes.menue} onClick={() => { setMButton(prev => !prev) }}>
                                    <span className={`hamburger ${menueButton === true && "active"}`} ></span>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
            {menueButton === true &&
                <div className={classes.menueItems}>
                    <div className={classes.menueLinks}>
                        <Typography varient="h4" className={classes.navLinksMobile} align="center">About</Typography>
                        <Typography varient="h4" className={classes.navLinksMobile} align="center">Content</Typography>
                        <Typography varient="h4" className={classes.navLinksMobile} align="center">Subscribe</Typography>
                        <Typography varient="h4" className={classes.navLinksMobile} align="center">Be Unstoppable</Typography>
                    </div>
                </div>
            }
        </div>
    )
}

export default Navbar;
