import React from 'react';

import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

import AboutImg from "../../assets/images/aboutus.jpg";

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
    // AboutUsImage: {
    //     height: "500px",
    //     boxSizing: "border-box",
    //     width: "100%",
    //     borderRadius: "30px",
    //     backgroundColor: "#2f2f2f",
    //     padding: "3rem",
    //     letterSpacing: "2px",
    //     color: "#7dbb2a",
    // },
    AboutusTitle: {
        // fontSize: "2rem",/
        marginBottom: "1rem",
        color: "#539100"
    },
    AboutusSubTitle: {
        color: "#848484",
        fontSize: "1.1rem"
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
                    <Grid container item justify="center" lg={12} xl={12}>
                        <Grid item sm={12} lg={6} xl={6} className={classes.paddingtop}>
                            <Typography variant="h4" className={classes.AboutusTitle} >
                                In Short, We Keep People <br />Up to Date.
                            </Typography>
                            <Typography variant="subtitle2" className={classes.AboutusSubTitle} >
                                LoreCulpa Lorem pariatur esse officia laborum et. Aliqua ut aute cupidatat laborum duis adipisicing sit. Aliqua veniam non enim deserunt nisi duis non magna cupidatat. Laboris pariatur consequat proident eiusmod culpa reprehenderit. Enim ullamco do eiusmod exercitation.LoreCulpa Lorem pariatur esse officia laborum et. Aliqua ut aute cupidatat laborum duis adipisicing sit.LoreCulpa Lorem pariatur esse officia laborum et. Aliqua ut aute cupidatat laborum duis adipisicing sit.LoreCulpa Lorem pariatur esse officia laborum et. Aliqua ut aute cupidatat laborum duis adipisicing sit.LoreCulpa Lorem pariatur esse officia laborum et. Aliqua ut aute cupidatat laborum duis adipisicing sit.LoreCulpa Lorem pariatur esse officia laborum et. Aliqua ut aute cupidatat laborum duis adipisicing sit.
                            </Typography>
                        </Grid>
                        <Grid item container justify="center" sm={12} lg={6} xl={6}>
                                <img src={AboutImg} alt="about us"/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default AboutUs
