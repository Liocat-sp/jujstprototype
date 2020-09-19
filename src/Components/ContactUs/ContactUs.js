import React from 'react';

import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

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
    PaperStyle: {
        width: "200px",
        height: "200px",
        borderRadius: "15px",
        backgroundColor: "#136a8a",
        position: "relative",
        transition: "transform 300ms",
        boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)",
        "&:hover": {
            boxShadow: "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)"
        },
        [theme.breakpoints.down("xs")]: {
            width: "160px",
            height: "160px"
        }
    },
    cardText: {
        padding: "1rem",
        fontSize: "2rem",
        color: "#fff"
    },
    joinUsGrid: {
        margin: "0"
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
                <Grid item container lg={12} xl={11} style={{ marginBottom: "2rem" }}>
                    <Grid item lg={12} xl={11}>
                        <Typography variant="h4" className={classes.SectionTitle} align="center">
                            Be Unstoppable
                        </Typography>
                    </Grid>
                    <Grid container item justify="space-around" lg={12} xl={11}>
                        <Grid item lg={5} xl={6} className={classes.contactImage}>
                            <Typography variant="h1" style={{ fontWeight: "500" }}>
                                Contect With Us
                            </Typography>
                        </Grid>
                        <Grid item container justify="center" lg={5} xl={6}>
                            <Grid item container  justify="space-around" lg={12} xl={11} spacing={4} className={classes.joinUsGrid}>
                                <Grid item xs={6} className={classes.JoinUsCard}>
                                    <Paper className={classes.PaperStyle} >
                                        <Typography variant="h6" className={classes.cardText}>
                                            Campus Ambasador
                                        </Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={6} className={classes.JoinUsCard}>
                                    <Paper className={classes.PaperStyle} >
                                        <Typography variant="h6" className={classes.cardText}>
                                            Student Journalist
                                        </Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={6} className={classes.JoinUsCard}>
                                    <Paper className={classes.PaperStyle} >
                                        <Typography variant="h6" className={classes.cardText}>
                                            Campus Ambasador
                                        </Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={6} className={classes.JoinUsCard}>
                                    <Paper className={classes.PaperStyle} >    
                                        <Typography variant="h6" className={classes.cardText}>
                                            Student Journalist
                                        </Typography>
                                    </Paper>
                                </Grid>
                            </Grid>
                            <Grid>
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





 