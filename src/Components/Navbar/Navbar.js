import React from 'react';
import Scroll from "react-scroll";

import "./Navbar.css";

import Home from "../../assets/icons/home.svg";

import Container from "@material-ui/core/Container";
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
    Navbar: {
        boxShadow: "none",
        backgroundColor: "#ffffffc7",
        backdropFilter: "blur(10px)"
    },
    toolbar: {
        [theme.breakpoints.up("xl")]: {
            height: "100px"
        }
    },
    NavBarPad: {
        [theme.breakpoints.down("xs")]: {
            padding: "0"
        }
    },
    navLinks: {
        boxSizing: "border-box",
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
    HomeNav: {
        height: "21px",
        width: "21px"
    },
    menueItems: {
        zIndex: "400",
        width: "100%",
        height: "100%",
        display: "none",
        position: "fixed",
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
        fontWeight: "500",
        display: "flex",
        justifyContent: "center"
    }
}));


const Navbar = () => {
    const classes = useStyles();
    const [menueButton, setMButton] = React.useState(false);
    return (
        <div>
            <AppBar color="transparent" position="fixed" className={classes.Navbar} >
                <Toolbar className={classes.toolbar}>
                    <Container maxWidth="xl" className={classes.NavBarPad} >
                        <Grid container justify="center" maxwidth="xl">
                            <Grid container item justify="space-between" lg={12} xl={11}>
                                <Typography varient="h6">Unstoppable</Typography>
                                <Grid container item direction="row" justify="space-between" sm={6} md={6} lg={5} xl={4} className={classes.navDesktop}>
                                    <Scroll.Link
                                        activeClass="active3"
                                        spy={true}
                                        to="Header"
                                        smooth={true}
                                        offset={-65}
                                        duration={600}
                                        style={{ padding: "2px 10px" }}
                                    >
                                        {/* <Typography varient="h5" className={`${classes.navLinks}`}>Home</Typography> */}
                                        <img src={Home} className={`${classes.HomeNav} ${classes.navLinks}`} alt="Home" />
                                    </Scroll.Link>
                                    <Scroll.Link
                                        activeClass="active"
                                        spy={true}
                                        to="About Us"
                                        smooth={true}
                                        offset={-60}
                                        duration={600}
                                        style={{ padding: "2px 10px" }}
                                    >
                                        <Typography varient="h5" className={`${classes.navLinks}`}>About</Typography>
                                    </Scroll.Link>
                                    <Scroll.Link
                                        activeClass="active"
                                        spy={true}
                                        to="Content"
                                        smooth={true}
                                        offset={-60}
                                        style={{ padding: "2px 10px" }}
                                        duration={500}>
                                        <Typography varient="h5" className={classes.navLinks}>Content</Typography>
                                    </Scroll.Link>
                                    <Scroll.Link
                                        activeClass="active"
                                        spy={true}
                                        to="How to Subscribe"
                                        smooth={true}
                                        offset={-60}
                                        style={{ padding: "2px 10px" }}
                                        duration={500}>
                                        <Typography varient="h5" className={classes.navLinks}>Subscribe</Typography>
                                    </Scroll.Link>
                                    <Scroll.Link
                                        activeClass="active"
                                        spy={true}
                                        to="Be Unstoppable"
                                        smooth={true}
                                        offset={-60}
                                        style={{ padding: "2px 10px" }}
                                        duration={500}>
                                        <Typography varient="h5" className={classes.navLinks}>Be Unstoppable</Typography>
                                    </Scroll.Link>
                                </Grid>
                                <Grid className={classes.menue} onClick={() => { setMButton(prev => !prev) }}>
                                    <span className={`hamburger ${menueButton === true && "active2"}`} ></span>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
            {menueButton === true &&
                <div className={classes.menueItems}>
                    <div className={classes.menueLinks}>
                    <div className={classes.navLinksMobile} >
                        <Scroll.Link
                            activeClass="active3"
                            spy={true}
                            to="Header"
                            smooth={true}
                            offset={-65}
                            duration={600}
                            style={{ padding: "2px 10px", display: "flex" }}
                            onClick={() => setMButton(prev => false)}
                        >
                            <img src={Home} className={`${classes.HomeNav}`} style={{marginRight: "5px"}} alt="Home" />
                            <Typography varient="h5" >Home</Typography>
                        </Scroll.Link>
                        </div>
                        <div className={classes.navLinksMobile}>
                            <Scroll.Link
                                activeClass="active"
                                spy={true}
                                to="About Us"
                                smooth={true}
                                offset={-60}
                                duration={500}
                                style={{ padding: "2px 10px" }}
                                onClick={() => setMButton(prev => false)}>
                                <Typography varient="h4" align="center">About</Typography>
                            </Scroll.Link>
                        </div>
                        <div className={classes.navLinksMobile}>
                            <Scroll.Link
                                activeClass="active"
                                spy={true}
                                to="Content"
                                smooth={true}
                                offset={-60}
                                duration={500}
                                style={{ padding: "2px 10px" }}
                                onClick={() => setMButton(prev => false)}>
                                <Typography varient="h4" align="center">Content</Typography>
                            </Scroll.Link>
                        </div>
                        <div className={classes.navLinksMobile}>
                            <Scroll.Link
                                activeClass="active"
                                spy={true}
                                to="How to Subscribe"
                                smooth={true}
                                offset={-60}
                                duration={500}
                                style={{ padding: "2px 10px" }}
                                onClick={() => setMButton(prev => false)}>
                                <Typography varient="h4" align="center">Subscribe</Typography>
                            </Scroll.Link>
                        </div>
                        <div className={classes.navLinksMobile}  >
                            <Scroll.Link
                                activeClass="active"
                                spy={true}
                                to="Be Unstoppable"
                                smooth={true}
                                offset={-60}
                                style={{ padding: "2px 10px" }}
                                duration={500}
                                onClick={() => setMButton(prev => false)}>
                                <Typography varient="h4" align="center">Be Unstoppable</Typography>
                            </Scroll.Link>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Navbar;
