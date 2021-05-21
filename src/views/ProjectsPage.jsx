import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
//Icons
import GitHubIcon from '@material-ui/icons/GitHub';
import FindInPageIcon from '@material-ui/icons/FindInPage';
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
  },
}));

export default function ProjectsPage({...props}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
      <Typography variant="h3" component="h1" align="center">Projects</Typography>

          <Grid container justify="center" className={classes.goup} spacing={2}>
              <Grid item>
                <Card
                  title="This portfolio"
                  subtitle={[
                      <Chip
                        label="React"
                        className={classes.chip}
                        key="chip-react-1"
                      />,
                      <Chip
                        label="React Hooks"
                        className={classes.chip}
                        key="chip-hooks-1"
                      />,
                      <Chip
                        label="CSS"
                        className={classes.chip}
                        key="chip-css-1"
                      />,
                      <Chip
                        label="UX"
                        className={classes.chip}
                        key="chip-ux-1"
                      />].map((chip) => chip)}
                  image={require("views/images/portfolio-project.png")}
                  content="Well-organized single page project, developed with React Hooks, hosted on GitHub Pages."
                  buttons={
                    [<Button
                      variant="contained"
                      color="secondary"
                      key="source-button-2"
                      className={classes.button}
                      startIcon={<GitHubIcon />}
                      onClick={() => window.open("https://github.com/mmaya/my-portfolio", "_blank")}
                    >Source code</Button>]
                  }/>
              </Grid>
              <Grid item>
                <Card
                  title="Books API"
                  subtitle={[<Chip
                              label="Ruby on Rails"
                              className={classes.chip}
                              key="chip-rails-2"
                            />,
                            <Chip
                              label="API"
                              className={classes.chip}
                              key="chip-api-2"
                            />,
                            <Chip
                            label="AWS S3"
                            key="chip-aws-2"
                            className={classes.chip}
                          />].map((chip) => chip)}
                  image={require("views/images/books-api-project.jpeg")}
                  content="A simple Rails API to exemplify how to architect the consumption of a third-party API."
                  buttons={
                    [<Button
                      variant="contained"
                      color="secondary"
                      key="source-button-2"
                      className={classes.button}
                      startIcon={<GitHubIcon />}
                      onClick={() => window.open("https://github.com/mmaya/books_api", "_blank")}
                    >Source code</Button>,
                    <Button
                      variant="contained"
                      color="secondary"
                      key="preview-button-2"
                      className={classes.button}
                      startIcon={<FindInPageIcon />}
                      onClick={() => window.open("https://mmaya-books-api.herokuapp.com", "_blank")}
                    >Preview</Button>]
                  }/>
              </Grid>
          </Grid>
      </div>
    </div>
  );
}