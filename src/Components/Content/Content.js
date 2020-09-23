import React from 'react';

import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Paper from '@material-ui/core/Paper';

import Img1 from "../../assets/images/img1.jpg";
import Img2 from "../../assets/images/img2.jpg";
import Img3 from "../../assets/images/img3.jpg";
import Img4 from "../../assets/images/img4.jpg";
import Img5 from "../../assets/images/img5.jpg";
import Img6 from "../../assets/images/img6.jpg";
import Img7 from "../../assets/images/img7.jpg";
import Img8 from "../../assets/images/img8.jpg";


const useStyle = makeStyles((theme) => ({
    sectionContent: {
        marginTop: "1.5rem"
    },
    SectionTitle: {
        margin: "2.5rem 0 2.5rem 0",
        color: "#5f5e5e",
        textAlign: "center",
        letterSpacing: "1px",
        fontWeight: "500",
        [theme.breakpoints.down("xs")]: {
            margin: "1.5rem 0 1.5rem 0"
        }
    },
    PaperStyle: {
        width: "250px",
        height: "250px",
        borderRadius: "10px",
        position: "relative",
        boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)",
        transition: "transform 300ms",
        "&:hover": {
            transform: "translateY(-3px)",
            boxShadow: "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)"
        },
        [theme.breakpoints.down("sm")]: {
            width: "230px",
            height: "230px"
        },
        [theme.breakpoints.down("xs")]: {
            width: "160px",
            height: "175px",
        }
    },
    imageStyle: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "10px"
    },
    alignCenter: {
        width: "100%",
        height: "35%",
        position: "absolute",
        bottom: "0",
        padding: "0.6rem 0",
        backgroundImage: "linear-gradient(90deg, rgb(21 21 21 / 70%) 0%, rgb(83 83 83 / 40%) 100%)",
        borderBottomRightRadius: "10px",
        borderBottomLeftRadius: "10px",
        backdropFilter: "blur(4px)",
    },
    cardText1: {
        color: "#fff",
        width: "80%",
        margin: "0 auto",
        fontWeight: "500",
        [theme.breakpoints.down("xs")]: {
            width: "90%",
            fontSize: "1rem"
        },
        [theme.breakpoints.down(350)]: {
            width: "95%"
        }
    },
    extraMargin: {
        marginTop: "0.5rem",
    },
    paddingControl:{
        [theme.breakpoints.down("xs")]: {
            padding: "8px !important"
        }
    },
    cardText: {
        color: "#fff",
        width: "80%",
        margin: "0 auto",
        fontWeight: "400",
        [theme.breakpoints.down("xs")]: {
            width: "90%",
            fontSize: "0.7rem"
        },
        [theme.breakpoints.down(350)]: {
            width: "95%"
        }
    },
}));

