import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import theme from 'theme';


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor:"#fff",
    paddingTop: theme.spacing(5),
    height: theme.spacing(70),
  },
  skills:{
    width: '70%',
    margin: "auto",
  },
  progress:{
    height: "20px",
  }
}));

function LinearProgressWithLabel(props) {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs>
          <Box >
            <Typography align="right">{props.name}</Typography>
          </Box>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Box alignItems="center" p={1} my={0.5}>
          <LinearProgress variant="determinate" color="secondary" {...props} />
        </Box>
      </Grid>
      <Grid item xs>
        <Box>
          <Typography variant="body2" color="textSecondary"  align="left">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
}


export default function AboutPage() {
  const classes = useStyles();
  const [skills, setSkill] = React.useState([
                                  {name: "REACT", maxValue: 98, progress: 10},
                                  {name: "REDUX and REDUX-SAGA", maxValue: 92, progress: 10},
                                  {name: "REACT HOOKS", maxValue: 87, progress: 10},
                                  {name: "JEST, ENZYME and REDUX-SAGA-PLAN", maxValue: 98, progress: 10},
                                  {name: "RUBY ON RAILS", maxValue: 83, progress: 10}, 
                                  {name: "RSPEC", maxValue: 78, progress: 10}, 
                                  {name: "AGILE PRACTICES", maxValue: 73, progress: 10}, 
                                  {name: "UX", maxValue: 69, progress: 10}, 
                                ]);
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? prevProgress : prevProgress + 10));
    }, 300);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.skills}>
        <Typography variant="h5" component="h1" align="center" className={classes.aboutTitle} gutterBottom>I’m a technology enthusiast with a solid work experience in design and building web applications. I have serious passion for good coding and creating intuitive user experiences.</Typography>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12} lg={8}>
            {skills.map((skill, item) => <LinearProgressWithLabel value={skill.maxValue < progress ? skill.maxValue : progress} key={item} name={skill.name}  classes={{root: classes.progress}}/>)}
          </Grid>
          <Grid item xs>
            <img src={require("views/perfil.png")} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}


