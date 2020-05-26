import React, { useState, useEffect, useCallback, useMemo } from "react";
import logo from 'views/portfolio.png';
//@material-ui
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from '@material-ui/core/Typography';
import Parallax from 'components/Parallax';
import Grid from '@material-ui/core/Grid';
import AboutPage from 'views/AboutPage';
import ProjectsPage from 'views/ProjectsPage';
import ContactPage from 'views/ContactPage';

const useStyles = makeStyles(theme => ({
  container: {
    zIndex: "1100",
    width: "100%",
  },
 image: {
    width: "100%",
    height: "auto",
    padding: theme.spacing(3),
  },
  main: {
    position: "relative",
    zIndex: "3"
  }
}));

function HomePage() {
  const classes = useStyles();
  const imageRef = React.useRef(logo)
  
    return (
      <div>
        
        <Parallax image={require("views/portfolio.png")} >
        	<div className={classes.container}>
             <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"

                >
              <Grid item xs={1} sm={1} md={2} lg={2} xl={3}  >
              </Grid>
              <Grid item xs={10} sm={10} md={8} lg={8} xl={6}  >
                <Grid container justify="center" >
                  <Grid item xs={5} sm={5} md={2} lg={2} xl={3}>
                    <Typography>Milleni Maya</Typography>
                  </Grid>
                </Grid>
                <Typography>Full-stack web developer</Typography>
              </Grid>
              <Grid item xs={1} sm={1} md={2} lg={2} xl={3}  >
              </Grid>
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