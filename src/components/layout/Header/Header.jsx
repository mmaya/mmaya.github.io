import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  }
}));


export default function Header({ ...props }) {
  const classes = useStyles();


  return (
    <div >
      <AppBar position="static">
        <Toolbar>
            {menuItens.map((item, key) => 
              <Button
                color="inherit"
                className={classes.button}
                key={key}
                component={Link} to={item.link}
              >
                {item.texto}
              </Button>
            )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

const menuItens = [
  {texto: "HomePage", link: "/"},
  {texto: "Projects", link: "/projects"},
  {texto: "About", link: "/about"},
  {texto: "Contact", link: "/contact"},
]