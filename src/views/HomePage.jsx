import React from "react";
//@material-ui
import makeStyles from "@material-ui/core/styles/makeStyles";
import Slide from '@material-ui/core/Slide';
import Fade from '@material-ui/core/Fade';
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Button from '@material-ui/core/Button';
import AboutPage from 'views/AboutPage';
import ProjectsPage from 'views/ProjectsPage';
import ContactPage from 'views/ContactPage';
//Components
import Parallax from 'components/Parallax';


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
  const [trigger, setTrigger] = React.useState(false)
  let prevRatio = 0.0;

  window.addEventListener("load", (event) => {
    let boxElement = document.getElementById("sections");

  
    createObserver(boxElement);
  }, false);

 

  function handleIntersect(entries, observer) {
    entries.forEach(entry => {
      console.log(entry.intersectionRatio)
      if (entry.intersectionRatio > 0.1) {
        setTrigger(true)
      } 
    });
  }

  function createObserver(boxElement) {
    let observer;
  
    let options = {
      root: null,  // use the viewport
      rootMargin: '0px',
      threshold: 0.1
    };
  
    observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(boxElement);
  }

  
    return (
      <div className={classes.root} id="root">
        <Parallax image={require("views/portfolio.png")} >
          <Slide direction="right" in={true}  timeout={1500} mountOnEnter>
              <div className={classes.container} >
                    <div className={classes.homeTitle}>Milleni Maya</div>
                    <div className={classes.homeSubTitle}>full-stack web developer</div>
                    <div className={classes.homeDescription}>elegant, functional and scalable solutions</div>
                <Button variant="outlined" color="secondary" size="large" classes={{root: classes.button}}>view more</Button>
              </div>
          </Slide>
        </Parallax>
        <div id="sections">
            
              <div>
                <AboutPage trigger={trigger}/>
                <ProjectsPage />
                <ContactPage />
              </div>
            
        </div>
      </div>
    );
  }

  
  export default HomePage;