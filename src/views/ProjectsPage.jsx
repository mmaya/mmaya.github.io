import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { Link } from 'react-router-dom'
import Tooltip from '@material-ui/core/Tooltip';
//Icons
import GitHubIcon from '@material-ui/icons/GitHub';
import PageviewIcon from '@material-ui/icons/Pageview';
//Components
import Card from 'components/ImageCard/ImageCard';



const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    minHeight: "80%",
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(20),
      paddingBottom: theme.spacing(20),
    },
  },
  content: {
    width: '90%',
    margin: "auto",
  },
  group: {
    flexGrow: 1,
  },
  chip:{
    fontFamily: 'Ubuntu, Arial',
    marginRight: theme.spacing(1)
  }
}));

export default function ProjectsPage({...props}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
      <Typography variant="h3" component="h1" align="center">Projects</Typography>
      <Grid container className={classes.goup} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
              <Grid item>
                <Card
                  title="This portfolio"
                  subtitle={[
                      <Chip
                        label="React"
                        className={classes.chip}
                        color="primary"
                      />,
                      <Chip
                        label="React Hooks"
                        className={classes.chip}
                        color="primary"
                      />,
                      <Chip
                        label="CSS"
                        className={classes.chip}
                        color="primary"
                      />,
                      <Chip
                        label="UX"
                        className={classes.chip}
                        color="primary"
                      />].map((chip) => chip)}
                  image={require("views/images/portfolio-project.png")}
                  content="Well-organized single page project, developed with React Hooks, hosted on GitHub Pages."
                  fullContent="Check out the source code for the highlights"
                  buttons={
                    [<Tooltip title="Source code">
                      <IconButton 
                        aria-label="source coude" 
                        onClick={() => window.open("https://github.com/mmaya/my-portfolio", "_blank")}
                        color="secondary"
                        size="medium">
                        <GitHubIcon />
                      </IconButton></Tooltip>,
                      <Tooltip title="Preview"><IconButton 
                        aria-label="preview" 
                        component={Link} to="/my-portfolio"
                        color="secondary"
                        size="medium">
                        <PageviewIcon />
                      </IconButton></Tooltip>]
                  }/>
              </Grid>
          </Grid>
        </Grid>
      </Grid>
      </div>
    </div>
  );
}