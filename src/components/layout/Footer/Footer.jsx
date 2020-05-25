import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(5),
    textAlign: "center",
    display: "flex",
    zIndex: "2",
    position: "relative",
    backgroundColor: theme.palette.primary.main,
    marginTop:"calc(5% + 800px)",
    bottom: 0,
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container justify="center">
        Footer
      </Grid>
    </footer>
  );
}
