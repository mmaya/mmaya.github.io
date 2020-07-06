import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(5),
    minHeight: "calc(100vw * (6/14))",
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(20),
    },
  },
  content: {
    width: '70%',
    margin: "auto",
  }
}));

export default function RecipeReviewCard({...props}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
      <Typography variant="h3" component="h1" align="center">Projects</Typography>
      </div>
    </div>
  );
}