import React from "react";
//@material-ui
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor:"#fff",
    minHeight: "calc(100vw * (6/14))",
    padding: theme.spacing(5, 2, 15, 2),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(20),
    },
  }
}));

function ContactPage() {
  const classes = useStyles();
  
  return (
      <div className={classes.root}>
        <div className={classes.content}>
        <Grid
            container
            direction="column"
            justify="space-around"
            alignItems="center"
            spacing={3}
          >
            <Grid item><Typography variant="h2" component="h1" align="center">Let's build something great!</Typography></Grid>
            <Grid item>
              <Button component={Link} href="https://github.com/mmaya" target="_blank"><img src={require("views/images/github.png")}alt="Github icon" className={classes.image}/></Button>
              <Button component={Link} href="https://www.linkedin.com/in/milleni-maya/" target="_blank"><img src={require("views/images/linkedin.png")}alt="Linkedin icon" className={classes.image}/></Button>
            </Grid>
            <Grid item>
                <Typography align="center"><Link href="mailto:millleni.maya@gmail.com" color="secondary" variant="h4">millleni.maya@gmail.com</Link></Typography>
                <Typography align="center"><Link href="tel:+5521982107677" variant="h4" color="secondary">+55-21-98210-7677</Link></Typography>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
  
  export default ContactPage;