import React, { useState, useEffect, useCallback, useMemo } from "react";
import logo from 'views/portfolio.png';
//@material-ui
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AboutPage from 'views/AboutPage';
import ProjectsPage from 'views/ProjectsPage';
import ContactPage from 'views/ContactPage';
//Components
import Parallax from 'components/Parallax';
import 'typeface-ubuntu';

const useStyles = makeStyles(theme => ({
  root: {
    paddingBottom: theme.spacing(10),
  },
  container: {
    zIndex: "1100",
    width: "100%",
    paddingLeft: theme.spacing(5),
    fontFamily: 'Ubuntu, Arial',
    color: theme.palette.secondary.main,
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(10),
      paddingTop: theme.spacing(35),
    },
  },
  main: {
    position: "relative",
    zIndex: "3"
  },
  button:{
    fontFamily: 'Ubuntu, Arial',
    borderRadius: 0,
    border: "3px solid",
    marginTop: theme.spacing(2),
    textTransform: "none",
    fontSize: "1rem",
    [theme.breakpoints.up('lg')]: {
      fontSize: "2rem",
    },
  },
  homeTitle: {
    fontWeight: 800,
    lineHeight: 1,
    fontSize: "4rem",
    [theme.breakpoints.up('md')]: {
      fontSize: "8rem",
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: "12rem",
    },
  },
  homeSubTitle: {
    fontWeight: 500,
    fontSize: "2rem",
    [theme.breakpoints.up('md')]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: "6rem",
    },
  },
  homeDescription: {
    fontWeight: 500,
    textTransform: "uppercase",
    maxWidth: "60%",
    fontSize: "1rem",
    [theme.breakpoints.up('md')]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: "4rem",
    },
  },
}));

function HomePage() {
  const classes = useStyles();
  
    return (
      <div className={classes.root}>
        
        <Parallax image={require("views/portfolio.png")} >
          <div className={classes.container}>
             <Grid
                  container
                  direction="column"
                  justify="left"
                  alignItems="botton"

                >
                  <Grid item><div className={classes.homeTitle}>Milleni Maya</div></Grid>
                  <Grid item><div className={classes.homeSubTitle}>full-stack web developer</div></Grid>
                  <Grid item><div className={classes.homeDescription}>elegant, functional and scalable solutions</div></Grid>
                  <Grid item><Button variant="outlined" color="secondary" size="large" classes={{root: classes.button}}>view more</Button></Grid>
            </Grid>
            </div>
        </Parallax>
        <AboutPage />
        <ProjectsPage />
        <AboutPage />
        <ContactPage />
      </div>
    );
  }
  
  export default HomePage;