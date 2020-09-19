import React from 'react';

import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

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
    AboutUsImage: {
        height: "500px",
        boxSizing: "border-box",
        width: "100%",
        borderRadius: "30px",
        backgroundColor: "#2f2f2f",
        padding: "3rem",
        letterSpacing: "2px",
        color: "#7dbb2a",
    },
    AboutusTitle: {
        fontSize: "2rem",
        marginBottom: "1rem",
        color: "#696969"
    },
    AboutusSubTitle: {
        color: "#848484",
        fontSize: "1.2rem"
    },
    paddingtop: {
        padding: "3rem 1rem"
    }
}));

const AboutUs = () => {
    const classes = useStyle();
    return (
        <Container maxWidth="xl" className={classes.sectionContent}>
            <Grid container alignItems="center" justify="center">
                <Grid item container lg={12} xl={11} >
                    <Grid item lg={12} xl={11}>
                        <Typography variant="h4" align="center" className={classes.SectionTitle}>
                            About Us
                        </Typography>
                    </Grid>
                    <Grid container item justify="space-around" lg={12} xl={11}>
                        <Grid item lg={5} xl={6} className={classes.paddingtop}>
                            <Typography variant="h5" className={classes.AboutusTitle}>
                                In Short,We Keep People Up to Date.
                            </Typography>
                            <Typography variant="subtitle2" className={classes.AboutusSubTitle}>
                                LoreCulpa Lorem pariatur esse officia laborum et. Aliqua ut aute cupidatat laborum duis adipisicing sit. Aliqua veniam non enim deserunt nisi duis non magna cupidatat. Laboris pariatur consequat proident eiusmod culpa reprehenderit. Enim ullamco do eiusmod exercitation.
                            </Typography>
                        </Grid>
                        <Grid item lg={5} xl={6}>
                            <Typography variant="h1" className={classes.AboutUsImage} style={{ fontWeight: "500" }}>
                                What we Do
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default AboutUs
