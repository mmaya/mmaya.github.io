import React from "react";
//@material-ui
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor:"#fff",
    paddingTop: theme.spacing(5),
    minHeight: theme.spacing(90),
  },
  content: {
    width: '70%',
    margin: "auto",
  }
}));

function ContactPage() {
  const classes = useStyles();
  
  return (
      <div className={classes.root}>
        <div className={classes.content}>
        <Typography variant="h3" component="h1" align="center">Let's build something great!</Typography>
        </div>
      </div>
    );
  }
  
  export default ContactPage;