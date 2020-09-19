import React from 'react';

import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';


import Step1 from "../../assets/images/step1.jpg";
import Step2 from "../../assets/images/step2.jpg";
import Step3 from "../../assets/images/step3.jpg";

const useStyle = makeStyles(theme => ({
    sectionContent: {
        marginTop: "1.5rem"
    },
    SectionTitle: {
        margin: "2.5rem 0 2.5rem 0",
        color: "#5f5e5e",
        textAlign: "center",
        letterSpacing: "1px",
        fontWeight: "500"
    },
    stepImage: {
        height: "100%",
        width: "100%",
        transform: "scale(0.9)"
    },
    stepNumber: {
        display: "block",
        margin: "1rem auto",
        fontSize: "1.2rem",
        fontWeight: "500",
        boxSizing: "border-box",
        color: "#80CC1B",
        border: "3px solid #80CC1B",
        height: "40px",
        width: "40px",
        borderRadius: "50%",
        padding: "3px",
        textAlign: "center",
        cursor: "default",
    },
    stepsText: {
        width: "100%",
        height: "64px",
        color: "#848484",
        [theme.breakpoints.down("xs")]: {
            height: "85px"
        }
    },
    sideGutters: {
        paddingLeft: "30px",
        paddingRight: "30px",
    },
    StepsSubscribe: {
        color: "#848484",
        marginBottom: "1rem",
        fontWeight: "500"
    },
    buttonStyle: {
        marginBottom: "2rem",
        fontSize: "1.2rem",
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
}))


const Subscribe = () => {
    const classes = useStyle();
    return (
        <Container maxWidth="xl" className={classes.sectionContent}>
            <Grid container alignItems="center" justify="center">
                <Grid container item alignItems="center" justify="center" lg={11} xl={11}>
                    <Grid item lg={12} xl={11} >
                        <Typography variant="h4" className={classes.SectionTitle} align="center">
                            How to Subscribe
                        </Typography>
                    </Grid>
                    <Grid item container justify="center" direction="row">
                        <Grid container item justify="center" xs={12} sm={6} md={4} lg={4} xl={4} className={classes.sideGutters}>
                            <Grid>
                                <div className={classes.stepNumber}>1</div>
                                <Typography variant="h6" align="center" className={classes.stepsText}>
                                    Send Us "Start" Message on WhatsApp
                                </Typography>
                            </Grid>
                            <Grid>
                                <img src={Step1} alt="step1" className={classes.stepImage} />
                            </Grid>
                        </Grid>
                        <Grid container item justify="center" xs={12} sm={6} md={4} lg={4} xl={4} className={classes.sideGutters}>
                            <Grid>
                                <div className={classes.stepNumber}>2</div>
                                <Typography variant="h6" align="center" className={classes.stepsText}>
                                    Make Payment From The Link We Send
                                </Typography>
                            </Grid>
                            <Grid>
                                <img src={Step2} alt="step2" className={classes.stepImage} />
                            </Grid>
                        </Grid>
                        <Grid container item justify="center" xs={12} sm={6} md={4} lg={4} xl={4} className={classes.sideGutters}>
                            <Grid>
                                <div className={classes.stepNumber}>3</div>
                                <Typography variant="h6" align="center" className={classes.stepsText}>
                                    Its Done Now You Will Your Magazine directly to your WhatsApp
                                </Typography>
                            </Grid>
                            <Grid>
                                <img src={Step3} alt="step3" className={classes.stepImage} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid>
                        <Typography variant="h5" className={classes.StepsSubscribe}>
                            So, What Are You Waiting For, Subscribe now.
                        </Typography>
                        <Grid container justify="center">
                            <Button variant="contained" size="large" className={classes.buttonStyle}>
                                Subscribe now
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Subscribe
