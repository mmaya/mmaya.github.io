import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MailIcon from '@material-ui/icons/Mail';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: theme.zIndex.drawer,
    bottom: theme.spacing(3),
    right: theme.spacing(4),
  },
}));

export default function BottomNav() {
  const classes = useStyles();

  return (
  <div className={classes.sectionMobile}>
   <AppBar position="fixed" color="primary" className={classes.appBar} >
        <Toolbar >
            <Button
              color="inherit"
              component={Link} to="/my-portfolio"
            >
              HomePage
            </Button>
            <Button
              color="inherit"
              component={Link} to={{pathname: "/my-portfolio", hash: "#projects", scroll: "smoth"}}
            >
              Projects
            </Button> 
            <Button
              color="inherit"
              component={Link} to={{pathname: "/my-portfolio", hash: "#about", scroll: "smoth"}}
            >
              About
            </Button> 
            <div className={classes.grow} />
            <Fab color="secondary" aria-label="add" className={classes.fabButton} component={Link} to={{pathname: "/my-portfolio", hash: "#contact", scroll: "smoth"}}>
              <MailIcon />
            </Fab>
            <div className={classes.grow} />
          </Toolbar>
      </AppBar>
  </div>
  );
}