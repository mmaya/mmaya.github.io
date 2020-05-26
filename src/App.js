import React, { useState, useEffect, useCallback, useMemo } from "react";
//@material-ui
import makeStyles from "@material-ui/core/styles/makeStyles";
import CircularProgress from '@material-ui/core/CircularProgress';
import Hidden from '@material-ui/core/Hidden';
import MuiAlert from '@material-ui/lab/Alert';
import Backdrop from '@material-ui/core/Backdrop';
//Layout components
import Header from 'components/layout/Header/Header';
import BottomNav from 'components/layout/BottomNav/BottomNav';
//Rotes components
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from 'views/HomePage';
import AboutPage from 'views/AboutPage';
import ProjectsPage from 'views/ProjectsPage';
import ContactPage from 'views/ContactPage';
//App context
export const AppDataContext = React.createContext([{}, () => {}]);

const useStyles = makeStyles(theme => ({
  mensagem: {
    margin: theme.spacing(10),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [notificacao, setNotificacao] = useState({texto: undefined, tipo: undefined})
  const classes = useStyles();


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setNotificacao({texto: undefined, tipo: undefined});

  };

  useEffect(
    () => {
      const timer = setTimeout(() => {
        setNotificacao({texto: undefined, tipo: undefined});
      }, 6000);
  
      return () => {
        clearTimeout(timer);
      };
    },
    [notificacao],
  );

  const rotas = useMemo(() => (
    <div >
      <Switch>
        <Route path="/" exact component={() => <HomePage />} />
        <Route path="/about" component={() => <AboutPage />} />
        <Route path="/projects" component={() => <ProjectsPage />} />
        <Route path="/contact" component={() => <ContactPage />} />
      </Switch>
    </div>
    ),[classes]);

  return (
    <div >

    <Backdrop className={classes.backdrop} open={isLoading} >
      <CircularProgress color="inherit" />
    </Backdrop>
  <AppDataContext.Provider value={{setNotificacao, setIsLoading}}>
    <div className={classes.root}>
      <Router >
        <Hidden smDown implementation="css"><Header /></Hidden>
        {notificacao.texto && <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity={notificacao.tipo || "info"}>{notificacao.texto}</MuiAlert>}
        {rotas}
        <Hidden smUp implementation="css"><BottomNav /></Hidden>
      </Router>
  </div>
    </AppDataContext.Provider>

</div>
  );
}

export default App;
