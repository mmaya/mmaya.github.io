import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import theme from 'theme';


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor:"#fff",
    padding: theme.spacing(5, 2, 5, 2),
    minHeight: "calc(100vw * (6/14))",
    alignItems: "center",
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(15, 2, 15, 2),
    },
  },
  content:{
    width: '90%',
    margin: "auto",
  },
  skills:{
    paddingTop: theme.spacing(5),
  },
  progress:{
    height: theme.spacing(4),
    color: theme.palette.secondary.contrastText,
    transition: "all 5s ease",
  },
  image:{
    maxWidth: "100%",
    height: "auto",
    margin: "auto",
  }
}));

function LinearProgressWithLabel(props) {
  const media = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs>
          <Box >
            <Typography variant="body2" align={media ? "left" : "right"} >{props.name}</Typography>
          </Box>
      </Grid>
      <Grid item xs={12} lg={8}>
        <Box alignItems="center" bgcolor={theme.palette.primary.main} {...props} my={1} mx={1.5}>
          <Box width={props.value + "%"} alignItems="center" bgcolor={theme.palette.secondary.main} {...props}>
          <Typography variant="body2"  align="right" >{`${Math.round(
              props.value,
            )}%`}</Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}


export default function AboutPage({...props}) {
  const classes = useStyles();
  const trigger = props.trigger;
  const [skills, setSkills] = React.useState([
                                  {name: "REACT", maxValue: 98, progress: 10},
                                  {name: "REDUX and REDUX-SAGA", maxValue: 95, progress: 10},
                                  {name: "JEST, ENZYME and REDUX-SAGA-PLAN", maxValue: 93, progress: 10},
                                  {name: "REACT HOOKS", maxValue: 87, progress: 10},
                                  {name: "RUBY ON RAILS", maxValue: 83, progress: 10}, 
                                  {name: "RSPEC", maxValue: 78, progress: 10}, 
                                  {name: "AGILE PRACTICES", maxValue: 76, progress: 10}, 
                                  {name: "UX", maxValue: 69, progress: 10}, 
                                ]);

  
  const progress = React.useCallback(
    () => {
      setSkills(skills.map(skill => ({...skill, progress: skill.maxValue})))
    },
    [skills],
  );
  
  React.useLayoutEffect(() => {
    if(trigger){
      requestAnimationFrame(() => {
        progress()
      });
    }
    return () => {
      cancelAnimationFrame(() => {
        progress()
      });
    };
  }, [trigger, progress]);


  


  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Typography variant="h4" component="h1" align="center" className={classes.aboutTitle} >I’m a technology enthusiast with a solid work experience in design and building web applications. I have a serious passion for good coding and creating intuitive user experiences.</Typography>
        
        <div className={classes.skills}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={12} lg={8}>
              {skills.map((skill, item) => (
                  <LinearProgressWithLabel value={skill.progress} key={item} name={skill.name}  classes={{root: classes.progress}}/>
                ))}
            </Grid>
            <Grid item xs={12} lg={4}>
              <img src={require("views/perfil.png")}alt="Milleni's smiling face" className={classes.image}/>
            </Grid>
          </Grid>
          </div>
      </div>
    </div>
  );
}