const Content = () => {
    const classes = useStyle();

    return (
        <Container maxWidth="xl" className={classes.sectionContent}>
            <Grid container alignItems="center" justify="center">
                <Grid container item alignItems="center" justify="center" lg={12} xl={11}>
                    <Grid item lg={11} xl={11}>
                        <Typography variant="h4" className={classes.SectionTitle} align="center">
                            Content
                        </Typography>
                    </Grid>
                    <Grid item container justify="center" spacing={4} className={classes.extraMargin}>
                        <Grid container item justify="center" direction="row" xs={6} sm={6} md={4} lg={3} xl={3} className={classes.paddingControl}>
                            <Paper className={classes.PaperStyle}>
                                <img src={Img2} alt="content" className={classes.imageStyle} />
                                <div className={classes.alignCenter}>
                                    <Typography variant="h6" className={classes.cardText1}>
                                        Future
                                    </Typography>
                                    <Typography variant="subtitle2" className={classes.cardText}>
                                        Some random text to justify the content we will post.
                                    </Typography>
                                </div >
                            </Paper>
                        </Grid>
                        <Grid container item justify="center" direction="row" xs={6} sm={6} md={4} lg={3} xl={3} className={classes.paddingControl}>
                            <Paper className={classes.PaperStyle}>
                                <img src={Img1} alt="content" className={classes.imageStyle} />
                                <div className={classes.alignCenter}>
                                    <Typography variant="h6" className={classes.cardText1}>
                                        Inspiration
                                    </Typography>
                                    <Typography variant="subtitle2" className={classes.cardText}>
                                        Some random text to justify the content we will post.
                                    </Typography>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid container item justify="center" direction="row" xs={6} sm={6} md={4} lg={3} xl={3} className={classes.paddingControl}>
                            <Paper className={classes.PaperStyle}>
                                <img src={Img3} alt="content" className={classes.imageStyle} />
                                <div className={classes.alignCenter}>
                                    <Typography variant="h6" className={classes.cardText1}>
                                        Campus
                                    </Typography>
                                    <Typography variant="subtitle2" className={classes.cardText}>
                                        Some random text to justify the content we will post.
                                    </Typography>
                                </div>
                            </Paper>

                        </Grid>
                        <Grid container item justify="center" direction="row"  xs={6} sm={6} md={4} lg={3} xl={3} className={classes.paddingControl}>
                            <Paper className={classes.PaperStyle}>
                                <img src={Img4} alt="content" className={classes.imageStyle} />
                                <div className={classes.alignCenter}>
                                    <Typography variant="h6" className={classes.cardText1}>
                                        Job Board
                                    </Typography>
                                    <Typography variant="subtitle2" className={classes.cardText}>
                                        Some random text to justify the content we will post.
                                    </Typography>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid container item justify="center" direction="row"  xs={6} sm={6} md={4} lg={3} xl={3} className={classes.paddingControl}>
                            <Paper className={classes.PaperStyle}>
                                <img src={Img5} alt="content" className={classes.imageStyle} />
                                <div className={classes.alignCenter}>
                                    <Typography variant="h6" className={classes.cardText1}>
                                        Startups
                                    </Typography>
                                    <Typography variant="subtitle2" className={classes.cardText}>
                                        Some random text to justify the content we will post.
                                    </Typography>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid container justify="center" direction="row" item xs={6} sm={6} md={4} lg={3} xl={3} className={classes.paddingControl}>
                            <Paper className={classes.PaperStyle}>
                                <img src={Img8} alt="content" className={classes.imageStyle} />
                                <div className={classes.alignCenter}>
                                    <Typography variant="h6" className={classes.cardText1}>
                                        Culture
                            </Typography>
                                    <Typography variant="subtitle2" className={classes.cardText}>
                                        Some random text to justify the content we will post.
                            </Typography>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid container item justify="center" direction="row" xs={6} sm={6} md={4} lg={3} xl={3} className={classes.paddingControl}>
                            <Paper className={classes.PaperStyle}>
                                <img src={Img6} alt="content" className={classes.imageStyle} />
                                <div className={classes.alignCenter}>
                                    <Typography variant="h6" className={classes.cardText1}>
                                        Voices
                                    </Typography>
                                    <Typography variant="subtitle2" className={classes.cardText}>
                                        Some random text to justify the content we will post.
                                    </Typography>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid container item justify="center" direction="row" xs={6} sm={6} md={4} lg={3} xl={3} className={classes.paddingControl}>
                            <Paper className={classes.PaperStyle}>
                                <img src={Img7} alt="content" className={classes.imageStyle} />
                                <div className={classes.alignCenter}>
                                    <Typography variant="h6" className={classes.cardText1}>
                                        Talent Spotting
                                    </Typography>
                                    <Typography variant="subtitle2" className={classes.cardText}>
                                        Some random text to justify the content we will post.
                                    </Typography>
                                </div>
                            </Paper >
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Content


// 0px 10px 40px -10px rgba(0,64,128,0.2)