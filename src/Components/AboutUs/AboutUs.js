import React from 'react';

import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

import AboutImg from "../../assets/images/aboutus.jpg";

const useStyle = makeStyles(theme => ({
    sectionContent: {
        marginTop: "1.5rem",
        [theme.breakpoints.down("sm")]: {
            marginTop: "0"
        }
    },
    SectionTitle: {
        margin: "2.5rem 0 2.5rem 0",
        color: "#5f5e5e",
        textAlign: "center",
        letterSpacing: "1px",
        fontWeight: "500"
    },
    alignTitle: {
        width: "100%"
    },
    AboutUsImage: {
        maxHeight: "500px",
        [theme.breakpoints.down("sm")]: {
            maxHeight: "300px"
        }
    },
    AboutusTitle: {
        fontSize: "2.9rem",
        marginBottom: "1rem",
        color: "#539100",
        [theme.breakpoints.down("sm")]: {
            fontSize: "2rem",
            textAlign: "center" 
        }
    },
    AboutusSubTitle: {
        color: "#848484",
        fontSize: "1.1rem",
        [theme.breakpoints.down("sm")]: {
            textAlign: "center" 
        }
    },
    paddingtop: {
        padding: "3rem 1rem",        
        [theme.breakpoints.down("sm")]: {
            padding: "0" ,
            marginBottom: "1rem"
        }
    }
}));

const AboutUs = () => {
    const classes = useStyle();
    return (
        <Container maxWidth="xl" className={classes.sectionContent} id="About Us">
            <Grid container alignItems="center" justify="center">
                <Grid item container lg={12} xl={11} >
                    <Grid item lg={12} xl={11} className={classes.alignTitle}>
                        <Typography variant="h4" align="center" className={classes.SectionTitle}>
                            About Us
                        </Typography>
                    </Grid>
                    <Grid container item justify="center" lg={12} xl={12}>
                        <Grid item sm={12} lg={6} xl={6} className={classes.paddingtop}>
                            <Typography variant="h4" className={classes.AboutusTitle} >
                                In Short, We Keep People Up to Date.
                            </Typography>
                            <Typography variant="subtitle2" className={classes.AboutusSubTitle} >
                                LoreCulpa Lorem pariatur esse officia laborum et. Aliqua ut aute cupidatat laborum duis adipisicing sit. Aliqua veniam non enim deserunt nisi duis non magna cupidatat. Laboris pariatur consequat proident eiusmod culpa reprehenderit. Enim ullamco do eiusmod exercitation.LoreCulpa Lorem pariatur esse officia laborum et. Aliqua ut aute cupidatat laborum duis adipisicing sit.LoreCulpa Lorem pariatur esse officia laborum et. Aliqua ut aute cupidatat laborum duis adipisicing sit.LoreCulpa Lorem pariatur esse officia laborum et. Aliqua ut aute cupidatat laborum duis adipisicing sit.LoreCulpa Lorem pariatur esse officia laborum et. Aliqua ut aute cupidatat laborum duis adipisicing sit.LoreCulpa Lorem pariatur esse officia laborum et. Aliqua ut aute cupidatat laborum duis adipisicing sit.
                            </Typography>
                        </Grid>
                        <Grid item container justify="center" sm={12} lg={6} xl={6}>
                                <img src={AboutImg} alt="about us" className={classes.AboutUsImage}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default AboutUs
