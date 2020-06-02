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
    paddingTop: theme.spacing(5),
    minHeight: theme.spacing(70),
  },
  skills:{
    width: '70%',
    margin: "auto",
  },
  progress:{
    height: theme.spacing(3),
    color: theme.palette.secondary.contrastText,
    transition: "all 5s ease",
  }
}));

function LinearProgressWithLabel(props) {
  const media = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs>
          <Box >
            <Typography variant="body2" align={media ? "left" : "right"}>{props.name}</Typography>
          </Box>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Box alignItems="center" bgcolor={theme.palette.primary.main} {...props} my={1} mx={1.5}>
          <Box width={props.value + "%"} alignItems="center" bgcolor={theme.palette.secondary.main} {...props}>
          <Typography variant="body2"  align="right">{`${Math.round(
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

  React.useEffect(() => {
    if(trigger){
      requestAnimationFrame(() => {
        setSkills(skills.map(skill => ({...skill, progress: skill.maxValue})))
      });
    }
  }, [trigger]);


  return (
    <div className={classes.root}>
      <div className={classes.skills}>
        <Typography variant="h5" component="h1" align="center" className={classes.aboutTitle} gutterBottom>I’m a technology enthusiast with a solid work experience in design and building web applications. I have serious passion for good coding and creating intuitive user experiences.</Typography>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12} lg={8}>
            {skills.map((skill, item) => (
                <LinearProgressWithLabel value={skill.progress} key={item} name={skill.name}  classes={{root: classes.progress}}/>
              ))}
          </Grid>
          <Grid item xs>
            <img src={require("views/perfil.png")}alt="Milleni's smiling face" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}


