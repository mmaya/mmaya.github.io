import React from "react";
//@material-ui
import makeStyles from "@material-ui/core/styles/makeStyles";
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import AboutPage from 'views/AboutPage';
import ProjectsPage from 'views/ProjectsPage';
import ContactPage from 'views/ContactPage';
//Components
import Parallax from 'components/Parallax';
import { useLocation } from "react-router-dom";


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
  sections:{
    [theme.breakpoints.up('sm')]: {
      scrollMarginTop: "40px",
      scrollSnapMargin: "40px",
    },
    display: "block",
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
    '&:hover': {
      borderRadius: 0,
      border: "3px solid",
      textTransform: "uppercase",
    }
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
  const { hash } = useLocation();
  const sections = React.createRef();
  const about = React.createRef();
  const projects = React.createRef();
  const contact = React.createRef();


  window.addEventListener("load", (event) => {
    createObserver(sections.current);
  }, false);

 

  function handleIntersect(entries, observer) {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0.1) {
        setTrigger(true)
      } 
    });
  }

  function createObserver(sectionsDiv) {
    let observer;
  
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
  
    observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(sectionsDiv);
  }


  React.useEffect(() => {
      switch (hash.substring(1)) {
        case 'about':
          about.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
          break;
        case 'projects':
          projects.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
          break;
        case 'contact':
          console.log("entrou contact")
          contact.current.scrollIntoView({ behavior: 'smooth'});
          break;
        default:
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
      }
  }, [hash]);
  
  

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
        <div ref={sections}>
          <div ref={about} className={classes.sections}><AboutPage trigger={trigger} /></div>
          <div ref={projects} className={classes.sections}> <ProjectsPage /></div>
          <div ref={contact} className={classes.sections}><ContactPage /></div>
        </div>
      </div>
    );
  }

  
  export default HomePage;