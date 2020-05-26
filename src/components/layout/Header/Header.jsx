import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import theme from 'theme';

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(2),
  },
  transparent:{
    background: "transparent"
  },
  appBar: {
    zIndex: "1100",
  }
}));


export default function Header({ ...props }) {
  const classes = useStyles();

  function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
      color: trigger ? "primary" : "transparent",
    });
  }
  
  return (
      <ElevationScroll {...props}>
      <AppBar className={classes.appBar}>
        <Toolbar>
              <Button
                color="inherit"
                className={classes.button}
                component={Link} to="/"
                startIcon={<HomeRoundedIcon />}
              >
                HomePage
              </Button>
              <Button
                color="inherit"
                className={classes.button}
                component={Link} to="/projects"
                startIcon={<MenuBookIcon />}
              >
                Projects
              </Button>
              <Button
                color="inherit"
                className={classes.button}
                component={Link} to="/about"
                startIcon={<AccountCircle />}
              >
                About
              </Button>
              <Button
                color="inherit"
                className={classes.button}
                component={Link} to="/constact"
                startIcon={<MailIcon />}
              >
                Contact
              </Button>
        </Toolbar>
      </AppBar>
      </ElevationScroll>
  );
}
