import React from 'react';

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
        [theme.breakpoints.down("md")]: {
            display: "none"
        }
    }
}));


const Navbar = () => {
    const classes = useStyles();

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
                        </Grid>
                    </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;
