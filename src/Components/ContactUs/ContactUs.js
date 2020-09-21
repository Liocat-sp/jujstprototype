import React from 'react';

import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';


import Student from "../../assets/icons/student.svg";
import Talent from "../../assets/icons/talent.svg";
import Write from "../../assets/icons/write.svg";
import Grow from "../../assets/icons/grow.svg";

const useStyles = makeStyles((theme) => ({
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
    contactImage: {
        height: "500px",
        boxSizing: "border-box",
        width: "100%",
        borderRadius: "30px",
        backgroundColor: "#2f2f2f",
        padding: "3rem",
        letterSpacing: "2px",
        color: "#7dbb2a",
    },
    imageStyle: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "10px"
    },
    PaperStyle: {
        width: "250px",
        height: "350px",
        padding: "1.5rem",
        boxSizing: "border-box",
        borderRadius: "15px",
        backgroundSize: "cover",
        position: "relative",
        transition: "transform 300ms",
        boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)",
        "&:hover": {
            boxShadow: "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)"
        },
    },
    cardText: {
        marginBottom: "1rem",
        color: "#5f5e5e"
    },
    cardIcon: {
        width: "45px",
        height: "45px",
        margin: "0 auto",
        marginBottom: "1rem",
        padding: "0.5rem"
    },
    Icon: {
        width: "100%",
        height: "100%",
    },
    joinUsGrid: {
        margin: "0"
    },
    ContactUsButton: {
        color: "#848484",
        marginTop: "1.5rem",
        marginBottom: "1.5rem",
        fontWeight: "500"
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
    },

}));

const ContactUs = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="xl" className={classes.sectionContent}>
            <Grid container alignItems="center" justify="center">
                <Grid item container alignItems="center" lg={11} xl={11} style={{ marginBottom: "2rem" }}>
                    <Grid item lg={12} xl={11} style={{ width: "100%" }}>
                        <Typography variant="h4" className={classes.SectionTitle} align="center">
                            Be Unstoppable
                        </Typography>
                    </Grid>
                    <Grid container item justify="space-around" lg={12} xl={11}>
                        <Grid item container justify="space-around" lg={12} xl={11} spacing={4} className={classes.joinUsGrid}>
                            <Grid container item justify="center" xs={11} lg={3} className={classes.JoinUsCard} >
                                <Paper className={classes.PaperStyle} >
                                    <div className={classes.cardIcon}>
                                        <img src={Student} alt="Campus Ambasador" className={classes.Icon} />
                                    </div>
                                    <Typography variant="h6" className={classes.cardText} align="center">
                                        Campus Ambasador
                                    </Typography>
                                    <Typography variant="body2" align="center">
                                        Become an campus Ambassador with our talented and experienced team and we will take you further for better future. you can share your college facilities and students new achivement's by just creating one magazine.
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid container item justify="center" xs={11} lg={3} className={classes.JoinUsCard}>
                                <Paper className={classes.PaperStyle} >
                                    <div className={classes.cardIcon}>
                                        <img src={Write} alt="Campus Ambasador" className={classes.Icon} />
                                    </div>
                                    <Typography variant="h6" className={classes.cardText} align="center">
                                        Student Journalist
                                        </Typography>
                                    <Typography variant="body2" align="center">
                                        Become a student journalist, write new articals and blogs about new techonologys, inovations and new cultures and publish your magazne on our platform. you can also start your own magazine on our platform.
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item container justify="center" xs={11} lg={3} className={classes.JoinUsCard}>
                                <Paper className={classes.PaperStyle} >
                                    <div className={classes.cardIcon}>
                                        <img src={Talent} alt="Campus Ambasador" className={classes.Icon} />
                                    </div>
                                    <Typography variant="h6" className={classes.cardText} align="center">
                                        Share Your Talent
                                    </Typography>
                                    <Typography variant="body2" align="center">
                                        whether you are an student or an working professional. if you have any talante and if you have an creative idea than you are at good place. you can write and publish or share it on our platform.
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item container justify="center" xs={11} lg={3} className={classes.JoinUsCard}>
                                <Paper className={classes.PaperStyle} >
                                    <div className={classes.cardIcon}>
                                        <img src={Grow} alt="Campus Ambasador" className={classes.Icon} />
                                    </div>
                                    <Typography variant="h6" className={classes.cardText} align="center">
                                        Advertise With Us
                                    </Typography>
                                    <Typography variant="body2" align="center">
                                        whether you have a small business or a big business. every one needs to advertise and we have advertising easy on our platform. you can advertise your products and services on our platform.
                                    </Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                        <Grid>
                            <Typography variant="h5" className={classes.ContactUsButton} align="center">
                                Some random text tagline to justifye the button.
                            </Typography>
                            <Grid container justify="center">
                                <Button variant="contained" size="large" className={classes.buttonStyle}>
                                Join Us Now
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ContactUs





