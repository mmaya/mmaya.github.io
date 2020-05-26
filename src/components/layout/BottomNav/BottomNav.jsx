import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import MenuBookIcon from '@material-ui/icons/MenuBook';
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
    zIndex: 1,
    bottom: theme.spacing(3),
    right: theme.spacing(4),
  },
}));

export default function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
  <div className={classes.sectionMobile}>
   <AppBar position="fixed" color="primary" className={classes.appBar} >
        <Toolbar >
            <Button
              color="inherit"
              component={Link} to={"/"}
            >
              HomePage
            </Button>
            <Button
              color="inherit"
              component={Link} to={"/projects"}
            >
              Projects
            </Button> 
            <Button
              color="inherit"
              component={Link} to={"/about"}
            >
              About
            </Button> 
            <div className={classes.grow} />
            <Fab color="secondary" aria-label="add" className={classes.fabButton} component={Link} to={"/contact"}>
              <MailIcon />
            </Fab>
            <div className={classes.grow} />
          </Toolbar>
      </AppBar>
  </div>
  );
}