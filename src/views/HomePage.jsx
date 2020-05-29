import React, { useLayoutEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
//@material-ui
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import Fade from '@material-ui/core/Fade';
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
      fontSize: "10rem",
    },
  },
  homeSubTitle: {
    fontWeight: 500,
    fontSize: "2rem",
    [theme.breakpoints.up('md')]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: "4rem",
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
      fontSize: "2rem",
    },
  },
}));

function HomePage() {
  const classes = useStyles();
  const [show, doShow] = useState({
    itemOne: false,
  });
  const ourRef = useRef(null);

  useLayoutEffect(() => {
    const topPos = element => element.getBoundingClientRect().top;
    const div1Pos = topPos(ourRef.current);

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      if (div1Pos < scrollPos) {
        doShow(state => ({ ...state, itemOne: true }));
      } 
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


    return (
      <div className={classes.root}>
        <Parallax image={require("views/portfolio.png")} >
          <Slide direction="right" in={true}  timeout={1500} mountOnEnter>
              <div className={classes.container}>
                    <div className={classes.homeTitle}>Milleni Maya</div>
                    <div className={classes.homeSubTitle}>full-stack web developer</div>
                    <div className={classes.homeDescription}>elegant, functional and scalable solutions</div>
                <Button variant="outlined" color="secondary" size="large" classes={{root: classes.button}}>view more</Button>
              </div>
          </Slide>
        </Parallax>
          <div  ref={ourRef}>
            {show.itemOne && <AboutPage />}
          </div>
            <ProjectsPage />
            <ContactPage />
      </div>
    );
  }

  
  export default HomePage;